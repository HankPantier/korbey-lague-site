# Architecture notes

This document captures the *why* behind the subsystems added or restructured during the 2026-05-22 audit + features pass. The README covers the operational *how*; this is the design rationale for anyone debugging or extending these areas.

## Forms + email

### Configuration shape

`site.config.ts` exposes a typed `forms: { endpoint, fromEmail, toEmail, serviceOptions }` block. The choice of where each value lives:

| Value | Lives in | Why |
|---|---|---|
| `RESEND_API_KEY` | `.env.local` / Vercel env | It's a secret; never commit to git. |
| `forms.fromEmail` | `site.config.ts` | Per-client config; not secret but tied to the firm's verified Resend domain. |
| `forms.toEmail` | `site.config.ts` (optional) | Override for the recipient. Blank → falls back to `brand.contact.email` from `content/brand.json`. |
| `forms.endpoint` | `site.config.ts` (optional) | When set, `Form.tsx` POSTs there directly and skips `/api/contact` entirely (Formspree / Zapier / CRM webhook). |
| `forms.serviceOptions` | `site.config.ts` | Dropdown values for the `quote` form variant — accounting-firm specific list per client. |
| `brand.contact.email` | `content/brand.json` | Public-facing contact address; also used as the default form recipient. |

The split is deliberate: secrets in env, per-client config in `site.config.ts`, brand-data the public sees in `content/brand.json`.

### Graceful degradation

If `RESEND_API_KEY` is missing or blank, `/api/contact` returns 503 and the client `Form` component falls back to a `mailto:` link reading the recipient from `document.body.dataset.contactEmail` (surfaced by the root layout). The form stays functional even before Resend is wired up — useful during initial client setup.

### Server vs client split

`Form.tsx` is a server component that pre-renders the optional markdown `intro` and `sidebar_content` and passes them as React nodes to the new `FormFields.tsx` client component. This keeps `react-markdown` and `remark-gfm` out of the contact/quote/newsletter/custom route client bundles (~60 KB gzipped saved). When extending the form, follow the same pattern: any markdown rendering belongs in the server wrapper.

The same split applies to the FAQ block: `FaqAccordion.tsx` (server) pre-renders each answer's markdown to a React node and hands the array to `FaqAccordionClient.tsx` (`'use client'`), which owns only the interactive Radix accordion. It's the canonical pattern for any block that needs both markdown rendering and client interactivity — render markdown in the server wrapper, pass `ReactNode`s to the client island. The remaining markdown-rendering blocks (`TeamGrid`, `ContentCards`, `ProcessSteps`, etc.) are already pure server components, so `react-markdown` ships in zero client bundles.

### Security model for `/api/contact`

Layered defenses, in order of execution:

1. **Missing API key → 503.** Signals client fallback path.
2. **`Content-Length > 64 KB` → 413.** Legitimate payloads top out around 6 KB; early reject before parsing.
3. **Malformed JSON → 400.**
4. **Unknown form variant → generic `Invalid request` 400.** The variant string goes to `console.error`, never to the response (no info leak).
5. **Zod validation per variant.** 400 with `fieldErrors`.
6. **Recipient resolution.** `siteConfig.forms.toEmail` overrides `brand.contact.email`. 500 if both blank.
7. **CR/LF strip on replyTo.** Defense in depth — Zod already rejects CR/LF in email format, but the strip protects if a future schema loosens.
8. **Resend rejection → 502.**

The route is covered by `src/app/api/contact/route.test.ts` (vitest, 8 cases). Mocks Resend via a real `class` so `new Resend(apiKey)` works under vitest's mock factory hoisting.

## Analytics + cookie consent

### Why a server component reads `cookies()`

`src/components/analytics/Analytics.tsx` is an async Server Component that reads the visitor's consent state via `next/headers`'s `cookies()`. This is intentional: SSR-correct rendering of the consent banner is a requirement for the design-brief integration (see below), and rendering the GA/GTM `<Script>` server-side via `@next/third-parties` gets SPA pageview tracking on App Router navigations for free.

Reading `cookies()` would normally bubble dynamism up the tree and force every page dynamic. The fix (now in place) is **Cache Components + Suspense**: `<Analytics>` is wrapped in a `<Suspense fallback={null}>` boundary in `src/app/layout.tsx`, which isolates the dynamic-ness. Under `cacheComponents: true` (set in `next.config.ts`), Next prerenders the static shell at build time and streams the Analytics island per request. Build output reflects this — `/` shows `◐ (Partial Prerender)` rather than `ƒ (Dynamic)`.

### Behavior matrix

| GA4_ID | GTM_ID | Consent | Result |
|---|---|---|---|
| unset | unset | (any) | No banner, no scripts. Site stays clean. |
| set | unset | undecided | `<ConsentBanner>` renders. |
| set | unset | accepted | `<GoogleAnalytics gaId={...}>` renders. |
| set | unset | declined | Nothing renders. |
| unset | set | undecided | Banner. |
| unset | set | accepted | `<GoogleTagManager gtmId={...}>`. |
| set | set | accepted | **GTM wins.** GA4 is NOT loaded separately (GTM can load GA4 itself + any other tags). |

### Consent withdrawal

The footer's "Cookie preferences" link (`src/components/footer/FooterCookiePrefsLink.tsx`) clears the `analytics-consent` cookie and reloads the page. Satisfies GDPR's right-to-withdraw requirement when the banner is shipped enabled.

### Accept/Decline flow

`ConsentBanner.tsx` writes the cookie client-side and calls `useRouter().refresh()` from `next/navigation`. The refresh re-runs the server tree against the new cookie state — `Analytics` then renders the appropriate `<Script>` tag (or nothing on decline) in the next paint. No full reload, scroll position preserved, no static asset re-fetch.

### `_cookie-preview` escape hatch

`scripts/export-design-brief.ts` sends `Cookie: _cookie-preview=1` on its chrome-capture fetch. `Analytics.tsx` reads this cookie and force-renders the banner even when no analytics ID is configured, so the brief can capture banner markup before a real GA/GTM ID exists per-client. The escape hatch is exclusively for the brief script; production traffic never sees that cookie.

## Design-brief integration

The brief (`scripts/export-design-brief.ts`) captures live rendered HTML from a running dev server. Block-level samples come from `data-block="..."` attributes; persistent chrome (navbar, footer, consent banner) comes from `data-component="..."` attributes. The regex in `fetchRenderedMarkup` matches outer `<section|header|aside|footer|nav>` tags carrying either attribute.

To add a new persistent chrome element that should ship in the brief:

1. Give its outer element a stable `data-component="<id>"` attribute on a matching outer tag.
2. Add `<id>` to the ordering array in `export-design-brief.ts`'s chrome-rendering block (currently `['navbar', 'footer', 'cookie-consent']`).
3. Add a descriptive paragraph in the same file noting selectors, slots, and the token contract Claude.ai Design should respect.

To target child slots from `content/design-overrides.css`, give them `data-slot="<name>"` attributes (e.g. `<button data-slot="accept">`). Designs then target via `[data-component="..."] [data-slot="..."]`.

## Caching model (Cache Components)

`next.config.ts` sets `cacheComponents: true`, opting into Next 16's unified caching model. The rules:

- **Data-fetching functions are excluded from prerenders by default.** Any `async` server-side data fetch (file read, db query, fetch call) that runs during render makes the route dynamic — unless wrapped in `'use cache'`.
- **`'use cache'` at the top of an async function** caches its return value across requests, using the function ID + serialized args as the cache key. `cacheLife('max')` tells Next this is build-time data that effectively never expires.
- **Per-request reads bubble up.** `cookies()`, `headers()`, `searchParams`, and `new Date()` (in a non-cached scope) all force their containing component into dynamic rendering. The remedy is either (a) cache the component / wrap it in `'use cache'`, or (b) wrap the dynamic island in a `<Suspense>` boundary so the rest of the tree can still prerender.

### Where `'use cache'` is applied in this repo

| File | Why |
|---|---|
| `src/lib/brand/get-brand-config.ts` | `content/brand.json` is build-time data. |
| `src/lib/nav/get-nav-config.ts` | `content/nav.json` same. |
| `src/lib/theme/get-theme-vars.ts` | `content/design.json` same. |
| `src/lib/content/get-page.ts` (`getPageMarkdown` + `listPageSlugs`) | Page markdown and the slug list are read from disk per-build, not per-request. |
| `src/app/sitemap.ts` | Uses `new Date()` for `lastModified`; without `'use cache'` the sitemap would be per-request dynamic. |
| `src/components/footer/Footer.tsx` | Uses `new Date().getFullYear()` for copyright; same reason. |

### Where Suspense isolates dynamism

| Location | Why |
|---|---|
| `src/app/layout.tsx` around `<Analytics />` | `Analytics` reads `cookies()` per request to gate GA/GTM script injection. Suspense lets the shell ship static, streams the island. |

### Catchall route placeholder

`[...slug]/page.tsx`'s `generateStaticParams` must return at least one entry under Cache Components. When `content/pages/` only contains `home.md` (the fresh-clone state, before a deliverable is unpacked), the function returns a `__no_pages__` placeholder; the page handler maps that to `notFound()`. Once a client unpacks pages, real slugs take over and the placeholder disappears from the prerender set.

### When adding a new data loader

If the data is build-time constant (file from `content/`, JSON config, etc.), add `'use cache'` + `cacheLife('max')` to the loader function. If it's per-request (reads `cookies()` / `headers()` / `searchParams`), don't cache it — and if it's used inside a layout or shared component, wrap the consumer in `<Suspense>` so it doesn't dynamic-ize the whole route.

If you add a route segment config (`export const runtime = 'nodejs'`, `export const dynamic = '...'`), the build will fail under Cache Components. Remove the export; the runtime is implicit (Node by default).

## Theming + WCAG

`scripts/generate-theme.ts` produces `src/styles/theme.css` from `content/brand.json` + `content/design.json`. After computing the palette, it verifies a set of foreground/background pairs against WCAG AA (4.5 : 1) and prints warnings for failures. The site still renders on a failed pair — the verifier is a soft alert, not a build gate, because brand palettes are externally driven and stopping the build mid-deliverable would be worse than shipping a warning.

Before that verification, each brand *surface* token (`primary`, `secondary`, `accent`) passes through `ensureContrast(bg, fg)`, which nudges the surface's lightness — preserving hue + saturation — until it meets AA against its chosen foreground. It darkens when the foreground is the lighter of the pair and lightens otherwise, so it always converges; it's a no-op for pairs that already pass. This auto-corrects the common case of a borderline mid-tone surface (the default palette's `secondary` shipped at 4.47 : 1 and is nudged from 45% → 44% lightness to reach 4.59 : 1) without a human editing `brand.json`. The verifier still runs afterward and warns if anything *else* (e.g. a foreground/background or muted pair it doesn't auto-correct) is below threshold. `ensureContrast` only adjusts the semantic surface tokens (`--color-secondary` etc.); the exact brand-hex tokens (`--color-primary-hex`, `--color-complementary`) are left untouched.

When adding a new color combination to the site, add its pair to `REQUIRED_PAIRS` in `generate-theme.ts`. For combinations that use Tailwind's `/N` opacity syntax, approximate the rendered color via `chroma.mix(bg, fg, N/100, 'rgb')` — that's what the new footer `text-background/90` pair does.

## Security headers

Set in `next.config.ts`'s `headers()` function, applied to `/:path*`:

- `X-Content-Type-Options: nosniff` — prevents MIME-type sniffing.
- `X-Frame-Options: SAMEORIGIN` — prevents clickjacking via iframe (legacy; modern browsers prefer the CSP `frame-ancestors` directive below, but X-Frame-Options is kept as a fallback).
- `Referrer-Policy: strict-origin-when-cross-origin` — limits referrer leakage.
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` — denies feature access by default.
- `Content-Security-Policy` (or `-Report-Only`, depending on `siteConfig.csp.mode`) — see below.

### Content-Security-Policy

Built by `buildCsp()` in `next.config.ts` and configured under `siteConfig.csp` in `site.config.ts`:

```ts
csp: {
  mode: 'enforce' | 'report-only' | 'off'
  extraOrigins: string[]
}
```

**Default mode: `enforce`.** Sends `Content-Security-Policy`; browsers block violations.

**Mode `report-only`** sends `Content-Security-Policy-Report-Only` instead — browsers log violations to the dev console without blocking. Use when wiring up a client for the first time, or before adding a new third-party service (Calendly, Stripe, Meta Pixel, HubSpot, etc.) so you can see exactly which origins need allowlisting.

**`extraOrigins`** appends to `script-src`, `style-src`, `connect-src`, `img-src`, and `frame-src` in one go. Most third-party services need entries in all four. For per-directive control, edit `buildCsp()` directly.

**Approach: `'unsafe-inline'` + explicit allowlist, NOT nonces.** Nonce-based CSP requires per-request rendering, which Next's PPR docs note is incompatible with Cache Components — going nonce would undo the static-prerender benefit. What our CSP still defends against:

| Attack | Directive that blocks it |
|---|---|
| Clickjacking | `frame-ancestors 'self'` (+ legacy X-Frame-Options) |
| Plugin/Flash abuse | `object-src 'none'` |
| `<base href="evil">` hijack | `base-uri 'self'` |
| Form-action redirect | `form-action 'self'` |
| Mixed-content downgrade | `upgrade-insecure-requests` |
| Unknown-origin scripts/iframes/images/fetches | per-directive allowlists |

What it does NOT block: inline `<script>` injection, because `'unsafe-inline'` allows it. Mitigated upstream by `react-markdown` sanitizing all user-provided markdown content.

### Adding a third-party service

1. Set `csp.mode = 'report-only'` in `site.config.ts`, deploy, load the page where the service runs, watch the console for `Refused to load ...` messages.
2. Add the service's origins to `csp.extraOrigins`.
3. Reload, confirm no new violations.
4. Flip `csp.mode` back to `'enforce'`.

If the violations are in a directive other than the five `extraOrigins` covers (e.g. `worker-src`, `media-src`, `manifest-src`), edit `buildCsp()` in `next.config.ts` directly.

## Per-client clone workflow

The template is designed to be cloned per client (not consumed as a shared dependency). Each client clone:

1. `git clone … <client-slug>-site`
2. `npm install`
3. `npm run unpack ~/Downloads/<client>-content-package.zip`
4. Edit `site.config.ts` for `siteUrl`, `legalLinks`, `forms.*`.
5. Set `RESEND_API_KEY` (+ optional `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GTM_ID`) in `.env.local`.
6. `npm run dev`, verify, commit.
7. Optionally: `npm run export-brief` → Claude.ai Design → save `content/design-overrides.css`.

Re-running `npm run unpack` with a fresh deliverable overwrites `content/` and regenerates `src/styles/theme.css`. Hand-edits to `content/design-overrides.css`, `site.config.ts`, and source code are preserved.
