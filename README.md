# CountingFive Client Site Template

Next.js 16 + Tailwind v4 + shadcn/ui. Built to consume a Phase I content deliverable from the CountingFive onboarding pipeline.

## Workflow for a new client

```bash
# 1. Clone this template
git clone https://github.com/HankPantier/CountingFiveTemplate my-client-site
cd my-client-site
npm install

# 2. Unpack the Phase I deliverable
npm run unpack ~/Downloads/content-package.zip

# 3. Start dev
npm run dev
```

The `unpack` script extracts the zip into the repo root (filling `content/`, `public/`), then regenerates the theme CSS from the client's brand + design tokens.

## File layout

```
content/                      ← editable source of truth (unpacked from deliverable)
├── pages/*.md                ← one file per page, with block annotations
├── brand.json                ← palette, firm info, social, certifications
├── design.json               ← typography pairing, radius, spacing
├── nav.json                  ← curated nav structure (NavBar + Footer)
├── brand.md, design.md       ← narrative versions (LLM-crawler signal)
├── redirects.csv             ← 301 redirects from old URLs to new ones
public/                       ← files served at canonical URLs
├── robots.txt, sitemap.xml, llms.txt, llms-full.txt
├── og-images/                ← drop OG share images here (1200×630)
├── content-assets/           ← logo, team photos, hero images
src/styles/theme.css           ← generated; do not edit (gitignored)
```

## Editing redirects

Open `content/redirects.csv` and add, edit, or remove rows. The CSV is loaded by `next.config.ts` on every build and registered with Next.js as permanent (301) redirects.

Format (header on line 5):

```
old_url,new_url,status_code,reason
/old-services,/services,301,redirected to new structure
"/old, with comma",/destination,301,consolidated into /destination
```

Notes:
- Lines starting with `#` are ignored — useful for comments.
- `status_code` and `reason` columns aren't currently used by the loader (all redirects are permanent / 308 treated as 301 by search engines), but they're documented for clarity.
- After editing, run `npm run dev` or `npm run build` to pick up changes.
- Wildcards / regex sources are NOT currently supported — page-level redirects only. (Next.js supports them via the `:path*` syntax if you need it; extend `next.config.ts` to handle that.)

## Designing the visual look (Claude.ai Design handoff)

The 21 block components define the *shape* of every page. Their actual visual treatment — colors, gradients, shadows, custom corner radii, spacing nuance — is fed in via two files:

- **`content/design.json`** — design tokens (palette, fonts, radius scale). Drives the generated `theme.css`.
- **`content/design-overrides.css`** — block-specific CSS authored by Claude.ai Design (or you by hand). Loaded after `theme.css`, so any rule here wins.

### Workflow

```bash
# 1. Generate a "design brief" markdown file from the current content
npm run export-brief                  # writes ./design-brief.md
# (or: npm run export-brief -- --out brief.md  /  --stdout)

# 2. Open Claude.ai → new chat → attach design-brief.md
# 3. Ask: "Produce design-overrides.css per the brief."
# 4. Save the returned CSS as content/design-overrides.css
# 5. (Optional) If Claude.ai also proposed token changes, overwrite content/design.json
#    and re-run the theme generator:
npx tsx scripts/generate-theme.ts

# 6. Restart dev to see the result
npm run dev
```

### What Claude.ai Design sees

`design-brief.md` collates everything in one document:
- Firm context (positioning, location, tagline)
- Brand identity (palette, typography pairing, radius/spacing tokens)
- The full CSS-variable contract (the names you can reference)
- The 21-block vocabulary with their `data-block` selectors
- All page markdown (so Claude sees the actual content it's styling)
- A standardized prompt asking for the two outputs (CSS overrides + optional refined `design.json`)

### Targeting blocks in `design-overrides.css`

Every block has a `data-block="<id>"` attribute on its outer element. Use that as your primary selector:

```css
/* Make the hero feel warmer for this client */
[data-block="hero"] {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hex) 100%);
}
[data-block="hero"] h1 {
  letter-spacing: -0.03em;
}

/* Softer corners on feature-grid cards */
[data-block="feature-grid"] .rounded-lg {
  border-radius: 20px;
}

/* Restrained CTA banner — flat color, no shadow */
[data-block="cta-banner"] {
  box-shadow: none;
}
```

The full list of available `data-block` values matches the 21 block IDs documented in `raw-docs/phaseII/component-library-spec.md` (in the onboarding repo). The brief script also lists them inline.

### Versioning

`content/design-overrides.css` is committed to the repo — each client clone carries its own design decisions in git history. The placeholder ships empty; Claude.ai's output replaces it. Re-running `npm run unpack` does NOT overwrite this file (the Phase I deliverable doesn't include a `design-overrides.css`), so iteration on the design is safe.

### When to re-export the brief

Re-run `npm run export-brief` whenever:
- Content changes substantively (new pages added, services renamed)
- Brand tokens change (palette tweak, font swap)
- You want a fresh design pass on the same content

You don't need to re-export to *use* an existing `design-overrides.css` — just edit it and `npm run dev`.

## Editing content

- **Page content:** edit the matching `.md` file in `content/pages/`. Block annotations (`<!-- block: feature-grid | variant: 3-col -->`) drive layout — don't remove them.
- **Brand colors / fonts:** edit `content/brand.json` and `content/design.json`, then run `npx tsx scripts/generate-theme.ts` to regenerate `src/styles/theme.css`. Or just re-run `npm run unpack <path>` to reset everything.
- **Nav menu:** edit `content/nav.json` — `primary` is the top-level list, each item may have `children` (one level deep), optional `cta` at the top right.
- **SEO files:** `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt` are served as-is. Edit directly.
- **Images:** drop logo/team/hero photos into `public/content-assets/`. Reference them in the .md frontmatter or JSON configs by filename (e.g., `hero_image: hero-office.jpg` → served at `/content-assets/hero-office.jpg`).

## Re-unpacking after a content update

When the client comes back with content edits, regenerate the Phase I deliverable in the admin tool, download the new zip, and run `npm run unpack <new-zip>`. The script is idempotent — content gets overwritten, theme regenerates, and your source code is left untouched.

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run unpack <path>` | Unpack a Phase I deliverable (zip or folder) |
| `npm run export-brief` | Generate a design brief markdown file to paste into Claude.ai Design |
| `npx tsx scripts/generate-theme.ts` | Regenerate the theme CSS from current brand.json/design.json |
