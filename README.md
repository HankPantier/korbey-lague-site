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
| `npx tsx scripts/generate-theme.ts` | Regenerate the theme CSS from current brand.json/design.json |
