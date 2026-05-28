# How to spin up a new client site

A start-to-finish runbook for turning the template + a Phase I deliverable into a
deployed client site. Each client gets its **own clone** — the template is the
starting point, not a shared dependency.

> Deeper references: [`README.md`](../README.md) (operational detail per topic),
> [`docs/architecture.md`](./architecture.md) (the *why* behind each subsystem).

---

## 0. Prerequisites

- **Node.js 20+** and **npm 10+** (`node --version`, `npm --version`)
- **Git**
- A **Vercel account** (the site is built to deploy on Vercel)
- The client's **`content-package.zip`** — the Phase I deliverable downloaded from
  the admin tool (Phase 6 "Assemble Package" → Download)
- *(Optional)* a **Resend** account for the contact form, and a **GA4 / GTM** ID if
  the client wants analytics

---

## 1. Clone & install

```bash
git clone https://github.com/HankPantier/CountingFiveTemplate.git <client-slug>-site
cd <client-slug>-site
npm install
```

Pick a folder name that fits the client (e.g. `korbey-lague-site`).

---

## 2. Unpack the deliverable

The zip's internal paths mirror the template layout, so `unpack` drops every file
exactly where Next.js + the assembly system expect it, then regenerates the theme.

```bash
npm run unpack ~/Downloads/content-package.zip
npm run validate      # sanity-check: required files present, image refs resolve
```

`unpack` is **idempotent** — re-running it (or running a newer deliverable later)
overwrites `content/` and `public/` and regenerates `src/styles/theme.css`. Your
hand-edits to `site.config.ts`, `content/design-overrides.css`, and source code are
left untouched.

---

## 3. Configure `site.config.ts`

Open `site.config.ts` and set the per-client values:

| Field | What to set |
|---|---|
| `siteUrl` | The production URL (e.g. `https://korbeylague.com`). Drives canonical URLs, sitemap, OG metadata. |
| `legalLinks` | Privacy / Terms (and any others) shown in the footer. |
| `forms.endpoint` | **Leave blank** to use the built-in Resend route. Set to a Formspree/Zapier/CRM URL to POST submissions there instead (Path B). |
| `forms.fromEmail` | Resend sender. Must be a **verified-domain** address in production; `onboarding@resend.dev` works for dev/unverified. |
| `forms.toEmail` | Recipient override. Blank → falls back to `brand.contact.email` from `content/brand.json` (the normal case). |
| `forms.serviceOptions` | The dropdown values for the quote form — edit to the firm's actual services; keep `'Other'` last. |
| `csp.mode` | Ships as **`report-only`** for new clients (see step 7). Leave it until after the first clean deploy. |
| `csp.extraOrigins` | Add any third-party embed origins the client uses (Calendly, Stripe, etc.). |

---

## 4. Set environment variables

Create `.env.local` (copy from `.env.example`). None are required to run, but for a
real client you'll usually set:

```bash
RESEND_API_KEY="re_..."          # contact-form email delivery (Path A)
NEXT_PUBLIC_GA4_ID="G-XXXXXXXX"   # OR…
NEXT_PUBLIC_GTM_ID="GTM-XXXXXX"   # …GTM (if both set, GTM wins)
```

- **No `RESEND_API_KEY`?** The form still works — it falls back to a `mailto:` link.
- **Spam protection needs no env vars.** The honeypot, timing trap, and content
  heuristics are always on; **Vercel BotID** activates automatically once deployed
  on Vercel and is inert locally. (See [architecture.md](./architecture.md#spam--abuse-defenses).)

> Set these same variables in the Vercel project too (step 6) — `.env.local` is local only.

---

## 5. Run & verify locally

```bash
npm run dev          # http://localhost:3000
```

Check:
- Homepage shows the firm name, logo, brand colors, and generated content.
- Sub-pages confirmed in the sitemap resolve (e.g. `/services/virtual-cfo`).
- `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` serve.
- Any configured redirect 301s (dev console logs `Loaded N redirect(s)` at startup).
- Submit the contact form — with `RESEND_API_KEY` set it emails; without it, opens a
  `mailto:`. (BotID does nothing locally — that's expected; it's verified post-deploy.)

Then run the quality gate before committing:

```bash
npm run lint && npx tsc --noEmit && npm test && npm run build
```

Commit the unpacked baseline:

```bash
git add -A && git commit -m "chore: unpack initial deliverable for <client>"
```

---

## 6. (Optional) Design handoff to Claude.ai

For a bespoke visual treatment beyond the default theme:

```bash
npm run export-brief                       # writes ./design-brief.md
# Attach design-brief.md in a Claude.ai chat → "Produce design-overrides.css per the brief."
# Save the result as content/design-overrides.css, then:
npm run dev
```

`content/design-overrides.css` is committed per clone and is **not** overwritten by
re-running `unpack`. If Claude also returns refined tokens, overwrite
`content/design.json` and run `npx tsx scripts/generate-theme.ts`.

---

## 7. Deploy to Vercel

1. **Create the project**: import the repo in the Vercel dashboard (or run `vercel`
   with the CLI). Framework preset = Next.js; no special build settings needed.
2. **Add environment variables** in the Vercel project settings — the same keys from
   step 4 (`RESEND_API_KEY`, `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GTM_ID`).
3. **Deploy.** The first deploy ships with **`csp.mode: 'report-only'`** on purpose.
4. **Verify the deployed site** with DevTools open:
   - No CSP **violation** errors in the console (report-only logs them without
     blocking). BotID's challenge is served same-origin, so it should be clean.
   - Submit the contact form from the live page → the firm receives the email.
   - Confirm a direct bot-style POST is blocked: `curl -X POST https://<site>/api/contact`
     with a JSON body should return **403** (no BotID challenge header = bot).
5. **Flip CSP to enforce**: set `csp.mode: 'enforce'` in `site.config.ts`, commit, redeploy.
6. *(Optional, Pro/Enterprise)* Enable stronger bot detection: Vercel dashboard →
   **Firewall → Rules → Vercel BotID Deep Analysis**. No code change.

---

## 8. Handling content updates later

When the client sends edits, regenerate the deliverable in the admin tool and:

```bash
npm run unpack ~/Downloads/content-package-v2.zip
git diff            # review exactly what changed in content/ + theme
npm run dev         # verify, then commit + push to redeploy
```

Your `site.config.ts`, `content/design-overrides.css`, and source changes survive.

---

## Quick reference

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` / `npm run start` | Production build / serve |
| `npm run unpack <zip>` | Unpack a Phase I deliverable + regenerate theme |
| `npm run validate` | Sanity-check a deliverable |
| `npm run export-brief` | Generate the Claude.ai design brief |
| `npx tsx scripts/generate-theme.ts` | Regenerate `theme.css` from brand/design JSON |
| `npm run lint` / `npm test` | Lint / vitest suite |

**Stuck?** See the Troubleshooting section in [`README.md`](../README.md#troubleshooting)
(homepage 404, missing blocks, wrong theme colors, broken images, Vercel-only build
failures).
