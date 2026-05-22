# Changelog

All notable changes to this template are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project loosely follows semver — though as a per-client template, "release" means "checkpoint on `main`" rather than a published package version.

## [Unreleased] — 2026-05-22 audit + features pass

### Added
- **Analytics (GA4 / GTM) with cookie consent.** Optional analytics via the official `@next/third-parties` package, gated by a server-rendered consent banner. Configured via `NEXT_PUBLIC_GA4_ID` and `NEXT_PUBLIC_GTM_ID` env vars; when both are set, GTM wins. Consent decision persists in the `analytics-consent` cookie (365-day expiry), revisited via a "Cookie preferences" link in the footer. See `docs/architecture.md#analytics--consent`.
- **Cookie consent banner in the design-brief.** `scripts/export-design-brief.ts` now sends `Cookie: _cookie-preview=1` on its chrome fetch and emits a "Cookie Consent Banner" subsection in the brief output. Per-client banner styling flows through `content/design-overrides.css` the same way navbar + footer chrome does. Spec at `docs/superpowers/specs/2026-05-22-analytics-and-consent-design.md`.
- **Optional `brand.logo.footer`** override on the `BrandJson` type. When set, the footer renders this asset directly; when unset, falls back to the prior primary-with-invert behavior. Fixes silent-breakage for clients whose primary logo is already light.
- **`siteConfig.forms.serviceOptions`** moved out of a hard-coded Form.tsx constant so each client edits one file.
- **Security headers** on every response: `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geolocation off). CSP deferred — see Deferred below.
- **`@next/third-parties`** dependency (analytics scripts + SPA pageview tracking).
- **`@icons-pack/react-simple-icons`** dependency (replaces hand-rolled social SVGs).
- **`/api/contact` integration tests** (8 cases): missing API key, oversized payload, unknown variant, schema failure, happy path with assertions on To/From/replyTo/subject, Resend rejection, malformed JSON. Vitest tests jumped 100 → 108.
- **`CHANGELOG.md`** (this file) and **`docs/architecture.md`** for the architecture rationale of the new subsystems.

### Changed
- **`site.config.ts` restructured** — `formEndpoint` and `formFromEmail` removed from the top level; replaced with a typed `forms: { endpoint, fromEmail, toEmail, serviceOptions }` block. `toEmail` is an optional override; it falls back to `brand.contact.email` when blank. README's "Form / email setup" section documents the new shape.
- **Social icons** in the footer now use `@icons-pack/react-simple-icons` (Facebook, X, Instagram, YouTube). LinkedIn stays as an inline SVG because Simple Icons honored a takedown request from LinkedIn and lucide v1 doesn't ship brand marks either. The exported `SocialIcon` component API is unchanged, so no consumer changed.
- **NavBar scroll listener** now coalesces state updates through `requestAnimationFrame` so React re-renders cap at one per animation frame instead of one per scroll event.
- **Public Sans font** is loaded once and aliased to both `--font-heading-loaded` and `--font-body-loaded` via inline style on `<html>`, avoiding a duplicate font loader call.
- **Consent banner reload removed.** Accepting / declining now calls `useRouter().refresh()` instead of `window.location.reload()`, so the GA / GTM script appears in place without losing scroll position or re-fetching static assets.
- **Form.tsx split into server wrapper + `FormFields.tsx` client component.** The server wrapper pre-renders the markdown `intro` (via `InlineProse`) and `sidebar_content` (via `ReactMarkdown` + `remark-gfm`) and hands them to the client as React nodes. `react-markdown`, `remark-gfm`, and `InlineProse` no longer ship in the client bundles for contact/quote/newsletter/custom routes (~60 KB gzipped saved).
- **Footer text contrast** — six muted-text sites bumped from `text-background/{60,70,80}` to `text-background/90` so all rendered text passes WCAG AA on the dark footer surface. `scripts/generate-theme.ts` gains a new `REQUIRED_PAIRS` entry that verifies the `/90`-over-`bg-foreground` pair via `chroma.mix` alpha-blend.
- **`ConsentBannerClient.tsx` renamed to `ConsentBanner.tsx`** for consistency — the `'use client'` directive is the marker; no need for a suffix.
- **Footer "Cookie preferences" link** added to the legal bar. Clears the `analytics-consent` cookie and reloads, satisfying the GDPR right-to-withdraw.

### Fixed
- **Open-redirect in `content/redirects.csv`.** `next.config.ts`'s loader now rejects rows whose destination doesn't start with `/`. A row like `/old,https://attacker.com` would otherwise have shipped as a 308 to an attacker-controlled URL.
- **Zip-slip in `scripts/unpack-deliverable.ts`.** Entries that resolve outside the repo root are refused before `extractAllTo` runs. `adm-zip` 0.5.x has no built-in protection.
- **Email reply-To header injection.** `/api/contact` strips CR/LF from the visitor's email before passing as Resend `replyTo`. Defense in depth — Zod also rejects the malformed input first.
- **Unbounded payloads on `/api/contact`.** Early `Content-Length` check caps requests at 64 KB (legitimate payloads are around 6 KB).
- **Info leak on unknown form variant.** `/api/contact` now returns a generic `Invalid request` 400; the verbose variant name goes to `console.error`.
- **All 5 ESLint warnings eliminated.** Lint output is now empty.
  - `scripts/check-all-blocks.ts` — `void BlockRenderer` keeps the import live as the module-load assertion intends.
  - `scripts/generate-theme.ts` — dropped unused `firmName` destructure.
  - `src/lib/assembly/extract-block-props.ts` — stopped binding unused `_cta`.
  - `src/lib/assembly/md-utils.ts` — deleted unreached `metaLinePattern`.
  - `.remember/**` added to ESLint `globalIgnores`.
- **Cross-platform lockfile.** `npm install` populated `@next/swc-*` entries for Linux/Windows/etc. so CI no longer needs a fresh install to resolve the SWC binary.

### Security
The following defense-in-depth changes are summarized in **Fixed** above but worth calling out in a security context too:
- Open-redirect destination allowlist
- Zip-slip path validation
- CR/LF strip on email reply-To
- Request body size cap
- Generic error messages on unknown input
- Four platform-wide security response headers

### Performance — Cache Components / PPR (follow-up to the earlier deferral)
- **`cacheComponents: true`** enabled in `next.config.ts`. Next 16's unified caching model: data fetches are excluded from prerenders unless wrapped in `'use cache'`, and dynamic islands (anything reading `cookies()` / `headers()` / per-request data) stream in via Suspense boundaries while the surrounding shell stays static.
- All four content loaders converted to **`'use cache'` + `cacheLife('max')`**:
  - `src/lib/brand/get-brand-config.ts`
  - `src/lib/nav/get-nav-config.ts`
  - `src/lib/theme/get-theme-vars.ts`
  - `src/lib/content/get-page.ts` (both `getPageMarkdown` and `listPageSlugs`)
  The prior manual in-memory cache pattern (`let cached: T | null = null; if (NODE_ENV === 'production' && cached) return cached`) is removed — Next's cache supersedes it.
- **`<Analytics />` wrapped in `<Suspense fallback={null}>`** in `src/app/layout.tsx` so the `cookies()` read doesn't bubble dynamism up to the whole page.
- **`Footer.tsx` marked `'use cache'`** so its `new Date().getFullYear()` copyright doesn't get treated as per-request data.
- **`sitemap.ts` marked `'use cache'` + `cacheLife('max')`** for the same reason.
- **`[...slug]` `generateStaticParams` placeholder.** Cache Components requires `generateStaticParams` to return at least one entry. When `content/pages/` only has `home.md` (the fresh-clone state), the function now returns a `__no_pages__` placeholder, and the page handler maps that to `notFound()`. Once a client unpacks a real deliverable, the actual slugs take over and the placeholder disappears.
- **`runtime = 'nodejs'` removed from `/api/contact`.** Under Cache Components, route segment `runtime` config is rejected at build time (Node is the default and only setting; explicit export is disallowed).
- **Route table outcome:**
  - `/` flipped from `ƒ (Dynamic)` → **`◐ (Partial Prerender)`** — static shell + dynamic Analytics island.
  - `/_not-found` same.
  - `/[...slug]` placeholder is `○ (Static)`; runtime fallback for un-prerendered slugs stays `ƒ` (expected). Real client pages from the deliverable will each be `◐`.
  - `/sitemap.xml` flipped from `ƒ` → **`○ (Static)`**.
  - `/api/contact` stays `ƒ` (correct for POST endpoint).

### Deferred
- **CSP header.** Bundling a working Content-Security-Policy with Google Tag Manager, Google Maps embeds, next/image, and Resend requires per-source tuning of `script-src` / `frame-src` / `connect-src` and a Report-Only deploy first to catch violations. Worth a dedicated follow-up.
- **`secondary-fg / secondary` contrast pair** ships at 4.47 : 1 vs. the 4.5 : 1 AA threshold. Pre-existing palette tuning issue surfaced by the new contrast verifier; not caused by any change in this pass.
- **react-markdown in `FaqAccordion.tsx` client bundle.** Same fix pattern as Form (pre-render markdown to React nodes server-side, pass as ReactNode prop). Lower priority than Form because the FAQ block ships on fewer pages.
- **Image aspect-ratio sweep** across LogoBar, TeamGrid, ContentCards, ChecklistSection. Without measured CLS impact, deferred to a CLS-driven follow-up.
