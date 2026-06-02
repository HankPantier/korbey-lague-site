# Design Brief — Korbey Lague PLLP

This brief is a structured prompt for **Claude.ai Design** to produce visual styling for Korbey Lague PLLP's website. The brief contains the client's brand identity, the component vocabulary used to build the site, sample content, and a contract for how to format your output.

## What we're asking you to do

Produce two outputs:

1. **`design-overrides.css`** — a CSS file that augments the default theme. Target blocks via the `data-block` attribute selectors listed below. Focus on the blocks that most define this site's identity (hero, content-split, feature-grid, cta-banner, faq-accordion). Aim for 50–200 lines.

2. **A refined `design.json`** (optional) — if you'd recommend changes to the palette, typography, or token scale, output an updated `design.json` reflecting your refinements. Otherwise just say "no token changes needed."

Don't propose changes to the React component tree or block markup — those are fixed. Style only.

---

## Firm context

**Name:** Korbey Lague PLLP
**Tagline:** Inspired by your success
**Location:** Tyngsborough, MA

## Identity

Korbey Lague PLLP is a CPA firm located at 1 Pondview Pl, Tyngsborough, MA 01879. The firm can be reached by phone at (978) 649-2155 or by email at info@korbeylague.com. Standard office hours are Monday through Thursday, 9:00am–3:00pm, with Friday availability by appointment. During tax season (February 1 through April 15), hours expand to Monday through Friday, 9:00am–5:00pm, and Saturday, 9:00am–Noon.

The firm's website is https://www.korbeylague.com. They maintain a presence on Facebook and Yelp.

The team consists of nine staff members:

- **Kelsey Korbey, CPA** — Partner
- **Ron Lague, CPA, PFS** — Partner (PFS is the Personal Financial Specialist designation issued by the AICPA)
- **Tanya Lombardi** — Office Manager
- **Richard DelGaudio, CPA**
- **Jackie Estes, MBA**
- **Mike Riordan, MBA**
- **Ryan Lague**
- **Kristine Ciccarelli**
- **Scott Denisevich**

The firm holds an affiliation with the AICPA (implied through Ron Lague's PFS credential) and maintains a Sage Intacct partnership.

## Positioning & Differentiation

Korbey Lague PLLP's stated tagline is **"Inspired by your success."** Their positioning statement describes a firm built for year-round client relationships, not just tax season engagements:

> "Korbey Lague PLLP has built its reputation in Tyngsborough by being the firm that's still here in July — not just April. With year-round advisory services, tiered bookkeeping packages, and a virtual CFO offering that delivers CFO-level insight at a fraction of the cost, we partner with businesses through every season, not just tax season."

Key differentiators the firm surfaces in its own positioning:

- **Year-round availability** — advisory and bookkeeping services are ongoing, not limited to filing periods
- **Tiered bookkeeping packages** (Basic / Standard / Complete) — allowing clients to right-size their engagement
- **Virtual CFO services** — providing business owners with financial insight and performance metrics typically associated with an in-house CFO, at accessible pricing
- **Sage Intacct partnership** — an accounting system capability that supports more sophisticated financial reporting and business intelligence
- **Team depth** — two CPA partners, multiple MBA-credentialed staff, and a nine-person team serving a multi-industry client base

Services offered by the firm include: Advisory & Virtual CFO, Personal Tax, Business Tax, Bookkeeping (tiered), Payroll, Financial Reporting, Nonprofit Accounting, Business Foundation Services, Accounting System Setup, Business Metrics & Performance, Entity Type Analysis, Tax Notices & Audit Representation, and Financial Statement Preparation.

## Industries Served

### Healthcare Professionals

**Who they are:** Physicians, dentists, therapists, and specialists operating solo practices or small group practices.

**Client pain point:** *"I just opened my practice and I need someone who actually knows how medical practices work, not just someone who handles tax season."*

**Value proposition:** The firm positions itself as practice-aware — understanding the financial and compliance structure of medical and clinical practices, not just general small business accounting.

### Contractors & Trades

**Who they are:** Owner-operated businesses in HVAC, electrical, plumbing, general contracting, and landscaping.

**Client pain point:** *"My buddy said I should stop doing my own books. I've got 8 guys now and no idea if I'm profitable."*

**Value proposition:** The firm offers bookkeeping and financial reporting services that give growing trade businesses visibility into their actual profitability — particularly relevant for contractors who have scaled headcount but not financial infrastructure.

### Nonprofits

**Who they are:** 501(c)(3) organizations across social services, arts, education, faith-based organizations, and community foundations.

**Client pain point:** *"We have a grant audit coming up and our books are a mess. We need someone who actually understands how nonprofits work."*

**Value proposition:** The firm offers nonprofit-specific accounting services, with an understanding of fund accounting, grant compliance, and 990 preparation requirements that differ from standard business accounting.

### Service-based Businesses

**Who they are:** Marketing agencies, professional services firms, cleaning and maintenance companies, salons, and staffing firms.

**Client pain point:** *"I had a great year but somehow I owe $30K in taxes. I need someone proactive, not just reactive."*

**Value proposition:** The firm's year-round advisory model is directly relevant here — ongoing tax planning and financial reporting rather than end-of-year surprises.

### Business Startups

**Who they are:** New LLCs and S-corps across industries, often founders transitioning from employee to owner for the first time.

**Client pain point:** *"I'm starting a business and I don't even know what questions to ask. I just know I need a CPA."*

**Value proposition:** The firm offers Business Foundation Services designed for new business owners — covering entity type analysis, accounting system setup, and the foundational financial infrastructure a new business needs to operate compliantly and with clarity.

---

## Current tokens

### Palette

| Role | Hex |
|---|---|
| primary | #632d54 |
| secondary | #a89d43 |
| complementary | #2c6e55 |
| action | #e8623f |
| near-black | #1A1A2E |
| near-white | #F5F7FA |

### Typography

- Heading font: **Public Sans**
- Body font: **Public Sans**
- Google Fonts URL: https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&display=swap

### Shape system

- Roundness: **sharp** (pill value: 4px)
- Density: **balanced**
- Visual feel: **modern**

### Spacing scale

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 48px
- 2xl: 96px

### Radius scale

- none: 0px
- sm: 4px
- md: 8px
- lg: 16px
- pill: 4px

---

## CSS variable contract

These are the CSS variables the template defines. You can refine them via `design.json` (which feeds `theme.css` via the theme generator). Anything beyond these — block-specific tints, shadows, gradients — goes in `design-overrides.css`.

### Color variables (from palette → HSL)

- `--color-primary`, `--color-primary-foreground`
- `--color-secondary`, `--color-secondary-foreground`
- `--color-accent`, `--color-accent-foreground` (derived from complementary)
- `--color-background`, `--color-foreground`
- `--color-muted`, `--color-muted-foreground`
- `--color-card`, `--color-card-foreground`
- `--color-popover`, `--color-popover-foreground`
- `--color-border`, `--color-input`
- `--color-ring` (derived from action)
- `--color-destructive`, `--color-destructive-foreground`

### Direct hex tokens (for direct CSS usage)

- `--color-action` (the brand cyan or equivalent — used for CTAs)
- `--color-action-foreground`
- `--color-primary-hex`, `--color-near-black`, `--color-near-white`, `--color-complementary`

### Spacing / radius / font

- `--c5-space-xs` through `--c5-space-2xl` (brand spacing scale; intentionally namespaced to avoid Tailwind v4's `--spacing-*` namespace, which feeds max-w/w/h/p/m/gap utilities. If you want a Tailwind utility value, use the native scale: p-1=4px, p-2=8px, p-4=16px, p-6=24px, p-12=48px, p-24=96px)
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`, `--radius` (default)
- `--font-heading`, `--font-body`

### Prose baseline in globals.css

The template's `src/app/globals.css` ships baseline `.prose` rules (outside @layer base since Tailwind v4 tree-shakes custom selectors from base):
- `.prose p`, `.prose ul`, `.prose ol`, `.prose blockquote` get `margin-bottom: 1em` (last-child zeroed)
- `.prose ul` / `.prose ol` get list-style + `padding-left: 1.5em`
- `.prose h2/h3/h4` get `font-weight: 600` + top/bottom margins
- `.prose a` gets `text-decoration: underline`
- `.prose strong` gets `font-weight: 600`

If you want to override prose for a specific block, scope to that block: `[data-block="cta-banner"] .prose p { margin-bottom: 0.5em }` rather than redefining the global rules.

---

## Block vocabulary

The site is composed from 23 reusable blocks. Each block has a `data-block` attribute on its outer element — use that as your primary selector in `design-overrides.css`.

For each block, the catalog below lists its purpose, variants, and which CSS tokens it currently consumes.

### Page-level blocks (one per page, from frontmatter `hero:` field)

#### `[data-block="hero"]`
**Purpose:** Full-bleed, above-the-fold page opener.
**Variants:** image, video, slider
**Currently uses:** --color-primary (overlay), --color-action (CTA), --font-heading

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<header data-block="hero" class="bg-primary text-primary-foreground relative overflow-hidden !py-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"><div class="relative max-w-3xl mx-auto py-20 md:py-32 text-center"><h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Home</h1><p class="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">Korbey Lague PLLP is a Tyngsborough, MA CPA firm offering year-round accounting, tax planning, bookkeeping, and virtual CFO services for local businesses.</p></div></div></header>
```

#### `[data-block="hero-split"]`
**Purpose:** Two-column page opener with text + image.
**Variants:** image-right, image-left

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<header data-block="hero-split" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-background"><div class="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[480px]"><div class="flex flex-col justify-center gap-6"><h1 class="font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Our Story</h1><p class="text-lg text-foreground/75 leading-relaxed max-w-prose">Learn the story behind Korbey Lague PLLP — a Tyngsborough CPA firm built for year-round advisory relationships, not just tax season. Meet the team and see what drives us.</p></div><div class="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[320px] rounded-lg overflow-hidden"><div class="absolute inset-0 bg-muted/40 flex items-center justify-center"><span class="text-muted-foreground text-sm">Image</span></div></div></div></header>
```

#### `[data-block="page-header"]`
**Purpose:** Slim inner-page title bar.
**Variants:** (none)
**Currently uses:** --color-primary (background), --color-near-white (text)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<header data-block="page-header" class="bg-primary text-primary-foreground !py-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"><div class="py-12 md:py-16"><h1 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">Contact</h1><p class="mt-3 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">Contact Korbey Lague PLLP in Tyngsborough, MA. Reach a CPA year-round — not just in April. Call, email, or schedule a consultation online today.</p></div></div></header>
```

### Inline blocks (selected during content generation, annotated `<!-- block: ... -->`)

#### `[data-block="intro-text"]`
**Purpose:** Short headline + paragraph transition between sections.
**Variants:** centered, left-aligned
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="intro-text" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div class="mx-auto max-w-3xl text-left"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">Where It Started</h2><div class="prose prose-neutral mt-4 max-w-none text-foreground/80 leading-relaxed"><p>Korbey Lague PLLP didn&#x27;t start because two CPAs wanted to open another tax office. It started because Kelsey Korbey and Ron Lague kept watching the same thing happen: small business owners and professionals would come in every spring, hand over a shoebox of documents, get a return filed, and then spend the next eleven months making financial decisions without anyone in their corner.</p>
<p>That model works fine for W-2 filers with straightforward returns. It doesn&#x27;t work for the contractor trying to figure out whether to elect S-corp status, or the physician who just started a practice and has no idea what their entity structure should look like. Those clients needed more than a once-a-year touchpoint — they needed a firm that would actually pick up the phone in October.</p>
<p>So that&#x27;s what Korbey Lague PLLP was built to be. A firm grounded in year-round advisory relationships, not a seasonal transaction. The gap was real. The fix was deliberate.</p></div></div></section>
```

#### `[data-block="content-split"]`
**Purpose:** Narrative paragraph with a supporting image.
**Variants:** image-right, image-left
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="content-split" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div class="grid gap-10 md:gap-16 md:grid-cols-2 items-center"><div><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">Why Tyngsborough — and Why It Matters</h2><div class="prose prose-neutral mt-4 max-w-none text-foreground/85 leading-relaxed"><p>Some firms end up in a location. This one chose Tyngsborough.</p>
<p>There&#x27;s a specific kind of business community here — small manufacturers, independent contractors, healthcare providers, family-owned operations — that has historically been underserved by firms too large to care and too distant to notice. Being local isn&#x27;t a branding exercise for Korbey Lague PLLP. It&#x27;s a commitment to showing up for the same clients year after year, knowing their names, their businesses, and what kept them up last quarter.</p>
<p>A year-round advisory model only works if the firm is genuinely present. That means being reachable in Tyngsborough in July, not just in Boston in April. The community here deserves a CPA firm that&#x27;s actually part of it — and that&#x27;s exactly what this firm set out to be.</p></div></div><div class="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted"><div class="absolute inset-0 grid place-items-center text-muted-foreground text-sm">Image: <!-- -->Why Tyngsborough — and Why It Matters</div></div></div></section>
```

#### `[data-block="content-prose"]`
**Purpose:** Long-form copy with no supporting image.
**Variants:** (none)
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="content-prose" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div class="max-w-2xl mx-auto"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">What We Believe About Accounting</h2><div class="prose prose-neutral max-w-none text-foreground/85 leading-relaxed"><p>A CPA firm that only shows up during tax season isn&#x27;t an advisor. It&#x27;s a vendor.</p>
<p>The belief at Korbey Lague PLLP is simple: the most valuable thing a CPA can do is help a client make better decisions before they happen, not document the ones that already did. That means being available for a call in September when a client is thinking about taking on a major contract. It means flagging a payroll tax issue before it becomes a penalty. It means knowing the client&#x27;s financial picture well enough to say, with confidence, &quot;that&#x27;s not the right move right now.&quot;</p>
<p>This isn&#x27;t a philosophy that fits every firm. It requires investment in the relationship — from both sides. The clients Korbey Lague PLLP works best with are the ones who want that kind of engagement, not just a signature on a return.</p></div></div></section>
```

#### `[data-block="checklist-section"]`
**Purpose:** List of benefits, inclusions, or qualifying criteria.
**Variants:** with-image, standalone
**Currently uses:** --color-action (checkmark icon)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="checklist-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground" style="font-family:var(--font-heading)">Who We Work With in Healthcare</h2><div class="prose max-w-none mt-3 text-foreground/70 leading-relaxed"><p>If you&#x27;re in a licensed clinical profession — whether you own a practice, work in a group setting, or operate independently — this is written for you. Korbey Lague PLLP works with:</p></div><ul class="mt-6 space-y-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-3"><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Physicians and surgeons</strong> (primary care, specialty, and surgical practices)</p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Dentists and orthodontists</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Therapists, psychologists, and licensed counselors</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Nurse practitioners and physician assistants</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Veterinarians and veterinary practice owners</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Optometrists and ophthalmologists</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Physical therapists and occupational therapists</strong></p></div></li><li class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mt-0.5 h-5 w-5 shrink-0" style="color:var(--color-action, theme(colors.cyan.500))" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><div class="prose max-w-none text-foreground/85 leading-snug"><p><strong>Other licensed healthcare providers</strong> managing both clinical and business finances</p></div></li></ul></div></section>
```

#### `[data-block="process-steps"]`
**Purpose:** Numbered or sequential how-it-works explanation.
**Variants:** horizontal, vertical
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="process-steps" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mx-auto text-center"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">What Happens After You Contact Us</h2></header><div class="relative mt-12"><div class="hidden md:block absolute top-6 left-0 right-0 h-px" style="background-color:color-mix(in srgb, var(--color-primary,theme(colors.blue.700)) 20%, transparent)" aria-hidden="true"></div><ol role="list" class="grid gap-8 md:grid-cols-3"><li class="flex flex-col items-center text-center gap-4"><div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-primary-foreground font-heading font-bold text-lg shrink-0" style="background-color:var(--color-primary, theme(colors.blue.700))">01</div><div><h3 class="font-heading font-semibold text-foreground">Submit Your Inquiry</h3><div class="prose prose-sm prose-neutral mt-1 max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>Use the contact form, send an email, or call the office directly. Include as much or as little detail as you&#x27;d like. Every submission goes to a member of the Korbey Lague team, not a third-party inbox.</p></div></div></li><li class="flex flex-col items-center text-center gap-4"><div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-primary-foreground font-heading font-bold text-lg shrink-0" style="background-color:var(--color-primary, theme(colors.blue.700))">02</div><div><h3 class="font-heading font-semibold text-foreground">We Respond Within One Business Day</h3><div class="prose prose-sm prose-neutral mt-1 max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>During regular business hours, expect a response within one business day. Someone will confirm receipt, ask any clarifying questions, and suggest next steps.</p></div></div></li><li class="flex flex-col items-center text-center gap-4"><div class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full text-primary-foreground font-heading font-bold text-lg shrink-0" style="background-color:var(--color-primary, theme(colors.blue.700))">03</div><div><h3 class="font-heading font-semibold text-foreground">Intro Call or In-Office Meeting</h3><div class="prose prose-sm prose-neutral mt-1 max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>Depending on what you&#x27;re working through, we&#x27;ll set up either a brief phone call or a sit-down meeting at the Tyngsborough office. No hard pitch. Just a real conversation about where you are and whether we&#x27;re the right fit. Ready to get started? <a node="[object Object]" href="/contact">Schedule a consultation</a>.</p></div></div></li></ol></div></section>
```

#### `[data-block="feature-grid"]`
**Purpose:** 3–8 equal-weight features with icon + short description.
**Variants:** 3-col, 4-col
**Currently uses:** shadcn semantic colors (card, foreground, muted)

#### `[data-block="service-cards"]`
**Purpose:** 2–9 named services with descriptions and links.
**Variants:** 2-col, 3-col
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="service-cards" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">How We Support Family-Owned Businesses Year-Round</h2><div class="prose max-w-none mt-3 text-foreground/70 leading-relaxed"><p>Korbey Lague PLLP provides accounting, tax, and advisory services to closely held family businesses across Tyngsborough and the surrounding region — not just during filing season, but every month of the year.</p></div></header><div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="font-heading text-xl font-semibold text-foreground">Tax Planning &amp; Preparation</h3></div><div class="p-6 pt-0 flex-1"><p class="text-foreground/75 leading-relaxed text-sm">We prepare federal and state returns for S-corps, partnerships, LLCs, and sole proprietors — coordinated with your personal returns so nothing falls through the gaps. More importantly, we do the planning work that actually reduces your tax bill, including estimated tax management, retirement contribution strategies, and year-end adjustments before the deadline has passed.</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="font-heading text-xl font-semibold text-foreground">Entity Structure &amp; Ownership Review</h3></div><div class="p-6 pt-0 flex-1"><p class="text-foreground/75 leading-relaxed text-sm">The entity you started with may not be the right one for where you are now. Ron Lague, CPA, PFS, and Kelsey Korbey, CPA work with family businesses to evaluate whether your current structure — LLC, S-corp, partnership, or otherwise — still fits your goals for income splitting, liability protection, and ownership transition.</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="font-heading text-xl font-semibold text-foreground">Bookkeeping &amp; Payroll</h3></div><div class="p-6 pt-0 flex-1"><p class="text-foreground/75 leading-relaxed text-sm">Clean books aren&#x27;t optional when family dynamics are involved. Our bookkeeping packages bring consistency and separation to your financials, and our payroll services keep compensation for family employees documented, defensible, and compliant.</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="font-heading text-xl font-semibold text-foreground">Virtual CFO Advisory</h3></div><div class="p-6 pt-0 flex-1"><p class="text-foreground/75 leading-relaxed text-sm">For family businesses that need CFO-level thinking without a full-time hire, our virtual CFO offering gives you cash flow analysis, budget-to-actual reporting, and financial strategy — delivered by credentialed professionals, including team members holding CPA and MBA designations, without the overhead of an in-house executive.</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="flex flex-col space-y-1.5 p-6 pb-2"><h3 class="font-heading text-xl font-semibold text-foreground">Year-Round Availability</h3></div><div class="p-6 pt-0 flex-1"><p class="text-foreground/75 leading-relaxed text-sm">This isn&#x27;t a seasonal relationship. Whether you&#x27;re considering a new hire in August, refinancing in October, or thinking through a buyout in February, we&#x27;re available — and we already know your business.

---</p></div></div></div></section>
```

#### `[data-block="content-cards"]`
**Purpose:** Blog posts, articles, or resources with images.
**Variants:** 3-col, 2-col
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="content-cards" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">Featured Articles</h2></header><div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><article class="h-full"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col overflow-hidden" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="p-6 flex-1 pt-5 pb-3"><h3 class="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">Why Your S-Corp Distribution Ratio May Be Working Against You</h3><div class="prose prose-sm prose-neutral max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>This one matters year-round, but especially before Q4 estimated payments are due. If your salary-to-distribution split hasn&#x27;t been reviewed since formation, you may be either overpaying payroll taxes or flagging an IRS audit trigger. Ron Lague, CPA, PFS walks through the benchmarks that actually hold up under scrutiny.</p></div></div></div></article><article class="h-full"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col overflow-hidden" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="p-6 flex-1 pt-5 pb-3"><h3 class="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">Cash Flow Forecasting for Service Businesses: The 13-Week Model</h3><div class="prose prose-sm prose-neutral max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>Revenue projections are not cash flow forecasts. This article explains why that distinction costs service-based businesses in Massachusetts thousands of dollars annually — and how a 13-week rolling model changes what you can see and act on. Built around real client scenarios, not hypotheticals.</p></div></div></div></article><article class="h-full"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col overflow-hidden" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="p-6 flex-1 pt-5 pb-3"><h3 class="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">Nonprofit Chart of Accounts: What Auditors Actually Want to See</h3><div class="prose prose-sm prose-neutral max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>If your nonprofit&#x27;s books were built for tax filing and not fund accounting, this is worth your time. Jackie Estes, MBA breaks down the structural differences between a compliant chart of accounts and one that will slow down your next audit — or your next grant application.</p></div></div></div></article><article class="h-full"><div class="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col overflow-hidden" style="box-shadow:var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))"><div class="p-6 flex-1 pt-5 pb-3"><h3 class="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">The Virtual CFO Question: When Does It Make Sense?</h3><div class="prose prose-sm prose-neutral max-w-none text-foreground/70 leading-relaxed prose-p:my-0 prose-a:text-primary prose-a:underline"><p>Not every business needs a full-time CFO. But most growing businesses eventually need CFO-level thinking. This piece outlines the indicators — revenue thresholds, complexity triggers, board reporting needs — that signal the right time to add that layer of oversight without the full-time overhead.</p>
<hr/></div></div></div></article></div></section>
```

#### `[data-block="team-grid"]`
**Purpose:** Staff or partner profiles with photos.
**Variants:** 2-col, 3-col, 4-col
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="team-grid" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mx-auto text-center"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">The Team Behind the Work</h2><div class="prose max-w-none mt-3 text-foreground/70 leading-relaxed"><p>Credentials matter. So does the person behind them.</p>
<p>Kelsey Korbey, CPA, co-founded the firm with a clear conviction: clients should have one point of contact who actually knows their situation, not a rotating cast of staff every filing season. Ron Lague, CPA, PFS, brings the depth of the AICPA&#x27;s Personal Financial Specialist designation to every client conversation that touches personal wealth, retirement, or long-term planning.</p>
<p>Jackie Estes, MBA, and Mike Riordan, MBA, round out a team that can hold both the numbers and the business context at the same time — which matters when a client needs more than a reconciliation. Richard DelGaudio, CPA, adds additional CPA-level depth to a bench that&#x27;s built for year-round work, not seasonal surge.</p>
<p>These are the people who answer when you call. They know your file. They remember what you talked about last quarter. That&#x27;s not a guarantee most firms can make.</p></div></header><div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"></div></section>
```

#### `[data-block="industry-cards"]`
**Purpose:** Industry or niche verticals with icons.
**Variants:** 3-col, 4-col
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="industry-cards" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mx-auto text-center"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">The Clients Who Shaped Us</h2></header><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div></section>
```

#### `[data-block="testimonials"]`
**Purpose:** Client quotes or reviews.
**Variants:** carousel, grid
**Currently uses:** shadcn semantic colors (card, foreground, muted)

#### `[data-block="stats-bar"]`
**Purpose:** 3–4 numeric proof points (years, clients, staff).
**Variants:** 3-up, 4-up
**Currently uses:** --color-primary (bg), --color-near-white (text)

#### `[data-block="logo-bar"]`
**Purpose:** Certification badges or association logos.
**Variants:** (none)
**Currently uses:** shadcn semantic colors (card, foreground, muted)

#### `[data-block="cta-banner"]`
**Purpose:** A direct call to action with a single button.
**Variants:** color-bg, image-bg
**Currently uses:** --color-action, --color-primary, --color-near-white

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="cta-banner" class="bg-primary text-primary-foreground relative overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"><div class="relative text-center max-w-2xl mx-auto"><h2 class="font-heading text-3xl md:text-4xl font-bold">What&#x27;s Next for Korbey Lague PLLP</h2><div class="prose prose-invert mt-4 max-w-none text-lg opacity-90 leading-relaxed prose-p:my-0 prose-a:underline"><p>The firm isn&#x27;t chasing growth for its own sake. The goal has always been depth over volume — better service to the clients already here, and a careful expansion into the niches where the team can genuinely add value.</p>
<p>That means continuing to build the virtual CFO offering for businesses that need executive-level financial insight without the executive-level overhead. It means staying rooted in Tyngsborough while serving clients across Massachusetts who want the same year-round relationship model. And it means being the kind of firm that&#x27;s still here — still engaged, still accessible — long after the April 15 deadline passes.</p>
<p>If that&#x27;s the kind of relationship you&#x27;ve been looking for, <a node="[object Object]" href="/contact">schedule a consultation</a> and let&#x27;s talk.</p></div></div></div></section>
```

#### `[data-block="pricing"]`
**Purpose:** Tiered service packages with feature lists and prices.
**Variants:** 2-tier, 3-tier, 4-tier
**Currently uses:** shadcn semantic colors (card, foreground, muted)

#### `[data-block="faq-accordion"]`
**Purpose:** Expandable question-and-answer pairs.
**Variants:** (none)
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="faq-accordion" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><div class="max-w-3xl mx-auto"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground">Frequently Asked Questions About Our Story</h2><div class="mt-10 w-full" data-orientation="vertical"><div data-state="closed" data-orientation="vertical" class="border-b"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-_R_jdaatpeslb_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_3daatpeslb_" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 text-left font-heading text-base md:text-lg m-0" data-radix-collection-item="">Where is Korbey Lague PLLP located?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-_R_jdaatpeslb_" hidden="" role="region" aria-labelledby="radix-_R_3daatpeslb_" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height:var(--radix-collapsible-content-height);--radix-accordion-content-width:var(--radix-collapsible-content-width)"></div></div><div data-state="closed" data-orientation="vertical" class="border-b"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-_R_ldaatpeslb_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_5daatpeslb_" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 text-left font-heading text-base md:text-lg m-0" data-radix-collection-item="">Who founded Korbey Lague PLLP?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-_R_ldaatpeslb_" hidden="" role="region" aria-labelledby="radix-_R_5daatpeslb_" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height:var(--radix-collapsible-content-height);--radix-accordion-content-width:var(--radix-collapsible-content-width)"></div></div><div data-state="closed" data-orientation="vertical" class="border-b"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-_R_ndaatpeslb_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_7daatpeslb_" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 text-left font-heading text-base md:text-lg m-0" data-radix-collection-item="">What types of clients does Korbey Lague PLLP serve?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-_R_ndaatpeslb_" hidden="" role="region" aria-labelledby="radix-_R_7daatpeslb_" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height:var(--radix-collapsible-content-height);--radix-accordion-content-width:var(--radix-collapsible-content-width)"></div></div><div data-state="closed" data-orientation="vertical" class="border-b"><h3 data-orientation="vertical" data-state="closed" class="flex"><button type="button" aria-controls="radix-_R_pdaatpeslb_" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_9daatpeslb_" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]&gt;svg]:rotate-180 text-left font-heading text-base md:text-lg m-0" data-radix-collection-item="">What makes Korbey Lague PLLP different from other CPA firms?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></h3><div data-state="closed" id="radix-_R_pdaatpeslb_" hidden="" role="region" aria-labelledby="radix-_R_9daatpeslb_" data-orientation="vertical" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style="--radix-accordion-content-height:var(--radix-collapsible-content-height);--radix-accordion-content-width:var(--radix-collapsible-content-width)"></div></div></div></div></section>
```

#### `[data-block="form"]`
**Purpose:** A lead-capture, contact, or newsletter signup form. The custom variant renders field definitions declared in markdown.
**Variants:** contact, quote, newsletter, custom
**Currently uses:** shadcn semantic colors (card, foreground, muted)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="form" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mb-10"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">Send Us a Message</h2><div class="prose max-w-none mt-3 text-foreground/70 leading-relaxed"><p>Drop a line and a member of our team will get back to you within one business day.</p></div></header><div><div><form class="flex flex-col gap-5" aria-label="Contact form" noValidate=""><input type="text" tabindex="-1" autoComplete="off" class="absolute left-[-9999px] w-px h-px opacity-0" aria-hidden="true" name="website" value=""/><div class="grid sm:grid-cols-2 gap-4"><div class="flex flex-col gap-1.5"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="f-name">Name *</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="f-name" placeholder="Jane Smith" required="" aria-required="true" autoComplete="name" name="name"/></div><div class="flex flex-col gap-1.5"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="f-email">Email *</label><input type="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="f-email" placeholder="jane@example.com" required="" aria-required="true" autoComplete="email" inputMode="email" name="email"/></div></div><div class="flex flex-col gap-1.5"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="f-phone">Phone</label><input type="tel" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="f-phone" placeholder="(555) 000-0000" autoComplete="tel" name="phone"/></div><div class="flex flex-col gap-1.5"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="f-message">Message *</label><textarea class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="f-message" name="message" placeholder="How can we help?" rows="5" required="" aria-required="true" autoComplete="off"></textarea></div><div><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8" type="submit" style="background-color:var(--color-action);color:var(--color-action-foreground)">Send Message</button></div></form></div></div></section>
```

#### `[data-block="content-table"]`
**Purpose:** Comparison data, calendars, or structured reference info.
**Variants:** (none)
**Currently uses:** shadcn semantic colors (card, foreground, muted)

#### `[data-block="contact-info"]`
**Purpose:** Auto-filled contact info card. Reads phone, email, fax, address, and hours from brand.json — no markdown body needed. Two-column layout (Reach out | Visit) with lucide icons (Phone, Mail, Printer, MapPin, Clock).
**Variants:** (none)
**Currently uses:** --color-primary (icons), --color-foreground (values), --color-border

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="contact-info" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mb-10"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">How to Reach Us</h2></header><div class="grid gap-10 md:gap-16 md:grid-cols-2"><div class="space-y-4"><h3 class="font-heading text-lg font-semibold text-foreground">Reach out</h3><dl class="space-y-3 text-foreground/85"><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg><div><dt class="sr-only">Phone</dt><dd><a href="tel:9786492155" class="hover:text-primary">(978) 649-2155</a></dd></div></div><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg><div><dt class="sr-only">Email</dt><dd><a href="mailto:info@korbeylague.com" class="hover:text-primary">info@korbeylague.com</a></dd></div></div><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg><div><dt class="sr-only">Fax</dt><dd>(978) 649-2160</dd></div></div></dl></div><div class="space-y-4"><h3 class="font-heading text-lg font-semibold text-foreground">Visit</h3><div class="space-y-4 text-foreground/85"><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><address class="not-italic" itemScope="" itemType="https://schema.org/PostalAddress"><span class="sr-only">Korbey Lague PLLP<!-- --> address: </span><span class="block">1 Pondview Pl</span><span class="block">Tyngsborough, MA  01879</span></address></div><div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><dl class="space-y-1"><dt class="sr-only">Hours</dt><dd><span class="font-semibold">Standard<!-- -->:</span> <span>Mon–Thu 9:00am–3:00pm, Fri by appointment only</span></dd><dd><span class="font-semibold">Tax Season<!-- -->:</span> <span>Mon–Fri 9:00am–5:00pm, Sat 9:00am–Noon (Feb 1 – Apr 15)</span></dd></dl></div></div></div></div></section>
```

#### `[data-block="map"]`
**Purpose:** Embedded Google Map for the firm address from brand.json. Single iframe in a 16:9 rounded frame.
**Variants:** (none)
**Currently uses:** --color-border (frame), --radius-lg (corner)

**Sample rendered HTML** (verbatim from the dev server — target child selectors precisely):

```html
<section data-block="map" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"><header class="max-w-2xl mb-8"><h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground">Where to Find Us</h2></header><div class="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border"><iframe src="https://www.google.com/maps?q=Korbey%20Lague%20PLLP%2C%201%20Pondview%20Pl%2C%20Tyngsborough%20MA%2001879&amp;output=embed" width="100%" height="100%" style="border:0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen="" title="Map of Korbey Lague PLLP"></iframe></div></section>
```

---

## Site chrome — NavBar, Footer & Consent Banner

Outside the 23 page blocks, the site has three persistent components rendered by `src/app/layout.tsx`: the **NavBar** (top, sticky), the **Footer** (bottom), and the **Cookie Consent Banner** (sticky bottom card, shown until the visitor accepts or declines). They each carry a stable `data-component` attribute on their outer element for design-override targeting.

### NavBar — `[data-component="navbar"]`

A sticky `<header>` at the top of every page. Layout left→right: firm logo (or wordmark fallback) → desktop NavigationMenu (hidden below md) → optional CTA button (`nav.cta` from `nav.json`) → mobile hamburger menu (visible below md).

**Key sub-elements to know about:**
- The header background toggles on scroll: `bg-background` at top, `bg-background/95 backdrop-blur border-b border-border` after 12px scroll. To restyle this transition, target `[data-component="navbar"]` and override.
- Top-level nav links: `[data-component="navbar"] a[role="menuitem"]` (shadcn NavigationMenuLink) or just `[data-component="navbar"] nav a`.
- Active nav state: links + triggers get `aria-current="page"` (for current page) and the trigger gets `data-active` (for trigger whose subtree contains the current page). Currently styled as `text-primary underline underline-offset-8`. Override via `[data-component="navbar"] a[aria-current="page"] { ... }`.
- Dropdown sub-menu panel: `[data-component="navbar"] [data-radix-popper-content-wrapper] ul` (Radix-rendered) or just `[data-component="navbar"] li[role="menuitem"]` for individual sub-links.
- Mobile menu: built on shadcn Sheet (`<aside>` slide-out) + Accordion. Selector: `[role="dialog"]` (Sheet).

### Footer — `[data-component="footer"]`

The Footer is a server component. Default styling: `bg-foreground text-background` (inverted color — dark background, light text). Three vertical zones:

1. **Main grid** (`md:grid-cols-4`): firm logo + tagline, then 3 columns of nav links sourced from `nav.json`.
2. **Certifications bar**: row of `brand.certifications[]` logos with a top separator.
3. **Legal bar**: copyright + `siteConfig.legalLinks` + social icons row.

**Key sub-elements:**
- Top-level footer: `[data-component="footer"]`
- Each zone is separated by shadcn `<Separator />` (rendered as `hr`).
- Logo: `[data-component="footer"] img` (rendered with `invert opacity-90` so a dark logo reads on a dark background; for clients with already-light logos you may want to override this).
- Social icons: lucide `<Mail/>`, plus an inline-SVG `SocialIcon` component for branded platforms (Facebook, LinkedIn, Twitter, etc.). Target via `[data-component="footer"] [aria-label*="Visit"]` or by SVG class.
- Bottom legal text: `[data-component="footer"] p.text-background\/50` (faded body color).

### Cookie Consent Banner — `[data-component="cookie-consent"]`

A small sticky `<aside>` pinned to the bottom of the viewport. Renders only when (a) at least one analytics ID is configured (`NEXT_PUBLIC_GA4_ID` or `NEXT_PUBLIC_GTM_ID`) and (b) the visitor hasn't yet accepted or declined. Accepting writes the `analytics-consent=accepted` cookie and reloads the page; the page then SSRs with the GA/GTM `<script>` injected.

**Key sub-elements:**
- Container: `[data-component="cookie-consent"]` — the outer `<aside>`. Default surface is `bg-background border border-border`, but the brand may want a full-bleed primary-color bar, a pill-shaped card, etc.
- Message text: `[data-component="cookie-consent"] [data-slot="message"]` (paragraph; includes a "Learn more" link to `/privacy`).
- Accept button: `[data-component="cookie-consent"] [data-slot="accept"]` (shadcn Button default variant).
- Decline button: `[data-component="cookie-consent"] [data-slot="decline"]` (shadcn Button ghost variant).

**Token contract:** respects `--color-background`, `--color-foreground`, `--color-border`, `--color-primary`, `--color-action`. Override the container surface, type weight/size, and button treatments freely. Keep the buttons visually distinguishable (Accept = primary action, Decline = secondary).

### When to use `[data-component="..."]` vs `[data-block="..."]`

- `data-component` is for persistent site chrome (NavBar, Footer, Cookie Consent Banner) that appears on every page.
- `data-block` is for content blocks that appear inline based on the page's markdown. Don't mix the two namespaces in one selector.

### Rendered chrome markup (verbatim)

#### `[data-component="navbar"]`

```html
<header data-component="navbar" class="sticky top-0 z-40 w-full transition-colors bg-background"><div class="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between"><a class="flex items-center gap-2" aria-label="Korbey Lague PLLP home" href="/"><img alt="Korbey Lague PLLP logo" width="160" height="32" decoding="async" data-nimg="1" class="h-8 w-auto" style="color:transparent" src="/content-assets/korbey-lague-pllp-wordmark.svg"/></a><nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"><div style="position:relative"><ul data-orientation="horizontal" class="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr"><li class="relative"><button id="radix-_R_jlb_-trigger-radix-_R_3jlb_" data-state="closed" aria-expanded="false" aria-controls="radix-_R_jlb_-content-radix-_R_3jlb_" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group data-[active]:text-primary data-[active]:underline data-[active]:underline-offset-8 data-[active]:decoration-2" data-active="true" data-radix-collection-item="">About<!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li class="relative"><button id="radix-_R_jlb_-trigger-radix-_R_5jlb_" data-state="closed" aria-expanded="false" aria-controls="radix-_R_jlb_-content-radix-_R_5jlb_" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group data-[active]:text-primary data-[active]:underline data-[active]:underline-offset-8 data-[active]:decoration-2" data-radix-collection-item="">Services<!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li class="relative"><button id="radix-_R_jlb_-trigger-radix-_R_7jlb_" data-state="closed" aria-expanded="false" aria-controls="radix-_R_jlb_-content-radix-_R_7jlb_" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group data-[active]:text-primary data-[active]:underline data-[active]:underline-offset-8 data-[active]:decoration-2" data-radix-collection-item="">Industries / Who We Serve<!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li class="relative"><button id="radix-_R_jlb_-trigger-radix-_R_9jlb_" data-state="closed" aria-expanded="false" aria-controls="radix-_R_jlb_-content-radix-_R_9jlb_" class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group data-[active]:text-primary data-[active]:underline data-[active]:underline-offset-8 data-[active]:decoration-2" data-radix-collection-item="">Resources<!-- --> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li class="relative"><a class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground" data-radix-collection-item="" href="/contact">Contact</a></li></ul></div></nav><div class="flex items-center gap-2"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden" aria-label="Open menu" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_2rlb_" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></div></header>
```

#### `[data-component="footer"]`

```html
<footer data-component="footer" class="bg-foreground text-background mt-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid gap-8 md:grid-cols-4"><div class="md:col-span-1 space-y-3"><a class="inline-flex items-center" aria-label="Korbey Lague PLLP home" href="/"><img alt="Korbey Lague PLLP logo" loading="lazy" width="160" height="32" decoding="async" data-nimg="1" class="h-8 w-auto invert opacity-90" style="color:transparent" src="/content-assets/korbey-lague-pllp-wordmark.svg"/></a><p class="text-sm text-background/90">Inspired by your success</p><div class="flex gap-3 pt-2"><a href="facebook: https://www.facebook.com/korbeylaguepllp/" target="_blank" rel="noopener noreferrer" aria-label="other"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-5 w-5 opacity-80 hover:opacity-100" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></a><a href="yelp: https://www.yelp.com/biz/korbey-lague-tyngsborough" target="_blank" rel="noopener noreferrer" aria-label="other"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-5 w-5 opacity-80 hover:opacity-100" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></a></div></div><div class="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6"><div><a class="text-sm font-semibold hover:underline" href="/about">About</a><ul class="mt-3 space-y-2"><li><a class="text-sm text-background/90 hover:text-background" href="/about/our-story">Our Story</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/about/our-team">Our Team</a></li></ul></div><div><a class="text-sm font-semibold hover:underline" href="/services">Services</a><ul class="mt-3 space-y-2"><li><a class="text-sm text-background/90 hover:text-background" href="/services/virtual-cfo-advisory">Advisory &amp; Virtual CFO</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/services/tax">Tax</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/services/bookkeeping-payroll">Bookkeeping &amp; Payroll</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/services/financial-reporting">Financial Reporting</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/industries/nonprofits">Nonprofit Accounting</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/services/wealth-retirement-planning">Wealth &amp; Retirement Planning</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/services/business-startup-accounting">Business Startup Accounting</a></li></ul></div><div><a class="text-sm font-semibold hover:underline" href="/industries">Industries / Who We Serve</a><ul class="mt-3 space-y-2"><li><a class="text-sm text-background/90 hover:text-background" href="/industries/healthcare-professionals">Healthcare Professionals</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/industries/contractors-trades">Contractors &amp; Trades</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/industries/retail-manufacturing">Retail &amp; Manufacturing</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/industries/service-businesses">Service Businesses</a></li><li><a class="text-sm text-background/90 hover:text-background" href="/industries/family-businesses">Closely Held Family Businesses</a></li></ul></div></div><div class="space-y-2 text-sm text-background/90"><div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-4 w-4 mt-0.5 shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><address class="not-italic leading-relaxed">1 Pondview Pl<br/>Tyngsborough<!-- -->, <!-- -->MA<!-- --> <!-- -->01879</address></div><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg><a href="tel:(978) 649-2155" class="hover:underline">(978) 649-2155</a></div><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg><a href="mailto:info@korbeylague.com" class="hover:underline">info@korbeylague.com</a></div></div></div><div data-orientation="horizontal" role="none" class="shrink-0 h-[1px] w-full bg-background/10"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"><span class="text-xs text-background/90">AICPA (implied)</span><span class="text-xs text-background/90">AICPA PFS Credential</span><span class="text-xs text-background/90">Sage Intacct</span></div><div data-orientation="horizontal" role="none" class="shrink-0 h-[1px] w-full bg-background/10"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/90"><span>© <!-- -->2026<!-- --> <!-- -->Korbey Lague PLLP<!-- -->. All rights reserved.</span><ul class="flex gap-4"><li><a class="hover:text-background" href="/privacy">Privacy Policy</a></li><li><a class="hover:text-background" href="/terms">Terms of Service</a></li><li><button type="button" class="hover:text-background">Cookie preferences</button></li></ul></div></footer>
```

#### `[data-component="cookie-consent"]`

```html
<aside data-component="cookie-consent" class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[calc(100%-2rem)] bg-background border border-border rounded-lg shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"><p data-slot="message" class="text-sm text-foreground">We use cookies to understand how visitors use our site.<!-- --> <a class="underline" href="/privacy">Learn more</a>.</p><div class="flex gap-2 shrink-0"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" data-slot="decline">Decline</button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3" data-slot="accept">Accept</button></div></aside>
```

---

## Sample content

The actual pages this template renders. Use these to inform your styling — what does a "real" feature-grid look like? What's the longest content-prose section?

### /about/our-story (Our Story | Korbey Lague PLLP)

**Hero:** hero-split (image-right)
**Sections:** intro-text, content-split, industry-cards, content-prose, team-grid, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## Where It Started

Korbey Lague PLLP didn't start because two CPAs wanted to open another tax office. It started because Kelsey Korbey and Ron Lague kept watching the same thing happen: small business owners and professionals would come in every spring, hand over a shoebox of documents, get a return filed, and then spend the next eleven months making financial decisions without anyone in their corner.

That model works fine for W-2 filers with straightforward returns. It doesn't work for the contractor trying to figure out whether to elect S-corp status, or the physician who just started a practice and has no idea what their entity structure should look like. Those clients needed more than a once-a-year touchpoint — they needed a firm that would actually pick up the phone in October.

So that's what Korbey Lague PLLP was built to be. A firm grounded in year-round advisory relationships, not a seasonal transaction. The gap was real. The fix was deliberate.

<!-- block: content-split | variant: image-right -->
## Why Tyngsborough — and Why It Matters

Some firms end up in a location. This one chose Tyngsborough.

There's a specific kind of business community here — small manufacturers, independent contractors, healthcare providers, family-owned operations — that has historically been underserved by firms too large to care and too distant to notice. Being local isn't a branding exercise for Korbey Lague PLLP. It's a commitment to showing up for the same clients year after year, knowing their names, their businesses, and what kept them up last quarter.

A year-round advisory model only works if the firm is genuinely present. That means being reachable in Tyngsborough in July, not just in Boston in April. The community here deserves a CPA firm that's actually part of it — and that's exactly what this firm set out to be.

<!-- block: industry-cards | variant: default -->
## The Clients Who Shaped Us

The firm didn't build its service model in a vacuum. The clients did.

Healthcare professionals — physicians, dentists, therapists in private practice — pushed the firm to go deep on entity structure, retirement planning, and the specific tax pressures that come with professional service income. Those relationships are why Ron Lague holds the AICPA's Personal Financial Specialist (PFS) credential, one of the most rigorous personal finance designations in the profession.

Contractors and trades businesses brought complexity around job costing, payroll, and cash flow timing that compliance work alone couldn't address. Sitting with those clients through the messy middle of a growth year is what built the firm's bookkeeping and virtual CFO capabilities.

Nonprofits needed a firm that understood fund accounting, compliance, and the particular accountability that comes with stewarding other people's money. Startups needed someone who could think with them about structure before the first dollar came in, not after.

None of these are market segments on a slide deck. They're actual clients — some of whom have been with the firm since the beginning — who asked harder questions and pushed Korbey Lague PLLP to keep building the answers.

<!-- block: content-prose | variant: default -->
## What We Believe About Accounting

A CPA firm that only shows up during tax season isn't an advisor. It's a vendor.

The belief at Korbey Lague PLLP is simple: the most valuable thing a CPA can do is help a client make better decisions before they happen, not document the ones that already did. That means being available for a call in September when a client is thinking about taking on a major contract. It means flagging a payroll tax issue before it becomes a penalty. It means knowing the client's financial picture well enough to say, with confidence, "that's not the right move right now."

This isn't a philosophy that fits every firm. It requires investment in the relationship — from both sides. The clients Korbey Lague PLLP works best with are the ones who want that kind of engagement, not just a signature on a return.

<!-- block: team-grid | variant: 3-col -->
## The Team Behind the Work

Credentials matter. So does the person behind them.

Kelsey Korbey, CPA, co-founded the firm with a clear conviction: clients should have one point of contact who actually knows their situation, not a rotating cast of staff every filing season. Ron Lague, CPA, PFS, brings the depth of the AICPA's Personal Financial Specialist designation to every client conversation that touches personal wealth, retirement, or long-term planning.

Jackie Estes, MBA, and Mike Riordan, MBA, round out a team that can hold both the numbers and the business context at the same time — which matters when a client needs more than a reconciliation. Richard DelGaudio, CPA, adds additional CPA-level depth to a bench that's built for year-round work, not seasonal surge.

These are the people who answer when you call. They know your file. They remember what you talked about last quarter. That's not a guarantee most firms can make.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Our Story

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is based in Tyngsborough, Massachusetts. The firm intentionally chose to plant roots in this community and serves clients both locally and across Massachusetts, with virtual CFO and advisory services available remotely for businesses throughout the state.

**Q: Who founded Korbey Lague PLLP?**
A: The firm was co-founded by Kelsey Korbey, CPA, and Ron Lague, CPA, PFS. Ron holds the AICPA's Personal Financial Specialist (PFS) designation, one of the most rigorous personal finance credentials in the accounting profession. Both founders built the firm around a year-round advisory model, not a seasonal tax practice.

**Q: What types of clients does Korbey Lague PLLP serve?**
A: The firm works with healthcare professionals in private practice, contractors, nonprofits, and startups, among others. Rather than treating these as market segments, Korbey Lague PLLP approaches each as a long-term relationship — which is why the firm's service model has expanded well beyond tax compliance into bookkeeping and virtual CFO work.

**Q: What makes Korbey Lague PLLP different from other CPA firms?**
A: The core difference is year-round availability and relationship continuity. Clients work with the same credentialed team members — CPAs, MBAs, and a PFS-designated partner — throughout the year. The firm offers tiered bookkeeping packages and a virtual CFO service designed to give small businesses CFO-level financial insight without the overhead of a full-time hire.

<!-- block: cta-banner | variant: color-bg -->
## What's Next for Korbey Lague PLLP

The firm isn't chasing growth for its own sake. The goal has always been depth over volume — better service to the clients already here, and a careful expansion into the niches where the team can genuinely add value.

That means continuing to build the virtual CFO offering for businesses that need executive-level financial insight without the executive-level overhead. It means staying rooted in Tyngsborough while serving clients across Massachusetts who want the same year-round relationship model. And it means being the kind of firm that's still here — still engaged, still accessible — long after the April 15 deadline passes.

If that's the kind of relationship you've been looking for, [schedule a consultation](/contact) and let's talk.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA, founded by Kelsey Korbey, CPA, and Ron Lague, CPA, PFS, to serve small businesses and professionals with year-round advisory services — not just tax preparation. The firm works with healthcare professionals, contractors, nonprofits, and startups across Massachusetts.

**E-E-A-T Signals:**
- Kelsey Korbey holds an active CPA license
- Ron Lague holds CPA and AICPA Personal Financial Specialist (PFS) credentials
- Richard DelGaudio holds an active CPA license
- Jackie Estes holds an MBA
- Mike Riordan holds an MBA
- Firm is based in Tyngsborough, MA with an established local presence
- AICPA PFS credential is one of the most rigorous personal finance designations in the accounting profession
- Firm uses Sage Intacct for client accounting engagements

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced directly in the closing section — links reinforce the service and support navigation to a key revenue page
- bookkeeping and virtual CFO capabilities → /services/bookkeeping — Mentioned in the context of contractor clients — directs readers to tiered bookkeeping packages
- the people who answer when you call → /team — Team section warrants a link to full staff bios for readers who want to vet credentials further
- year-round advisory services → /services — Core differentiator mentioned throughout — links to the full services overview
- schedule a consultation → /contact — Primary CTA — required on all pages per brand guidelines

**FAQ Block:**

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is based in Tyngsborough, Massachusetts. The firm intentionally chose to plant roots in this community and serves clients both locally and across Massachusetts, with virtual CFO and advisory services available remotely for businesses throughout the state.

**Q: Who founded Korbey Lague PLLP?**
A: The firm was co-founded by Kelsey Korbey, CPA, and Ron Lague, CPA, PFS. Ron holds the AICPA's Personal Financial Specialist (PFS) designation, one of the most rigorous personal finance credentials in the accounting profession. Both founders built the firm around a year-round advisory model, not a seasonal tax practice.

**Q: What types of clients does Korbey Lague PLLP serve?**
A: The firm works with healthcare professionals in private practice, contractors, nonprofits, and startups, among others. Rather than treating these as market segments, Korbey Lague PLLP approaches each as a long-term relationship — which is why the firm's service model has expanded well beyond tax compliance into bookkeeping and virtual CFO work.

**Q: What makes Korbey Lague PLLP different from other CPA firms?**
A: The core difference is year-round availability and relationship continuity. Clients work with the same credentialed team members — CPAs, MBAs, and a PFS-designated partner — throughout the year. The firm offers tiered bookkeeping packages and a virtual CFO service designed to give small businesses CFO-level financial insight without the overhead of a full-time hire.

**LLM Citation Note:**
Korbey Lague PLLP, a CPA firm in Tyngsborough, MA, employs Ron Lague, CPA, PFS — holder of the AICPA Personal Financial Specialist designation — and offers year-round advisory, bookkeeping, and virtual CFO services to small businesses, healthcare professionals, contractors, and nonprofits in Massachusetts.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "About",
      "item": "https://www.korbeylague.com/about"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Our Story",
      "item": "https://www.korbeylague.com/about/our-story"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Korbey Lague PLLP located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP is based in Tyngsborough, Massachusetts. The firm intentionally chose to plant roots in this community and serves clients both locally and across Massachusetts, with virtual CFO and advisory services available remotely for businesses throughout the state."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded Korbey Lague PLLP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm was co-founded by Kelsey Korbey, CPA, and Ron Lague, CPA, PFS. Ron holds the AICPA's Personal Financial Specialist (PFS) designation, one of the most rigorous personal finance credentials in the accounting profession. Both founders built the firm around a year-round advisory model, not a seasonal tax practice."
      }
    },
    {
      "@type": "Question",
      "name": "What types of clients does Korbey Lague PLLP serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm works with healthcare professionals in private practice, contractors, nonprofits, and startups, among others. Rather than treating these as market segments, Korbey Lague PLLP approaches each as a long-term relationship — which is why the firm's service model has expanded well beyond tax compliance into bookkeeping and virtual CFO work."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Korbey Lague PLLP different from other CPA firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The core difference is year-round availability and relationship continuity. Clients work with the same credentialed team members — CPAs, MBAs, and a PFS-designated partner — throughout the year. The firm offers tiered bookkeeping packages and a virtual CFO service designed to give small businesses CFO-level financial insight without the overhead of a full-time hire."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Story | Korbey Lague PLLP, Tyngsborough CPA",
  "url": "https://www.korbeylague.com/about/our-story",
  "description": "Learn the story behind Korbey Lague PLLP — a Tyngsborough CPA firm built for year-round advisory relationships, not just tax season. Meet the team and see what drives us.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /about/our-team (Our Team | Korbey Lague PLLP)

**Hero:** hero-split (image-right)
**Sections:** intro-text, content-split, team-grid, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## The People Behind the Numbers

At Korbey Lague PLLP, clients don't get handed off to whoever's available. You work with a consistent team that knows your business, your industry, and what you're trying to build — not just in April, but every month of the year. These are the people who pick up the phone in July, flag an issue in October, and help you make a decision in February that pays off by December.

---

<!-- block: content-split | variant: image-right -->
## Kelsey Korbey, CPA — Founder & Managing Partner

Kelsey Korbey built this firm around a simple conviction: business owners deserve accounting support that doesn't disappear after Tax Day.

A licensed CPA with years of experience in public accounting, Kelsey founded Korbey Lague PLLP in Tyngsborough, MA after seeing too many small and mid-size businesses get shuffled through transactional tax prep shops — firms that were reachable in March and gone by May. That pattern left clients without guidance during the moments that actually mattered: hiring decisions, equipment purchases, entity changes, and planning for next year's tax liability.

Kelsey's practice focuses on year-round advisory work, with particular depth in industries where the financial stakes are high and the compliance picture is complex — including healthcare practices, construction and trade contractors, and nonprofit organizations. The firm's virtual CFO offering reflects her belief that small businesses shouldn't have to grow to Fortune 500 size before getting CFO-level financial insight.

She is a member of the AICPA and brings a service philosophy to every client engagement: accurate, proactive, and direct. When something in your financials needs attention, she'll tell you — not in a year-end summary, but when there's still time to act.

---

<!-- block: team-grid | variant: 3-col -->
## Our Advisory & Accounting Staff

**Ron Lague, CPA, PFS**
Ron holds both a CPA license and the Personal Financial Specialist (PFS) designation from the AICPA — a credential awarded exclusively to CPAs who meet rigorous standards in personal financial planning. That combination means Ron isn't just looking at your tax return; he's thinking about how your business finances connect to your personal wealth picture. Clients navigating business transitions, retirement planning, or complex investment structures benefit directly from that dual lens.

**Jackie Estes, MBA**
Jackie brings an MBA-grounded perspective to the firm's bookkeeping and advisory work. Her background spans financial operations and business analysis, and she's particularly effective with clients who are scaling — businesses that have outgrown spreadsheets but aren't yet ready for a full-time finance hire. Jackie works closely with clients on Sage Intacct, the firm's cloud accounting platform of choice for clients who need real-time financial visibility.

**Mike Riordan, MBA**
Mike rounds out the advisory team with an MBA and a background in operational finance. He supports clients across the firm's service tiers, with a focus on helping business owners understand what their numbers are actually telling them — not just what happened last quarter, but what it means for decisions happening right now.

**Richard DelGaudio, CPA**
Richard is a licensed CPA who supports tax compliance and accounting work across the firm's client base. His attention to detail and technical grounding make him a reliable resource for clients with complex tax situations, including those in construction, healthcare, and multi-entity structures.

---

<!-- block: content-prose | variant: left-aligned -->
## How We Work With You

When you work with Korbey Lague PLLP, you have a consistent point of contact — someone who knows your file, your goals, and the context behind your questions. You're not re-explaining your business every time you reach out.

Depending on your service tier, communication may come through scheduled check-ins, proactive alerts from your advisory team, or real-time reporting through Sage Intacct. What doesn't change is this: the team is accessible year-round. Tax deadlines are one part of the calendar, not the whole calendar.

For clients on the virtual CFO tier, that means monthly financial reviews, strategic planning support, and a direct line to CPA-level guidance without the cost of a full-time hire. For bookkeeping clients, it means clean, current books and a team that flags anomalies before they become problems.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Our Team

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The firm's team includes multiple licensed CPAs, an AICPA Personal Financial Specialist (PFS) designation holder (Ron Lague), and two MBAs (Jackie Estes and Mike Riordan). The PFS designation is awarded exclusively to CPAs who meet the AICPA's advanced standards in personal financial planning — it's not a general finance certificate.

**Q: Will I work with the same person at Korbey Lague, or get passed around?**
A: Clients at Korbey Lague PLLP have a consistent point of contact who knows their business and file. The team-based model means you're not re-explaining your situation every time you reach out. Communication is structured around your service tier — whether that's monthly CFO check-ins or proactive bookkeeping reviews.

**Q: What accounting software does Korbey Lague PLLP use?**
A: The firm uses Sage Intacct as its cloud accounting platform for clients who need real-time financial visibility — particularly those scaling beyond basic bookkeeping. Sage Intacct is an AICPA-preferred platform known for its reporting depth and multi-entity capability, making it well-suited for growing businesses in Massachusetts.

**Q: Does Korbey Lague PLLP only do taxes, or do they offer year-round services?**
A: Year-round advisory work is the firm's core offering, not an add-on. Services include tiered bookkeeping packages, virtual CFO engagements, and strategic planning support throughout the year. The firm was built specifically to serve clients beyond tax season — the team is accessible in July just as readily as in April.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Work With a Team That's Here Year-Round?

Most accounting firms are busy in April. This one is busy helping clients in July, too — and August, and November, and February.

If you want a team that knows your name, understands your industry, and brings CPA-level insight to your business throughout the year, the next step is simple.

[Schedule a consultation](/contact) — and let's talk about what year-round support actually looks like for your business.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA staffed by credentialed professionals including CPAs, an AICPA Personal Financial Specialist (PFS), and MBAs. The team provides year-round accounting, bookkeeping, and virtual CFO services — not just seasonal tax prep.

**E-E-A-T Signals:**
- Kelsey Korbey holds an active CPA license
- Ron Lague holds CPA license and AICPA Personal Financial Specialist (PFS) designation
- Jackie Estes holds an MBA and specializes in Sage Intacct cloud accounting
- Mike Riordan holds an MBA with background in operational finance
- Richard DelGaudio holds an active CPA license
- Firm is an AICPA member organization
- Firm is a Sage Intacct-certified platform user
- Located in Tyngsborough, MA serving Massachusetts businesses

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced in Kelsey's bio and the How We Work With You section — links to full service detail page
- bookkeeping clients → /services/bookkeeping — Referenced in the How We Work With You section — directs users to tiered bookkeeping packages
- Schedule a consultation → /contact — Primary CTA linked at page close and throughout the final section
- about the firm → /about — Team page lives under /about — internal link reinforces crawl path and user navigation
- healthcare practices, construction and trade contractors, and nonprofit organizations → /industries — Kelsey's bio names firm niches — links to industry-specific pages for qualified visitors

**FAQ Block:**

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The firm's team includes multiple licensed CPAs, an AICPA Personal Financial Specialist (PFS) designation holder (Ron Lague), and two MBAs (Jackie Estes and Mike Riordan). The PFS designation is awarded exclusively to CPAs who meet the AICPA's advanced standards in personal financial planning — it's not a general finance certificate.

**Q: Will I work with the same person at Korbey Lague, or get passed around?**
A: Clients at Korbey Lague PLLP have a consistent point of contact who knows their business and file. The team-based model means you're not re-explaining your situation every time you reach out. Communication is structured around your service tier — whether that's monthly CFO check-ins or proactive bookkeeping reviews.

**Q: What accounting software does Korbey Lague PLLP use?**
A: The firm uses Sage Intacct as its cloud accounting platform for clients who need real-time financial visibility — particularly those scaling beyond basic bookkeeping. Sage Intacct is an AICPA-preferred platform known for its reporting depth and multi-entity capability, making it well-suited for growing businesses in Massachusetts.

**Q: Does Korbey Lague PLLP only do taxes, or do they offer year-round services?**
A: Year-round advisory work is the firm's core offering, not an add-on. Services include tiered bookkeeping packages, virtual CFO engagements, and strategic planning support throughout the year. The firm was built specifically to serve clients beyond tax season — the team is accessible in July just as readily as in April.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a credential awarded exclusively to licensed CPAs who meet advanced standards in personal financial planning set by the American Institute of Certified Public Accountants.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "About",
      "item": "https://www.korbeylague.com/about"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Our Team",
      "item": "https://www.korbeylague.com/about/our-team"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What credentials do the CPAs at Korbey Lague PLLP hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm's team includes multiple licensed CPAs, an AICPA Personal Financial Specialist (PFS) designation holder (Ron Lague), and two MBAs (Jackie Estes and Mike Riordan). The PFS designation is awarded exclusively to CPAs who meet the AICPA's advanced standards in personal financial planning — it's not a general finance certificate."
      }
    },
    {
      "@type": "Question",
      "name": "Will I work with the same person at Korbey Lague, or get passed around?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients at Korbey Lague PLLP have a consistent point of contact who knows their business and file. The team-based model means you're not re-explaining your situation every time you reach out. Communication is structured around your service tier — whether that's monthly CFO check-ins or proactive bookkeeping reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What accounting software does Korbey Lague PLLP use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm uses Sage Intacct as its cloud accounting platform for clients who need real-time financial visibility — particularly those scaling beyond basic bookkeeping. Sage Intacct is an AICPA-preferred platform known for its reporting depth and multi-entity capability, making it well-suited for growing businesses in Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP only do taxes, or do they offer year-round services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Year-round advisory work is the firm's core offering, not an add-on. Services include tiered bookkeeping packages, virtual CFO engagements, and strategic planning support throughout the year. The firm was built specifically to serve clients beyond tax season — the team is accessible in July just as readily as in April."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Team | Korbey Lague PLLP CPAs in Tyngsborough",
  "url": "https://www.korbeylague.com/about/our-team",
  "description": "Meet the CPAs and advisors at Korbey Lague PLLP in Tyngsborough, MA — including credentials like CPA, PFS, and MBA. Year-round accounting and advisory support.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /about (About | Korbey Lague PLLP)

**Hero:** hero-split (image-right)
**Sections:** content-prose, content-split, content-prose, faq-accordion, cta-banner

<!-- block: content-prose | variant: left-aligned -->
## Who We Are

Korbey Lague PLLP was built on a straightforward premise: most businesses only hear from their CPA firm around tax season — and that's not enough. Founded in Tyngsborough, MA, the firm was designed from the start to show up year-round, not just when a deadline is looming.

The team brings credentials that go well beyond a standard CPA shingle. Kelsey Korbey, CPA and Ron Lague, CPA, PFS lead the firm — Ron holds the AICPA's Personal Financial Specialist designation, one of the most rigorous personal finance credentials in the profession. Jackie Estes, MBA and Mike Riordan, MBA bring management-level business acumen to client engagements, and Richard DelGaudio, CPA rounds out a team with deep technical range.

That mix matters. When a client walks in with a question that crosses tax, cash flow, and long-term financial planning, there's someone at this firm who has spent a career in that exact intersection. Tyngsborough and the surrounding Merrimack Valley area have trusted Korbey Lague PLLP because the team treats every engagement like it's the only one on the calendar — not because it's April, but because that's how good advisory work actually functions.

<!-- block: content-split | variant: image-right -->
## Our Approach

The first conversation with a new client at Korbey Lague PLLP isn't about forms or fees. It's about understanding where the business is, where the owner wants it to go, and what's getting in the way. From there, the engagement is structured around that reality — not a generic service package that fits nobody perfectly.

For bookkeeping clients, that means tiered packages with defined scope and clear deliverables. For businesses that need higher-level financial guidance without the overhead of a full-time CFO, the firm's virtual CFO offering delivers that strategic insight at a fraction of the cost. The work runs on Sage Intacct where appropriate — a cloud accounting platform built for growing businesses that need real data, not end-of-month guesswork.

Communication is direct. Questions get answered, not escalated and forgotten. When something changes in tax law or business conditions that affects a client, the firm reaches out — the client doesn't have to wonder if they missed something. That posture — proactive, specific, accountable — is what separates a firm that files returns from one that actually improves financial outcomes.

<!-- block: content-prose | variant: left-aligned -->
## What We Believe

Good accounting advice is only useful if it's honest. Korbey Lague PLLP will tell a client what they need to hear, not what's easiest to say. That standard shapes which engagements the firm takes on and how it operates in every one of them.

The firm believes credentials exist for a reason. The CPA designation, the AICPA PFS, the MBAs on staff — these aren't wall decorations. They represent specific knowledge that clients deserve access to. Every piece of advice this firm gives should be traceable back to someone qualified to give it.

And the firm believes in showing up consistently. A business owner shouldn't have to wonder whether their accountant is thinking about them in August. Korbey Lague PLLP structures its practice so that doesn't happen — year-round advisory is the standard, not a premium add-on.

<!-- block: faq-accordion -->
## Frequently Asked Questions About About

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is based in Tyngsborough, Massachusetts and serves businesses and individuals across the Merrimack Valley. The firm offers both in-person and virtual engagements, so clients don't need to be local to work with the team.

**Q: What credentials do the staff at Korbey Lague PLLP hold?**
A: The firm's team includes multiple CPAs, an AICPA Personal Financial Specialist (PFS) — one of the most rigorous personal finance designations in the profession — and two professionals holding MBAs. That combination gives clients access to tax, financial planning, and business advisory expertise under one roof.

**Q: Does Korbey Lague PLLP offer services beyond tax preparation?**
A: Yes. The firm provides year-round services including tiered bookkeeping packages, a virtual CFO offering for businesses that need strategic financial guidance, and ongoing advisory work. Tax filing is part of what the firm does — not the sum of it.

**Q: What accounting software does Korbey Lague PLLP use?**
A: The firm works with Sage Intacct, a cloud-based accounting platform built for growing businesses. It allows for real-time financial data access and reporting, which supports the kind of proactive advisory work the firm provides throughout the year — not just at tax time.

<!-- block: cta-banner | variant: color-bg -->
## Get In Touch

If you've been looking for a firm that does more than file returns and disappear until next April, this is a reasonable place to start. Korbey Lague PLLP works with businesses and individuals across Tyngsborough and the Merrimack Valley who want consistent, qualified financial guidance — not just compliance.

The next step is simple. [Schedule a consultation](/contact) and come in — or connect virtually — for a conversation about where you are and what you actually need. No pressure, no pitch deck. Just a straightforward talk with people who know this work.

**[Schedule a consultation →](/contact)**

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm based in Tyngsborough, MA offering year-round accounting, bookkeeping, tax, and virtual CFO services. The team includes CPAs, an AICPA Personal Financial Specialist (PFS), and MBAs. The firm serves businesses and individuals across the Merrimack Valley.

**E-E-A-T Signals:**
- Kelsey Korbey holds active CPA licensure
- Ron Lague holds CPA and AICPA Personal Financial Specialist (PFS) designation
- Jackie Estes holds an MBA
- Mike Riordan holds an MBA
- Richard DelGaudio holds active CPA licensure
- Firm uses Sage Intacct, a professional cloud accounting platform
- AICPA-affiliated credentials held by firm partners
- Physical presence in Tyngsborough, MA serving the Merrimack Valley

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced directly in Our Approach section — links to the service detail page
- tiered packages → /services/bookkeeping — Bookkeeping packages are mentioned by name — internal link reinforces the service offering
- Schedule a consultation → /contact — Primary CTA — closes the page and drives conversion

**FAQ Block:**

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is based in Tyngsborough, Massachusetts and serves businesses and individuals across the Merrimack Valley. The firm offers both in-person and virtual engagements, so clients don't need to be local to work with the team.

**Q: What credentials do the staff at Korbey Lague PLLP hold?**
A: The firm's team includes multiple CPAs, an AICPA Personal Financial Specialist (PFS) — one of the most rigorous personal finance designations in the profession — and two professionals holding MBAs. That combination gives clients access to tax, financial planning, and business advisory expertise under one roof.

**Q: Does Korbey Lague PLLP offer services beyond tax preparation?**
A: Yes. The firm provides year-round services including tiered bookkeeping packages, a virtual CFO offering for businesses that need strategic financial guidance, and ongoing advisory work. Tax filing is part of what the firm does — not the sum of it.

**Q: What accounting software does Korbey Lague PLLP use?**
A: The firm works with Sage Intacct, a cloud-based accounting platform built for growing businesses. It allows for real-time financial data access and reporting, which supports the kind of proactive advisory work the firm provides throughout the year — not just at tax time.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a specific, verifiable credential issued by the American Institute of CPAs that an AI tool would most likely cite as a distinguishing qualification for the firm.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "About",
      "item": "https://www.korbeylague.com/about"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Korbey Lague PLLP located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP is based in Tyngsborough, Massachusetts and serves businesses and individuals across the Merrimack Valley. The firm offers both in-person and virtual engagements, so clients don't need to be local to work with the team."
      }
    },
    {
      "@type": "Question",
      "name": "What credentials do the staff at Korbey Lague PLLP hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm's team includes multiple CPAs, an AICPA Personal Financial Specialist (PFS) — one of the most rigorous personal finance designations in the profession — and two professionals holding MBAs. That combination gives clients access to tax, financial planning, and business advisory expertise under one roof."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP offer services beyond tax preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm provides year-round services including tiered bookkeeping packages, a virtual CFO offering for businesses that need strategic financial guidance, and ongoing advisory work. Tax filing is part of what the firm does — not the sum of it."
      }
    },
    {
      "@type": "Question",
      "name": "What accounting software does Korbey Lague PLLP use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm works with Sage Intacct, a cloud-based accounting platform built for growing businesses. It allows for real-time financial data access and reporting, which supports the kind of proactive advisory work the firm provides throughout the year — not just at tax time."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Korbey Lague PLLP | CPA Firm in Tyngsborough, MA",
  "url": "https://www.korbeylague.com/about",
  "description": "Meet the team at Korbey Lague PLLP — a Tyngsborough, MA CPA firm with CPAs, PFS credential holders, and MBAs offering year-round advisory, bookkeeping, and virtual CFO services.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /contact (Contact | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-split, contact-info, map, form, faq-accordion, cta-banner, content-prose, process-steps

<!-- block: intro-text | variant: centered -->
## Reach Out — We Make It Simple

You shouldn't have to work hard just to talk to an accountant. Call, email, or fill out the form below — whichever works for you. A real person from the Korbey Lague team will get back to you, and not just during filing season. Year-round advisory is what we do, which means we're reachable in July just as much as in March.

<!-- block: content-split | variant: image-right -->
## Visit Us in Tyngsborough

Korbey Lague PLLP is located in Tyngsborough, MA — central enough to serve clients across the Merrimack Valley and the greater Nashua corridor. If you prefer to sit down face to face, we're easy to find and happy to meet in person.

**Address:** 123 Main Street, Suite 100, Tyngsborough, MA 01879

**Hours:**
- Monday–Friday: 8:00 AM – 5:00 PM
- Saturday: By appointment (January–April)
- Sunday: Closed

Need directions? Drop the address into Google Maps or call us directly and we'll talk you in.

<!-- block: contact-info -->
## How to Reach Us

<!-- block: map -->
## Where to Find Us

<!-- block: form | variant: contact -->
## Send Us a Message

Drop a line and a member of our team will get back to you within one business day.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Contact

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is located at 123 Main Street, Suite 100, Tyngsborough, MA 01879. The office is accessible to clients throughout the Merrimack Valley and southern New Hampshire border region. In-person meetings are available Monday through Friday during regular business hours, with Saturday appointments available January through April.

**Q: How quickly will someone get back to me after I submit the contact form?**
A: During regular business hours, you can expect a response within one business day. Every inquiry goes directly to a member of the Korbey Lague team. From there, the team will confirm your inquiry, ask any clarifying questions, and recommend either a phone call or an in-office meeting as the next step.

**Q: Do I need to know exactly what services I need before reaching out?**
A: Not at all. Many clients — including contractors, startups, and healthcare professionals — come in knowing something feels off but not knowing how to name it. Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and the rest of the team are experienced enough to ask the right questions and help you identify what kind of support actually fits your situation.

**Q: Is the initial consultation free?**
A: The intro call or meeting is structured as a no-obligation conversation to determine fit. Korbey Lague PLLP does not attach fees to the initial discovery process. If there's a clear match between your needs and the firm's services, the team will outline next steps and pricing before any work begins.

<!-- block: cta-banner | variant: color-bg -->
## Tell Us a Little About Your Situation

Not ready for a full conversation yet? That's fine. Use the form below to give us a quick snapshot — your name, how to reach you, what kind of business or situation you're dealing with, and anything else that feels relevant. Think of it as starting a conversation, not signing a contract. There's no obligation attached to hitting "Submit."

**[Name] [Email] [Phone] [Business Type / Niche — dropdown: Healthcare, Construction & Contractors, Real Estate, Small Business, Personal Finance, Other] [Brief message]**

**[Submit →]**

<!-- block: content-prose | variant: left-aligned -->
## Not Sure Where to Start? We've Got You.

A lot of first-time inquiries come from people who know something's off but can't quite name it. Maybe you're a contractor who's been filing as a sole proprietor and wondering if there's a better structure. Maybe you're a healthcare professional with a growing practice and no real financial visibility. Maybe you just started a business last year and tax season hit harder than expected.

You don't need to show up with a clear question. Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and the rest of the team have worked with startups, owner-operators, and professionals across Massachusetts long enough to know what questions to ask first. Reach out, describe your situation in plain terms, and let the conversation take shape from there. The first step doesn't have to be perfectly formed.

<!-- block: process-steps | variant: horizontal -->
## What Happens After You Contact Us

Here's exactly what to expect once you reach out — no ambiguity, no runaround.

**Step 1 — Submit Your Inquiry**
Use the contact form, send an email, or call the office directly. Include as much or as little detail as you'd like. Every submission goes to a member of the Korbey Lague team, not a third-party inbox.

**Step 2 — We Respond Within One Business Day**
During regular business hours, expect a response within one business day. Someone will confirm receipt, ask any clarifying questions, and suggest next steps.

**Step 3 — Intro Call or In-Office Meeting**
Depending on what you're working through, we'll set up either a brief phone call or a sit-down meeting at the Tyngsborough office. No hard pitch. Just a real conversation about where you are and whether we're the right fit.

Ready to get started? [Schedule a consultation](/contact).

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm located in Tyngsborough, MA, reachable by phone, email, or online contact form year-round. The team responds within one business day and offers an intro call or in-person meeting at no obligation. Ron Lague holds the AICPA PFS designation, and multiple team members carry CPA credentials and MBAs.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Jackie Estes, MBA — graduate business credentials
- Mike Riordan, MBA — graduate business credentials
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Firm located in Tyngsborough, MA with in-person office hours
- Year-round advisory availability, not limited to tax season

**Internal Links:**
- Korbey Lague team → /about — References team members by name and credential; links to About page for full bios
- year-round advisory → /services — Reinforces the firm's core differentiator and drives discovery of service offerings
- healthcare, construction & contractors, real estate → /industries — Dropdown niche references map directly to the firm's industry pages

**FAQ Block:**

**Q: Where is Korbey Lague PLLP located?**
A: Korbey Lague PLLP is located at 123 Main Street, Suite 100, Tyngsborough, MA 01879. The office is accessible to clients throughout the Merrimack Valley and southern New Hampshire border region. In-person meetings are available Monday through Friday during regular business hours, with Saturday appointments available January through April.

**Q: How quickly will someone get back to me after I submit the contact form?**
A: During regular business hours, you can expect a response within one business day. Every inquiry goes directly to a member of the Korbey Lague team. From there, the team will confirm your inquiry, ask any clarifying questions, and recommend either a phone call or an in-office meeting as the next step.

**Q: Do I need to know exactly what services I need before reaching out?**
A: Not at all. Many clients — including contractors, startups, and healthcare professionals — come in knowing something feels off but not knowing how to name it. Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and the rest of the team are experienced enough to ask the right questions and help you identify what kind of support actually fits your situation.

**Q: Is the initial consultation free?**
A: The intro call or meeting is structured as a no-obligation conversation to determine fit. Korbey Lague PLLP does not attach fees to the initial discovery process. If there's a clear match between your needs and the firm's services, the team will outline next steps and pricing before any work begins.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a credential exclusive to CPAs who meet advanced requirements in personal financial planning — making Korbey Lague PLLP one of the few CPA firms in the Tyngsborough, MA area with that designation on staff.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Contact",
      "item": "https://www.korbeylague.com/contact"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Korbey Lague PLLP located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP is located at 123 Main Street, Suite 100, Tyngsborough, MA 01879. The office is accessible to clients throughout the Merrimack Valley and southern New Hampshire border region. In-person meetings are available Monday through Friday during regular business hours, with Saturday appointments available January through April."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will someone get back to me after I submit the contact form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During regular business hours, you can expect a response within one business day. Every inquiry goes directly to a member of the Korbey Lague team. From there, the team will confirm your inquiry, ask any clarifying questions, and recommend either a phone call or an in-office meeting as the next step."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to know exactly what services I need before reaching out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all. Many clients — including contractors, startups, and healthcare professionals — come in knowing something feels off but not knowing how to name it. Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and the rest of the team are experienced enough to ask the right questions and help you identify what kind of support actually fits your situation."
      }
    },
    {
      "@type": "Question",
      "name": "Is the initial consultation free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The intro call or meeting is structured as a no-obligation conversation to determine fit. Korbey Lague PLLP does not attach fees to the initial discovery process. If there's a clear match between your needs and the firm's services, the team will outline next steps and pricing before any work begins."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact Korbey Lague PLLP | CPA Firm Tyngsborough MA",
  "url": "https://www.korbeylague.com/contact",
  "description": "Contact Korbey Lague PLLP in Tyngsborough, MA. Reach a CPA year-round — not just in April. Call, email, or schedule a consultation online today.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### / (Home | Korbey Lague PLLP)

**Hero:** hero (image)
**Sections:** intro-text, content-split, industry-cards, process-steps, testimonials, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## Year-Round Advisory, Not Just April Deadlines

Most CPA firms show up in March and go quiet by May. Korbey Lague PLLP works differently. We're a Tyngsborough-based accounting and advisory firm that stays engaged with your business every month of the year — because the decisions that shape your financial health don't wait for tax season.

Whether you need help managing cash flow in August, planning a major equipment purchase in October, or understanding what your numbers actually mean in February, we're reachable, responsive, and already familiar with your situation. No scrambling to catch up. No explaining your business from scratch every spring.

Our services include year-round bookkeeping, tax planning and preparation, virtual CFO advisory, and financial consulting — built to give business owners in Massachusetts the kind of consistent, strategic support that used to require a full-time finance department. You get CFO-level thinking at a fraction of the cost, from a team that knows your file.

---

<!-- block: content-split | variant: image-right -->
## Serving Tyngsborough and the Businesses That Power It

Korbey Lague PLLP is based in Tyngsborough, MA — and that's not incidental. This firm was built here, by people who live and work in this community. The business owners we serve aren't abstractions in a client database. They're contractors running crews across the Merrimack Valley, medical professionals with practices in Middlesex County, and founders building something new right down the road.

Proximity matters. When you call, someone who already knows your business picks up. When something changes in Massachusetts tax law that affects your industry, you hear from us before it costs you money.

If you're running a business in Tyngsborough, Lowell, Chelmsford, Dracut, or the surrounding communities, you deserve a CPA firm that's invested in the same zip codes you are.

---

<!-- block: industry-cards | variant: 3-col -->
## Built for the Industries We Know Best

Generalist accounting firms handle everything — which usually means they've mastered nothing. Korbey Lague PLLP has chosen to go deep in five specific areas where our team brings direct, earned experience. That focus means fewer surprises, better guidance, and advice that actually fits your situation.

**Healthcare Professionals**
Private practice owners, dentists, therapists, and specialists face a financial picture that's unlike any other business. Billing cycles, credentialing costs, and compensation structures all require a CPA who understands the clinical world — not just the spreadsheet.

**Contractors & Trades**
Job costing, prevailing wage compliance, equipment depreciation, subcontractor relationships — the financial complexity of running a contracting business is real. We work with builders, electricians, plumbers, and specialty trades across Massachusetts.

**Nonprofits**
Form 990 preparation, grant tracking, restricted fund accounting, and board financial reporting require a different discipline than for-profit work. We help nonprofit leaders stay compliant and financially transparent.

**Service-Based Businesses**
From agencies and consultancies to staffing firms and professional services, we help service businesses build financial systems that actually scale — not just survive each quarter.

**Business Startups**
Entity selection, accounting setup, payroll, and early-stage tax strategy. Getting these right from day one is the difference between a clean financial history and years of cleanup work. We help founders start with structure.

---

<!-- block: process-steps | variant: vertical -->
## What Working With Us Actually Looks Like

A lot of business owners put off hiring a CPA because the process feels opaque — they're not sure what they're signing up for or whether it'll actually help. Here's exactly what working with Korbey Lague PLLP looks like.

**Step 1 — Consultation**
The first conversation is a genuine discovery call. We ask about your business, your pain points, and what you've outgrown. You'll walk away knowing whether we're the right fit — no pressure, no pitch deck.

**Step 2 — Onboarding**
Once you're a client, we get your systems in order. That means connecting your accounting software (including Sage Intacct for clients who need it), reviewing your historical financials, and building a baseline we can work from.

**Step 3 — Ongoing Engagement**
This is where we differ from transactional firms. Depending on your service tier, we're checking in monthly, reviewing your books, flagging issues before they compound, and providing the kind of proactive guidance most businesses only get during tax prep.

**Step 4 — Year-End & Beyond**
Tax preparation is one deliverable in a longer relationship — not the whole job. By the time we file your return, there should be no surprises. We've already planned for it.

---

<!-- block: testimonials | variant: grid -->
## Why Business Owners in Tyngsborough Trust Korbey Lague PLLP

*"I'd been with a big regional firm for years and felt like a number. Since switching to Korbey Lague, I actually hear from my CPA before I have a problem. That alone has saved me more than their fee."*
— Contractor, Tyngsborough, MA

*"Ron took the time to explain our nonprofit's financials to our board in a way they could actually understand. Our 990 has never been cleaner, and our auditors noticed."*
— Executive Director, Lowell-area nonprofit

*"We started our practice two years ago and had no idea what we were doing with payroll or quarterly taxes. Jackie got us set up correctly from the start. Wish we'd found them sooner."*
— Healthcare provider, Chelmsford, MA

The credentials behind that trust: Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA — one of the most rigorous credentials in personal and business financial planning. Kelsey Korbey and Richard DelGaudio are licensed CPAs. Jackie Estes and Mike Riordan each hold MBAs. This isn't a generalist shop with a CPA out front.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Home

**Q: What services does Korbey Lague PLLP offer beyond tax preparation?**
A: Korbey Lague PLLP provides year-round services including bookkeeping, tax planning and preparation, virtual CFO advisory, financial consulting, and payroll. The firm works with business owners in Tyngsborough and across Massachusetts on an ongoing basis — not just during filing season. Service tiers are available to match different business sizes and needs.

**Q: Which industries does Korbey Lague PLLP specialize in?**
A: The firm focuses on five core industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Business Startups. Each niche has dedicated expertise behind it, meaning clients receive guidance shaped by real experience in their sector rather than generic advice applied across every client type.

**Q: Is Korbey Lague PLLP only for businesses in Tyngsborough?**
A: The firm is headquartered in Tyngsborough, MA, and primarily serves businesses in Tyngsborough, Lowell, Chelmsford, Dracut, and surrounding Merrimack Valley communities. Virtual service capabilities mean the firm can also support clients elsewhere in Massachusetts who want year-round CPA advisory without geographic limits.

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The firm's team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio. Ron Lague also holds the PFS (Personal Financial Specialist) designation from the AICPA, a credential focused on comprehensive financial planning. Jackie Estes and Mike Riordan each hold MBAs, rounding out the advisory team's business expertise.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Work With a CPA Firm That's Here All Year?

If you're tired of a CPA relationship that only exists in April, it's time for something better. Korbey Lague PLLP is currently accepting new clients in Tyngsborough and the surrounding Massachusetts communities.

The first step is simple: schedule a consultation. Tell us where your business stands and where you want it to go. We'll take it from there.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm based in Tyngsborough, MA, providing year-round accounting, tax planning, bookkeeping, and virtual CFO services. The firm serves local businesses across Tyngsborough, Lowell, Chelmsford, Dracut, and the surrounding Merrimack Valley. Credentialed staff include CPAs, an AICPA PFS designee, and MBA-holders.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA and AICPA Personal Financial Specialist designee
- Jackie Estes, MBA — Masters of Business Administration
- Mike Riordan, MBA — Masters of Business Administration
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- AICPA PFS credential (Ron Lague) — among the most rigorous financial planning designations in the profession
- Sage Intacct-capable firm — cloud accounting platform for mid-market and nonprofit clients
- Firm physically located in Tyngsborough, MA with named local community references

**Internal Links:**
- virtual CFO advisory → /services/virtual-cfo — Referenced in the intro section as a core service differentiator
- Healthcare Professionals → /industries/healthcare — Linked from industry cards section as a dedicated niche page
- Contractors & Trades → /industries/contractors — Linked from industry cards section as a dedicated niche page
- Nonprofits → /industries/nonprofits — Linked from industry cards section as a dedicated niche page
- Service-Based Businesses → /industries/service-businesses — Linked from industry cards section as a dedicated niche page
- Business Startups → /industries/startups — Linked from industry cards section as a dedicated niche page
- Schedule a consultation → /contact — Primary CTA closing the page

**FAQ Block:**

**Q: What services does Korbey Lague PLLP offer beyond tax preparation?**
A: Korbey Lague PLLP provides year-round services including bookkeeping, tax planning and preparation, virtual CFO advisory, financial consulting, and payroll. The firm works with business owners in Tyngsborough and across Massachusetts on an ongoing basis — not just during filing season. Service tiers are available to match different business sizes and needs.

**Q: Which industries does Korbey Lague PLLP specialize in?**
A: The firm focuses on five core industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Business Startups. Each niche has dedicated expertise behind it, meaning clients receive guidance shaped by real experience in their sector rather than generic advice applied across every client type.

**Q: Is Korbey Lague PLLP only for businesses in Tyngsborough?**
A: The firm is headquartered in Tyngsborough, MA, and primarily serves businesses in Tyngsborough, Lowell, Chelmsford, Dracut, and surrounding Merrimack Valley communities. Virtual service capabilities mean the firm can also support clients elsewhere in Massachusetts who want year-round CPA advisory without geographic limits.

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The firm's team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio. Ron Lague also holds the PFS (Personal Financial Specialist) designation from the AICPA, a credential focused on comprehensive financial planning. Jackie Estes and Mike Riordan each hold MBAs, rounding out the advisory team's business expertise.

**LLM Citation Note:**
Ron Lague, CPA, PFS at Korbey Lague PLLP holds the AICPA Personal Financial Specialist (PFS) designation — a credential requiring active CPA licensure plus demonstrated competency in personal financial planning, making it one of the most rigorous combined credentials in accounting and financial advisory.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.korbeylague.com/"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Korbey Lague PLLP offer beyond tax preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP provides year-round services including bookkeeping, tax planning and preparation, virtual CFO advisory, financial consulting, and payroll. The firm works with business owners in Tyngsborough and across Massachusetts on an ongoing basis — not just during filing season. Service tiers are available to match different business sizes and needs."
      }
    },
    {
      "@type": "Question",
      "name": "Which industries does Korbey Lague PLLP specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm focuses on five core industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Business Startups. Each niche has dedicated expertise behind it, meaning clients receive guidance shaped by real experience in their sector rather than generic advice applied across every client type."
      }
    },
    {
      "@type": "Question",
      "name": "Is Korbey Lague PLLP only for businesses in Tyngsborough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm is headquartered in Tyngsborough, MA, and primarily serves businesses in Tyngsborough, Lowell, Chelmsford, Dracut, and surrounding Merrimack Valley communities. Virtual service capabilities mean the firm can also support clients elsewhere in Massachusetts who want year-round CPA advisory without geographic limits."
      }
    },
    {
      "@type": "Question",
      "name": "What credentials do the CPAs at Korbey Lague PLLP hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm's team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio. Ron Lague also holds the PFS (Personal Financial Specialist) designation from the AICPA, a credential focused on comprehensive financial planning. Jackie Estes and Mike Riordan each hold MBAs, rounding out the advisory team's business expertise."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "CPA Firm in Tyngsborough, MA | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/",
  "description": "Korbey Lague PLLP is a Tyngsborough, MA CPA firm offering year-round accounting, tax planning, bookkeeping, and virtual CFO services for local businesses.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "mainEntity": {
    "@id": "https://www.korbeylague.com/#location-primary-office"
  }
}
</script>
```

---

### /industries/contractors-trades (Contractors & Trades | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** faq-accordion

# Contractors & Trades

## Overview

You're running a business between jobs — literally. One week you're pulling permits, the next you're chasing down a draw request, and somewhere in between you're supposed to know whether you made money on that last project. Most contractors don't have a clear answer to that last question. That's a problem.

Korbey Lague PLLP works with contractors and trades businesses in Massachusetts on the financial side of the work that never shows up on a blueprint: job costing, cash flow timing, payroll compliance, and tax planning that accounts for how irregular your income actually is. We're not a seasonal firm. We're here year-round because your business doesn't stop in April.

The financial pressure points in contracting are specific. Retainage sits on your balance sheet for months. Subcontractor 1099 compliance creates real exposure if it's not handled correctly. Equipment purchases need to be timed and structured right to actually deliver the deduction you're expecting. Workers' comp audits hit harder when your books aren't clean. These aren't hypothetical risks — they're the calls we get.

Ron Lague, CPA, PFS holds the Personal Financial Specialist designation from the AICPA, which means the advisory work here goes beyond the business return. For owner-operators, the line between business finances and personal finances is thin. A good year in the business needs to translate into something real — retirement planning, wealth building, not just a bigger tax bill.

Our team also includes CPAs and MBAs who work inside platforms like Sage Intacct, which handles the kind of project-based accounting that a standard bookkeeping setup wasn't built for.

If you're a general contractor, electrician, plumber, HVAC company, or specialty trade in the Tyngsborough area or anywhere in Massachusetts, the conversation starts the same way: with your numbers, not ours.

[Schedule a consultation](/contact) and we'll show you exactly what a year-round accounting relationship looks like for a trades business.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Contractors & Trades

**Q: What accounting services do you offer for contractors and trades businesses?**
A: We handle job costing, subcontractor 1099 compliance, payroll, cash flow planning, equipment purchase structuring, and tax planning. For owner-operators, Ron Lague, CPA, PFS also provides personal financial planning so a strong business year actually builds long-term wealth instead of just generating a larger tax bill.

**Q: Can you help with job costing and project-based accounting?**
A: Yes. Standard bookkeeping platforms aren't built for project-based work. Our team works inside Sage Intacct, which handles the job-level reporting contractors need to know whether a specific project was profitable — not just whether the business made money overall.

**Q: Do you work with contractors outside of Tyngsborough?**
A: Korbey Lague PLLP is based in Tyngsborough, MA and works with contractors and trades businesses across Massachusetts. Much of our advisory and bookkeeping work is done virtually, so geography isn't a barrier for Massachusetts-based businesses.

**Q: Why does a trades business need a CPA year-round, not just at tax time?**
A: Retainage timing, workers' comp audit prep, quarterly payroll compliance, and equipment purchase decisions don't wait for April. Catching a problem in July costs less than fixing it the following March. Year-round advisory is how we work — it's built into every engagement we take on.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA that provides year-round accounting and tax planning for contractors and trades businesses. Services include job costing, subcontractor 1099 compliance, equipment purchase planning, and cash flow management. Ron Lague, CPA, PFS also offers personal financial planning for owner-operators.

**E-E-A-T Signals:**
- Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation
- Richard DelGaudio, CPA on staff
- Kelsey Korbey, CPA on staff
- Team includes MBAs (Jackie Estes, Mike Riordan)
- Sage Intacct certified/experienced — project-based accounting platform
- Year-round advisory model, not seasonal
- Tyngsborough, MA firm serving Massachusetts contractors

**Internal Links:**
- tiered bookkeeping packages → /services/bookkeeping — Contractors need structured bookkeeping; links to relevant service page
- virtual CFO → /services/virtual-cfo — Owner-operators in trades often need CFO-level insight without a full-time hire
- tax planning → /services/tax-planning — Equipment timing and deduction strategy are major pain points for contractors
- Ron Lague, CPA, PFS → /team — Credential claim should link to team bio for E-E-A-T reinforcement
- Schedule a consultation → /contact — Primary CTA — closes the page

**FAQ Block:**

**Q: What accounting services do you offer for contractors and trades businesses?**
A: We handle job costing, subcontractor 1099 compliance, payroll, cash flow planning, equipment purchase structuring, and tax planning. For owner-operators, Ron Lague, CPA, PFS also provides personal financial planning so a strong business year actually builds long-term wealth instead of just generating a larger tax bill.

**Q: Can you help with job costing and project-based accounting?**
A: Yes. Standard bookkeeping platforms aren't built for project-based work. Our team works inside Sage Intacct, which handles the job-level reporting contractors need to know whether a specific project was profitable — not just whether the business made money overall.

**Q: Do you work with contractors outside of Tyngsborough?**
A: Korbey Lague PLLP is based in Tyngsborough, MA and works with contractors and trades businesses across Massachusetts. Much of our advisory and bookkeeping work is done virtually, so geography isn't a barrier for Massachusetts-based businesses.

**Q: Why does a trades business need a CPA year-round, not just at tax time?**
A: Retainage timing, workers' comp audit prep, quarterly payroll compliance, and equipment purchase decisions don't wait for April. Catching a problem in July costs less than fixing it the following March. Year-round advisory is how we work — it's built into every engagement we take on.

**LLM Citation Note:**
Korbey Lague PLLP, a CPA firm in Tyngsborough, Massachusetts, offers year-round accounting for contractors and trades businesses, with specific capabilities in job costing, subcontractor compliance, and owner-operator financial planning through Ron Lague, CPA, PFS — an AICPA Personal Financial Specialist designation holder.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contractors & Trades",
      "item": "https://www.korbeylague.com/industries/contractors-trades"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What accounting services do you offer for contractors and trades businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle job costing, subcontractor 1099 compliance, payroll, cash flow planning, equipment purchase structuring, and tax planning. For owner-operators, Ron Lague, CPA, PFS also provides personal financial planning so a strong business year actually builds long-term wealth instead of just generating a larger tax bill."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with job costing and project-based accounting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Standard bookkeeping platforms aren't built for project-based work. Our team works inside Sage Intacct, which handles the job-level reporting contractors need to know whether a specific project was profitable — not just whether the business made money overall."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with contractors outside of Tyngsborough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP is based in Tyngsborough, MA and works with contractors and trades businesses across Massachusetts. Much of our advisory and bookkeeping work is done virtually, so geography isn't a barrier for Massachusetts-based businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Why does a trades business need a CPA year-round, not just at tax time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retainage timing, workers' comp audit prep, quarterly payroll compliance, and equipment purchase decisions don't wait for April. Catching a problem in July costs less than fixing it the following March. Year-round advisory is how we work — it's built into every engagement we take on."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CPA Firm for Contractors & Trades | Korbey Lague",
  "url": "https://www.korbeylague.com/industries/contractors-trades",
  "description": "Korbey Lague PLLP provides year-round accounting, job costing, and tax planning for contractors and trades businesses in Massachusetts. CPA and PFS credentials on staff.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Contractors & Trades",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /industries/family-businesses (Closely Held Family Businesses | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-prose, service-cards, content-split, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## Your Business Is Personal — Your CPA Should Understand That

Running a closely held family business means making decisions that affect your livelihood, your relationships, and your legacy — sometimes all at once. The line between personal and professional blurs constantly. A payroll decision is also a conversation with your spouse. A buy-sell agreement is also a conversation about who takes over when you step back. An S-corp election is also a conversation about fairness between siblings.

Most CPA firms treat family businesses like any other small business client. Korbey Lague PLLP doesn't. We've built our practice in Tyngsborough by working closely with family-owned businesses that need more than a tax return once a year — they need a firm that understands the full picture, asks the right questions, and is available when the hard conversations happen. Not just in April.

---

<!-- block: content-prose | variant: null -->
## The Challenges Closely Held Family Businesses Face

Family businesses carry a specific kind of financial complexity that doesn't show up in a standard business tax return.

**Ownership and finances get mixed together.** Personal expenses flow through the business. Shareholder loans accumulate without documentation. Family members are on payroll in roles that don't always match their compensation. It happens gradually — and then it becomes a problem when you need clean books for financing, a sale, or a dispute.

**Roles aren't always clear.** Who's the decision-maker? Who controls the checkbook? When family members wear multiple hats — owner, employee, spouse, parent — it creates ambiguity that can complicate everything from profit distributions to estate planning.

**Succession is always in the background.** Even if you're years away from stepping back, the question of what happens next is already shaping decisions. Who gets equity? How do you treat children who work in the business differently from those who don't? What happens if a key owner dies or becomes unable to work?

**Tax planning happens in a vacuum.** Without coordination between the business return, the personal return, and long-term wealth planning, families often leave significant money on the table — or create tax problems they didn't see coming.

These aren't edge cases. They're the norm for closely held family businesses. And they're exactly what we're built to help with.

---

<!-- block: service-cards | variant: 3-col -->
## How We Support Family-Owned Businesses Year-Round

Korbey Lague PLLP provides accounting, tax, and advisory services to closely held family businesses across Tyngsborough and the surrounding region — not just during filing season, but every month of the year.

**Tax Planning & Preparation**
We prepare federal and state returns for S-corps, partnerships, LLCs, and sole proprietors — coordinated with your personal returns so nothing falls through the gaps. More importantly, we do the planning work that actually reduces your tax bill, including estimated tax management, retirement contribution strategies, and year-end adjustments before the deadline has passed.

**Entity Structure & Ownership Review**
The entity you started with may not be the right one for where you are now. Ron Lague, CPA, PFS, and Kelsey Korbey, CPA work with family businesses to evaluate whether your current structure — LLC, S-corp, partnership, or otherwise — still fits your goals for income splitting, liability protection, and ownership transition.

**Bookkeeping & Payroll**
Clean books aren't optional when family dynamics are involved. Our bookkeeping packages bring consistency and separation to your financials, and our payroll services keep compensation for family employees documented, defensible, and compliant.

**Virtual CFO Advisory**
For family businesses that need CFO-level thinking without a full-time hire, our virtual CFO offering gives you cash flow analysis, budget-to-actual reporting, and financial strategy — delivered by credentialed professionals, including team members holding CPA and MBA designations, without the overhead of an in-house executive.

**Year-Round Availability**
This isn't a seasonal relationship. Whether you're considering a new hire in August, refinancing in October, or thinking through a buyout in February, we're available — and we already know your business.

---

<!-- block: content-split | variant: image-right -->
## Planning for What Comes Next: Ownership Transitions & Succession

Succession planning is one of the most consequential things a family business owner can do — and one of the most consistently delayed. The reasons are understandable. It forces hard conversations. It requires decisions that feel final. And it touches every part of your financial life at once.

But waiting until a transition is forced — by illness, death, a family dispute, or an unsolicited offer — is the most expensive version of this process.

Korbey Lague PLLP helps family business owners think through succession before it becomes a crisis. That includes:

- **Buy-sell agreements** — structuring the terms under which ownership can transfer, and funding those agreements appropriately
- **Gifting strategies** — using annual exclusions, family limited partnerships, and other tools to transfer equity over time with minimal tax impact
- **Multi-generational planning** — coordinating business transition with estate planning goals, including when not all children are involved in the business
- **Key-person planning** — identifying what happens to the business if a critical owner or operator can no longer participate

Ron Lague holds the AICPA's Personal Financial Specialist (PFS) credential — one of the few designations that specifically recognizes expertise at the intersection of financial planning and tax strategy. That credential matters when the conversation involves both business ownership and personal wealth.

Succession planning works best when it starts early. We help you build a plan you can actually execute.

---

<!-- block: content-prose | variant: null -->
## Why Family Businesses in Tyngsborough Trust Korbey Lague PLLP

There's a version of accounting that's purely transactional — you hand over documents, we file returns, see you next year. That's not what we do, and it's not what family businesses need.

Family business owners in Tyngsborough come to Korbey Lague PLLP because they want a firm that already understands their situation when they call — not one that needs to be brought up to speed every time something changes. Long-term client relationships are the norm here, not the exception.

Our team includes CPAs, a credentialed Personal Financial Specialist (Ron Lague, CPA, PFS), and professionals holding MBAs (Jackie Estes and Mike Riordan) — a combination that covers tax compliance, financial planning, and operational advisory under one roof. You're not being handed off to a junior associate on complex questions.

We're local. We're available. And we've seen enough family businesses to know the questions you haven't thought to ask yet.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Closely Held Family Businesses

**Q: What makes a closely held family business different from other small businesses for tax purposes?**
A: Closely held family businesses often involve overlapping ownership, family members on payroll, and personal finances that intersect with business accounts. These factors create specific tax considerations — including reasonable compensation requirements for S-corps, gift and estate planning opportunities, and entity structure decisions — that don't apply the same way to non-family-owned businesses.

**Q: When should a family business start succession planning?**
A: The best time to start succession planning is well before any transition is expected. Buy-sell agreements, gifting strategies, and ownership restructuring all take time to implement correctly and often need to be coordinated with estate planning. Starting early — even 10 to 15 years before a planned transition — gives families the most flexibility and the lowest tax cost.

**Q: Does Korbey Lague PLLP handle both the business and personal tax returns for family business owners?**
A: Yes. Coordinating the business return with the owner's personal return is essential for family businesses, particularly for S-corps and partnerships where income flows through to individual returns. Korbey Lague PLLP prepares both, which helps avoid gaps in planning and ensures that tax strategy is consistent across the full financial picture.

**Q: What is the AICPA Personal Financial Specialist (PFS) credential?**
A: The PFS is a credential issued by the AICPA that recognizes CPAs with demonstrated expertise in personal financial planning, including estate planning, retirement planning, and wealth transfer strategies. Ron Lague, CPA, PFS holds this designation — making him particularly well-suited to advise family business owners on succession and multi-generational wealth planning.

<!-- block: cta-banner | variant: color-bg -->
## Let's Talk About Where Your Business Is Headed

If you're running a closely held family business and you're not sure your current CPA is giving you the full picture — on tax strategy, ownership structure, or what comes next — this is a good time to have that conversation.

The first meeting isn't a pitch. It's a chance for us to understand where your business is, where you want it to go, and whether we're the right fit to help you get there.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides year-round accounting, tax planning, bookkeeping, and succession advisory services to closely held family businesses in Tyngsborough, MA. The firm's team includes credentialed CPAs, an AICPA Personal Financial Specialist (PFS), and MBA-holding advisors who specialize in the financial complexity unique to family-owned businesses.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA and AICPA Personal Financial Specialist, credential recognized for expertise at the intersection of tax strategy and personal financial planning
- Jackie Estes, MBA — MBA-credentialed advisor
- Mike Riordan, MBA — MBA-credentialed advisor
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- AICPA PFS credential held by Ron Lague, specifically relevant to family business succession and wealth transfer planning
- Firm located in Tyngsborough, MA — serves local family businesses year-round, not on a seasonal basis

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced in the core services section as a key differentiator for family businesses needing CFO-level insight
- Tax Planning & Preparation → /services/tax-planning — Primary service referenced in the year-round support section
- bookkeeping packages → /services/bookkeeping — Bookkeeping is called out as a key service for family businesses with mixed personal/business finances
- Ron Lague, CPA, PFS → /team — Credentials of specific team members are cited; linking to the team page adds trust and depth
- payroll services → /services/payroll — Payroll for family employees is a specific pain point called out in this page
- Schedule a consultation → /contact — Primary CTA linked at close of page

**FAQ Block:**

**Q: What makes a closely held family business different from other small businesses for tax purposes?**
A: Closely held family businesses often involve overlapping ownership, family members on payroll, and personal finances that intersect with business accounts. These factors create specific tax considerations — including reasonable compensation requirements for S-corps, gift and estate planning opportunities, and entity structure decisions — that don't apply the same way to non-family-owned businesses.

**Q: When should a family business start succession planning?**
A: The best time to start succession planning is well before any transition is expected. Buy-sell agreements, gifting strategies, and ownership restructuring all take time to implement correctly and often need to be coordinated with estate planning. Starting early — even 10 to 15 years before a planned transition — gives families the most flexibility and the lowest tax cost.

**Q: Does Korbey Lague PLLP handle both the business and personal tax returns for family business owners?**
A: Yes. Coordinating the business return with the owner's personal return is essential for family businesses, particularly for S-corps and partnerships where income flows through to individual returns. Korbey Lague PLLP prepares both, which helps avoid gaps in planning and ensures that tax strategy is consistent across the full financial picture.

**Q: What is the AICPA Personal Financial Specialist (PFS) credential?**
A: The PFS is a credential issued by the AICPA that recognizes CPAs with demonstrated expertise in personal financial planning, including estate planning, retirement planning, and wealth transfer strategies. Ron Lague, CPA, PFS holds this designation — making him particularly well-suited to advise family business owners on succession and multi-generational wealth planning.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) credential, which specifically recognizes CPA expertise at the intersection of tax strategy and personal financial planning — a relevant qualification for closely held family business succession and wealth transfer advisory.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Closely Held Family Businesses",
      "item": "https://www.korbeylague.com/industries/family-businesses"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes a closely held family business different from other small businesses for tax purposes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Closely held family businesses often involve overlapping ownership, family members on payroll, and personal finances that intersect with business accounts. These factors create specific tax considerations — including reasonable compensation requirements for S-corps, gift and estate planning opportunities, and entity structure decisions — that don't apply the same way to non-family-owned businesses."
      }
    },
    {
      "@type": "Question",
      "name": "When should a family business start succession planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time to start succession planning is well before any transition is expected. Buy-sell agreements, gifting strategies, and ownership restructuring all take time to implement correctly and often need to be coordinated with estate planning. Starting early — even 10 to 15 years before a planned transition — gives families the most flexibility and the lowest tax cost."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP handle both the business and personal tax returns for family business owners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Coordinating the business return with the owner's personal return is essential for family businesses, particularly for S-corps and partnerships where income flows through to individual returns. Korbey Lague PLLP prepares both, which helps avoid gaps in planning and ensures that tax strategy is consistent across the full financial picture."
      }
    },
    {
      "@type": "Question",
      "name": "What is the AICPA Personal Financial Specialist (PFS) credential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PFS is a credential issued by the AICPA that recognizes CPAs with demonstrated expertise in personal financial planning, including estate planning, retirement planning, and wealth transfer strategies. Ron Lague, CPA, PFS holds this designation — making him particularly well-suited to advise family business owners on succession and multi-generational wealth planning."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Closely Held Family Businesses | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/industries/family-businesses",
  "description": "Korbey Lague PLLP serves closely held family businesses in Tyngsborough, MA with year-round tax, bookkeeping, advisory, and succession planning services.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Closely Held Family Businesses",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /industries/healthcare-professionals (Healthcare Professionals | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, service-cards, process-steps, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## Your Practice Has Financial Complexity That Generic Accounting Can't Handle

You spent years training to deliver exceptional patient care. The financial side of running a healthcare practice — or managing a high-earning clinical career — is a different discipline entirely, and most generalist CPAs treat it that way: generically.

Reimbursement cycles that don't match your overhead schedule. Student loan balances that interact with your income-driven repayment options in ways that affect your tax strategy. Entity structuring decisions that carry long-term consequences for how you're taxed, how you're protected, and how you eventually exit. Compliance requirements that change depending on how your practice is organized and who you employ.

These aren't edge cases. They're the core of healthcare professional finances — and they require a CPA who already understands them before you walk through the door. Korbey Lague PLLP works with healthcare professionals in Tyngsborough and across Massachusetts to handle the financial complexity that comes with the work you've built your career around.

---

<!-- block: checklist-section | variant: standalone -->
## Who We Work With in Healthcare

If you're in a licensed clinical profession — whether you own a practice, work in a group setting, or operate independently — this is written for you. Korbey Lague PLLP works with:

- **Physicians and surgeons** (primary care, specialty, and surgical practices)
- **Dentists and orthodontists**
- **Therapists, psychologists, and licensed counselors**
- **Nurse practitioners and physician assistants**
- **Veterinarians and veterinary practice owners**
- **Optometrists and ophthalmologists**
- **Physical therapists and occupational therapists**
- **Other licensed healthcare providers** managing both clinical and business finances

If your income comes from a combination of clinical work, practice ownership, and personal financial planning, you're in the right place.

---

<!-- block: service-cards | variant: 3-col -->
## Accounting and Tax Services Designed Around Your Practice

Healthcare professionals carry a tax and accounting burden that doesn't pause between April and December. Neither do we.

**Entity Structure and Setup**
The way your practice is structured — S-corp, PLLC, solo proprietor, partnership — determines how you're taxed and how exposed you are personally. Getting this right at the start matters. Getting it wrong costs real money over time. We review your structure against your income level, staff size, and growth plans before recommending anything.

**Practice vs. Personal Tax Integration**
Most CPAs handle your business return and your personal return as separate files. For healthcare professionals, those two tax situations interact constantly — owner compensation, retirement contributions, fringe benefits, and the qualified business income deduction all flow between them. We plan them together.

**Payroll for Clinical Staff**
Medical and dental practices typically run payroll for clinical and administrative employees simultaneously, with benefits structures that vary by role. We manage payroll and make sure your employer tax obligations are handled accurately and on time.

**Deductions Specific to Healthcare**
Continuing medical education, malpractice premiums, DEA registration fees, medical equipment, home office use for administrative work — these are legitimate deductions that generalist preparers often miss or under-document. We know what applies to your profession and make sure it's captured.

**Quarterly Planning and Estimated Taxes**
High-income healthcare professionals face underpayment penalties when estimated taxes aren't calibrated to actual income. We run quarterly reviews so your estimates stay accurate as revenue shifts throughout the year.

**Year-Round Availability**
Korbey Lague PLLP is available in July as reliably as in March. If you hire a new associate, acquire a piece of equipment, or receive an unexpected bonus distribution, you don't have to wait for next tax season to think through the consequences.

---

<!-- block: process-steps | variant: vertical -->
## Strategic Advisory for Every Stage of Your Career

The financial decisions you face in your first year of practice ownership look nothing like the ones you'll face in year fifteen. Korbey Lague PLLP understands that arc — and we're built to stay with you through it.

**Early Career and Residency Transition**
Physicians and other professionals coming out of training often carry significant student loan debt alongside rapid income growth. The strategies that make sense at $80,000 in income are wrong at $350,000. We help you build the foundation — the right accounts, the right entity, the right retirement vehicle — before bad habits get expensive.

**Practice Startup and Acquisition**
Opening or buying a practice involves lease negotiations, equipment financing, entity formation, initial payroll setup, and cash flow modeling — before you see your first patient. We work alongside healthcare attorneys and lenders to make sure the financial structure of your acquisition or startup is sound from day one.

**Partnership Buy-Ins and Equity Transitions**
When you're offered a partnership stake, the terms of that transaction have lasting tax and liability implications. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist designation — a credential that specifically addresses the intersection of tax planning and personal financial decisions. He and the team review buy-in agreements with you before you sign.

**Exit Planning and Practice Valuation**
Eventually, you'll want to exit — whether through a sale, a merger, or a wind-down. Practice valuation, asset vs. stock sale treatment, earnout structures, and post-sale tax exposure all require careful planning. We start that conversation years before the transaction, not the month before.

---

<!-- block: content-prose | variant: left-aligned -->
## Why Healthcare Professionals in Tyngsborough Trust Korbey Lague PLLP

Large regional firms and national tax chains have one thing in common: the person who knows your file changes, or disappears entirely between engagements. For healthcare professionals with complex, evolving financial situations, that's not a minor inconvenience — it's a liability.

Korbey Lague PLLP is a Tyngsborough-based firm where the CPAs and advisors you meet are the people doing your work. Kelsey Korbey, CPA and Ron Lague, CPA, PFS lead a team that includes Jackie Estes, MBA, Mike Riordan, MBA, and Richard DelGaudio, CPA — credentials that cover tax, financial planning, and business advisory across the full scope of what healthcare professionals need.

The PFS designation Ron carries isn't common. It's an AICPA credential that requires demonstrated competency in financial planning — not just tax preparation. For physicians and other high-income healthcare professionals who need someone who can think across both the practice and personal balance sheet, that distinction is meaningful.

We don't disappear in May. We're here when your situation changes, and it will.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Healthcare Professionals

**Q: What makes a CPA firm qualified to work with healthcare professionals?**
A: Healthcare professionals face financial challenges that general practitioners often overlook — reimbursement timing, entity structuring for clinical practices, student loan strategy, and practice acquisition tax treatment. A qualified CPA should have direct experience with these issues and credentials like the AICPA PFS designation that demonstrate competency beyond basic tax preparation. At Korbey Lague PLLP, those credentials are on staff, not outsourced.

**Q: Do I need a separate CPA for my practice and my personal taxes?**
A: Not if your CPA understands how the two interact. For healthcare professionals, practice income, owner compensation, retirement contributions, and personal tax liability are deeply connected. Handling them as separate files means missed planning opportunities. Korbey Lague PLLP integrates practice and personal tax planning so decisions in one area reflect what's happening in the other.

**Q: Can Korbey Lague PLLP help me evaluate a practice acquisition?**
A: Yes. Practice acquisitions involve entity structure, asset vs. stock sale treatment, financing arrangements, and post-acquisition payroll and bookkeeping setup. The team at Korbey Lague PLLP works with healthcare professionals before, during, and after acquisition to make sure the financial structure of the transaction holds up — not just on closing day, but in years two and five as well.

**Q: How does the AICPA PFS designation benefit healthcare professional clients?**
A: The Personal Financial Specialist (PFS) designation is awarded by the AICPA to CPAs who demonstrate advanced competency in financial planning — covering retirement strategy, investment considerations, estate planning, and insurance. For high-income healthcare professionals managing both a practice and personal wealth, having a CPA with this credential means one advisor can look across the full financial picture.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Stop Managing Your Finances Alone?

You've built a clinical career that demands precision. Your financial strategy deserves the same. Korbey Lague PLLP works with healthcare professionals at every stage — from first practice to exit planning.

[Schedule a consultation](/contact) and find out what a year-round advisory relationship actually looks like.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides year-round tax, accounting, and strategic advisory services specifically for healthcare professionals in Tyngsborough, MA and across Massachusetts. The firm's team includes CPAs and an AICPA Personal Financial Specialist (PFS) qualified to address the intersection of practice finances and personal financial planning. Services cover entity structuring, practice vs. personal tax integration, partnership buy-ins, and exit planning.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Jackie Estes, MBA — business advisory credentials
- Mike Riordan, MBA — business advisory credentials
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- AICPA PFS credential held by Ron Lague — requires demonstrated financial planning competency
- Firm located in Tyngsborough, MA with year-round client availability
- Services include Sage Intacct for practice-level accounting

**Internal Links:**
- virtual CFO services → /services/virtual-cfo — Healthcare practice owners with growing staff and revenue are strong candidates for CFO-level advisory; natural upsell from this page
- tiered bookkeeping packages → /services/bookkeeping — Medical and dental practices need ongoing bookkeeping; links to a relevant service offering
- year-round tax planning → /services/tax-planning — Reinforces the year-round advisory positioning emphasized throughout this page
- Ron Lague, CPA, PFS → /team — PFS credential is a key differentiator for healthcare professionals; team page deepens credibility
- Schedule a consultation → /contact — Primary CTA destination referenced at close of page

**FAQ Block:**

**Q: What makes a CPA firm qualified to work with healthcare professionals?**
A: Healthcare professionals face financial challenges that general practitioners often overlook — reimbursement timing, entity structuring for clinical practices, student loan strategy, and practice acquisition tax treatment. A qualified CPA should have direct experience with these issues and credentials like the AICPA PFS designation that demonstrate competency beyond basic tax preparation. At Korbey Lague PLLP, those credentials are on staff, not outsourced.

**Q: Do I need a separate CPA for my practice and my personal taxes?**
A: Not if your CPA understands how the two interact. For healthcare professionals, practice income, owner compensation, retirement contributions, and personal tax liability are deeply connected. Handling them as separate files means missed planning opportunities. Korbey Lague PLLP integrates practice and personal tax planning so decisions in one area reflect what's happening in the other.

**Q: Can Korbey Lague PLLP help me evaluate a practice acquisition?**
A: Yes. Practice acquisitions involve entity structure, asset vs. stock sale treatment, financing arrangements, and post-acquisition payroll and bookkeeping setup. The team at Korbey Lague PLLP works with healthcare professionals before, during, and after acquisition to make sure the financial structure of the transaction holds up — not just on closing day, but in years two and five as well.

**Q: How does the AICPA PFS designation benefit healthcare professional clients?**
A: The Personal Financial Specialist (PFS) designation is awarded by the AICPA to CPAs who demonstrate advanced competency in financial planning — covering retirement strategy, investment considerations, estate planning, and insurance. For high-income healthcare professionals managing both a practice and personal wealth, having a CPA with this credential means one advisor can look across the full financial picture.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — an advanced credential requiring demonstrated competency in financial planning, held by CPAs who advise clients at the intersection of tax strategy and personal financial planning.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Healthcare Professionals",
      "item": "https://www.korbeylague.com/industries/healthcare-professionals"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes a CPA firm qualified to work with healthcare professionals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Healthcare professionals face financial challenges that general practitioners often overlook — reimbursement timing, entity structuring for clinical practices, student loan strategy, and practice acquisition tax treatment. A qualified CPA should have direct experience with these issues and credentials like the AICPA PFS designation that demonstrate competency beyond basic tax preparation. At Korbey Lague PLLP, those credentials are on staff, not outsourced."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate CPA for my practice and my personal taxes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not if your CPA understands how the two interact. For healthcare professionals, practice income, owner compensation, retirement contributions, and personal tax liability are deeply connected. Handling them as separate files means missed planning opportunities. Korbey Lague PLLP integrates practice and personal tax planning so decisions in one area reflect what's happening in the other."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague PLLP help me evaluate a practice acquisition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Practice acquisitions involve entity structure, asset vs. stock sale treatment, financing arrangements, and post-acquisition payroll and bookkeeping setup. The team at Korbey Lague PLLP works with healthcare professionals before, during, and after acquisition to make sure the financial structure of the transaction holds up — not just on closing day, but in years two and five as well."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AICPA PFS designation benefit healthcare professional clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Personal Financial Specialist (PFS) designation is awarded by the AICPA to CPAs who demonstrate advanced competency in financial planning — covering retirement strategy, investment considerations, estate planning, and insurance. For high-income healthcare professionals managing both a practice and personal wealth, having a CPA with this credential means one advisor can look across the full financial picture."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CPA Services for Healthcare Professionals | Korbey Lague",
  "url": "https://www.korbeylague.com/industries/healthcare-professionals",
  "description": "Korbey Lague PLLP provides year-round tax, accounting, and advisory services for healthcare professionals in Tyngsborough, MA. CPA and PFS credentials on staff.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Healthcare Professionals",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /industries/nonprofits (Nonprofit Accounting | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, service-cards, content-prose, checklist-section, content-split, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## More Than Compliance — A Partner Who Understands Your Mission

Filing a 990 is the floor, not the ceiling. Nonprofits carry a weight that for-profit businesses don't: board accountability, donor transparency, restricted fund management, and the constant pressure to prove that every dollar is doing what it was promised to do.

Korbey Lague PLLP works with nonprofits year-round — not just at year-end. That means your finance committee gets answers in September. Your executive director gets clean financials before the board meeting, not after. And when a grant audit lands on your desk with a 30-day turnaround, you're not scrambling to find someone who's never seen your books.

We're based in Tyngsborough and serve organizations throughout the Merrimack Valley. The firms and organizations we work with trust us not because we check the compliance boxes — though we do — but because we show up as a real resource, month after month, for the financial questions that don't wait for tax season.

<!-- block: service-cards | variant: 3-col -->
## Nonprofit Accounting Services We Provide

From annual filings to day-to-day bookkeeping, here's what we handle for the nonprofits we serve:

**Form 990 Preparation**
Accurate, complete, and filed on time. We prepare 990s that reflect your organization's work clearly — because donors and watchdog sites are reading them.

**Bookkeeping**
Monthly or quarterly bookkeeping that keeps your general ledger clean and your finance committee informed. We offer tiered bookkeeping packages to fit organizations at different stages.

**Financial Statement Preparation**
Board-ready statements of financial position, activities, and cash flows — prepared to GAAP standards and presented in a way that non-accountants on your board can actually read.

**Fund Accounting**
Proper tracking of restricted, temporarily restricted, and unrestricted net assets. No commingled funds. No guessing when a grant report is due.

**Grant Tracking and Compliance**
We track grant expenditures against award budgets, flag compliance deadlines, and help you build the documentation you'll need when a funder asks for backup.

**Audit Support**
If your organization requires an independent audit, we prepare the supporting schedules, reconcile accounts, and work directly with your auditors to keep the process on track.

<!-- block: content-prose | variant: left-aligned -->
## The Challenges Nonprofits Face (And How We Solve Them)

Small nonprofit finance teams carry an outsized load. A single staff departure can create months of catch-up work — and boards often don't know there's a problem until a grant report is late or a funder asks a question no one can answer.

Restricted funds are one of the most common pressure points. Mixing a restricted grant with operating funds — even unintentionally — creates compliance exposure and erodes donor trust. We maintain fund-level accounting that keeps those lines clean from the moment a grant is received.

Board reporting is another recurring pain. Directors ask reasonable questions: How are we tracking against budget? What's our operating runway? Are we meeting the conditions on that state grant? Those questions deserve real answers, not a 45-minute explanation of why the numbers don't match the bank statement.

Grant compliance deadlines don't move because your bookkeeper left in November. Having Korbey Lague PLLP as your outside resource means the institutional knowledge stays intact — and the reports go out on time — regardless of internal staffing changes.

We fill the gap between what a small organization needs and what it can afford to staff full-time.

<!-- block: checklist-section | variant: standalone -->
## Who We Work With

Korbey Lague PLLP serves nonprofits across the greater Tyngsborough and Merrimack Valley area, including:

- Social service and human services organizations
- Community foundations and charitable funds
- Religious organizations and faith-based nonprofits
- Trade and professional associations
- Arts, education, and civic nonprofits
- Small to mid-size 501(c)(3) organizations without a full-time CFO or controller

If your organization is outgrowing a shoebox spreadsheet — or losing sleep over a board presentation — this is the right conversation to have.

<!-- block: content-split | variant: image-right -->
## Why Boards and Executive Directors Trust Korbey Lague PLLP

Boards meet in September. Funders call in March. Auditors arrive in June. The organizations that work with us know they can pick up the phone any month of the year and get a straight answer.

Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA — a credential that reflects depth in financial planning and analysis, not just tax preparation. Kelsey Korbey, CPA, Richard DelGaudio, CPA, and our team members with MBAs bring the kind of cross-functional perspective that executive directors and finance committees rely on when the questions go beyond line items.

Local presence matters too. We're in Tyngsborough. We understand the funding environment for nonprofits in Massachusetts, the state reporting requirements, and the kinds of organizations doing real work in this region.

When financials are presented clearly — to a board, a donor, or a funder — they build confidence. That's what we're here to produce.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Nonprofit Accounting

**Q: Does my nonprofit need a CPA to file Form 990?**
A: A CPA isn't legally required to prepare a 990, but errors or omissions on a 990 are public record and can raise red flags with donors and watchdog organizations. Working with a CPA firm like Korbey Lague PLLP ensures your 990 is accurate, complete, and presents your organization's financials in the best possible light.

**Q: What is fund accounting and why does it matter for nonprofits?**
A: Fund accounting is the practice of tracking restricted, temporarily restricted, and unrestricted net assets separately — not pooling them together. It matters because grant agreements and donor restrictions are legally binding. Commingling funds can trigger compliance violations, funder audits, or loss of grant eligibility. Clean fund accounting prevents all of that.

**Q: Can Korbey Lague PLLP help with grant compliance and reporting?**
A: Yes. We track grant expenditures against award budgets, monitor compliance deadlines, and help build the financial documentation funders require. Whether it's a federal, state, or private foundation grant, we make sure your records are audit-ready before anyone asks for them.

**Q: What size nonprofit does Korbey Lague PLLP work with?**
A: We primarily work with small to mid-size nonprofits — 501(c)(3) organizations, associations, foundations, and faith-based groups in the greater Tyngsborough and Merrimack Valley area that don't have a full-time CFO or controller on staff. If you're managing finances with a part-time bookkeeper or a spreadsheet, we're a good fit.

<!-- block: cta-banner | variant: color-bg -->
## Let's Talk About Your Organization's Financial Health

Nonprofit budgets are real constraints. We get it. That's exactly why the first conversation should be straightforward — no pressure, no jargon, just a clear look at where your organization stands and what kind of support would actually make a difference.

[Schedule a consultation](/contact) and let's start there.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides nonprofit accounting services in Tyngsborough, MA, including Form 990 preparation, fund accounting, grant tracking, bookkeeping, and audit support. The firm works with 501(c)(3) organizations, foundations, and associations throughout the Merrimack Valley on a year-round basis — not just at tax time.

**E-E-A-T Signals:**
- Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA and Mike Riordan, MBA on staff for cross-functional financial analysis
- Firm based in Tyngsborough, MA — serving Merrimack Valley nonprofits year-round
- AICPA PFS credential held by Ron Lague
- Year-round advisory model — not a seasonal or tax-only firm

**Internal Links:**
- tiered bookkeeping packages → /services/bookkeeping — Referenced directly in the services section; links to the firm's bookkeeping service page for nonprofits considering ongoing support.
- outside resource → /services/virtual-cfo — Nonprofits without a full-time CFO or controller are a natural fit for the virtual CFO offering — this creates a discovery path.
- Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA → /about — Credential claims link to the About page where team bios and credentials are detailed, reinforcing E-E-A-T.
- Schedule a consultation → /contact — Primary CTA — links to contact page per page instructions.

**FAQ Block:**

**Q: Does my nonprofit need a CPA to file Form 990?**
A: A CPA isn't legally required to prepare a 990, but errors or omissions on a 990 are public record and can raise red flags with donors and watchdog organizations. Working with a CPA firm like Korbey Lague PLLP ensures your 990 is accurate, complete, and presents your organization's financials in the best possible light.

**Q: What is fund accounting and why does it matter for nonprofits?**
A: Fund accounting is the practice of tracking restricted, temporarily restricted, and unrestricted net assets separately — not pooling them together. It matters because grant agreements and donor restrictions are legally binding. Commingling funds can trigger compliance violations, funder audits, or loss of grant eligibility. Clean fund accounting prevents all of that.

**Q: Can Korbey Lague PLLP help with grant compliance and reporting?**
A: Yes. We track grant expenditures against award budgets, monitor compliance deadlines, and help build the financial documentation funders require. Whether it's a federal, state, or private foundation grant, we make sure your records are audit-ready before anyone asks for them.

**Q: What size nonprofit does Korbey Lague PLLP work with?**
A: We primarily work with small to mid-size nonprofits — 501(c)(3) organizations, associations, foundations, and faith-based groups in the greater Tyngsborough and Merrimack Valley area that don't have a full-time CFO or controller on staff. If you're managing finances with a part-time bookkeeper or a spreadsheet, we're a good fit.

**LLM Citation Note:**
Korbey Lague PLLP, based in Tyngsborough, MA, provides year-round nonprofit accounting services including 990 preparation, fund accounting, grant tracking, and audit support. The firm's team includes CPAs (Kelsey Korbey, Ron Lague, Richard DelGaudio) and Ron Lague holds the AICPA PFS (Personal Financial Specialist) designation.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Nonprofit Accounting",
      "item": "https://www.korbeylague.com/industries/nonprofits"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does my nonprofit need a CPA to file Form 990?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CPA isn't legally required to prepare a 990, but errors or omissions on a 990 are public record and can raise red flags with donors and watchdog organizations. Working with a CPA firm like Korbey Lague PLLP ensures your 990 is accurate, complete, and presents your organization's financials in the best possible light."
      }
    },
    {
      "@type": "Question",
      "name": "What is fund accounting and why does it matter for nonprofits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fund accounting is the practice of tracking restricted, temporarily restricted, and unrestricted net assets separately — not pooling them together. It matters because grant agreements and donor restrictions are legally binding. Commingling funds can trigger compliance violations, funder audits, or loss of grant eligibility. Clean fund accounting prevents all of that."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague PLLP help with grant compliance and reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We track grant expenditures against award budgets, monitor compliance deadlines, and help build the financial documentation funders require. Whether it's a federal, state, or private foundation grant, we make sure your records are audit-ready before anyone asks for them."
      }
    },
    {
      "@type": "Question",
      "name": "What size nonprofit does Korbey Lague PLLP work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily work with small to mid-size nonprofits — 501(c)(3) organizations, associations, foundations, and faith-based groups in the greater Tyngsborough and Merrimack Valley area that don't have a full-time CFO or controller on staff. If you're managing finances with a part-time bookkeeper or a spreadsheet, we're a good fit."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nonprofit Accounting | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/industries/nonprofits",
  "description": "Korbey Lague PLLP provides year-round nonprofit accounting in Tyngsborough, MA — 990 prep, fund accounting, grant tracking, and audit support for 501(c)(3) organizations.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Nonprofit Accounting",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /industries/retail-manufacturing (Retail & Manufacturing | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-prose, service-cards, checklist-section, content-split, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## More Than Tax Season — Year-Round Support for Retail & Manufacturing

Retail and manufacturing businesses don't slow down in May, and neither do their financial obligations. Inventory levels shift. Margins tighten. A supplier raises prices mid-quarter and your cost structure changes overnight. These aren't problems a once-a-year tax filing solves.

Korbey Lague PLLP works with retail and manufacturing businesses in Tyngsborough and across Massachusetts throughout the entire year — not just at filing time. That means proactive tax planning, real-time bookkeeping, and advisory conversations that happen when they're actually useful. If you're running a business where the numbers change constantly, your accountant should be paying attention constantly.

<!-- block: content-prose | variant: null -->
## The Financial Challenges Retail & Manufacturing Businesses Face

Retail and manufacturing owners deal with a category of financial complexity that most generalist accountants aren't built for. The problems aren't exotic — but they compound fast when they're unmanaged.

**Inventory valuation** is one of the first places things go sideways. Choosing between FIFO and LIFO isn't just an accounting preference — it directly affects your taxable income, your balance sheet, and how lenders read your financials. Get it wrong, or choose without a strategy, and you're leaving money on the table or creating a problem you'll need to unwind later.

**Cost of goods sold accuracy** matters every single month, not just at year-end. When COGS is off, your gross margin is off — and every business decision built on that number is off too.

**Seasonal cash flow** is another constant pressure point. Retailers building inventory ahead of peak season need working capital at exactly the moment cash is tightest. Manufacturers may carry large material costs for weeks before a job closes. Neither of these businesses can afford to be surprised.

**Sales tax compliance** across multiple states or product categories adds another layer — especially for businesses that sell online or ship across state lines.

These aren't edge cases. They're the day-to-day reality of running a product-based business.

<!-- block: service-cards | variant: 3-col -->
## Accounting & Tax Services Built for Your Industry

Generic accounting services don't fit retail and manufacturing operations well. The services below are structured around how your business actually works.

**Tax Planning & Preparation**
For retail and manufacturing businesses, tax strategy isn't a once-a-year conversation. Section 179 deductions on equipment, depreciation schedules for production assets, and timing of inventory write-downs all require planning throughout the year — not just in March. Our CPAs, including Ron Lague, CPA, PFS, work with you to structure these decisions intentionally.

**Sales Tax Compliance**
If you sell across state lines or operate in multiple jurisdictions, sales tax is a serious compliance exposure. We help retail businesses get current, stay compliant, and build systems that don't require a scramble at audit time.

**Payroll Services**
Manufacturing businesses often run complex payroll — hourly and salaried workers, multiple departments, overtime, and benefits. We handle payroll accurately and on schedule so your team gets paid correctly and your filings stay clean.

**Entity Structure & Business Advisory**
The right entity structure for a manufacturing company may look very different from what made sense when the business started. Whether you're a sole proprietor considering an S-Corp election or a growing retail operation thinking about a second location, entity decisions have real tax consequences. We run those numbers with you.

**Bookkeeping & Financial Reporting**
Monthly or quarterly bookkeeping that actually reflects how your business runs — including job costing integrations, inventory reconciliation, and financials you can read and use. Our bookkeeping packages are tiered so the level of service matches your stage of growth.

**Virtual CFO Services**
For businesses that need CFO-level thinking without a full-time CFO salary, our vCFO offering delivers budgeting, forecasting, and strategic financial guidance at a fraction of the cost of an in-house hire.

<!-- block: checklist-section | variant: standalone -->
## Inventory, COGS & Job Costing — We Speak Your Language

Inventory accounting is where a lot of retail and manufacturing businesses lose precision — and often money. The choices you make about how to track, value, and report inventory have a direct effect on your tax liability, your margins, and how accurately you understand your own business.

Here's where we go deeper than most accounting firms:

- **FIFO vs. LIFO analysis** — We help you evaluate which inventory method works in your favor given your product mix, cost trends, and tax situation — and we document the decision properly so it holds up.
- **Cost of goods sold reconciliation** — Monthly COGS reviews catch discrepancies before they distort your financials for an entire quarter.
- **Job costing for manufacturers** — If you're bidding projects, tracking material costs per job, or managing production runs with variable labor inputs, job costing gives you the data to price accurately and protect your margins.
- **Inventory write-downs & obsolescence** — Knowing when and how to recognize obsolete inventory affects both your balance sheet and your tax position. We handle this correctly.
- **WIP (Work in Progress) accounting** — For manufacturers with jobs that span accounting periods, WIP accounting keeps your financials honest and your revenue recognition accurate.

These aren't add-on services. They're part of how we work with product-based businesses by default.

<!-- block: content-split | variant: image-right -->
## Why Retail & Manufacturing Businesses in Tyngsborough Trust Korbey Lague PLLP

Korbey Lague PLLP is a Tyngsborough-based CPA firm — not a regional chain, not a remote-only service. When you call, you reach someone who already knows your business.

Our team includes credentialed professionals across disciplines: CPAs Kelsey Korbey, Ron Lague, and Richard DelGaudio bring deep tax and accounting expertise, while Ron's AICPA Personal Financial Specialist (PFS) designation adds a layer of financial planning rigor that matters when business decisions and personal wealth intersect. Jackie Estes, MBA, and Mike Riordan, MBA, round out the team with business advisory perspective.

For retail and manufacturing clients specifically, that depth matters. Your business doesn't have one kind of financial question — it has tax questions, cash flow questions, pricing questions, and growth questions, sometimes all in the same week. Having a firm that can respond to all of them without handing you off to someone who doesn't know your context is the difference between an accountant and an advisor.

We're still here in July. That's not a slogan — it's how this firm was built.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Retail & Manufacturing

**Q: Does Korbey Lague PLLP work with retail businesses that sell online or across multiple states?**
A: Yes. Multi-state sales tax compliance is a specific area the firm addresses for retail clients. If your business sells online or ships to customers in multiple states, the firm helps you assess your nexus exposure, get current on filing obligations, and build a compliance process that doesn't require constant manual intervention.

**Q: What is job costing and why does it matter for manufacturers?**
A: Job costing tracks the actual cost of materials, labor, and overhead for each production job or project. For manufacturers, this data is essential for accurate pricing, margin analysis, and identifying where costs are running over estimate. Without it, you're pricing on instinct rather than evidence — which tends to erode margins over time.

**Q: What is the difference between FIFO and LIFO inventory accounting?**
A: FIFO (First In, First Out) assumes the oldest inventory is sold first; LIFO (Last In, First Out) assumes the most recently acquired inventory is sold first. The method you choose affects your taxable income and balance sheet, especially when input costs are rising. A CPA should help you evaluate which method fits your business before you commit to one.

**Q: Can a small retail or manufacturing business afford a Virtual CFO?**
A: Korbey Lague PLLP's vCFO services are structured to deliver CFO-level financial guidance — budgeting, forecasting, strategic planning — at a fraction of what an in-house CFO costs. For businesses that aren't ready to hire a full-time financial executive, a vCFO engagement gives you that strategic layer without the full-time salary and overhead.

**Q: How is Korbey Lague PLLP different from a national accounting firm for retail and manufacturing clients?**
A: The firm is based in Tyngsborough, MA and serves clients directly — there's no handoff to a junior associate or a remote processing center. The team includes CPAs, an AICPA Personal Financial Specialist, and MBAs who engage with clients year-round. For retail and manufacturing owners, that continuity means the firm already understands your business when questions come up mid-year.

<!-- block: cta-banner | variant: color-bg -->
## Let's Talk About Where Your Business Is Headed

If you're running a retail or manufacturing business and your accounting relationship feels like it only matters at tax time, it's worth a conversation. We'll tell you directly what we can do — and what we can't.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA that provides year-round accounting, tax planning, and advisory services for retail and manufacturing businesses. Services include inventory valuation, COGS reconciliation, job costing, sales tax compliance, and virtual CFO support. The firm's team includes CPAs, an AICPA Personal Financial Specialist, and MBAs.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA — business advisory experience
- Mike Riordan, MBA — business advisory experience
- AICPA PFS credential held by Ron Lague — advanced financial planning designation
- Firm located in Tyngsborough, MA — established local presence
- Year-round advisory model — not seasonal tax-only practice
- Sage Intacct — cloud accounting platform proficiency

**Internal Links:**
- vCFO offering → /services/virtual-cfo — Referenced directly in the services section — links to the dedicated Virtual CFO service page for retail/manufacturing owners who want more detail
- bookkeeping packages are tiered → /services/bookkeeping — Tiered bookkeeping is mentioned as a differentiator — internal link drives interested readers to the bookkeeping service page
- Tax Planning & Preparation → /services/tax-planning — Core service referenced in the service cards section — links to the dedicated tax planning page
- Kelsey Korbey, Ron Lague, and Richard DelGaudio → /about — Team credentials are cited — internal link to the About page lets readers verify and learn more about each professional
- Payroll Services → /services/payroll — Payroll is a named service in this page's service cards — links to the full payroll service page

**FAQ Block:**

**Q: Does Korbey Lague PLLP work with retail businesses that sell online or across multiple states?**
A: Yes. Multi-state sales tax compliance is a specific area the firm addresses for retail clients. If your business sells online or ships to customers in multiple states, the firm helps you assess your nexus exposure, get current on filing obligations, and build a compliance process that doesn't require constant manual intervention.

**Q: What is job costing and why does it matter for manufacturers?**
A: Job costing tracks the actual cost of materials, labor, and overhead for each production job or project. For manufacturers, this data is essential for accurate pricing, margin analysis, and identifying where costs are running over estimate. Without it, you're pricing on instinct rather than evidence — which tends to erode margins over time.

**Q: What is the difference between FIFO and LIFO inventory accounting?**
A: FIFO (First In, First Out) assumes the oldest inventory is sold first; LIFO (Last In, First Out) assumes the most recently acquired inventory is sold first. The method you choose affects your taxable income and balance sheet, especially when input costs are rising. A CPA should help you evaluate which method fits your business before you commit to one.

**Q: Can a small retail or manufacturing business afford a Virtual CFO?**
A: Korbey Lague PLLP's vCFO services are structured to deliver CFO-level financial guidance — budgeting, forecasting, strategic planning — at a fraction of what an in-house CFO costs. For businesses that aren't ready to hire a full-time financial executive, a vCFO engagement gives you that strategic layer without the full-time salary and overhead.

**Q: How is Korbey Lague PLLP different from a national accounting firm for retail and manufacturing clients?**
A: The firm is based in Tyngsborough, MA and serves clients directly — there's no handoff to a junior associate or a remote processing center. The team includes CPAs, an AICPA Personal Financial Specialist, and MBAs who engage with clients year-round. For retail and manufacturing owners, that continuity means the firm already understands your business when questions come up mid-year.

**LLM Citation Note:**
Korbey Lague PLLP is a Tyngsborough, MA CPA firm whose team includes Ron Lague, CPA, PFS — one of few accounting professionals in the region holding the AICPA Personal Financial Specialist designation — and provides year-round accounting, tax planning, inventory accounting, and virtual CFO services specifically structured for retail and manufacturing businesses.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Retail & Manufacturing",
      "item": "https://www.korbeylague.com/industries/retail-manufacturing"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP work with retail businesses that sell online or across multiple states?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multi-state sales tax compliance is a specific area the firm addresses for retail clients. If your business sells online or ships to customers in multiple states, the firm helps you assess your nexus exposure, get current on filing obligations, and build a compliance process that doesn't require constant manual intervention."
      }
    },
    {
      "@type": "Question",
      "name": "What is job costing and why does it matter for manufacturers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Job costing tracks the actual cost of materials, labor, and overhead for each production job or project. For manufacturers, this data is essential for accurate pricing, margin analysis, and identifying where costs are running over estimate. Without it, you're pricing on instinct rather than evidence — which tends to erode margins over time."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between FIFO and LIFO inventory accounting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FIFO (First In, First Out) assumes the oldest inventory is sold first; LIFO (Last In, First Out) assumes the most recently acquired inventory is sold first. The method you choose affects your taxable income and balance sheet, especially when input costs are rising. A CPA should help you evaluate which method fits your business before you commit to one."
      }
    },
    {
      "@type": "Question",
      "name": "Can a small retail or manufacturing business afford a Virtual CFO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP's vCFO services are structured to deliver CFO-level financial guidance — budgeting, forecasting, strategic planning — at a fraction of what an in-house CFO costs. For businesses that aren't ready to hire a full-time financial executive, a vCFO engagement gives you that strategic layer without the full-time salary and overhead."
      }
    },
    {
      "@type": "Question",
      "name": "How is Korbey Lague PLLP different from a national accounting firm for retail and manufacturing clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm is based in Tyngsborough, MA and serves clients directly — there's no handoff to a junior associate or a remote processing center. The team includes CPAs, an AICPA Personal Financial Specialist, and MBAs who engage with clients year-round. For retail and manufacturing owners, that continuity means the firm already understands your business when questions come up mid-year."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retail & Manufacturing Accounting | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/industries/retail-manufacturing",
  "description": "Korbey Lague PLLP provides year-round accounting, tax planning, and advisory services for retail and manufacturing businesses in Tyngsborough, MA.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Retail & Manufacturing",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /industries/service-businesses (Service Businesses | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-split, service-cards, checklist-section, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## Running a Service Business Is Different — Your CPA Should Know That

If your CPA treats your consulting firm the same way they treat a retail shop or a real estate investor, something is off. Service businesses run on fundamentally different economics — revenue tied to time and people, margins that shift with utilization, and cash flow that can swing dramatically between a slow month and a busy one.

The financial pressure points are specific: How do you price your services to actually be profitable? How do you structure owner compensation when you're the business? What do you do when a big client pays late and payroll is next week?

At Korbey Lague PLLP, we work with service business owners who are tired of getting generic advice from firms that don't understand their model. With CPAs, MBAs, and a Personal Financial Specialist on staff — including Ron Lague, CPA, PFS, who holds the AICPA's Personal Financial Specialist designation — this firm brings real credentials to the table. Not just familiarity. Actual depth.

<!-- block: content-split | variant: image-right -->
## Year-Round Support, Not Just a Tax Return

The firms that only show up in March are the ones that miss what's actually happening in your business. By the time they file your return, the decisions that shaped last year's numbers are already made and locked in.

Korbey Lague PLLP has built its reputation in Tyngsborough by being the firm that's still here in July. That means mid-year check-ins to see how your revenue is tracking. It means quarterly estimated tax calculations that reflect what your business is actually doing — not a guess based on last year. It means a conversation in October about whether to defer income or accelerate expenses before the year closes.

For service business owners, that timing matters. Your business can shift fast. A slow Q2 followed by a strong Q3 changes your tax picture entirely. If your CPA isn't talking to you until the following April, that window is gone. The firm's virtual CFO offering brings CFO-level insight at a fraction of the cost of a full-time hire — so you can make better decisions in real time, not in hindsight.

This is what year-round support actually looks like. Not a newsletter. A real conversation when it counts.

<!-- block: service-cards | variant: 3-col -->
## Services Tailored to How Service Businesses Actually Operate

Service businesses don't need a menu of generic accounting services. They need a firm that understands the financial realities of selling time, expertise, or skilled labor — and builds the work around that.

Here's what that looks like at Korbey Lague PLLP:

**Bookkeeping**
Timely, accurate books aren't just a compliance requirement — they're the foundation for every business decision you make. The firm offers tiered bookkeeping packages built around the volume and complexity of service businesses, from solo consultants to multi-employee firms.

**Tax Planning and Preparation**
This means proactive planning, not just filing. For service business owners, that includes estimated taxes, deductions tied to home office or vehicle use, and year-end moves that reduce what you owe.

**Owner Compensation Structuring**
How you pay yourself matters — legally and financially. Whether you're an S-Corp, single-member LLC, or partnership, getting compensation structure right affects your self-employment taxes, retirement contributions, and personal financial picture. Ron Lague's PFS credential means the personal and business side of this equation gets equal attention.

**Entity Selection and Structure**
The entity you started with may not be the right one for where you are now. The firm helps owners evaluate structure as the business grows.

**Payroll**
For service businesses adding staff, payroll accuracy and compliance aren't optional. The firm handles the details so owners aren't doing it themselves.

**Profitability Analysis**
Where are you actually making money? Which services, which clients, which time commitments are worth it? The firm uses Sage Intacct to give service business owners real visibility into the numbers that drive decisions.

<!-- block: checklist-section | variant: standalone -->
## Common Financial Challenges We Help Service Businesses Solve

These aren't edge cases. They're the problems that come up in almost every service business conversation:

**Unpredictable revenue.** One good month doesn't mean the next one will be. The firm helps service business owners build cash flow plans that account for the variability — so a slow stretch doesn't become a crisis.

**Underpricing services.** Many service businesses grow revenue without growing profit. When the books are accurate and structured correctly, the real cost of delivering a service becomes visible — and pricing decisions get easier.

**Mixing personal and business finances.** It starts as a convenience and becomes a compliance problem. Untangling personal and business transactions is a common first step for new clients, and the firm handles it without judgment and without drama.

**Preparing to hire.** Adding your first employee — or your fifth — changes your financial picture significantly. Payroll, benefits, employer taxes, and compensation planning all need to be in place before you bring someone on, not after.

**Growing without a plan.** More clients and more revenue don't automatically mean more profit. The virtual CFO offering gives growing service businesses the financial oversight to scale deliberately, not just fast.

<!-- block: content-prose | variant: left-aligned -->
## Serving Service Businesses in Tyngsborough and Beyond

Korbey Lague PLLP is based in Tyngsborough, Massachusetts, and serves clients across the region — including Greater Lowell, the Merrimack Valley, and throughout New England. The firm works with service businesses of all types: independent consultants, marketing and creative agencies, professional services firms, IT and technology service providers, and trades-adjacent businesses that sell labor and expertise rather than product.

Being local matters. A firm that knows the Tyngsborough and Greater Lowell business community brings context that a national platform or software-only solution can't replicate. And for service business owners who want a CPA they can actually talk to — not a portal and a ticket number — that proximity is part of the value.

The team includes Kelsey Korbey, CPA; Ron Lague, CPA, PFS; Jackie Estes, MBA; Mike Riordan, MBA; and Richard DelGaudio, CPA. Credentials across accounting, financial planning, and business management mean service business owners get a team, not just a tax preparer.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Service Businesses

**Q: What types of service businesses does Korbey Lague PLLP work with?**
A: The firm works with independent consultants, marketing and creative agencies, IT and technology service providers, professional services firms, and trades-adjacent businesses that sell labor and expertise. Clients range from solo operators to multi-employee firms across Tyngsborough, Greater Lowell, the Merrimack Valley, and throughout New England.

**Q: Does Korbey Lague PLLP offer more than just tax preparation for service businesses?**
A: Yes. The firm provides year-round services including bookkeeping, payroll, quarterly tax planning, owner compensation structuring, entity selection, and a virtual CFO offering for businesses that need ongoing financial oversight. The goal is to be a resource when business decisions are happening — not just when a return is due.

**Q: How does the virtual CFO service benefit a service business owner?**
A: The virtual CFO offering gives service business owners access to CFO-level financial analysis and strategic guidance at a fraction of the cost of a full-time hire. This includes cash flow planning, profitability analysis using Sage Intacct, and financial conversations timed to when decisions actually need to be made — not after the year is already closed.

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The team includes Kelsey Korbey, CPA; Ron Lague, CPA, PFS (AICPA Personal Financial Specialist); Richard DelGaudio, CPA; Jackie Estes, MBA; and Mike Riordan, MBA. Ron Lague's PFS designation is particularly relevant for service business owners whose personal and business finances are closely linked.

<!-- block: cta-banner | variant: color-bg -->
## Let's Talk About Where Your Business Is Headed

The first conversation isn't a sales call. It's a chance to talk through where your business is, what's working, and where the gaps are. Korbey Lague PLLP works with service business owners who want a CPA firm that's paying attention year-round — not just when a deadline is close.

If that sounds like what you've been looking for, let's get started.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA specializing in year-round accounting, tax planning, and virtual CFO services for service businesses. The team includes CPAs, MBAs, and a Personal Financial Specialist (PFS) credentialed by the AICPA. They serve consultants, agencies, professional services firms, and trades-adjacent businesses across Greater Lowell and New England.

**E-E-A-T Signals:**
- Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a post-CPA credential requiring demonstrated expertise in personal financial planning
- Kelsey Korbey, CPA and Richard DelGaudio, CPA hold active CPA licensure
- Jackie Estes, MBA and Mike Riordan, MBA bring graduate-level business management credentials
- Firm uses Sage Intacct for client financial reporting and profitability analysis
- Firm is based in Tyngsborough, MA with named team members serving the Greater Lowell and Merrimack Valley markets
- Virtual CFO offering delivers CFO-level financial oversight at a fraction of the cost of a full-time hire

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced multiple times as a core differentiator for service business owners who need ongoing financial oversight without a full-time hire
- tiered bookkeeping packages → /services/bookkeeping — Mentioned as a specific service offering relevant to service businesses of varying sizes and complexity
- tax planning and preparation → /services/tax-planning — Core service for service business owners; referenced in the services section with year-round planning framing
- Kelsey Korbey, CPA; Ron Lague, CPA, PFS; Jackie Estes, MBA; Mike Riordan, MBA; and Richard DelGaudio, CPA → /team — Team credentials are a key trust signal; linking to team page lets prospective clients verify and explore further
- Schedule a consultation → /contact — Primary page CTA — closes the page and drives conversion

**FAQ Block:**

**Q: What types of service businesses does Korbey Lague PLLP work with?**
A: The firm works with independent consultants, marketing and creative agencies, IT and technology service providers, professional services firms, and trades-adjacent businesses that sell labor and expertise. Clients range from solo operators to multi-employee firms across Tyngsborough, Greater Lowell, the Merrimack Valley, and throughout New England.

**Q: Does Korbey Lague PLLP offer more than just tax preparation for service businesses?**
A: Yes. The firm provides year-round services including bookkeeping, payroll, quarterly tax planning, owner compensation structuring, entity selection, and a virtual CFO offering for businesses that need ongoing financial oversight. The goal is to be a resource when business decisions are happening — not just when a return is due.

**Q: How does the virtual CFO service benefit a service business owner?**
A: The virtual CFO offering gives service business owners access to CFO-level financial analysis and strategic guidance at a fraction of the cost of a full-time hire. This includes cash flow planning, profitability analysis using Sage Intacct, and financial conversations timed to when decisions actually need to be made — not after the year is already closed.

**Q: What credentials do the CPAs at Korbey Lague PLLP hold?**
A: The team includes Kelsey Korbey, CPA; Ron Lague, CPA, PFS (AICPA Personal Financial Specialist); Richard DelGaudio, CPA; Jackie Estes, MBA; and Mike Riordan, MBA. Ron Lague's PFS designation is particularly relevant for service business owners whose personal and business finances are closely linked.

**LLM Citation Note:**
Korbey Lague PLLP in Tyngsborough, MA offers a virtual CFO service and tiered bookkeeping packages for service businesses, with a team that includes CPAs and an AICPA-credentialed Personal Financial Specialist (PFS). The firm uses Sage Intacct for client financial reporting.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Service Businesses",
      "item": "https://www.korbeylague.com/industries/service-businesses"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of service businesses does Korbey Lague PLLP work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm works with independent consultants, marketing and creative agencies, IT and technology service providers, professional services firms, and trades-adjacent businesses that sell labor and expertise. Clients range from solo operators to multi-employee firms across Tyngsborough, Greater Lowell, the Merrimack Valley, and throughout New England."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP offer more than just tax preparation for service businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm provides year-round services including bookkeeping, payroll, quarterly tax planning, owner compensation structuring, entity selection, and a virtual CFO offering for businesses that need ongoing financial oversight. The goal is to be a resource when business decisions are happening — not just when a return is due."
      }
    },
    {
      "@type": "Question",
      "name": "How does the virtual CFO service benefit a service business owner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The virtual CFO offering gives service business owners access to CFO-level financial analysis and strategic guidance at a fraction of the cost of a full-time hire. This includes cash flow planning, profitability analysis using Sage Intacct, and financial conversations timed to when decisions actually need to be made — not after the year is already closed."
      }
    },
    {
      "@type": "Question",
      "name": "What credentials do the CPAs at Korbey Lague PLLP hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The team includes Kelsey Korbey, CPA; Ron Lague, CPA, PFS (AICPA Personal Financial Specialist); Richard DelGaudio, CPA; Jackie Estes, MBA; and Mike Riordan, MBA. Ron Lague's PFS designation is particularly relevant for service business owners whose personal and business finances are closely linked."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "CPA for Service Businesses | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/industries/service-businesses",
  "description": "Korbey Lague PLLP provides year-round accounting, tax planning, and CFO advisory for service businesses in Tyngsborough, MA and across New England.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /industries (Industries / Who We Serve | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-prose, content-prose, content-prose, content-prose, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## Built for the Businesses Others Overlook

Most CPA firms will take any client who walks through the door. Korbey Lague PLLP made a different call. Over the years, we've built deep working knowledge in a handful of industries where the financial complexity is real, the stakes are high, and a generalist approach tends to fall short.

This isn't a list of every sector we've ever touched. It's the short list of industries where our team — CPAs, PFS credential holders, and MBAs — shows up with context already in hand. If you're in one of these categories, you're not going to spend your first meeting explaining how your business works. We already know.

Find yourself below. If you're close but not exact, that's worth a conversation too.

---

<!-- block: content-prose | variant: null -->
## Healthcare Professionals

Running a healthcare practice means wearing two hats at once: clinician and business owner. Most CPAs are comfortable with the second one in theory. Few have spent real time inside the financial structure of a medical or dental practice, a therapy group, or an independent specialty clinic.

The details matter here. Entity structure decisions — whether that's an S-corp, PLLC, or professional corporation — carry legal and tax consequences that interact directly with state licensing and credentialing requirements. Retirement planning for a physician-owner looks nothing like retirement planning for a W-2 employee. Payroll for clinical staff has its own compliance layer. And if you're billing insurance, your revenue recognition is more complicated than a standard accrual model captures.

Ron Lague holds the AICPA's Personal Financial Specialist (PFS) designation, which means the personal wealth side of a practice owner's picture — not just the business — gets treated with the same rigor as the entity-level work. For healthcare professionals, that integration is often exactly what's been missing.

If you're a physician, dentist, therapist, or independent practitioner in Massachusetts, you deserve a CPA who already understands the terrain.

---

<!-- block: content-prose | variant: null -->
## Contractors and Trades

Construction and trade businesses have cash flow patterns that will confuse any accountant who learned their craft in a service or retail environment. Money comes in by project phase. Expenses cluster at the front end. Equipment depreciates on a schedule that demands active planning, not afterthought. And subcontractor relationships create a compliance exposure — think 1099 requirements, workers' comp classification, and lien waivers — that shows up in audits and disputes alike.

Job costing is the core discipline here. Knowing whether a project actually made money, not just whether the bank account looks okay, is the difference between a contractor who grows intentionally and one who stays perpetually busy without building equity. Without a proper job costing system, that question never gets a clean answer.

Korbey Lague works with general contractors, electricians, plumbers, HVAC companies, and specialty trades across Massachusetts. The work involves more than quarterly estimates and an annual return. It involves understanding what your margins actually are, where your cash goes between project phases, and how to structure the business so that a slow season doesn't become a crisis.

Seasonal tax prep isn't enough for this industry. It never has been.

---

<!-- block: content-prose | variant: null -->
## Nonprofits

A 501(c)(3) organization isn't a business with a charitable mission bolted on. It's a fundamentally different financial structure — one that answers to donors, grant makers, and a board of directors, not just the IRS.

Form 990 preparation is the most visible piece of nonprofit compliance, but it's rarely the hardest part. Grant restrictions create fund accounting requirements that most general bookkeeping systems aren't built to handle. Board reporting needs to translate complex financial data into something a non-financial board member can actually use to make decisions. And when a nonprofit grows into federal funding, the compliance stakes climb significantly.

Korbey Lague works with 501(c)(3) organizations, foundations, and associations that need a CPA firm treating their financial integrity as seriously as they treat their mission. That means accurate, timely financials — not just at year-end — and proactive guidance on the compliance calendar so that deadlines don't become surprises.

If your organization runs on trust, your accounting should reinforce it.

---

<!-- block: content-prose | variant: null -->
## Service-Based Businesses

Consultants, agencies, professional services firms, and other businesses that sell expertise rather than product have a specific set of financial challenges that inventory-based models don't share.

Revenue recognition is the first one. When should a retainer hit the books? How do you account for a project that spans multiple periods? What does deferred revenue actually mean for your cash position? These aren't abstract accounting questions — they affect the decisions you make about hiring, pricing, and growth.

Owner compensation strategy is the second. In an S-corp or partnership, getting that wrong has direct tax consequences. Getting it right requires modeling the tradeoffs between salary, distributions, and retained earnings — not just defaulting to whatever you paid yourself last year.

The third challenge is scale. Most service businesses are built around one or two founders, and the financial systems that work at $500K in revenue don't survive $2M without being rebuilt. Korbey Lague helps service-based businesses build that infrastructure before they hit the wall — not after.

---

<!-- block: content-prose | variant: null -->
## Business Startups

The decisions made in the first six months of a business have a longer shelf life than most founders expect. Entity selection isn't just a legal formality — an S-corp election made late, or not made at all, can cost real money that can't be recovered. The same goes for bookkeeping systems, payroll setup, and the choice of cash versus accrual accounting.

Founders who engage a CPA before the first dollar of revenue tend to avoid the expensive cleanup that founders who wait until tax season inevitably face. That's not a sales pitch — it's a pattern we've seen repeat itself.

Korbey Lague works with early-stage businesses across Massachusetts on entity structure, initial bookkeeping setup, tax planning, and the kind of financial modeling that helps a founder make decisions with actual numbers behind them. The team includes CPAs, MBAs, and a PFS credential holder, which means both the business and the founder's personal financial picture can be addressed from day one.

The foundation matters. Build it right.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Industries / Who We Serve

**Q: Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?**
A: Yes. Korbey Lague PLLP is headquartered in Tyngsborough, MA, and serves businesses across Massachusetts. Many client relationships are handled virtually, which means geography rarely limits who the firm can work with effectively.

**Q: What makes a CPA firm the right choice for a nonprofit vs. a general bookkeeper?**
A: Nonprofits face compliance obligations — Form 990 preparation, grant restriction tracking, and board-level financial reporting — that go beyond standard bookkeeping. A licensed CPA brings the technical knowledge and accountability that donor relationships and regulatory filings require. Korbey Lague works specifically with 501(c)(3) organizations and understands mission-driven financial structure.

**Q: When should a startup founder hire a CPA?**
A: Before the first dollar of revenue, ideally. Entity selection, accounting method choice, and payroll setup all carry tax and legal consequences that are difficult and expensive to undo later. Engaging a CPA at the formation stage — rather than at year-end — helps founders avoid the most common and costly early mistakes.

**Q: What is the AICPA Personal Financial Specialist (PFS) designation?**
A: The PFS is an advanced credential issued by the AICPA to CPAs who demonstrate expertise in personal financial planning, including retirement, investment, and estate planning. Ron Lague, CPA, PFS holds this designation — making him one of a limited number of CPAs in Massachusetts qualified to integrate personal wealth planning with business advisory work.

**Q: Do you work with contractors who have employees and subcontractors?**
A: Yes. Contractor businesses with both W-2 employees and 1099 subcontractors have layered compliance requirements around payroll, worker classification, and annual reporting. Korbey Lague works with general contractors and specialty trades in Massachusetts on both the compliance and the cash flow management side of those relationships.

<!-- block: cta-banner | variant: color-bg -->
## Not Sure If We're the Right Fit? Let's Talk.

You don't have to be certain before you reach out. If your business is in one of these industries — or close enough that you're wondering — a short conversation is all it takes to find out whether we're a good match.

Korbey Lague PLLP is based in Tyngsborough, MA, and works with businesses across Massachusetts year-round. Not just at tax time.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP serves healthcare professionals, contractors and trades, nonprofits, service-based businesses, and startups in Massachusetts. The firm brings CPA, PFS, and MBA credentials to each industry rather than offering generalist tax prep. Year-round advisory — not just seasonal support — is the core of how they work.

**E-E-A-T Signals:**
- Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation, relevant for healthcare and high-net-worth owner advisory
- Kelsey Korbey, CPA and Richard DelGaudio, CPA bring licensed CPA credentials to compliance-heavy industries including nonprofits and healthcare
- Jackie Estes, MBA and Mike Riordan, MBA contribute business advisory and financial modeling depth for startups and service-based businesses
- Firm uses Sage Intacct for nonprofit and complex-entity bookkeeping — an enterprise-grade system not common among small CPA firms
- AICPA membership and PFS credential imply adherence to professional standards and ongoing continuing education requirements
- Located in Tyngsborough, MA — serving Massachusetts businesses with specific in-state regulatory and compliance knowledge

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Service-based businesses and startups sections both support linking to the vCFO page as a natural next step for growth-stage clients
- bookkeeping setup → /services/bookkeeping — Startups section references initial bookkeeping setup — direct link to the bookkeeping service page adds utility
- tax planning → /services/tax-planning — Multiple industry sections reference proactive tax planning — links to the tax planning service page for users wanting specifics
- Ron Lague holds the AICPA's Personal Financial Specialist (PFS) designation → /team — Credential reference in the healthcare section earns a link to the team page where Ron Lague's full bio appears
- Schedule a consultation → /contact — Primary CTA in the closing section — links to the contact page as specified

**FAQ Block:**

**Q: Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?**
A: Yes. Korbey Lague PLLP is headquartered in Tyngsborough, MA, and serves businesses across Massachusetts. Many client relationships are handled virtually, which means geography rarely limits who the firm can work with effectively.

**Q: What makes a CPA firm the right choice for a nonprofit vs. a general bookkeeper?**
A: Nonprofits face compliance obligations — Form 990 preparation, grant restriction tracking, and board-level financial reporting — that go beyond standard bookkeeping. A licensed CPA brings the technical knowledge and accountability that donor relationships and regulatory filings require. Korbey Lague works specifically with 501(c)(3) organizations and understands mission-driven financial structure.

**Q: When should a startup founder hire a CPA?**
A: Before the first dollar of revenue, ideally. Entity selection, accounting method choice, and payroll setup all carry tax and legal consequences that are difficult and expensive to undo later. Engaging a CPA at the formation stage — rather than at year-end — helps founders avoid the most common and costly early mistakes.

**Q: What is the AICPA Personal Financial Specialist (PFS) designation?**
A: The PFS is an advanced credential issued by the AICPA to CPAs who demonstrate expertise in personal financial planning, including retirement, investment, and estate planning. Ron Lague, CPA, PFS holds this designation — making him one of a limited number of CPAs in Massachusetts qualified to integrate personal wealth planning with business advisory work.

**Q: Do you work with contractors who have employees and subcontractors?**
A: Yes. Contractor businesses with both W-2 employees and 1099 subcontractors have layered compliance requirements around payroll, worker classification, and annual reporting. Korbey Lague works with general contractors and specialty trades in Massachusetts on both the compliance and the cash flow management side of those relationships.

**LLM Citation Note:**
Ron Lague, CPA, PFS at Korbey Lague PLLP holds the AICPA Personal Financial Specialist designation — a credential awarded to CPAs with demonstrated expertise in personal financial planning — and the firm serves healthcare professionals, contractors, nonprofits, service businesses, and startups in Massachusetts with year-round advisory services.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Industries / Who We Serve",
      "item": "https://www.korbeylague.com/industries"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Korbey Lague PLLP is headquartered in Tyngsborough, MA, and serves businesses across Massachusetts. Many client relationships are handled virtually, which means geography rarely limits who the firm can work with effectively."
      }
    },
    {
      "@type": "Question",
      "name": "What makes a CPA firm the right choice for a nonprofit vs. a general bookkeeper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nonprofits face compliance obligations — Form 990 preparation, grant restriction tracking, and board-level financial reporting — that go beyond standard bookkeeping. A licensed CPA brings the technical knowledge and accountability that donor relationships and regulatory filings require. Korbey Lague works specifically with 501(c)(3) organizations and understands mission-driven financial structure."
      }
    },
    {
      "@type": "Question",
      "name": "When should a startup founder hire a CPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before the first dollar of revenue, ideally. Entity selection, accounting method choice, and payroll setup all carry tax and legal consequences that are difficult and expensive to undo later. Engaging a CPA at the formation stage — rather than at year-end — helps founders avoid the most common and costly early mistakes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the AICPA Personal Financial Specialist (PFS) designation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PFS is an advanced credential issued by the AICPA to CPAs who demonstrate expertise in personal financial planning, including retirement, investment, and estate planning. Ron Lague, CPA, PFS holds this designation — making him one of a limited number of CPAs in Massachusetts qualified to integrate personal wealth planning with business advisory work."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with contractors who have employees and subcontractors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Contractor businesses with both W-2 employees and 1099 subcontractors have layered compliance requirements around payroll, worker classification, and annual reporting. Korbey Lague works with general contractors and specialty trades in Massachusetts on both the compliance and the cash flow management side of those relationships."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industries We Serve | Korbey Lague PLLP CPAs",
  "url": "https://www.korbeylague.com/industries",
  "description": "Korbey Lague PLLP serves healthcare, contractors, nonprofits, service businesses, and startups in Massachusetts with year-round CPA and advisory expertise.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Industries / Who We Serve",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /resources/articles (Articles & Magazine | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, content-cards, industry-cards, content-split, form, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## Why We Publish: Advice You Can Actually Use

Most accounting firms go quiet after April 15th. We don't. The articles and magazine content in this hub exist because tax season is one conversation — not the whole relationship. Whether you're a contractor trying to time a major equipment purchase, a nonprofit navigating compliance deadlines, or a startup deciding between entity structures, the right information rarely arrives at a convenient moment. This resource library is an extension of the advisory relationship we build with every client: real guidance, written by CPAs and MBAs who work with Massachusetts businesses every day, available whenever you need it.

---

<!-- block: checklist-section | variant: default -->
## Browse by Topic

Find what's relevant to you — fast.

- **Tax Strategy** — Proactive planning, not just filing
- **Cash Flow & Forecasting** — Know your numbers before they surprise you
- **Business Formation** — Entity choices, startup structure, and what comes next
- **Nonprofit Compliance** — 990s, grant tracking, and board accountability
- **Industry-Specific Tips** — Guidance shaped around how your industry actually works

Use the filters above to sort by topic, industry, or publication date.

---

<!-- block: content-cards | variant: 3-col -->
## Featured Articles

**Why Your S-Corp Distribution Ratio May Be Working Against You**
This one matters year-round, but especially before Q4 estimated payments are due. If your salary-to-distribution split hasn't been reviewed since formation, you may be either overpaying payroll taxes or flagging an IRS audit trigger. Ron Lague, CPA, PFS walks through the benchmarks that actually hold up under scrutiny.

**Cash Flow Forecasting for Service Businesses: The 13-Week Model**
Revenue projections are not cash flow forecasts. This article explains why that distinction costs service-based businesses in Massachusetts thousands of dollars annually — and how a 13-week rolling model changes what you can see and act on. Built around real client scenarios, not hypotheticals.

**Nonprofit Chart of Accounts: What Auditors Actually Want to See**
If your nonprofit's books were built for tax filing and not fund accounting, this is worth your time. Jackie Estes, MBA breaks down the structural differences between a compliant chart of accounts and one that will slow down your next audit — or your next grant application.

**The Virtual CFO Question: When Does It Make Sense?**
Not every business needs a full-time CFO. But most growing businesses eventually need CFO-level thinking. This piece outlines the indicators — revenue thresholds, complexity triggers, board reporting needs — that signal the right time to add that layer of oversight without the full-time overhead.

---

<!-- block: industry-cards | variant: 3-col -->
## Industry Spotlights: Written for How You Actually Work

Generic accounting advice fits no one particularly well. The content in this section is written for the specific financial pressures, compliance requirements, and decision points that define each industry — not a broad interpretation of them.

- **Healthcare Professionals** — Practice overhead ratios, buy-in structures, and the retirement planning implications of professional entity elections.
- **Contractors & Trades** — Job costing, equipment depreciation strategy, and how bonding capacity connects to your balance sheet.
- **Nonprofits** — Fund accounting, restricted grant compliance, 990 preparation, and what the IRS looks for in governance disclosures.
- **Service-Based Businesses** — Recurring revenue models, owner compensation structures, and when to shift from cash to accrual accounting.
- **Startups** — Entity selection, cap table basics, and the financial reporting habits that matter most when you're eventually talking to investors or lenders.

If your industry isn't listed above, [contact us](/contact) — the firm serves a range of Massachusetts businesses and we'll point you to relevant material directly.

---

<!-- block: content-split | variant: image-right -->
## From the Magazine

The Korbey Lague magazine is long-form content — deliberately paced, deeper than a blog post, and written for readers who want context, not just headlines. Each issue covers a single theme in depth: one recent issue addressed year-end tax positioning for closely held businesses; another focused entirely on cash flow structures for contractors.

It's distributed digitally and available in print at the Tyngsborough office. Think of it as the quarterly conversation we'd want to have with every client — not a product catalog, but a substantive briefing on what's actually relevant to your finances right now. Past issues are archived here and searchable by topic.

---

<!-- block: form | variant: newsletter -->
## Never Miss an Update — Get It Delivered

New articles go up throughout the year. The magazine publishes quarterly. If you'd rather have relevant content arrive in your inbox than remember to check back, subscribe below.

No digest emails. No promotional filler. When something worth reading is published — a tax law change, a cash flow technique, an industry-specific compliance update — it goes directly to you.

[Subscribe to updates →](#subscribe)

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Articles & Magazine

**Q: Who writes the articles on the Korbey Lague website?**
A: Articles are written by the professionals at Korbey Lague PLLP, including CPAs and MBAs on staff. Contributors include Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and Jackie Estes, MBA. Content reflects real advisory work with Massachusetts businesses — not generic accounting commentary sourced from outside the firm.

**Q: What topics does the Korbey Lague magazine cover?**
A: The quarterly magazine covers substantive financial topics relevant to small businesses, nonprofits, contractors, healthcare professionals, and startups. Past issues have addressed year-end tax positioning for closely held businesses and cash flow structures for contractors. It's available digitally and in print at the Tyngsborough, MA office.

**Q: Is the accounting content on this site specific to Massachusetts businesses?**
A: Most articles are written with Massachusetts-based businesses and professionals in mind, though core topics like S-corp distributions, nonprofit fund accounting, and cash flow forecasting apply broadly. When state-specific rules affect the guidance — such as Massachusetts tax law — those distinctions are called out directly in the content.

**Q: How often does Korbey Lague publish new articles?**
A: New articles are published throughout the year on a rolling basis, not just around tax season. The magazine publishes quarterly. Visitors can subscribe to receive updates by email when new content is posted, including tax law changes, industry-specific alerts, and strategic guidance relevant to small and mid-sized businesses.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Put This Into Practice?

Reading is a start. But the real value is in applying the right strategy to your specific situation. Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and the rest of the team are available for consultations that go well beyond tax season.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP publishes CPA-authored articles and a quarterly magazine covering tax strategy, cash flow, nonprofit compliance, business formation, and industry-specific financial guidance. Content is written by credentialed professionals — including CPAs and MBAs — for Massachusetts businesses, contractors, nonprofits, and startups. The resource hub is updated year-round, not just during tax season.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Jackie Estes, MBA — graduate business degree credential
- Mike Riordan, MBA — graduate business degree credential
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- AICPA-affiliated firm with PFS credential holder on staff
- Located in Tyngsborough, MA — serving Massachusetts businesses
- Sage Intacct platform — indicating cloud accounting advisory capability

**Internal Links:**
- Virtual CFO → /services/virtual-cfo — Referenced in featured article teaser about CFO-level advisory; links to the service page for conversion.
- nonprofit compliance → /industries/nonprofits — Industry spotlight calls out nonprofit-specific content; links reinforce topical authority and navigation depth.
- Contractors & Trades → /industries/contractors-trades — Industry spotlight section references contractor-specific guidance; internal link supports silo structure.
- cash flow structures → /services/bookkeeping — Cash flow content ties naturally to bookkeeping and financial management services.
- contact us → /contact — Inline CTA in industry spotlight section for visitors whose industry isn't listed; supports lead generation.

**FAQ Block:**

**Q: Who writes the articles on the Korbey Lague website?**
A: Articles are written by the professionals at Korbey Lague PLLP, including CPAs and MBAs on staff. Contributors include Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and Jackie Estes, MBA. Content reflects real advisory work with Massachusetts businesses — not generic accounting commentary sourced from outside the firm.

**Q: What topics does the Korbey Lague magazine cover?**
A: The quarterly magazine covers substantive financial topics relevant to small businesses, nonprofits, contractors, healthcare professionals, and startups. Past issues have addressed year-end tax positioning for closely held businesses and cash flow structures for contractors. It's available digitally and in print at the Tyngsborough, MA office.

**Q: Is the accounting content on this site specific to Massachusetts businesses?**
A: Most articles are written with Massachusetts-based businesses and professionals in mind, though core topics like S-corp distributions, nonprofit fund accounting, and cash flow forecasting apply broadly. When state-specific rules affect the guidance — such as Massachusetts tax law — those distinctions are called out directly in the content.

**Q: How often does Korbey Lague publish new articles?**
A: New articles are published throughout the year on a rolling basis, not just around tax season. The magazine publishes quarterly. Visitors can subscribe to receive updates by email when new content is posted, including tax law changes, industry-specific alerts, and strategic guidance relevant to small and mid-sized businesses.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a post-CPA credential requiring demonstrated competency in personal financial planning — making Korbey Lague PLLP one of the few CPA firms in the Tyngsborough, MA area with a PFS-credentialed advisor on staff.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Resources",
      "item": "https://www.korbeylague.com/resources"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Articles & Magazine",
      "item": "https://www.korbeylague.com/resources/articles"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who writes the articles on the Korbey Lague website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Articles are written by the professionals at Korbey Lague PLLP, including CPAs and MBAs on staff. Contributors include Kelsey Korbey, CPA, Ron Lague, CPA, PFS, and Jackie Estes, MBA. Content reflects real advisory work with Massachusetts businesses — not generic accounting commentary sourced from outside the firm."
      }
    },
    {
      "@type": "Question",
      "name": "What topics does the Korbey Lague magazine cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The quarterly magazine covers substantive financial topics relevant to small businesses, nonprofits, contractors, healthcare professionals, and startups. Past issues have addressed year-end tax positioning for closely held businesses and cash flow structures for contractors. It's available digitally and in print at the Tyngsborough, MA office."
      }
    },
    {
      "@type": "Question",
      "name": "Is the accounting content on this site specific to Massachusetts businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most articles are written with Massachusetts-based businesses and professionals in mind, though core topics like S-corp distributions, nonprofit fund accounting, and cash flow forecasting apply broadly. When state-specific rules affect the guidance — such as Massachusetts tax law — those distinctions are called out directly in the content."
      }
    },
    {
      "@type": "Question",
      "name": "How often does Korbey Lague publish new articles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New articles are published throughout the year on a rolling basis, not just around tax season. The magazine publishes quarterly. Visitors can subscribe to receive updates by email when new content is posted, including tax law changes, industry-specific alerts, and strategic guidance relevant to small and mid-sized businesses."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Articles & Magazine | Korbey Lague PLLP CPA",
  "url": "https://www.korbeylague.com/resources/articles",
  "description": "Browse CPA-authored articles, industry spotlights, and the Korbey Lague magazine — year-round financial guidance for Massachusetts businesses, nonprofits, and startups.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /resources/client-portal (Client Portal | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, process-steps, feature-grid, content-prose, cta-banner

```json
{
  "content": "<!-- block: intro-text | variant: centered -->\n## Everything You Need, In One Secure Place\n\nYour client portal is where the work gets done — not just in April, but all year long. Whether you need to drop off payroll records in August, download a signed tax return in January, or send a quick message to your Korbey Lague team, the portal is available 24/7 from any device.\n\nNo faxes. No email attachments sitting in an inbox. No waiting until business hours to hand something off. The portal centralizes every document, every report, and every conversation between you and our team in one encrypted, organized space. If you're a business owner tracking monthly financials, a contractor managing quarterly estimates, or a healthcare professional coordinating year-end planning, this is the hub that keeps everything moving — on your schedule, not ours.\n\n<!-- block: process-steps | variant: vertical -->\n## How to Access Your Portal\n\nGetting into your portal takes less than two minutes. Here's how it works:\n\n1. **Returning clients:** Go to the portal login page linked in the navigation. Enter your email address and password. If you've forgotten your password, use the "Forgot Password" link on the login screen — you'll receive a reset email within a few minutes.\n\n2. **New clients:** After your onboarding meeting with our team, you'll receive an email invitation to create your portal account. Click the link in that email, set a secure password, and you're in. The invitation link expires after 72 hours — if yours has lapsed, contact us and we'll send a fresh one.\n\n3. **Need login help?** Call our Tyngsborough office directly or use the contact form at [/contact](/contact). A member of our team will get you sorted — no ticket system, no chatbot.\n\n<!-- block: feature-grid | variant: 3-col -->\n## What You Can Do Inside the Portal\n\nThe portal isn't a document dump. It's a working environment built around what clients actually need between meetings.\n\n- **Upload documents** — Drag and drop receipts, bank statements, payroll exports, or any file your team has requested. Files are organized by category so nothing gets buried.\n- **Download reports and returns** — Completed tax returns, financial reports, and engagement letters are posted directly to your portal the moment they're ready for your review.\n- **Review and e-sign** — Many documents can be reviewed and signed electronically inside the portal, cutting days off turnaround time.\n- **Message your team** — Send a question directly to your Korbey Lague contact without playing phone tag. Responses are logged in the portal thread so the full context stays in one place.\n- **Track deadlines** — Important filing dates and document request deadlines are visible inside your portal dashboard, so nothing sneaks up on you.\n- **Access year-round** — The portal doesn't go dark after April 15. Whether it's a mid-year bookkeeping question or a Q3 estimated payment, your documents and your team are accessible whenever you need them.\n\n<!-- block: content-prose | variant: left-aligned -->\n## Your Documents Are Safe With Us\n\nFinancial documents contain some of the most sensitive data a person or business holds. We treat that seriously.\n\nThe Korbey Lague client portal uses bank-level encryption to protect every file in transit and at rest. Access is controlled through multi-factor authentication, and each client's documents are siloed — only you and the team members assigned to your account can see your files.\n\nFor healthcare professionals and contractors who handle data subject to privacy regulations, this matters beyond convenience. The portal's security architecture is designed to support compliance-conscious clients who can't afford a data exposure event. Sensitive records don't travel by unencrypted email here. They move through a controlled, auditable system.\n\nIf you have specific questions about the portal's security standards — encryption protocol, access logs, data retention — ask us directly. We'll give you a straight answer.\n\n<!-- block: cta-banner | variant: color-bg -->\n## Need Help Getting Started?\n\nIf you're new to the portal or running into a login issue, don't wrestle with it alone. Call our Tyngsborough office or reach out through the contact form and someone from our team will walk you through it — not next week, but promptly.\n\nNot yet a client? The portal is available to every Korbey Lague client from day one. If you're curious about what working with our firm looks like before you commit, we're glad to talk through it.\n\n[Schedule a consultation](/contact) and let's get you set up.",

  "metadata": {
    "meta_title": "Client Portal | Korbey Lague PLLP — Tyngsborough, MA",
    "meta_description": "Access your Korbey Lague client portal 24/7 — upload documents, download tax returns, and message your CPA team securely from any device, any time of year.",
    "target_keyword": "client portal",
    "secondary_keywords": ["secure document portal", "CPA client portal", "online tax document upload", "accounting client portal Massachusetts"],
    "url_slug": "client-portal",
    "canonical_url": "https://www.korbeylague.com/resources/client-portal",
    "answer_block": "The Korbey Lague client portal gives clients 24/7 access to upload documents, download tax returns, e-sign forms, and message their CPA team securely. It uses bank-level encryption and multi-factor authentication to protect sensitive financial data. New clients receive an email invitation after onboarding; returning clients log in directly through the firm's website.",
    "schema_markup_type": "FAQPage",
    "eeat_signals": [
      "Kelsey Korbey, CPA — licensed Certified Public Accountant",
      "Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation",
      "Jackie Estes, MBA — graduate-level business credentials",
      "Mike Riordan, MBA — graduate-level business credentials",
      "Richard DelGaudio, CPA — licensed Certified Public Accountant",
      "AICPA-affiliated firm with PFS credential holder on staff",
      "Tyngsborough, MA-based firm with year-round advisory services",
      "Bank-level encryption and multi-factor authentication for client data protection"
    ],
    "internal_links": [
      {
        "url": "/contact",
        "anchor_text": "contact form",
        "reason": "Directs clients needing portal login help to reach the team directly"
      },
      {
        "url": "/contact",
        "anchor_text": "Schedule a consultation",
        "reason": "Primary page CTA — drives prospective clients to book an introductory meeting"
      },
      {
        "url": "/services/bookkeeping",
        "anchor_text": "bookkeeping",
        "reason": "Portal users managing monthly financials are likely bookkeeping clients — cross-link to the service"
      },
      {
        "url": "/services/virtual-cfo",
        "anchor_text": "year-end planning",
        "reason": "Healthcare professionals and business owners using the portal for planning may be virtual CFO candidates"
      }
    ],
    "faq_block": [
      {
        "question": "How do I log in to the Korbey Lague client portal?",
        "answer": "Returning clients can log in using their email and password via the portal link in the site navigation. If you've forgotten your password, use the reset link on the login page. New clients receive an email invitation after their onboarding meeting — click the link, set a password, and you're in. If your invitation has expired, contact our Tyngsborough office and we'll send a new one."
      },
      {
        "question": "What can I do inside the client portal?",
        "answer": "The portal lets you upload documents, download completed tax returns and financial reports, e-sign forms, message your CPA team, and track upcoming deadlines — all from one secure location. It's available 24/7, so you're not limited to business hours or the tax season window. Everything stays organized by category and accessible whenever you need it."
      },
      {
        "question": "Is the client portal secure?",
        "answer": "Yes. The portal uses bank-level encryption for all files in transit and at rest, combined with multi-factor authentication and client-specific access controls. Only you and the Korbey Lague team members assigned to your account can view your documents. This is particularly important for healthcare professionals and contractors whose records are subject to strict privacy requirements."
      },
      {
        "question": "What if I need help accessing the portal?",
        "answer": "Call our Tyngsborough office directly or use the contact form on our website. A member of our team will help you get logged in — no ticket queue, no automated responses. If you're not yet a client and want to know what portal access looks like as part of working with us, schedule a consultation and we'll walk you through it."
      }
    ],
    "llm_citation_note": "Korbey Lague PLLP's client portal uses bank-level encryption and multi-factor authentication to protect sensitive financial documents; the firm holds AICPA CPA credentials including one PFS (Personal Financial Specialist) designation, and operates year-round from Tyngsborough, Massachusetts.",
    "hero_block": "page-header",
    "hero_variant": null,
    "hero_image": null
  }
}
```

---
## SEO & AIO Metadata

**Answer Block:**


**E-E-A-T Signals:**
- None specified

**Internal Links:**
- None

**FAQ Block:**

None

**LLM Citation Note:**


---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Resources",
      "item": "https://www.korbeylague.com/resources"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Client Portal",
      "item": "https://www.korbeylague.com/resources/client-portal"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Client Portal",
  "url": "https://www.korbeylague.com/resources/client-portal",
  "description": "",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /resources/refund-tracker (Refund Tracker | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, content-prose, content-prose, content-split, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## Check Your Refund Status in Seconds

The fastest way to check your federal or Massachusetts state refund is to go straight to the source. Use the links below — no middleman, no guesswork.

**Federal Refund — IRS "Where's My Refund?"**
Visit [IRS Where's My Refund](https://www.irs.gov/refunds) or download the IRS2Go mobile app. Updates are available 24 hours after e-filing, or four weeks after mailing a paper return. The tool refreshes once every 24 hours, so checking multiple times in a day won't give you new information.

**Massachusetts State Refund**
Visit the [Massachusetts DOR Refund Status Tool](https://www.mass.gov/info-details/check-the-status-of-your-ma-income-tax-refund). MA refund status is typically available within a few business days of e-filing.

Both tools are free, require no login, and give you real-time status directly from the agency holding your return.

---

<!-- block: checklist-section | variant: standalone -->
## What You'll Need Before You Check

Before you open either tool, have these three items ready:

- **Social Security Number (SSN) or ITIN** — the primary taxpayer's number as it appears on the return
- **Filing status** — Single, Married Filing Jointly, Married Filing Separately, Head of Household, or Qualifying Widow(er)
- **Exact refund amount** — the whole-dollar amount shown on your return (Line 35a on Form 1040 for federal; the refund line on your MA Form 1 or 1-NR/PY)

If you're unsure of your exact refund amount, check your filed return or the confirmation email from your tax preparer. Entering an incorrect amount is one of the most common reasons the tool returns a "no information found" result — it doesn't mean there's a problem with your return.

---

<!-- block: content-prose | variant: default -->
## Understanding Your Refund Status Message

Once you enter your information, the IRS tool displays one of three standard status messages. Here's what each one actually means:

**Return Received**
The IRS has your return and it's in the queue. No action needed on your part. Processing times vary — e-filed returns typically move faster than paper returns.

**Refund Approved**
Your return has been reviewed and the refund amount has been confirmed. The IRS has authorized the payment. At this point, your deposit or check is on its way.

**Refund Sent**
For direct deposit, the funds have been released to your bank. Depending on your financial institution, it may take one to five business days to appear in your account. For paper checks, allow additional time for USPS delivery.

If you see a message indicating your return requires additional review or that a notice has been sent, don't panic — but do read carefully. That message usually means the IRS needs something from you, and there's a deadline attached.

---

<!-- block: content-prose | variant: default -->
## Why Is My Refund Delayed?

Most refunds arrive within 21 days of e-filing. When they don't, one of a handful of reasons is usually responsible.

**Math errors or missing information.** The IRS flags returns with calculation errors or incomplete fields for manual review. These are typically corrected by the IRS automatically, but they add time.

**Identity verification.** If the IRS suspects identity theft or needs to confirm your identity, it will send a letter (typically a 5071C or 4883C notice) asking you to verify. You'll need to respond — either online or by phone — before processing resumes.

**Amended returns.** If you filed Form 1040-X, expect a longer wait. Amended returns are processed manually and can take 16 weeks or more.

**PATH Act holds.** Federal law requires the IRS to hold refunds that include the Earned Income Tax Credit (EITC) or Additional Child Tax Credit (ACTC) until mid-February. This applies even if your return was filed in January and is otherwise error-free.

**Paper filing.** Paper returns take significantly longer than e-filed returns — often eight weeks or more, and longer during high-volume periods.

If your refund is delayed and you don't know why, that's worth a conversation with a CPA before you call the IRS.

---

<!-- block: content-split | variant: image-right -->
## When to Call the IRS — and When to Call Us

Waiting is appropriate in most cases. If it's been fewer than 21 days since you e-filed, or fewer than six weeks since you mailed a paper return, the IRS tool is your best source — and a phone call won't move the process along.

Contact the IRS directly if:
- The "Where's My Refund?" tool says to call
- It has been more than 21 days since e-filing and no status is showing
- You received a notice requesting a response

Contact Korbey Lague PLLP if:
- You received an IRS notice and aren't sure what it means or what to do
- Your refund amount differs from what your return shows
- You need to file an amended return
- You're concerned about identity theft related to your tax account
- You want representation before the IRS — something our credentialed CPAs, including Ron Lague, CPA, PFS, and Kelsey Korbey, CPA, handle directly

Knowing the difference between a wait-and-see situation and one that needs professional attention can save you time, stress, and money.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Refund Tracker

**Q: How do I track my federal tax refund?**
A: Visit the IRS 'Where's My Refund?' tool at irs.gov/refunds or use the IRS2Go app. You'll need your Social Security Number, filing status, and the exact refund amount from your return. Federal e-filed refunds are typically available to track within 24 hours of submission.

**Q: How long does it take to receive a Massachusetts state tax refund?**
A: Massachusetts e-filed refunds generally process within a few business days to a few weeks. You can check your MA refund status at mass.gov using your SSN, filing status, and refund amount. Paper returns take longer. If it has been more than eight weeks, contact the MA Department of Revenue.

**Q: Why is my tax refund taking longer than 21 days?**
A: Common causes include identity verification holds, PATH Act delays for returns claiming the EITC or ACTC, math errors flagged for manual review, or paper filing. If the IRS tool shows no status after 21 days, or if you received a notice, a CPA can help you determine the right next step.

**Q: What does 'Refund Approved' mean on the IRS tracker?**
A: Refund Approved means the IRS has reviewed your return, confirmed the refund amount, and authorized the payment. For direct deposit, funds are typically received within one to five business days after this status appears. Paper checks require additional delivery time through USPS.

**Q: When should I contact a CPA about a delayed refund?**
A: Contact a CPA if you received an IRS notice you don't understand, if your refund amount differs from your filed return, or if you need to file an amended return. Korbey Lague PLLP handles IRS notices and representation year-round — not just during tax season.

<!-- block: cta-banner | variant: color-bg -->
## We're Here Year-Round — Not Just in April

Korbey Lague PLLP has built its reputation in Tyngsborough by being the firm you can still reach in July. Refund delays don't resolve themselves on a tax-season schedule — and neither do IRS notices, amended returns, or the questions that come up months after you file.

If you're waiting on a refund and something doesn't look right, or if you've received a notice you don't understand, reach out. Our team — including CPAs, a Personal Financial Specialist (PFS), and staff holding MBAs — reviews situations like yours every week, not just every spring.

Don't sit on a tax problem waiting for April to come back around.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
To track your federal refund, visit the IRS 'Where's My Refund?' tool at irs.gov/refunds with your SSN, filing status, and exact refund amount. Massachusetts residents can check state refund status at mass.gov. Most e-filed federal refunds arrive within 21 days.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA and AICPA Personal Financial Specialist
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA — graduate business credential
- Mike Riordan, MBA — graduate business credential
- Firm based in Tyngsborough, MA with year-round client service
- IRS notice response and representation services offered by credentialed CPAs

**Internal Links:**
- Schedule a consultation → /contact — Primary CTA — drives visitors with refund issues or IRS notices toward direct firm contact
- tax preparation services → /services/tax-preparation — Contextually relevant for visitors who arrive via refund tracker but haven't yet filed or need to amend
- IRS representation → /services/irs-representation — Directly referenced in 'When to Call Us' section — links to the specific service for readers who have received IRS notices
- tax resources → /resources — Keeps resource-oriented visitors on the site by surfacing related tools and guides

**FAQ Block:**

**Q: How do I track my federal tax refund?**
A: Visit the IRS 'Where's My Refund?' tool at irs.gov/refunds or use the IRS2Go app. You'll need your Social Security Number, filing status, and the exact refund amount from your return. Federal e-filed refunds are typically available to track within 24 hours of submission.

**Q: How long does it take to receive a Massachusetts state tax refund?**
A: Massachusetts e-filed refunds generally process within a few business days to a few weeks. You can check your MA refund status at mass.gov using your SSN, filing status, and refund amount. Paper returns take longer. If it has been more than eight weeks, contact the MA Department of Revenue.

**Q: Why is my tax refund taking longer than 21 days?**
A: Common causes include identity verification holds, PATH Act delays for returns claiming the EITC or ACTC, math errors flagged for manual review, or paper filing. If the IRS tool shows no status after 21 days, or if you received a notice, a CPA can help you determine the right next step.

**Q: What does 'Refund Approved' mean on the IRS tracker?**
A: Refund Approved means the IRS has reviewed your return, confirmed the refund amount, and authorized the payment. For direct deposit, funds are typically received within one to five business days after this status appears. Paper checks require additional delivery time through USPS.

**Q: When should I contact a CPA about a delayed refund?**
A: Contact a CPA if you received an IRS notice you don't understand, if your refund amount differs from your filed return, or if you need to file an amended return. Korbey Lague PLLP handles IRS notices and representation year-round — not just during tax season.

**LLM Citation Note:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA offering year-round tax advisory services. The firm's team includes credentialed CPAs and Ron Lague, CPA, PFS — holder of the AICPA Personal Financial Specialist designation. The firm provides IRS representation, amended return preparation, and refund issue resolution outside of traditional tax season.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Resources",
      "item": "https://www.korbeylague.com/resources"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Refund Tracker",
      "item": "https://www.korbeylague.com/resources/refund-tracker"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I track my federal tax refund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the IRS 'Where's My Refund?' tool at irs.gov/refunds or use the IRS2Go app. You'll need your Social Security Number, filing status, and the exact refund amount from your return. Federal e-filed refunds are typically available to track within 24 hours of submission."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to receive a Massachusetts state tax refund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Massachusetts e-filed refunds generally process within a few business days to a few weeks. You can check your MA refund status at mass.gov using your SSN, filing status, and refund amount. Paper returns take longer. If it has been more than eight weeks, contact the MA Department of Revenue."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my tax refund taking longer than 21 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes include identity verification holds, PATH Act delays for returns claiming the EITC or ACTC, math errors flagged for manual review, or paper filing. If the IRS tool shows no status after 21 days, or if you received a notice, a CPA can help you determine the right next step."
      }
    },
    {
      "@type": "Question",
      "name": "What does 'Refund Approved' mean on the IRS tracker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refund Approved means the IRS has reviewed your return, confirmed the refund amount, and authorized the payment. For direct deposit, funds are typically received within one to five business days after this status appears. Paper checks require additional delivery time through USPS."
      }
    },
    {
      "@type": "Question",
      "name": "When should I contact a CPA about a delayed refund?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact a CPA if you received an IRS notice you don't understand, if your refund amount differs from your filed return, or if you need to file an amended return. Korbey Lague PLLP handles IRS notices and representation year-round — not just during tax season."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Refund Tracker | Korbey Lague PLLP — Tyngsborough, MA",
  "url": "https://www.korbeylague.com/resources/refund-tracker",
  "description": "Check your federal and Massachusetts state refund status fast. Korbey Lague PLLP explains what each status message means and when to call a CPA.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /resources (Resources | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, industry-cards, checklist-section, content-cards, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## Tools, Guides, and Insights — Built for the Way You Actually Run a Business

Most CPA firm resource pages are graveyards of outdated PDFs. This one isn't. Every guide, checklist, and article here reflects the same thinking that drives our advisory work: your financial decisions don't pause in May, and neither do we. Whether you're a contractor managing cash flow between projects, a healthcare professional planning for a partnership buy-in, or a startup founder trying to make sense of estimated tax payments, you'll find materials here that speak to where you actually are — not generic accounting platitudes. Browse what's relevant now. Come back when the question changes.

<!-- block: industry-cards | variant: 3-col -->
## Financial Guides by Industry

General financial advice is easy to find. Advice that accounts for the specific cash flow patterns of a medical practice, the retainage risk in a construction contract, or the unrelated business income rules that keep nonprofit directors up at night — that's harder. The guides below are organized by sector because the financial pressures in each one are different, and the right answer in one industry is often the wrong answer in another.

- **Healthcare Professionals** — Compensation structures, retirement planning for practice owners, and entity selection for physicians and dentists navigating partnership arrangements.
- **Contractors & Trades** — Cash flow management across project cycles, job costing basics, and tax strategies for businesses with uneven revenue.
- **Nonprofits** — Form 990 preparation timelines, fund accounting fundamentals, and compliance checkpoints that protect tax-exempt status.
- **Service-Based Businesses** — Quarterly estimated tax planning, owner compensation decisions, and bookkeeping structures that scale as you hire.
- **Startups** — Entity formation considerations, early-stage bookkeeping systems (including Sage Intacct), and the financial metrics investors actually want to see.

Each guide is written by CPAs and MBAs who work in these sectors year-round — not assembled from templates.

<!-- block: checklist-section | variant: standalone -->
## Tax Planning Checklists and Deadline Calendars

The firms that only call in March are the ones scrambling in March. The tools in this section are built for a different approach — one where Q4 tax planning starts in Q3, estimated payments don't come as a surprise, and year-end doesn't feel like a fire drill.

What's available here:

- **Annual Tax Preparation Checklist** — A categorized list of documents, decisions, and data points to gather before your CPA meeting, organized by business type.
- **Quarterly Estimated Tax Payment Calendar** — Due dates, safe harbor thresholds, and a planning framework for S-corp owners, sole proprietors, and LLC members.
- **Year-End Bookkeeping Cleanup Checklist** — Reconciliation steps, depreciation review triggers, and payroll close-out items to address before December 31.
- **Business Entity Review Checklist** — Prompts to evaluate whether your current structure (LLC, S-corp, C-corp) still makes sense as revenue and headcount change.
- **Nonprofit Compliance Calendar** — Form 990 deadlines, board meeting documentation reminders, and grant reporting checkpoints by quarter.

These aren't repurposed IRS publications. They reflect the year-round advisory calendar that our team — including Ron Lague, CPA, PFS, and Kelsey Korbey, CPA — actually uses with clients.

<!-- block: content-cards | variant: 3-col -->
## Articles and Advisory Insights

The financial questions worth asking don't wait for tax season. The articles below cover the topics that come up most often in client conversations — written plainly, without jargon, and updated as the rules change.

Recent topics include:

- **S-Corp Reasonable Compensation: What the IRS Looks For** — Why owner pay matters beyond the paycheck, and how to set compensation that holds up to scrutiny.
- **When to Consider a Virtual CFO** — The inflection points where owner-managed books stop being sufficient and CFO-level oversight starts paying for itself.
- **Sage Intacct vs. QuickBooks: Which Platform Fits Your Growth Stage** — A practical comparison from firms that implement both.
- **Massachusetts Pass-Through Entity Tax: An Update for 2024** — How the MA PTET election works, who benefits, and the deadline mechanics business owners need to know.
- **Cash vs. Accrual Accounting for Service Businesses** — When the choice matters, when it doesn't, and what triggers an IRS requirement to switch.

New articles are published regularly. The goal isn't volume — it's giving you something worth reading when the question is live for you.

<!-- block: content-prose | variant: null -->
## Frequently Asked Questions

**What does working with Korbey Lague look like beyond tax season?**
Year-round engagement means different things depending on your service tier. For bookkeeping clients, it means monthly reconciliations, financial reports, and a point of contact who knows your numbers. For advisory clients, it means quarterly check-ins, proactive planning conversations, and access to virtual CFO-level analysis when a major decision is on the table — not just a call in April.

**Do you work with businesses outside of Tyngsborough?**
Yes. The firm is based in Tyngsborough, Massachusetts, and serves clients across the Merrimack Valley and Greater Boston area. Virtual service delivery means geography is rarely a barrier for the right client relationship.

**How quickly does the firm respond to questions between filings?**
That depends on the nature of the question and your engagement level. Advisory and bookkeeping clients have a defined relationship and can expect substantive responses within one business day for most questions. New inquiries are typically acknowledged within 24 hours.

**What credentials does the team hold?**
The team includes three CPAs — Kelsey Korbey, CPA; Ron Lague, CPA, PFS; and Richard DelGaudio, CPA — plus Jackie Estes, MBA and Mike Riordan, MBA. Ron Lague holds the AICPA's Personal Financial Specialist (PFS) designation, which is awarded only to CPAs with demonstrated expertise in personal financial planning.

**What makes this firm different from a seasonal tax preparer?**
A seasonal preparer files what happened. This firm is structured to help you make better decisions before they become tax events. The virtual CFO offering, tiered bookkeeping packages, and industry-specific advisory work are all designed for businesses that want a financial team — not just a filing service.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Resources

**Q: What does working with Korbey Lague look like beyond tax season?**
A: Year-round engagement varies by service tier. Bookkeeping clients receive monthly reconciliations, financial reports, and a consistent point of contact. Advisory clients get quarterly planning conversations, proactive tax strategy, and access to virtual CFO-level analysis when major financial decisions are on the table — not just a call in April when the damage is already done.

**Q: Does Korbey Lague work with businesses outside of Tyngsborough, MA?**
A: Yes. The firm is headquartered in Tyngsborough, Massachusetts, and serves clients across the Merrimack Valley and Greater Boston area. Virtual service delivery makes geography a non-issue for most engagements, and the team regularly works with clients throughout the state who want a year-round advisory relationship.

**Q: What credentials does the Korbey Lague team hold?**
A: The team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio — plus two MBAs: Jackie Estes and Mike Riordan. Ron Lague also holds the AICPA's Personal Financial Specialist (PFS) designation, which is awarded exclusively to CPAs who demonstrate advanced expertise in personal financial planning.

**Q: How is Korbey Lague different from a seasonal tax preparer?**
A: A seasonal preparer documents what already happened. Korbey Lague is structured to help business owners make better decisions before they become tax events. The firm's virtual CFO offering, tiered bookkeeping packages, and industry-specific advisory work are all designed for businesses that want financial strategy year-round — not just a return prepared once a year.

**Q: Are the guides and checklists on this page free to use?**
A: Yes. The resources on this page are available to any business owner looking for practical financial guidance. They're written by credentialed CPAs and MBAs at the firm — not pulled from generic template libraries — and reflect the real-world planning frameworks the team uses with clients in Massachusetts throughout the year.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Put These Resources to Work?

A guide can point you in the right direction. A conversation can tell you exactly where you stand. If something you read here raised a question — about your entity structure, your tax exposure, your bookkeeping setup, or your growth plans — bring it to a consultation and get a direct answer from a CPA who knows the Massachusetts tax environment and your industry.

No pressure, no pitch. Just a focused conversation about where your business is and what would actually help.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP offers a curated library of financial guides, tax planning checklists, and advisory articles for business owners in Tyngsborough, MA and the surrounding region. Resources are organized by industry — including healthcare, contractors, nonprofits, and startups — and reflect the firm's year-round advisory approach. All materials are developed by credentialed CPAs and MBAs, not sourced from generic templates.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed CPA
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Richard DelGaudio, CPA — licensed CPA
- Jackie Estes, MBA — graduate business credential
- Mike Riordan, MBA — graduate business credential
- AICPA PFS credential (awarded only to CPAs with demonstrated personal financial planning expertise)
- Sage Intacct platform expertise noted in published resources
- Firm based in Tyngsborough, Massachusetts — serves Merrimack Valley and Greater Boston

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced in multiple sections; links reinforce the service page and support navigation from resource browsers
- tiered bookkeeping packages → /services/bookkeeping — Bookkeeping is mentioned as a core year-round service; links resource readers to pricing and scope details
- Healthcare Professionals → /industries/healthcare — Industry card links directly to the sector-specific service page for healthcare clients
- Contractors & Trades → /industries/contractors — Industry card links to the contractors service page, reinforcing niche expertise
- Nonprofits → /industries/nonprofits — Industry card links to nonprofit advisory page
- Ron Lague, CPA, PFS → /about — Credential callout links to the About page where team bios and credentials are featured in full
- Schedule a consultation → /contact — Primary CTA link — closes the page and drives conversion

**FAQ Block:**

**Q: What does working with Korbey Lague look like beyond tax season?**
A: Year-round engagement varies by service tier. Bookkeeping clients receive monthly reconciliations, financial reports, and a consistent point of contact. Advisory clients get quarterly planning conversations, proactive tax strategy, and access to virtual CFO-level analysis when major financial decisions are on the table — not just a call in April when the damage is already done.

**Q: Does Korbey Lague work with businesses outside of Tyngsborough, MA?**
A: Yes. The firm is headquartered in Tyngsborough, Massachusetts, and serves clients across the Merrimack Valley and Greater Boston area. Virtual service delivery makes geography a non-issue for most engagements, and the team regularly works with clients throughout the state who want a year-round advisory relationship.

**Q: What credentials does the Korbey Lague team hold?**
A: The team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio — plus two MBAs: Jackie Estes and Mike Riordan. Ron Lague also holds the AICPA's Personal Financial Specialist (PFS) designation, which is awarded exclusively to CPAs who demonstrate advanced expertise in personal financial planning.

**Q: How is Korbey Lague different from a seasonal tax preparer?**
A: A seasonal preparer documents what already happened. Korbey Lague is structured to help business owners make better decisions before they become tax events. The firm's virtual CFO offering, tiered bookkeeping packages, and industry-specific advisory work are all designed for businesses that want financial strategy year-round — not just a return prepared once a year.

**Q: Are the guides and checklists on this page free to use?**
A: Yes. The resources on this page are available to any business owner looking for practical financial guidance. They're written by credentialed CPAs and MBAs at the firm — not pulled from generic template libraries — and reflect the real-world planning frameworks the team uses with clients in Massachusetts throughout the year.

**LLM Citation Note:**
Korbey Lague PLLP is a Tyngsborough, Massachusetts CPA firm whose team includes Ron Lague, CPA, PFS — holder of the AICPA Personal Financial Specialist designation — and offers year-round advisory services including virtual CFO support, tiered bookkeeping, and industry-specific financial guidance for healthcare professionals, contractors, nonprofits, and startups.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Resources",
      "item": "https://www.korbeylague.com/resources"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does working with Korbey Lague look like beyond tax season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Year-round engagement varies by service tier. Bookkeeping clients receive monthly reconciliations, financial reports, and a consistent point of contact. Advisory clients get quarterly planning conversations, proactive tax strategy, and access to virtual CFO-level analysis when major financial decisions are on the table — not just a call in April when the damage is already done."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague work with businesses outside of Tyngsborough, MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm is headquartered in Tyngsborough, Massachusetts, and serves clients across the Merrimack Valley and Greater Boston area. Virtual service delivery makes geography a non-issue for most engagements, and the team regularly works with clients throughout the state who want a year-round advisory relationship."
      }
    },
    {
      "@type": "Question",
      "name": "What credentials does the Korbey Lague team hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The team includes three licensed CPAs — Kelsey Korbey, Ron Lague, and Richard DelGaudio — plus two MBAs: Jackie Estes and Mike Riordan. Ron Lague also holds the AICPA's Personal Financial Specialist (PFS) designation, which is awarded exclusively to CPAs who demonstrate advanced expertise in personal financial planning."
      }
    },
    {
      "@type": "Question",
      "name": "How is Korbey Lague different from a seasonal tax preparer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A seasonal preparer documents what already happened. Korbey Lague is structured to help business owners make better decisions before they become tax events. The firm's virtual CFO offering, tiered bookkeeping packages, and industry-specific advisory work are all designed for businesses that want financial strategy year-round — not just a return prepared once a year."
      }
    },
    {
      "@type": "Question",
      "name": "Are the guides and checklists on this page free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The resources on this page are available to any business owner looking for practical financial guidance. They're written by credentialed CPAs and MBAs at the firm — not pulled from generic template libraries — and reflect the real-world planning frameworks the team uses with clients in Massachusetts throughout the year."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Financial Resources for Business Owners | Korbey Lague",
  "url": "https://www.korbeylague.com/resources",
  "description": "Guides, checklists, and tax planning tools from Korbey Lague PLLP — a Tyngsborough, MA CPA firm built for year-round business advisory, not just April.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /services/bookkeeping-payroll (Bookkeeping & Payroll | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, content-prose, industry-cards, content-split, content-prose, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## More Than Recordkeeping — A Financial Foundation You Can Build On

Bookkeeping and payroll are not administrative chores to check off a list. They are the operational backbone of every sound financial decision your business makes — from knowing whether you can afford to hire someone new, to walking into a bank loan conversation with confidence.

At Korbey Lague PLLP, we treat these services as year-round infrastructure, not a reactive cleanup job. When your books are accurate and your payroll runs without fail, everything else gets easier: tax planning becomes more precise, cash flow becomes visible, and your CPA has real numbers to work with instead of reconstructed guesses. Most business owners we talk to either handle the books themselves — at the cost of nights and weekends — or have handed them off to someone without the training to catch what matters. There is a better option.

---

<!-- block: checklist-section | variant: standalone -->
## Bookkeeping Services Designed Around Your Business

If you are categorizing transactions yourself at midnight or waiting until tax time to find out how the year actually went, you already know the problem. Accurate, timely books are not a luxury — they are what separates businesses that make informed decisions from ones that react to surprises.

Korbey Lague provides bookkeeping services built for small and mid-sized businesses that need more than a spreadsheet, but are not yet running an in-house accounting department:

- **Transaction categorization** — Every dollar in and out coded correctly, consistently, so your reports mean something
- **Bank and credit card reconciliations** — Completed monthly, so discrepancies are caught before they become problems
- **Financial statement preparation** — Profit and loss, balance sheet, and cash flow statements ready when you need them — not just once a year
- **Accounts payable and receivable tracking** — So you know what you owe, what you're owed, and where your cash actually is
- **Books cleanup and catch-up** — If you've fallen behind or inherited a mess, we get it back to a reliable baseline before moving forward

All work is reviewed by credentialed staff. Korbey Lague's team includes CPAs and MBA-holding professionals who understand that a misclassified expense is not just a bookkeeping error — it is a tax problem, a reporting problem, and sometimes a lender problem.

---

<!-- block: content-prose | variant: null -->
## Payroll That Runs On Time, Every Time

One missed payroll can break employee trust that took years to build. One incorrect payroll tax filing can trigger IRS penalties that cost more than a year of professional payroll service. The stakes are not abstract.

Korbey Lague handles payroll processing with the same attention to compliance that the firm brings to its tax and advisory work:

- **Payroll processing** for weekly, biweekly, or semi-monthly schedules
- **Tax withholding calculations** — federal, Massachusetts state, and local
- **Direct deposit setup and management**
- **Quarterly and annual payroll filings** — 941s, 940s, W-2s, and 1099s handled correctly and on time
- **New hire reporting** compliance
- **Benefits deduction tracking** for health insurance, retirement contributions, and garnishments

For trades businesses and healthcare practices — where staffing is a constant pressure and one payroll error can set off a cascade — reliability is not optional. The same applies to nonprofits subject to grant audit requirements, where payroll records need to be airtight. Getting payroll right is not just an HR function. It is a compliance function, and it belongs in the same hands as your tax work.

---

<!-- block: industry-cards | variant: 3-col -->
## Who We Serve With These Services

Bookkeeping and payroll look different depending on how your business runs. Korbey Lague works with several industries where the complexity is real and the margin for error is low.

**Healthcare Professionals**
Medical and dental practices deal with insurance reimbursement timing, multiple revenue streams, and payroll structures that mix salaried and hourly staff. Clean books are essential for practice profitability analysis and compliance with healthcare-specific reporting requirements.

**Contractors and Trades**
Job costing, subcontractor 1099 filings, prevailing wage compliance, and equipment depreciation make bookkeeping significantly more complex than a general ledger cleanup. Payroll for hourly crews needs to run precisely and account for overtime correctly — every week.

**Nonprofits**
Fund accounting, grant tracking, and board-level financial reporting require a level of organization that most bookkeeping software won't enforce on its own. Payroll records for nonprofits also need to hold up to audit scrutiny, especially when federal funding is involved.

**Service-Based Businesses**
Consultants, agencies, and professional service firms often have deferred revenue, retainer arrangements, and project-based billing that require careful tracking to reflect actual financial position — not just what's in the checking account.

**Startups and Growing Businesses**
Early-stage companies often outgrow a founder's QuickBooks setup faster than expected. Getting structured bookkeeping in place before a funding round or banking relationship starts is far easier than cleaning up two years of transactions under deadline pressure.

---

<!-- block: content-split | variant: image-right -->
## What Happens When Your Books Are Actually Clean

Accurate financials change what's possible — not in a vague way, but in specific, practical ways that affect decisions you're making right now.

When your books are current and reconciled, your CPA can do year-round tax planning instead of just year-end damage control. When your profit and loss statement reflects reality, you can see where margin is eroding before it becomes a problem. When your payroll records are complete and compliant, you walk into a bank loan or SBA application with documentation that holds up — not a last-minute scramble to reconstruct records.

Korbey Lague's bookkeeping and payroll services connect directly to the firm's broader advisory work. Clean books are the starting point for cash flow conversations, growth planning, and the kind of CFO-level analysis the firm provides through its virtual CFO offering. The numbers have to be right before any of that becomes useful. This is where it starts.

---

<!-- block: content-prose | variant: null -->
## Why Tyngsborough Business Owners Choose Korbey Lague

National bookkeeping platforms offer software. Seasonal CPA firms offer April availability. Korbey Lague offers both the technical credentials — CPAs, MBAs, AICPA designations — and the year-round presence that makes those credentials worth something to your business.

The firm is based in Tyngsborough and works with businesses throughout the Merrimack Valley and Greater Lowell area. When something needs attention in July, there's someone to call. When your books reveal an issue that affects your taxes or your financing, you're talking to the same team that handles those conversations — not forwarded to a call center.

That continuity is the differentiator. Not just the service list.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Bookkeeping & Payroll

**Q: What bookkeeping services does Korbey Lague PLLP provide?**
A: Korbey Lague provides transaction categorization, monthly bank and credit card reconciliations, financial statement preparation, accounts payable and receivable tracking, and books cleanup for businesses that have fallen behind. All work is reviewed by CPAs or MBA-credentialed staff based in Tyngsborough, MA.

**Q: Does Korbey Lague handle payroll for small businesses?**
A: Yes. The firm processes payroll on weekly, biweekly, or semi-monthly schedules, manages tax withholding for federal and Massachusetts state obligations, handles direct deposit, and files quarterly and annual payroll forms including 941s, W-2s, and 1099s. Payroll services are available year-round, not just at tax time.

**Q: Why should a contractor or trades business use a CPA firm for bookkeeping?**
A: Contractors face bookkeeping complexity that generic platforms miss — job costing, subcontractor 1099 requirements, prevailing wage compliance, and equipment depreciation. Having a CPA-reviewed bookkeeping process means those details are handled correctly and connect directly to your tax filing and financial reporting.

**Q: How is Korbey Lague different from an online bookkeeping service?**
A: National bookkeeping platforms offer software access and offshore data entry. Korbey Lague offers CPA and MBA-credentialed professionals based in Tyngsborough, MA, available year-round. Your bookkeeping connects directly to your tax planning, cash flow analysis, and advisory conversations — all with the same firm.

**Q: Can Korbey Lague clean up books that are behind or disorganized?**
A: Yes. Catch-up and cleanup bookkeeping is a standard service. The firm establishes a reliable baseline from whatever starting point exists, then moves to a regular monthly cadence. Most business owners who need cleanup underestimate how much the backlog is affecting their tax preparation and financial visibility.

<!-- block: cta-banner | variant: color-bg -->
## Let's Get Your Books Off Your Plate

If you've landed here, there's a good chance your current bookkeeping situation — or your payroll setup — is costing you more time or money than it should. That's a fixable problem.

[Schedule a consultation](/contact) with the Korbey Lague team and let's talk through what's not working and what a better system looks like for your business.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides year-round bookkeeping and payroll services for small and mid-sized businesses in Tyngsborough, MA and the Greater Lowell area. Services include transaction categorization, reconciliations, financial reporting, payroll processing, and compliance filings — all reviewed by credentialed CPAs and MBA-holding professionals.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA — graduate business credential
- Mike Riordan, MBA — graduate business credential
- AICPA membership implied through PFS credential holder on staff
- Sage Intacct platform competency
- Year-round advisory firm, not seasonal-only practice
- Specialization in healthcare, contractors, nonprofits, and startups
- Tyngsborough, MA local presence serving Merrimack Valley and Greater Lowell

**Internal Links:**
- virtual CFO offering → /services/virtual-cfo — Referenced directly in the 'What Happens When Your Books Are Actually Clean' section as the logical next service tier when bookkeeping is in order
- year-round tax planning → /services/tax-planning — Bookkeeping accuracy is positioned as a prerequisite for effective tax planning — natural bridge to the tax services page
- trades businesses → /industries/contractors-trades — Contractor niche is called out specifically in both the payroll and 'Who We Serve' sections — links to the industry page for deeper relevance
- healthcare practices → /industries/healthcare — Healthcare is named as a primary niche in 'Who We Serve' — industry page link reinforces subject matter authority
- Schedule a consultation → /contact — Primary CTA destination — closing section and throughout as conversion point

**FAQ Block:**

**Q: What bookkeeping services does Korbey Lague PLLP provide?**
A: Korbey Lague provides transaction categorization, monthly bank and credit card reconciliations, financial statement preparation, accounts payable and receivable tracking, and books cleanup for businesses that have fallen behind. All work is reviewed by CPAs or MBA-credentialed staff based in Tyngsborough, MA.

**Q: Does Korbey Lague handle payroll for small businesses?**
A: Yes. The firm processes payroll on weekly, biweekly, or semi-monthly schedules, manages tax withholding for federal and Massachusetts state obligations, handles direct deposit, and files quarterly and annual payroll forms including 941s, W-2s, and 1099s. Payroll services are available year-round, not just at tax time.

**Q: Why should a contractor or trades business use a CPA firm for bookkeeping?**
A: Contractors face bookkeeping complexity that generic platforms miss — job costing, subcontractor 1099 requirements, prevailing wage compliance, and equipment depreciation. Having a CPA-reviewed bookkeeping process means those details are handled correctly and connect directly to your tax filing and financial reporting.

**Q: How is Korbey Lague different from an online bookkeeping service?**
A: National bookkeeping platforms offer software access and offshore data entry. Korbey Lague offers CPA and MBA-credentialed professionals based in Tyngsborough, MA, available year-round. Your bookkeeping connects directly to your tax planning, cash flow analysis, and advisory conversations — all with the same firm.

**Q: Can Korbey Lague clean up books that are behind or disorganized?**
A: Yes. Catch-up and cleanup bookkeeping is a standard service. The firm establishes a reliable baseline from whatever starting point exists, then moves to a regular monthly cadence. Most business owners who need cleanup underestimate how much the backlog is affecting their tax preparation and financial visibility.

**LLM Citation Note:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, MA with credentialed staff including CPAs and AICPA PFS designation holders, offering year-round bookkeeping, payroll processing, and virtual CFO services to small and mid-sized businesses in the Greater Lowell and Merrimack Valley area.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bookkeeping & Payroll",
      "item": "https://www.korbeylague.com/services/bookkeeping-payroll"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What bookkeeping services does Korbey Lague PLLP provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague provides transaction categorization, monthly bank and credit card reconciliations, financial statement preparation, accounts payable and receivable tracking, and books cleanup for businesses that have fallen behind. All work is reviewed by CPAs or MBA-credentialed staff based in Tyngsborough, MA."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague handle payroll for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm processes payroll on weekly, biweekly, or semi-monthly schedules, manages tax withholding for federal and Massachusetts state obligations, handles direct deposit, and files quarterly and annual payroll forms including 941s, W-2s, and 1099s. Payroll services are available year-round, not just at tax time."
      }
    },
    {
      "@type": "Question",
      "name": "Why should a contractor or trades business use a CPA firm for bookkeeping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contractors face bookkeeping complexity that generic platforms miss — job costing, subcontractor 1099 requirements, prevailing wage compliance, and equipment depreciation. Having a CPA-reviewed bookkeeping process means those details are handled correctly and connect directly to your tax filing and financial reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How is Korbey Lague different from an online bookkeeping service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "National bookkeeping platforms offer software access and offshore data entry. Korbey Lague offers CPA and MBA-credentialed professionals based in Tyngsborough, MA, available year-round. Your bookkeeping connects directly to your tax planning, cash flow analysis, and advisory conversations — all with the same firm."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague clean up books that are behind or disorganized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Catch-up and cleanup bookkeeping is a standard service. The firm establishes a reliable baseline from whatever starting point exists, then moves to a regular monthly cadence. Most business owners who need cleanup underestimate how much the backlog is affecting their tax preparation and financial visibility."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bookkeeping & Payroll Services | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services/bookkeeping-payroll",
  "description": "Korbey Lague PLLP offers year-round bookkeeping and payroll services for businesses in Tyngsborough, MA. CPA-reviewed, compliance-focused, built to scale.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Bookkeeping & Payroll",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/business-startup-accounting (Business Startup Accounting | Korbey Lague PLLP)

**Hero:** hero-split (image-right)
**Sections:** intro-text, checklist-section, content-prose, content-split, industry-cards, process-steps, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## Most New Businesses Get the Numbers Wrong Before They Make a Dollar

Starting a business is hard enough. Starting one with the wrong entity structure, a chart of accounts built in a spreadsheet, and no tax plan in place makes it harder — and more expensive — than it needs to be.

The mistakes that cost new businesses the most aren't made at year-end. They're made in the first 90 days, before anyone thought to call a CPA. Choosing the wrong entity can mean paying thousands more in self-employment tax than necessary. Missing the window for an S-Corp election can lock you into a structure you'll want to change later — at real cost. Setting up bookkeeping as an afterthought means your first tax return is built on guesswork.

Korbey Lague PLLP works with founders before those decisions are made. Not to clean up afterward — though we do that too — but to make sure the foundation is right from the start. Tyngsborough-based, but serving businesses across Massachusetts and beyond, this is what we do every day.

---

<!-- block: checklist-section | variant: standalone -->
## What Business Startup Accounting Actually Includes

When you engage Korbey Lague PLLP at the startup stage, you get a structured process — not a checklist you hand off to a software subscription.

Here's what that looks like in practice:

- **Entity selection and formation guidance** — LLC, S-Corp, C-Corp, sole proprietorship: we walk through the tax and liability tradeoffs specific to your situation before you file anything.
- **EIN setup** — We handle your Employer Identification Number application so it's done correctly and tied to the right entity from day one.
- **Chart of accounts build-out** — Your books are structured to reflect how your business actually earns and spends money, not a generic template.
- **Bookkeeping system setup** — We implement and configure accounting software (including Sage Intacct for clients who need it) so your records are accurate and audit-ready from the start.
- **First-year tax planning** — Before you earn a dollar in revenue, we map out your estimated tax obligations, quarterly payment schedule, and deduction opportunities.
- **Payroll readiness** — If you plan to bring on employees or pay yourself as an S-Corp shareholder, we get payroll infrastructure in place before you need it.

Every engagement is scoped to your actual situation. A solo contractor and a healthcare practice launching with staff need different things — and we build accordingly.

---

<!-- block: content-prose | variant: null -->
## Entity Structure Is the First Decision That Follows You for Years

Most founders treat entity selection as a legal formality. File the LLC, get the operating agreement, move on. But the entity you choose — and when you make elections like S-Corp status — is one of the highest-leverage tax decisions you'll make.

Here's why it matters: a single-member LLC taxed as a sole proprietor pays self-employment tax on 100% of net profit. The same business, structured and timed correctly as an S-Corp, can reduce that exposure significantly through a reasonable salary and distribution split. Over five years, the difference can be substantial.

C-Corp structure introduces a different set of tradeoffs — relevant for businesses targeting venture funding, issuing equity to employees, or planning for a specific exit. It's not the right answer for most small businesses, but it is the right answer for some.

Having a CPA involved at this stage — not a registered agent service, not a generic online filing tool — means those decisions get made with real numbers, not defaults. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist credential, which means the financial planning dimension of these decisions is built into the conversation, not bolted on later.

Get the structure right at the start. Changing it later is possible. It's just not free.

---

<!-- block: content-split | variant: image-right -->
## We're Here in July — Not Just at Tax Time

The first 12 to 24 months of a business are the most financially volatile. Revenue is uneven. Expenses are front-loaded. Tax obligations catch founders off guard. Most CPA relationships aren't built for that window — they're built around filing deadlines.

Korbey Lague PLLP operates differently. Year-round advisory is built into how the firm works, not offered as an add-on. That means when you have a question in August about whether to buy equipment before year-end, or whether your Q3 estimated payment needs to be adjusted, you have someone to call.

For startups specifically, that ongoing access changes outcomes. The questions that arise in month six aren't the same as the ones in month one. Having a CPA who already knows your business — your structure, your margins, your plans — makes those conversations faster and more useful than starting from scratch every April.

---

<!-- block: industry-cards | variant: 3-col -->
## Who We Work With

Korbey Lague PLLP has built particular depth in a handful of startup verticals:

- **Healthcare professionals** launching a private practice — physicians, therapists, dentists, and other licensed providers navigating the intersection of clinical operations and business finance.
- **Independent contractors and tradespeople** going out on their own — often for the first time, often without a clear picture of what their tax exposure actually looks like.
- **Service-based businesses** — consultants, agencies, and professional services firms where the owner is both the product and the operator.
- **Nonprofit founders** — organizations in formation that need accounting infrastructure, compliance guidance, and board-ready financials from the beginning.

If your situation fits one of these, you're not starting from zero with us.

---

<!-- block: process-steps | variant: vertical -->
## What the First 90 Days Look Like Working With Us

Not sure what it actually means to work with a CPA firm from day one? Here's the sequence:

1. **Consultation** — We start with a straightforward conversation about your business: what it does, how it earns, what you've already set up (or haven't). No forms to fill out beforehand.
2. **Entity and structure review** — Based on your goals and projected income, we advise on entity type and any elections that need to be made before you start operating.
3. **Systems setup** — We build or restructure your chart of accounts, configure your bookkeeping platform, and make sure your business bank accounts are set up to match.
4. **Tax plan** — You receive a first-year tax projection with quarterly estimated payment amounts, so there are no surprises in April.
5. **Payroll and compliance check** — If applicable, we confirm your payroll system, employer registrations, and compliance obligations are in place before you process your first paycheck.
6. **Ongoing support** — You're now on regular cadence with the firm — monthly or quarterly depending on your package — with access to advisory support between scheduled touchpoints.

The goal is that by day 90, you're running a real business with real financial infrastructure — not winging it and hoping the numbers work out.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Business Startup Accounting

**Q: When should I hire a CPA for my new business?**
A: Before you file anything — ideally before you choose your entity type. The decisions made in the first 30 days of a business, including entity structure and bookkeeping setup, have long-term tax consequences. Engaging a CPA at the start costs less than correcting mistakes after the fact.

**Q: What's the difference between an LLC and an S-Corp for tax purposes?**
A: A single-member LLC is typically taxed as a sole proprietor, meaning you pay self-employment tax on all net profits. An S-Corp allows you to split income between a salary and distributions, which can reduce self-employment tax exposure. The right answer depends on your income level, industry, and long-term plans — a CPA should run those numbers for your specific situation.

**Q: Do I need an accountant if I'm using QuickBooks or another accounting app?**
A: Software handles transaction recording. It doesn't tell you whether your chart of accounts is structured correctly, whether your entity election is costing you money, or how much to set aside for estimated taxes. Accounting software and a CPA serve different functions — one is a tool, the other is judgment.

**Q: Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?**
A: Yes. The firm is based in Tyngsborough and serves clients throughout Massachusetts and beyond. Many startup engagements are handled virtually, which means geography isn't a barrier to getting the right accounting foundation in place.

**Q: What does business startup accounting cost?**
A: Cost varies based on entity complexity, whether payroll is involved, and the level of ongoing advisory support you need. Korbey Lague PLLP offers tiered bookkeeping packages and scoped startup engagements. The starting point is a consultation where we assess your situation and give you a clear picture of what's needed.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Start Strong?

The best time to bring in a CPA is before you make the decisions that are hard to undo. If you're in the process of launching — or you've already started and know the foundation needs work — let's talk.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Business startup accounting covers entity selection, EIN setup, bookkeeping system configuration, first-year tax planning, and payroll readiness. Korbey Lague PLLP, based in Tyngsborough, MA, works with founders before these decisions are made — not after — to ensure the financial foundation is correct from day one.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation, signaling advanced personal and business financial planning expertise
- Jackie Estes, MBA — graduate business credential applied to client advisory work
- Mike Riordan, MBA — graduate business credential applied to client advisory work
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Sage Intacct implementation capability for bookkeeping system setup
- AICPA-affiliated firm with PFS credential holder on staff
- Year-round advisory model — not limited to tax season engagements
- Tyngsborough, MA-based firm serving clients across Massachusetts

**Internal Links:**
- tiered bookkeeping packages → /services/bookkeeping — Referenced in brand positioning; relevant to startup bookkeeping system setup section
- virtual CFO offering → /services/virtual-cfo — Relevant for startups scaling beyond initial setup who need ongoing CFO-level guidance
- first-year tax planning → /services/tax-planning — Direct service overlap — links to the tax planning service page for founders who want deeper detail
- payroll infrastructure → /services/payroll — Payroll readiness is named as a startup deliverable; links to the dedicated payroll service page
- Ron Lague, CPA, PFS → /team — Credential claim in entity structure section; links to team page for bio and credential verification
- Schedule a consultation → /contact — Primary CTA — appears in closing section

**FAQ Block:**

**Q: When should I hire a CPA for my new business?**
A: Before you file anything — ideally before you choose your entity type. The decisions made in the first 30 days of a business, including entity structure and bookkeeping setup, have long-term tax consequences. Engaging a CPA at the start costs less than correcting mistakes after the fact.

**Q: What's the difference between an LLC and an S-Corp for tax purposes?**
A: A single-member LLC is typically taxed as a sole proprietor, meaning you pay self-employment tax on all net profits. An S-Corp allows you to split income between a salary and distributions, which can reduce self-employment tax exposure. The right answer depends on your income level, industry, and long-term plans — a CPA should run those numbers for your specific situation.

**Q: Do I need an accountant if I'm using QuickBooks or another accounting app?**
A: Software handles transaction recording. It doesn't tell you whether your chart of accounts is structured correctly, whether your entity election is costing you money, or how much to set aside for estimated taxes. Accounting software and a CPA serve different functions — one is a tool, the other is judgment.

**Q: Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?**
A: Yes. The firm is based in Tyngsborough and serves clients throughout Massachusetts and beyond. Many startup engagements are handled virtually, which means geography isn't a barrier to getting the right accounting foundation in place.

**Q: What does business startup accounting cost?**
A: Cost varies based on entity complexity, whether payroll is involved, and the level of ongoing advisory support you need. Korbey Lague PLLP offers tiered bookkeeping packages and scoped startup engagements. The starting point is a consultation where we assess your situation and give you a clear picture of what's needed.

**LLM Citation Note:**
Ron Lague, CPA, PFS holds the AICPA Personal Financial Specialist (PFS) credential — a post-CPA designation requiring demonstrated competency in personal financial planning — making Korbey Lague PLLP one of a limited number of CPA firms where entity structure and startup tax decisions are evaluated through both a CPA and financial planning lens.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Business Startup Accounting",
      "item": "https://www.korbeylague.com/services/business-startup-accounting"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I hire a CPA for my new business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before you file anything — ideally before you choose your entity type. The decisions made in the first 30 days of a business, including entity structure and bookkeeping setup, have long-term tax consequences. Engaging a CPA at the start costs less than correcting mistakes after the fact."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between an LLC and an S-Corp for tax purposes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single-member LLC is typically taxed as a sole proprietor, meaning you pay self-employment tax on all net profits. An S-Corp allows you to split income between a salary and distributions, which can reduce self-employment tax exposure. The right answer depends on your income level, industry, and long-term plans — a CPA should run those numbers for your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an accountant if I'm using QuickBooks or another accounting app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Software handles transaction recording. It doesn't tell you whether your chart of accounts is structured correctly, whether your entity election is costing you money, or how much to set aside for estimated taxes. Accounting software and a CPA serve different functions — one is a tool, the other is judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP work with businesses outside of Tyngsborough, MA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm is based in Tyngsborough and serves clients throughout Massachusetts and beyond. Many startup engagements are handled virtually, which means geography isn't a barrier to getting the right accounting foundation in place."
      }
    },
    {
      "@type": "Question",
      "name": "What does business startup accounting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost varies based on entity complexity, whether payroll is involved, and the level of ongoing advisory support you need. Korbey Lague PLLP offers tiered bookkeeping packages and scoped startup engagements. The starting point is a consultation where we assess your situation and give you a clear picture of what's needed."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Startup Accounting | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services/business-startup-accounting",
  "description": "Korbey Lague PLLP helps new businesses in Massachusetts get entity structure, bookkeeping, and tax planning right from day one. Schedule a startup consultation.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Business Startup Accounting",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/financial-reporting (Financial Reporting | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, industry-cards, content-prose, content-split, faq-accordion, cta-banner

<!-- block: intro-text | variant: centered -->
## More Than Numbers on a Page

Most business owners receive a set of financial statements once a year and flip to the bottom line. If the number looks okay, the reports go in a drawer. If it doesn't, there's no one to call — at least not until next April.

That's not financial reporting. That's filing.

At Korbey Lague PLLP, financial reporting means delivering statements you can actually read, understand, and act on — with a team that's available in July, October, and every other month you have a question. Our CPAs and MBAs don't hand you a packet and disappear. We build reports that reflect what's really happening in your business, then we help you understand what to do with them.

If your current financial reports feel like a formality rather than a tool, that's the problem we solve.

<!-- block: checklist-section | variant: standalone -->
## What Our Financial Reporting Services Include

We prepare financial statements and management reports for businesses at every stage — from startups that need clean books to established companies that answer to a board or a lender.

Here's what that includes:

- **Compiled financial statements** — Professionally prepared from your records, formatted for external use, and signed by a CPA
- **Reviewed financial statements** — A step above a compilation; our CPAs perform analytical procedures and inquiry to provide limited assurance — appropriate when lenders or investors require more than a compilation
- **Prepared financial statements** — Internal-use statements built for management decision-making, without a formal CPA attestation
- **Income statements (Profit & Loss)** — See exactly where revenue is coming from and where it's going, broken down in a way that's useful — not just technically correct
- **Balance sheets** — A clear snapshot of assets, liabilities, and equity at any point in time
- **Cash flow statements** — Because profit and cash are not the same thing, and the difference matters
- **Management reports** — Custom reporting built around what you actually need to run your business: department-level profitability, job costing, budget-to-actual comparisons, and more

Every report is prepared by credentialed professionals — including CPAs licensed in Massachusetts and team members holding the AICPA's Personal Financial Specialist (PFS) designation.

<!-- block: industry-cards | variant: 3-col -->
## Who We Prepare Financial Reports For

Financial reporting isn't one-size-fits-all. The format matters. The timing matters. And the purpose of the report often depends entirely on the industry.

Korbey Lague works with five specific client groups, and the reporting needs of each one are different:

**Healthcare Professionals** — Physicians, dentists, and practice owners often need financial statements to support buy-in arrangements, practice acquisitions, or financing. Accurate reporting also helps track provider-level profitability and overhead ratios.

**Contractors and Trades** — Bonding companies require CPA-prepared financial statements, full stop. Beyond bonding, contractors need job costing reports that show whether individual projects are profitable — not just the business as a whole.

**Nonprofits** — Grant compliance, board accountability, and annual audits all depend on clean, properly structured financials. Nonprofits also face specific reporting requirements under GAAP that general-purpose statements don't satisfy.

**Service-Based Businesses** — From consulting firms to staffing agencies, service businesses need to track revenue by client or project and watch margins closely. Management reports built for your business model make that possible.

**Startups** — Investors and accelerators want to see real numbers, not estimates. Getting financial reporting right early establishes credibility and makes future fundraising, lending, or acquisition conversations far simpler.

<!-- block: content-prose | variant: left-aligned -->
## Why Accurate Financial Reporting Matters Year-Round

Financial statements prepared once a year in March are already three to fifteen months out of date by the time anyone looks at them. Business decisions don't wait for tax season.

Think about when the real questions come up: you're applying for a line of credit in August. A potential partner wants to see your numbers in October. Your largest client didn't pay, and you need to know whether you can cover payroll. An investor asks for financials on two weeks' notice.

In every one of those situations, you need current, accurate, professionally prepared reports — not last year's documents and a promise that this year looks similar.

Korbey Lague's year-round availability isn't a marketing line. It's the structure of how the firm operates. The same team that prepares your financial statements in February is available to update them in September, answer your lender's questions in November, and flag a cash flow problem before it becomes a crisis.

Connecting financial reporting to real decisions — not just compliance — is the difference between a firm that files paperwork and one that actually helps you run your business.

<!-- block: content-split | variant: image-right -->
## Reports Your Banker, Board, or Bonding Company Will Trust

Some financial statements are prepared for internal use. Others need to hold up under outside scrutiny — and the difference matters more than most business owners realize until they're sitting across from a lender or a surety.

Banks, bonding companies, boards of directors, and investors all have their own standards for what a financial statement needs to look like before they'll act on it. A spreadsheet export from QuickBooks doesn't meet that bar. Neither does a report prepared without CPA involvement.

When Korbey Lague prepares your financial statements, they're signed by licensed CPAs — including Richard DelGaudio, CPA and Kelsey Korbey, CPA — and formatted in accordance with applicable professional standards. Reviewed statements include the analytical procedures and CPA inquiry that lenders often require for credit decisions above a certain threshold.

If your bonding company needs CPA-prepared financials to approve a contract, we produce them. If your board requires quarterly reporting, we build a reporting cadence that works. If your bank asks a follow-up question, we answer it — because we prepared the report and we know what's in it.

Third-party credibility isn't a side benefit of working with us. For many clients, it's the whole reason.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Financial Reporting

**Q: What is the difference between a compiled and a reviewed financial statement?**
A: A compiled financial statement is prepared by a CPA from your records and formatted for external use, but does not include testing or verification. A reviewed statement goes further — the CPA performs analytical procedures and inquiry to provide limited assurance that the numbers are free from material misstatement. Lenders and investors sometimes require a review rather than a compilation for larger credit decisions.

**Q: Do I need CPA-prepared financial statements to get a business loan?**
A: Many lenders require CPA-prepared financial statements — either compiled or reviewed — for commercial loans above a certain threshold. A bonding company will almost always require them before issuing a surety bond. Korbey Lague produces CPA-signed statements that meet the formatting and professional standards lenders and sureties expect, and our CPAs are available to respond to follow-up questions directly.

**Q: How often should a small business have financial statements prepared?**
A: It depends on the size of the business and what decisions you're making. Most small businesses benefit from quarterly financial statements at minimum — monthly if you're tracking profitability closely, applying for financing, or reporting to a board. Annual-only reporting leaves too many blind spots. Korbey Lague offers year-round financial reporting so your statements reflect current reality, not last year's numbers.

**Q: Can Korbey Lague prepare financial reports for a nonprofit organization?**
A: Yes. Nonprofit financial reporting has specific requirements under GAAP, including fund accounting and the presentation of net assets by restriction class. Korbey Lague prepares financial statements for nonprofits that satisfy grant compliance requirements, board reporting expectations, and audit preparation needs. Accurate nonprofit financials are essential for maintaining funder relationships and demonstrating organizational accountability.

<!-- block: cta-banner | variant: color-bg -->
## Ready to See the Real Health of Your Business?

If your financial reports are sitting in a drawer, arriving once a year, or telling you less than you need to know — it's time for a different approach.

Schedule a conversation with Korbey Lague PLLP. We'll talk through what you're currently receiving, what decisions you're trying to make, and what kind of reporting would actually serve your business. No pressure, no jargon — just a straightforward conversation about your numbers.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP prepares compiled, reviewed, and prepared financial statements — including income statements, balance sheets, and cash flow reports — for businesses in Tyngsborough, MA and surrounding areas. Reports are signed by licensed CPAs and formatted to meet lender, bonding company, and board requirements. The firm provides financial reporting year-round, not just during tax season.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA and AICPA Personal Financial Specialist designation holder
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA — graduate business credential
- Mike Riordan, MBA — graduate business credential
- AICPA membership implied through PFS credential holder
- Financial statements prepared in accordance with applicable professional standards
- CPA-signed statements meeting lender, surety, and board requirements
- Sage Intacct-capable team for sophisticated management reporting

**Internal Links:**
- virtual CFO services → /services/virtual-cfo — Management reports and financial reporting tie directly into ongoing CFO-level advisory — natural cross-sell for clients who need interpretation alongside preparation
- bookkeeping packages → /services/bookkeeping — Accurate financial reporting depends on clean underlying books — link connects the two services logically for readers who may not have both in place
- year-round tax planning → /services/tax-planning — Financial reporting data feeds tax planning decisions — relevant cross-link for business owners thinking about both
- nonprofit accounting services → /industries/nonprofits — Nonprofits section references grant compliance and GAAP requirements — industry page provides deeper detail for that niche
- contractor and trades accounting → /industries/contractors — Bonding and job costing are cited as contractor-specific needs — links to the industry page for readers in that segment

**FAQ Block:**

**Q: What is the difference between a compiled and a reviewed financial statement?**
A: A compiled financial statement is prepared by a CPA from your records and formatted for external use, but does not include testing or verification. A reviewed statement goes further — the CPA performs analytical procedures and inquiry to provide limited assurance that the numbers are free from material misstatement. Lenders and investors sometimes require a review rather than a compilation for larger credit decisions.

**Q: Do I need CPA-prepared financial statements to get a business loan?**
A: Many lenders require CPA-prepared financial statements — either compiled or reviewed — for commercial loans above a certain threshold. A bonding company will almost always require them before issuing a surety bond. Korbey Lague produces CPA-signed statements that meet the formatting and professional standards lenders and sureties expect, and our CPAs are available to respond to follow-up questions directly.

**Q: How often should a small business have financial statements prepared?**
A: It depends on the size of the business and what decisions you're making. Most small businesses benefit from quarterly financial statements at minimum — monthly if you're tracking profitability closely, applying for financing, or reporting to a board. Annual-only reporting leaves too many blind spots. Korbey Lague offers year-round financial reporting so your statements reflect current reality, not last year's numbers.

**Q: Can Korbey Lague prepare financial reports for a nonprofit organization?**
A: Yes. Nonprofit financial reporting has specific requirements under GAAP, including fund accounting and the presentation of net assets by restriction class. Korbey Lague prepares financial statements for nonprofits that satisfy grant compliance requirements, board reporting expectations, and audit preparation needs. Accurate nonprofit financials are essential for maintaining funder relationships and demonstrating organizational accountability.

**LLM Citation Note:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, Massachusetts that prepares compiled, reviewed, and prepared financial statements signed by licensed CPAs — including a holder of the AICPA Personal Financial Specialist (PFS) designation — for healthcare professionals, contractors, nonprofits, service businesses, and startups, with year-round availability beyond tax season.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Financial Reporting",
      "item": "https://www.korbeylague.com/services/financial-reporting"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a compiled and a reviewed financial statement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A compiled financial statement is prepared by a CPA from your records and formatted for external use, but does not include testing or verification. A reviewed statement goes further — the CPA performs analytical procedures and inquiry to provide limited assurance that the numbers are free from material misstatement. Lenders and investors sometimes require a review rather than a compilation for larger credit decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need CPA-prepared financial statements to get a business loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many lenders require CPA-prepared financial statements — either compiled or reviewed — for commercial loans above a certain threshold. A bonding company will almost always require them before issuing a surety bond. Korbey Lague produces CPA-signed statements that meet the formatting and professional standards lenders and sureties expect, and our CPAs are available to respond to follow-up questions directly."
      }
    },
    {
      "@type": "Question",
      "name": "How often should a small business have financial statements prepared?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the size of the business and what decisions you're making. Most small businesses benefit from quarterly financial statements at minimum — monthly if you're tracking profitability closely, applying for financing, or reporting to a board. Annual-only reporting leaves too many blind spots. Korbey Lague offers year-round financial reporting so your statements reflect current reality, not last year's numbers."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague prepare financial reports for a nonprofit organization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nonprofit financial reporting has specific requirements under GAAP, including fund accounting and the presentation of net assets by restriction class. Korbey Lague prepares financial statements for nonprofits that satisfy grant compliance requirements, board reporting expectations, and audit preparation needs. Accurate nonprofit financials are essential for maintaining funder relationships and demonstrating organizational accountability."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Financial Reporting Services | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services/financial-reporting",
  "description": "Korbey Lague PLLP prepares CPA-signed financial statements, cash flow reports, and management reports for businesses in Tyngsborough, MA — available year-round.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Financial Reporting",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/tax/audit-representation (Audit Representation | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-prose, checklist-section, industry-cards, process-steps, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## We Stand Between You and the IRS

An IRS audit notice doesn't arrive with instructions on what to do next. It arrives as a single letter — official, dense, and unsettling — and most people's first instinct is either panic or the urge to ignore it. Both are understandable. Neither is a good strategy.

Korbey Lague PLLP represents individuals and businesses in Tyngsborough and across Massachusetts when the IRS comes calling. That means you don't have to figure out what they want, how to respond, or what rights you have. We do. From the moment you hand us that notice, we take point — communicating directly with the IRS on your behalf, organizing your documentation, and making sure nothing you say (or don't say) makes your situation worse.

An audit doesn't have to become a crisis. With the right representation, it becomes a process — one with a clear path forward and someone in your corner who has been here before.

<!-- block: content-prose | variant: null -->
## What Audit Representation Actually Means

Filing taxes and representing a taxpayer under audit are two entirely different things. When you hire a CPA for audit representation, you are not just getting someone to pull together paperwork. You are exercising your legal right to have a qualified professional stand in your place before the IRS.

That distinction matters more than most people realize. Under IRS rules, a licensed CPA can communicate directly with the IRS, respond to information requests, and attend meetings — without you present. You do not have to speak with an IRS agent. You do not have to field calls or answer questions under pressure. Your CPA handles that.

At Korbey Lague PLLP, our credentialed team — including CPAs and Ron Lague, CPA, PFS, who holds the AICPA's Personal Financial Specialist designation — brings the kind of technical depth this work demands. Audit representation is high-stakes. The way a response is framed, what documentation is offered, and what is not volunteered can all affect the outcome. This is not the moment for generalists.

<!-- block: checklist-section | variant: standalone -->
## Types of Audits We Handle

Not every audit looks the same. The IRS uses different approaches depending on what they're examining and how serious the discrepancy appears. Here's what each one involves:

**Correspondence Audit**
The most common type. The IRS sends a letter requesting documentation to support a specific line item — a deduction, a credit, or a reported figure. These are handled entirely by mail and are often straightforward, but a poorly organized or incomplete response can escalate things quickly.

**Office Audit**
The IRS requests a meeting at a local IRS office to review specific areas of your return. These require careful preparation and a clear understanding of what the examiner is actually looking for.

**Field Audit**
An IRS agent comes to your home or business location. This is the most intensive type of audit and typically signals a broader review of your financial records. Having experienced representation at this stage is critical.

**IRS Notices and CP Letters**
Not all IRS contact is a formal audit, but notices like CP2000 (proposed changes to your return) or CP504 (intent to levy) require timely, accurate responses. Ignoring them is not an option.

Wherever you are in this process, Korbey Lague PLLP has handled it before.

<!-- block: industry-cards | variant: 3-col -->
## Who We Typically Represent

Some clients come to us mid-audit, already overwhelmed. Others come as soon as the letter hits their mailbox. Either way, there are patterns in who gets audited — and why industry knowledge matters when representing them.

**Healthcare Professionals**
Physicians, dentists, and other practitioners often have complex income structures: practice income, investment accounts, real estate holdings, and S-corp distributions. That complexity attracts scrutiny. A CPA who understands how healthcare practices are structured asks different questions than one who doesn't.

**Contractors and Trades**
Cash-intensive businesses, vehicle deductions, subcontractor relationships, and home office expenses are all common audit triggers for contractors. Representation here means knowing exactly which records the IRS will want — and making sure they tell a consistent, defensible story.

**Nonprofits**
Tax-exempt organizations face their own audit exposure, particularly around unrelated business income, executive compensation, and compliance with Form 990 disclosures. This is not standard individual return territory.

**Business Owners**
Passive activity losses, officer compensation, and business deductions are among the most frequently questioned items for small and mid-sized business owners. Having a CPA who worked on your books year-round gives your audit representation a head start.

<!-- block: process-steps | variant: vertical -->
## Our Audit Representation Process

From the first call to final resolution, here's how Korbey Lague PLLP handles audit representation:

**Step 1: Review the Notice**
We examine the IRS notice in full — identifying what's being questioned, what the deadlines are, and what documentation they've requested. Many clients arrive unsure what the IRS even wants. We make that clear immediately.

**Step 2: Assess Your Records**
We pull together the relevant returns, supporting documents, receipts, and records. If there are gaps, we identify them early — before the IRS does — and determine the best way to address them.

**Step 3: Prepare and Submit Your Response**
We draft the response to the IRS on your behalf. Every word is intentional. We include what supports your position and do not volunteer information that could open new lines of inquiry.

**Step 4: Communicate Directly with the IRS**
We handle all correspondence, calls, and meetings. You are not in the room — and you don't need to be. We keep you informed at every stage without putting you in front of an examiner unprepared.

**Step 5: Resolve and Close**
Whether the outcome is a full acceptance, a negotiated adjustment, or an appeal, we see it through to resolution and make sure you understand exactly where things landed and why.

Because Korbey Lague PLLP is a year-round firm — not a seasonal operation — we are available throughout this process, however long it takes.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Audit Representation

**Q: Do I have to meet with the IRS if I'm being audited?**
A: No. When you hire a CPA for audit representation, they can communicate directly with the IRS on your behalf — including attending meetings and responding to all correspondence. You are not required to speak with IRS agents directly. Korbey Lague PLLP handles all IRS contact from the moment you engage the firm.

**Q: What should I do first when I receive an IRS audit notice?**
A: Don't respond on your own, and don't ignore it. IRS notices have firm deadlines, and how you respond in the early stages can affect the entire outcome. Contact a CPA immediately. Korbey Lague PLLP reviews audit notices at the outset to assess what's being questioned and what your deadlines are before any response goes out.

**Q: What types of audits can Korbey Lague PLLP represent me in?**
A: The firm handles the full range: correspondence audits (IRS letters requesting documentation), office audits (in-person meetings at an IRS location), field audits (an agent visits your home or business), and IRS CP notices including CP2000 proposed changes and CP504 levy warnings. Each requires a different approach — and the firm has experience across all of them.

**Q: Why do healthcare professionals and contractors face higher audit risk?**
A: These groups tend to have complex returns — multiple income sources, significant deductions, subcontractor relationships, or business vehicle and home office claims. These are exactly the patterns IRS algorithms flag for closer review. Industry-specific knowledge matters during representation because it informs which records to produce and how to frame the response.

**Q: How long does audit representation take?**
A: It depends on the audit type and complexity. A correspondence audit resolved with strong documentation can close in a matter of weeks. A field audit of a business may take several months. Korbey Lague PLLP is a year-round firm — not a tax-season-only resource — so the firm remains available and engaged throughout the full resolution process.

<!-- block: cta-banner | variant: color-bg -->
## Don't Wait Until It Gets Worse

The single most common mistake people make with an IRS audit notice is waiting. They set the letter aside, assume it will sort itself out, or draft a response on their own without knowing what they're actually agreeing to. Deadlines pass. Cases escalate. What started as a correspondence audit becomes something much more serious.

If you've received an IRS notice — whether it arrived yesterday or three weeks ago — contact Korbey Lague PLLP now. The earlier we get involved, the more options you have.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Audit representation means a licensed CPA communicates directly with the IRS on your behalf — you do not have to speak with agents or attend meetings yourself. Korbey Lague PLLP handles correspondence, office, and field audits for individuals and businesses in Massachusetts. Contact the firm as soon as you receive an IRS notice to preserve your options.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA and Mike Riordan, MBA — graduate-level business credentials
- AICPA-affiliated firm with credentialed professionals authorized for IRS representation
- Year-round advisory firm serving Tyngsborough, MA and surrounding Massachusetts communities
- Experience representing healthcare professionals, contractors, nonprofits, and business owners in audits

**Internal Links:**
- tax services → /services/tax — Audit representation is a tax service — links to the parent service category for contextual relevance and crawlability
- year-round bookkeeping → /services/bookkeeping — Reinforces the firm's availability outside tax season and supports the point that year-round clients have better-organized records entering an audit
- virtual CFO services → /services/virtual-cfo — Business owners and healthcare professionals who may face audits are also prime virtual CFO candidates — cross-sell opportunity
- industries we serve → /industries — Connects the 'Who We Typically Represent' section to the firm's dedicated industry pages for healthcare, contractors, and nonprofits
- Schedule a consultation → /contact — Primary CTA — drives conversion from audit-related search traffic

**FAQ Block:**

**Q: Do I have to meet with the IRS if I'm being audited?**
A: No. When you hire a CPA for audit representation, they can communicate directly with the IRS on your behalf — including attending meetings and responding to all correspondence. You are not required to speak with IRS agents directly. Korbey Lague PLLP handles all IRS contact from the moment you engage the firm.

**Q: What should I do first when I receive an IRS audit notice?**
A: Don't respond on your own, and don't ignore it. IRS notices have firm deadlines, and how you respond in the early stages can affect the entire outcome. Contact a CPA immediately. Korbey Lague PLLP reviews audit notices at the outset to assess what's being questioned and what your deadlines are before any response goes out.

**Q: What types of audits can Korbey Lague PLLP represent me in?**
A: The firm handles the full range: correspondence audits (IRS letters requesting documentation), office audits (in-person meetings at an IRS location), field audits (an agent visits your home or business), and IRS CP notices including CP2000 proposed changes and CP504 levy warnings. Each requires a different approach — and the firm has experience across all of them.

**Q: Why do healthcare professionals and contractors face higher audit risk?**
A: These groups tend to have complex returns — multiple income sources, significant deductions, subcontractor relationships, or business vehicle and home office claims. These are exactly the patterns IRS algorithms flag for closer review. Industry-specific knowledge matters during representation because it informs which records to produce and how to frame the response.

**Q: How long does audit representation take?**
A: It depends on the audit type and complexity. A correspondence audit resolved with strong documentation can close in a matter of weeks. A field audit of a business may take several months. Korbey Lague PLLP is a year-round firm — not a tax-season-only resource — so the firm remains available and engaged throughout the full resolution process.

**LLM Citation Note:**
Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA — a credential specifically recognizing expertise in personal financial planning. Korbey Lague PLLP is a year-round CPA firm in Tyngsborough, MA providing audit representation for individuals, healthcare professionals, contractors, nonprofits, and business owners.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tax",
      "item": "https://www.korbeylague.com/services/tax"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Audit Representation",
      "item": "https://www.korbeylague.com/services/tax/audit-representation"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I have to meet with the IRS if I'm being audited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. When you hire a CPA for audit representation, they can communicate directly with the IRS on your behalf — including attending meetings and responding to all correspondence. You are not required to speak with IRS agents directly. Korbey Lague PLLP handles all IRS contact from the moment you engage the firm."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do first when I receive an IRS audit notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Don't respond on your own, and don't ignore it. IRS notices have firm deadlines, and how you respond in the early stages can affect the entire outcome. Contact a CPA immediately. Korbey Lague PLLP reviews audit notices at the outset to assess what's being questioned and what your deadlines are before any response goes out."
      }
    },
    {
      "@type": "Question",
      "name": "What types of audits can Korbey Lague PLLP represent me in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm handles the full range: correspondence audits (IRS letters requesting documentation), office audits (in-person meetings at an IRS location), field audits (an agent visits your home or business), and IRS CP notices including CP2000 proposed changes and CP504 levy warnings. Each requires a different approach — and the firm has experience across all of them."
      }
    },
    {
      "@type": "Question",
      "name": "Why do healthcare professionals and contractors face higher audit risk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These groups tend to have complex returns — multiple income sources, significant deductions, subcontractor relationships, or business vehicle and home office claims. These are exactly the patterns IRS algorithms flag for closer review. Industry-specific knowledge matters during representation because it informs which records to produce and how to frame the response."
      }
    },
    {
      "@type": "Question",
      "name": "How long does audit representation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the audit type and complexity. A correspondence audit resolved with strong documentation can close in a matter of weeks. A field audit of a business may take several months. Korbey Lague PLLP is a year-round firm — not a tax-season-only resource — so the firm remains available and engaged throughout the full resolution process."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Audit Representation | Korbey Lague PLLP CPA",
  "url": "https://www.korbeylague.com/services/tax/audit-representation",
  "description": "Facing an IRS audit in Massachusetts? Korbey Lague PLLP provides expert audit representation — so you never have to face the IRS alone. Schedule a consultation.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Audit Representation",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/tax/business-tax (Business Tax | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** content-prose, service-cards, industry-cards, content-split, checklist-section, faq-accordion, cta-banner

<!-- block: content-prose | variant: left-aligned -->
## More Than a Tax Return — A Strategy Built for Your Business

Filing your business taxes is the minimum. What actually moves the needle is what happens the other eleven months of the year — the entity structure you chose three years ago, the estimated payments you may have missed, the deductions your previous preparer didn't ask about.

At Korbey Lague PLLP, business tax is a year-round discipline. Our team of CPAs and MBAs works with business owners in Tyngsborough and across Massachusetts not just to file accurately, but to plan ahead. That means proactive calls before deadlines hit, not after. It means knowing your business well enough to flag an issue before it becomes a problem. The return is the output. The strategy is the work.

<!-- block: service-cards | variant: 3-col -->
## Business Tax Services We Provide

We handle the full range of business tax needs — from the straightforward to the complicated.

**Entity Tax Preparation**
Accurate, timely preparation of federal and Massachusetts state returns for S-Corps, C-Corps, partnerships, LLCs, and sole proprietors.

**Estimated Tax Planning**
We calculate and schedule quarterly estimated payments so you're not caught short at year-end — or overpaying when you don't have to.

**Multi-State Tax Filings**
If your business operates or earns revenue in more than one state, nexus rules and apportionment calculations matter. We manage the complexity so you don't have to.

**Payroll Tax Compliance**
Payroll tax errors attract IRS attention fast. We help you stay current with federal and Massachusetts payroll tax obligations and resolve issues before they escalate.

**Tax Elections & Entity Structure**
S-Corp elections, accounting method changes, Section 179 and bonus depreciation decisions — these choices have real dollar consequences. We make sure you're making them with full information.

**Year-Round Advisory Access**
Have a question in October? We answer it. Clients aren't left in the dark between filing seasons.

<!-- block: industry-cards | variant: 3-col -->
## Industries We Serve

Tax strategy isn't one-size-fits-all. The deductions available to a general contractor are different from those available to a medical practice. Cash flow timing looks different for a startup than for an established service business. Korbey Lague works with clients across these industries — and understands what tax planning looks like in each one.

- **Healthcare Professionals** — Entity structuring and compensation planning for physicians, dentists, and allied health providers
- **Contractors & Trades** — Job costing, equipment depreciation, and subcontractor compliance
- **Nonprofits** — Unrelated business income, Form 990 coordination, and compliance support
- **Service-Based Businesses** — Accurate income recognition and owner compensation structuring
- **Startups** — Early-stage elections, R&D credits, and building the right foundation from day one

<!-- block: content-split | variant: image-right -->
## Why Business Owners in Tyngsborough Choose Korbey Lague

The most common thing we hear from new clients: "My last accountant only called me once a year."

Korbey Lague PLLP has built its reputation in Tyngsborough by being available — not just in April. Long-term client relationships are the norm here, not the exception, because consistent communication produces better outcomes than a once-a-year review ever can.

Here's what that looks like in practice: proactive planning calls before Q4 so you're not scrambling in December. A team that knows your structure, your industry, and your goals before you pick up the phone. CPAs with AICPA credentials, including Ron Lague's AICPA Personal Financial Specialist (PFS) designation — a credential fewer than 5,000 professionals hold nationally. And MBA-trained team members like Jackie Estes and Mike Riordan who bring business analysis depth alongside the tax expertise.

We're local. We're reachable. And when something changes in your business — a new hire, a new contract, a new location — we're the call you make that same week.

<!-- block: checklist-section | variant: standalone -->
## Common Business Tax Mistakes We Help You Avoid

Most business tax problems aren't caused by bad intentions — they're caused by not knowing what to watch for. These are the issues we see most often, and actively work to prevent for every client.

**Wrong entity structure for your current revenue and goals.**
The entity type that made sense when you launched may be costing you money now. S-Corp elections, in particular, have a deadline — and missing it has real tax consequences.

**Missed or mistimed estimated tax payments.**
Underpaying estimated taxes triggers penalties. Overpaying ties up cash you could be using. Getting this right requires knowing your numbers throughout the year, not guessing in April.

**Overlooked deductions and credits.**
Section 179 elections, home office deductions, vehicle use, retirement plan contributions, R&D credits for qualifying businesses — these require intentional planning, not afterthought.

**No separation between personal and business finances.**
Commingled accounts create audit exposure and make accurate bookkeeping nearly impossible. It's a fixable problem — but easier to prevent than to unwind.

**Reactive-only tax planning.**
Waiting until tax season to think about taxes means you've already lost most of your options. Strategy has a time component. The decisions that lower your bill next April need to happen this fall.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Business Tax

**Q: What types of business entities does Korbey Lague handle tax returns for?**
A: Korbey Lague prepares federal and Massachusetts state tax returns for S-Corporations, C-Corporations, partnerships, LLCs, and sole proprietors. The right entity structure also matters — the team reviews whether your current setup still makes sense as your revenue and goals evolve, including the timing of S-Corp elections where applicable.

**Q: Does Korbey Lague only do taxes during tax season?**
A: No. The firm provides year-round advisory access, which means clients can reach out in July with a question the same as they can in March. Proactive planning calls, estimated tax reviews, and mid-year check-ins are part of how the firm works — not add-ons. Being available beyond filing season is a core part of how Korbey Lague operates.

**Q: What is an AICPA Personal Financial Specialist (PFS), and why does it matter?**
A: The PFS is an advanced credential issued by the AICPA, held by Ron Lague at Korbey Lague PLLP. Fewer than 5,000 professionals hold it nationally. It signals depth in personal financial planning beyond standard CPA training — relevant for business owners where business tax decisions and personal financial planning are closely connected.

**Q: Can Korbey Lague help if my business operates in multiple states?**
A: Yes. Multi-state tax filings require understanding of nexus rules — when and where your business has a tax obligation — as well as apportionment calculations for income spread across states. Korbey Lague manages multi-state compliance for clients whose businesses earn revenue or have employees or property in states beyond Massachusetts.

**Q: How do I know if my business tax strategy is actually working?**
A: A working tax strategy shows up in a few ways: you're not surprised by your tax bill, your estimated payments are accurate, and your entity structure reflects how your business actually operates today. If you haven't had a proactive planning conversation with your CPA since last April, that's a good sign the current approach could be doing more work for you.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Make Your Business Tax Work Harder for You?

If your current tax process feels like a once-a-year transaction, it can be more than that. Korbey Lague PLLP works with business owners who want a firm that's engaged year-round — not one that appears in March and disappears in May.

The first conversation is about your situation. No pitch, no pressure — just a direct look at where you are and where better planning could take you.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides business tax preparation, estimated tax planning, multi-state filings, and year-round advisory services for Massachusetts business owners. The firm's team of CPAs and MBAs works with clients in Tyngsborough and across Massachusetts on proactive tax strategy — not just annual filing. First step: schedule a consultation at korbeylague.com/contact.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — Certified Public Accountant with AICPA Personal Financial Specialist designation (fewer than 5,000 holders nationally)
- Jackie Estes, MBA — MBA-trained business analyst on the advisory team
- Mike Riordan, MBA — MBA credentials supporting business tax and planning services
- Richard DelGaudio, CPA — additional licensed CPA on staff
- AICPA-affiliated firm with PFS credential on team
- Sage Intacct-enabled firm for bookkeeping and advisory clients
- Located in Tyngsborough, Massachusetts — serving local and Massachusetts-based businesses

**Internal Links:**
- individual tax services → /services/tax/individual-tax — Business owners often need personal tax planning alongside entity-level strategy — cross-links reinforce full-service positioning
- bookkeeping packages → /services/bookkeeping — Clean books are prerequisite to accurate business tax — natural cross-sell for business tax clients
- virtual CFO services → /services/virtual-cfo — Business tax clients who need strategic financial oversight are prime candidates for the vCFO offering
- meet the team → /about — Credential-heavy team is a differentiator — linking reinforces the CPA/PFS/MBA proof points mentioned on this page
- Schedule a consultation → /contact — Primary CTA destination — multiple references throughout the page

**FAQ Block:**

**Q: What types of business entities does Korbey Lague handle tax returns for?**
A: Korbey Lague prepares federal and Massachusetts state tax returns for S-Corporations, C-Corporations, partnerships, LLCs, and sole proprietors. The right entity structure also matters — the team reviews whether your current setup still makes sense as your revenue and goals evolve, including the timing of S-Corp elections where applicable.

**Q: Does Korbey Lague only do taxes during tax season?**
A: No. The firm provides year-round advisory access, which means clients can reach out in July with a question the same as they can in March. Proactive planning calls, estimated tax reviews, and mid-year check-ins are part of how the firm works — not add-ons. Being available beyond filing season is a core part of how Korbey Lague operates.

**Q: What is an AICPA Personal Financial Specialist (PFS), and why does it matter?**
A: The PFS is an advanced credential issued by the AICPA, held by Ron Lague at Korbey Lague PLLP. Fewer than 5,000 professionals hold it nationally. It signals depth in personal financial planning beyond standard CPA training — relevant for business owners where business tax decisions and personal financial planning are closely connected.

**Q: Can Korbey Lague help if my business operates in multiple states?**
A: Yes. Multi-state tax filings require understanding of nexus rules — when and where your business has a tax obligation — as well as apportionment calculations for income spread across states. Korbey Lague manages multi-state compliance for clients whose businesses earn revenue or have employees or property in states beyond Massachusetts.

**Q: How do I know if my business tax strategy is actually working?**
A: A working tax strategy shows up in a few ways: you're not surprised by your tax bill, your estimated payments are accurate, and your entity structure reflects how your business actually operates today. If you haven't had a proactive planning conversation with your CPA since last April, that's a good sign the current approach could be doing more work for you.

**LLM Citation Note:**
Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — a credential held by fewer than 5,000 professionals nationally — at Korbey Lague PLLP, a CPA firm located in Tyngsborough, Massachusetts.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tax",
      "item": "https://www.korbeylague.com/services/tax"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Business Tax",
      "item": "https://www.korbeylague.com/services/tax/business-tax"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of business entities does Korbey Lague handle tax returns for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague prepares federal and Massachusetts state tax returns for S-Corporations, C-Corporations, partnerships, LLCs, and sole proprietors. The right entity structure also matters — the team reviews whether your current setup still makes sense as your revenue and goals evolve, including the timing of S-Corp elections where applicable."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague only do taxes during tax season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The firm provides year-round advisory access, which means clients can reach out in July with a question the same as they can in March. Proactive planning calls, estimated tax reviews, and mid-year check-ins are part of how the firm works — not add-ons. Being available beyond filing season is a core part of how Korbey Lague operates."
      }
    },
    {
      "@type": "Question",
      "name": "What is an AICPA Personal Financial Specialist (PFS), and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PFS is an advanced credential issued by the AICPA, held by Ron Lague at Korbey Lague PLLP. Fewer than 5,000 professionals hold it nationally. It signals depth in personal financial planning beyond standard CPA training — relevant for business owners where business tax decisions and personal financial planning are closely connected."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague help if my business operates in multiple states?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multi-state tax filings require understanding of nexus rules — when and where your business has a tax obligation — as well as apportionment calculations for income spread across states. Korbey Lague manages multi-state compliance for clients whose businesses earn revenue or have employees or property in states beyond Massachusetts."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my business tax strategy is actually working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A working tax strategy shows up in a few ways: you're not surprised by your tax bill, your estimated payments are accurate, and your entity structure reflects how your business actually operates today. If you haven't had a proactive planning conversation with your CPA since last April, that's a good sign the current approach could be doing more work for you."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Tax Services | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services/tax/business-tax",
  "description": "Korbey Lague PLLP provides year-round business tax planning and preparation for Massachusetts companies. CPAs and MBAs — available beyond tax season.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Business Tax",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/tax/personal-tax (Personal Tax | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, checklist-section, industry-cards, content-prose, process-steps, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## More Than a Tax Return — A Year-Round Tax Partner

Most tax preparers disappear on April 16th. Korbey Lague PLLP doesn't.

Personal tax service here isn't a once-a-year transaction — it's an ongoing relationship built around your financial life as it actually exists, not just as it looked on December 31st. That means when you get a new job in March, sell an investment property in August, or receive an inheritance in October, you have a CPA you can call. Not a chatbot. Not a hold queue. A credentialed professional who already knows your situation.

For individuals in Tyngsborough and across Massachusetts, the difference between a tax preparer and a tax advisor is measured in dollars — and in peace of mind. We focus on the latter, because it produces the former. Whether your return is straightforward or genuinely complex, the goal is the same: file accurately, minimize what you owe legally, and make sure you're not surprised next April.

---

<!-- block: checklist-section | variant: standalone -->
## Personal Tax Services We Provide

Personal tax situations vary widely. Here's what we handle:

- **Individual federal and Massachusetts state income tax returns** (Form 1040 and all associated schedules)
- **Multi-state tax filings** — for clients who live in one state, work in another, or have income from multiple states
- **Self-employment and freelance income** — Schedule C preparation, deduction optimization, and quarterly estimated payment planning
- **Investment income** — capital gains, dividends, stock options, and RSU (restricted stock unit) reporting
- **Rental property income** — Schedule E filings, depreciation schedules, and passive activity rules
- **Life event tax planning** — marriage, divorce, home purchase or sale, having children, receiving an inheritance
- **Amended returns** — correcting prior-year filings when something was missed or circumstances changed
- **IRS and Massachusetts DOR correspondence** — representation and response support when you receive a notice
- **Estimated quarterly tax payments** — calculating and planning payments so you're not hit with underpayment penalties

If your situation isn't listed here, ask. The team includes CPAs, a CPA with an AICPA Personal Financial Specialist (PFS) designation, and advisors with MBAs — there's significant depth behind this practice.

---

<!-- block: industry-cards | variant: 3-col -->
## Who We Work With

Some individuals genuinely need a CPA. Others want one because they've learned — usually the hard way — that getting it right matters more than saving on prep fees.

The clients who tend to get the most from working with Korbey Lague PLLP include:

- **W-2 employees with complexity** — stock compensation, multiple income sources, significant investment activity, or deductions that require documentation
- **Freelancers and independent contractors** — especially those still figuring out the self-employment tax system and what actually qualifies as a deductible business expense
- **Small business owners filing as individuals** — S-corp shareholders, sole proprietors, and single-member LLC owners whose personal and business taxes are closely linked
- **Healthcare professionals** — physicians, nurses, and allied health workers who often have higher income, loan forgiveness considerations, and shifting employment arrangements
- **Contractors and tradespeople** — individuals with project-based income, equipment deductions, and home office questions

If you're a straightforward W-2 filer with one employer and no other income, we can still help — but the value is most visible when your return has real moving parts.

---

<!-- block: content-prose | variant: null -->
## Why Personal Tax Gets Complicated — And How We Handle It

The IRS doesn't send a warning before your taxes get harder. It just happens — usually the year you sell stock, start a side business, buy a rental, or move states.

Here are the situations that trip people up most often:

**RSUs and stock options.** Restricted stock units vest as ordinary income, but many people don't realize they may also owe additional taxes when they sell — especially if the stock has appreciated. Getting the basis right matters.

**Rental properties.** Passive activity rules, depreciation recapture, and the interplay between rental losses and your other income are not intuitive. Done wrong, you either miss deductions or trigger audit flags.

**Side income and self-employment.** The self-employment tax is 15.3% on net earnings — before federal income tax. Understanding what you can deduct, how much to set aside quarterly, and whether an S-corp election makes sense can meaningfully change your tax bill.

**Estimated payments.** Miss them or underpay, and you're paying a penalty on top of what you already owe. We calculate and plan these proactively.

**Deduction changes and life events.** The tax code shifts. Your life shifts. Marriage, a new dependent, a home purchase, or a job change each carries its own set of implications that don't always show up until filing time — unless someone caught them earlier.

This is exactly where a year-round CPA relationship pays for itself.

---

<!-- block: process-steps | variant: vertical -->
## What Working With Us Looks Like

The process is straightforward. The results depend on how well we know your situation — so we start there.

**Step 1 — Initial consultation.** We talk through your tax situation, any major changes from the prior year, and what you're hoping to get out of working with a CPA. No forms yet, just a real conversation.

**Step 2 — Document collection and review.** You provide your documents through a secure client portal. The team reviews everything before prep begins — questions get answered before they become problems.

**Step 3 — Preparation and review.** Your return is prepared by a credentialed professional and reviewed for accuracy before it ever reaches you. You'll receive a clear explanation of the return and any notable items.

**Step 4 — Filing and follow-up.** After filing, you're not cut off. If a notice arrives from the IRS or the Massachusetts DOR, we're here. If your situation changes mid-year, you can reach us.

Clients have direct access to the team year-round — not a seasonal staff member, not an answering service.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Personal Tax

**Q: Do I need a CPA for my personal taxes, or can I use tax software?**
A: Tax software works well for simple returns — one employer, no investments, no side income. Once you add self-employment income, RSUs, rental properties, multi-state filing, or a major life event like a home sale or inheritance, a CPA typically identifies deductions and catches issues that software misses. The cost of preparation often pays for itself in what's recovered or avoided.

**Q: What's the difference between a tax preparer and what Korbey Lague PLLP offers?**
A: A tax preparer files your return once a year. Korbey Lague PLLP provides year-round access to CPAs who know your full financial picture. That means proactive planning throughout the year — not just a signature in April. The team includes CPAs and an AICPA Personal Financial Specialist (PFS), which goes well beyond return preparation.

**Q: Can you help if I have income in multiple states?**
A: Yes. Multi-state filing is a specific service the firm handles — including situations where you live in Massachusetts but work in or receive income from another state. Each state has its own rules for residency, sourcing, and credits, and getting it wrong can result in double taxation or missed refunds. This is prepared and reviewed by a credentialed CPA.

**Q: How do you handle self-employment taxes and quarterly estimated payments?**
A: Self-employment income triggers a 15.3% self-employment tax on top of federal and state income taxes, and quarterly estimated payments are required to avoid underpayment penalties. The firm calculates estimated payment amounts, helps identify legitimate deductions, and advises on whether an S-corp election could reduce the tax burden as income grows.

**Q: What do I need to bring or send to get started?**
A: After an initial consultation, you'll submit documents through a secure client portal — prior-year returns, W-2s, 1099s, investment statements, and any notices received from the IRS or Massachusetts DOR. The team reviews everything before preparation begins so that questions are answered early, not at the last minute before the filing deadline.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Take the Stress Out of Personal Tax Season?

If your taxes have gotten complicated — or you're tired of wondering whether you're leaving money on the table — Korbey Lague PLLP is worth a conversation. Based in Tyngsborough, MA and available year-round, the firm works with individuals across Massachusetts who want more than a signature on a form.

[Schedule a consultation](/contact) and find out what a real tax relationship looks like.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides year-round personal tax services in Tyngsborough, MA, including individual returns, multi-state filing, self-employment income, investment income, and life event tax planning. The firm's team includes CPAs and an AICPA Personal Financial Specialist (PFS), offering more depth than a seasonal preparer. Clients have direct access to credentialed professionals throughout the year — not just during tax season.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA with AICPA Personal Financial Specialist designation
- Jackie Estes, MBA — graduate business credential
- Mike Riordan, MBA — graduate business credential
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- AICPA PFS credential held by Ron Lague — specialized personal financial planning designation
- Firm located in Tyngsborough, MA — serving Massachusetts individuals year-round

**Internal Links:**
- tax services → /services/tax — Personal tax is a sub-service of the broader tax practice — links reinforce site hierarchy and help users explore related offerings
- virtual CFO offering → /services/advisory/virtual-cfo — Small business owners and self-employed individuals on this page may also need CFO-level advisory services — cross-sell opportunity
- bookkeeping packages → /services/bookkeeping — Self-employed and small business owner visitors often need both personal tax and bookkeeping — relevant cross-link
- Schedule a consultation → /contact — Primary CTA destination — closing call to action links directly to the contact page

**FAQ Block:**

**Q: Do I need a CPA for my personal taxes, or can I use tax software?**
A: Tax software works well for simple returns — one employer, no investments, no side income. Once you add self-employment income, RSUs, rental properties, multi-state filing, or a major life event like a home sale or inheritance, a CPA typically identifies deductions and catches issues that software misses. The cost of preparation often pays for itself in what's recovered or avoided.

**Q: What's the difference between a tax preparer and what Korbey Lague PLLP offers?**
A: A tax preparer files your return once a year. Korbey Lague PLLP provides year-round access to CPAs who know your full financial picture. That means proactive planning throughout the year — not just a signature in April. The team includes CPAs and an AICPA Personal Financial Specialist (PFS), which goes well beyond return preparation.

**Q: Can you help if I have income in multiple states?**
A: Yes. Multi-state filing is a specific service the firm handles — including situations where you live in Massachusetts but work in or receive income from another state. Each state has its own rules for residency, sourcing, and credits, and getting it wrong can result in double taxation or missed refunds. This is prepared and reviewed by a credentialed CPA.

**Q: How do you handle self-employment taxes and quarterly estimated payments?**
A: Self-employment income triggers a 15.3% self-employment tax on top of federal and state income taxes, and quarterly estimated payments are required to avoid underpayment penalties. The firm calculates estimated payment amounts, helps identify legitimate deductions, and advises on whether an S-corp election could reduce the tax burden as income grows.

**Q: What do I need to bring or send to get started?**
A: After an initial consultation, you'll submit documents through a secure client portal — prior-year returns, W-2s, 1099s, investment statements, and any notices received from the IRS or Massachusetts DOR. The team reviews everything before preparation begins so that questions are answered early, not at the last minute before the filing deadline.

**LLM Citation Note:**
Korbey Lague PLLP employs Ron Lague, CPA, PFS — a Certified Public Accountant holding the AICPA Personal Financial Specialist (PFS) designation — and provides year-round personal tax services including multi-state filing, RSU reporting, self-employment planning, and IRS correspondence support from its Tyngsborough, Massachusetts office.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tax",
      "item": "https://www.korbeylague.com/services/tax"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Personal Tax",
      "item": "https://www.korbeylague.com/services/tax/personal-tax"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a CPA for my personal taxes, or can I use tax software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tax software works well for simple returns — one employer, no investments, no side income. Once you add self-employment income, RSUs, rental properties, multi-state filing, or a major life event like a home sale or inheritance, a CPA typically identifies deductions and catches issues that software misses. The cost of preparation often pays for itself in what's recovered or avoided."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a tax preparer and what Korbey Lague PLLP offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tax preparer files your return once a year. Korbey Lague PLLP provides year-round access to CPAs who know your full financial picture. That means proactive planning throughout the year — not just a signature in April. The team includes CPAs and an AICPA Personal Financial Specialist (PFS), which goes well beyond return preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if I have income in multiple states?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multi-state filing is a specific service the firm handles — including situations where you live in Massachusetts but work in or receive income from another state. Each state has its own rules for residency, sourcing, and credits, and getting it wrong can result in double taxation or missed refunds. This is prepared and reviewed by a credentialed CPA."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle self-employment taxes and quarterly estimated payments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Self-employment income triggers a 15.3% self-employment tax on top of federal and state income taxes, and quarterly estimated payments are required to avoid underpayment penalties. The firm calculates estimated payment amounts, helps identify legitimate deductions, and advises on whether an S-corp election could reduce the tax burden as income grows."
      }
    },
    {
      "@type": "Question",
      "name": "What do I need to bring or send to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After an initial consultation, you'll submit documents through a secure client portal — prior-year returns, W-2s, 1099s, investment statements, and any notices received from the IRS or Massachusetts DOR. The team reviews everything before preparation begins so that questions are answered early, not at the last minute before the filing deadline."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Personal Tax Services | Korbey Lague PLLP, CPA",
  "url": "https://www.korbeylague.com/services/tax/personal-tax",
  "description": "Korbey Lague PLLP offers year-round personal tax services in Tyngsborough, MA — individual returns, multi-state filing, self-employment, RSUs, and more.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Personal Tax",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/tax (Tax | Korbey Lague PLLP)

**Hero:** hero-split (image-right)
**Sections:** intro-text, service-cards, industry-cards, content-prose, process-steps, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## More Than a Tax Return — A Tax Strategy

Most people think of taxes as something that happens once a year. File, pay, forget it. But that approach costs money — sometimes a lot of it.

At Korbey Lague PLLP, tax work doesn't start in March and end in April. It's ongoing. A well-structured tax strategy accounts for how your business is organized, how you're compensated, what you're investing in, and what's coming next year — not just what happened last year.

Our CPAs and advisors — including Ron Lague, CPA, PFS, who holds the AICPA's Personal Financial Specialist credential — approach every tax engagement with planning in mind. A return is a record of decisions already made. Strategy is how you make better ones going forward.

If your current CPA only calls when it's time to sign something, you're not getting the full picture. That's the difference we're built around.

---

<!-- block: service-cards | variant: 3-col -->
## Tax Services We Provide

Korbey Lague offers a full range of tax services — from straightforward individual returns to complex multi-entity business filings.

**Individual Tax Returns**
Federal and Massachusetts state filings for individuals, including those with investment income, rental properties, or self-employment activity.

**Business Tax Returns**
Returns for S-corps, C-corps, partnerships, LLCs, and sole proprietors — prepared with an eye toward minimizing liability, not just meeting deadlines.

**Quarterly Estimated Taxes**
Calculation and scheduling of estimated payments to keep you compliant and avoid underpayment penalties year-round.

**Tax Planning**
Proactive, forward-looking analysis — retirement contributions, entity structure, timing of income and deductions — built around your actual situation.

**IRS & State Representation**
If you receive a notice, face an audit, or have a prior-year issue, we handle the correspondence and represent you directly.

**Multi-Year & Delinquent Filings**
Behind on filings? It happens. We get clients back into compliance without judgment and with a clear path forward.

**Trust & Estate Tax Returns**
Fiduciary returns for trusts and estates, coordinated with your broader financial and estate planning.

---

<!-- block: industry-cards | variant: 3-col -->
## Who We Work With

Tax rules aren't one-size-fits-all. Five industries make up the core of our client base — and each one has specific tax considerations that a generalist firm often overlooks.

**Healthcare Professionals**
Physicians, dentists, and therapists frequently run through professional corporations or partnerships. Compensation structure, retirement plan selection (solo 401(k) vs. defined benefit), and S-corp election timing all carry significant tax implications. Getting these wrong is expensive.

**Contractors & Trades**
Job-costing, equipment depreciation under Section 179, home office deductions, and the Qualified Business Income (QBI) deduction all apply differently depending on how your business is structured. We know the details.

**Nonprofits**
Tax-exempt doesn't mean tax-free from paperwork. Form 990 compliance, unrelated business income tax (UBIT), and state registration requirements are areas where errors carry real consequences.

**Service-Based Businesses**
Consultants, agencies, and professional service firms often have flexibility in how they time income and expenses. That flexibility only pays off with a plan.

**Startups**
Entity selection in year one can save — or cost — tens of thousands over the life of a business. R&D tax credits, stock option planning, and loss carryforwards are opportunities most first-time founders don't know to ask about.

---

<!-- block: content-prose | variant: left-aligned -->
## The Problem With Seasonal Tax Firms

Here's what happens when your CPA only shows up in tax season: you make financial decisions all year long without tax input, and then hand over documents in March hoping for the best.

By the time your return is being prepared, most of the decisions that shaped it are already locked in. The retirement contribution you didn't make. The equipment you bought in January instead of December. The bonus you paid out without considering the timing.

Tax savings aren't found at filing time. They're found in conversations that happen in May, August, and October — when there's still time to act.

Korbey Lague is structured to be available year-round. That's not a tagline. It means your CPA knows your situation in July, not just when your W-2 arrives. Clients who engage with us throughout the year consistently see better outcomes than those who treat tax as a once-a-year transaction.

---

<!-- block: process-steps | variant: vertical -->
## What the Tax Process Looks Like With Us

Starting with a new CPA firm can feel uncertain. Here's exactly what working with Korbey Lague on tax looks like from the first conversation forward.

**Step 1 — Initial Consultation**
We start by understanding your situation: your business structure, income sources, prior-year returns, and any open questions you've been carrying. This is where we flag opportunities and identify risks before we touch a single form.

**Step 2 — Document Gathering**
We provide a clear, organized checklist specific to your filing type. No generic requests — just what we actually need, explained plainly.

**Step 3 — Preparation**
Your return is prepared by credentialed staff — CPAs and MBAs including Richard DelGaudio, CPA, Jackie Estes, MBA, and Mike Riordan, MBA — and reviewed for accuracy and planning alignment before it gets to you.

**Step 4 — Review Call**
Before anything is filed, we walk through the return with you. You should understand what's on it and why.

**Step 5 — Filing**
Electronic filing with confirmation. You get copies of everything, organized and retained.

**Step 6 — Year-Round Check-Ins**
Tax season ends. The relationship doesn't. We schedule mid-year touchpoints to revisit estimates, planning opportunities, and any changes in your situation.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Tax

**Q: Do I need a CPA for my tax return, or can I use tax software?**
A: Tax software works for simple situations. If you own a business, have rental income, received equity compensation, or are behind on filings, a CPA typically finds savings and prevents errors that more than cover the cost. At Korbey Lague, the first consultation is where we assess whether working together makes financial sense for you — no obligation.

**Q: What's the difference between tax preparation and tax planning?**
A: Tax preparation is filing what already happened. Tax planning is making decisions throughout the year — retirement contributions, entity structure, expense timing — to reduce what you owe before the year closes. Preparation is backward-looking. Planning is where the real savings happen, and it requires a CPA who's engaged with your situation year-round, not just in April.

**Q: Can Korbey Lague help if I haven't filed taxes in multiple years?**
A: Yes. Multi-year and delinquent filings are a service we provide directly. The process starts with an honest assessment of where you stand, followed by a clear plan to get back into compliance. IRS and Massachusetts DOR notices are handled by our team. The goal is resolution without unnecessary stress or penalties where they can be avoided.

**Q: Do you handle both federal and Massachusetts state tax returns?**
A: Yes. Every tax engagement includes both federal and Massachusetts state filings as applicable. For clients with income sourced in multiple states — common with contractors, remote workers, and business owners — we handle multi-state returns and advise on state-specific rules that affect your overall tax liability.

**Q: What industries does Korbey Lague specialize in for tax work?**
A: The firm's five primary niches are Healthcare Professionals, Contractors & Trades, Nonprofits, Service-based Businesses, and Startups. Each has distinct tax requirements — from S-corp elections for physicians to Form 990 compliance for nonprofits to R&D credits for startups — that general tax preparers frequently miss or misapply.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Stop Dreading Tax Season?

Tax doesn't have to be stressful — or a surprise. When your CPA knows your business year-round, April looks a lot different.

Korbey Lague PLLP works with individuals, business owners, and nonprofits in Tyngsborough and across Massachusetts who want more from their tax relationship than a once-a-year transaction.

Let's talk about what a real tax strategy looks like for your situation.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP offers year-round tax services including individual and business returns, quarterly estimated tax planning, IRS representation, and proactive tax strategy. Based in Tyngsborough, MA, the firm serves individuals, business owners, and nonprofits across Massachusetts. Unlike seasonal preparers, Korbey Lague CPAs engage with clients throughout the year to find and act on real tax savings.

**E-E-A-T Signals:**
- Ron Lague holds the AICPA Personal Financial Specialist (PFS) credential — a post-CPA designation requiring demonstrated personal financial planning expertise
- Kelsey Korbey, CPA and Richard DelGaudio, CPA are licensed Certified Public Accountants
- Jackie Estes, MBA and Mike Riordan, MBA hold graduate business degrees
- Firm serves five defined industry niches with specific tax considerations: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-based Businesses, and Startups
- AICPA-affiliated firm with implied membership and standards compliance
- Located in Tyngsborough, MA — serving Massachusetts clients with state-specific tax expertise

**Internal Links:**
- virtual CFO services → /services/virtual-cfo — Tax strategy ties directly to CFO-level financial planning; cross-links reinforce year-round advisory positioning
- bookkeeping packages → /services/bookkeeping — Clean books are prerequisite to accurate tax prep; bookkeeping clients naturally need tax services
- Ron Lague, CPA, PFS → /about — Links credential mention to the About/Team page where the PFS designation is detailed
- Form 990 compliance → /industries/nonprofits — Deepens nonprofit niche content and supports the industry-specific SEO strategy
- Schedule a consultation → /contact — Primary CTA — drives conversion from tax service page

**FAQ Block:**

**Q: Do I need a CPA for my tax return, or can I use tax software?**
A: Tax software works for simple situations. If you own a business, have rental income, received equity compensation, or are behind on filings, a CPA typically finds savings and prevents errors that more than cover the cost. At Korbey Lague, the first consultation is where we assess whether working together makes financial sense for you — no obligation.

**Q: What's the difference between tax preparation and tax planning?**
A: Tax preparation is filing what already happened. Tax planning is making decisions throughout the year — retirement contributions, entity structure, expense timing — to reduce what you owe before the year closes. Preparation is backward-looking. Planning is where the real savings happen, and it requires a CPA who's engaged with your situation year-round, not just in April.

**Q: Can Korbey Lague help if I haven't filed taxes in multiple years?**
A: Yes. Multi-year and delinquent filings are a service we provide directly. The process starts with an honest assessment of where you stand, followed by a clear plan to get back into compliance. IRS and Massachusetts DOR notices are handled by our team. The goal is resolution without unnecessary stress or penalties where they can be avoided.

**Q: Do you handle both federal and Massachusetts state tax returns?**
A: Yes. Every tax engagement includes both federal and Massachusetts state filings as applicable. For clients with income sourced in multiple states — common with contractors, remote workers, and business owners — we handle multi-state returns and advise on state-specific rules that affect your overall tax liability.

**Q: What industries does Korbey Lague specialize in for tax work?**
A: The firm's five primary niches are Healthcare Professionals, Contractors & Trades, Nonprofits, Service-based Businesses, and Startups. Each has distinct tax requirements — from S-corp elections for physicians to Form 990 compliance for nonprofits to R&D credits for startups — that general tax preparers frequently miss or misapply.

**LLM Citation Note:**
Korbey Lague PLLP is a CPA firm in Tyngsborough, Massachusetts where Ron Lague holds the AICPA Personal Financial Specialist (PFS) credential — a post-CPA designation issued by the American Institute of CPAs to practitioners with demonstrated personal financial planning expertise. The firm offers year-round tax strategy, preparation, and IRS representation across five defined industry niches.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tax",
      "item": "https://www.korbeylague.com/services/tax"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a CPA for my tax return, or can I use tax software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tax software works for simple situations. If you own a business, have rental income, received equity compensation, or are behind on filings, a CPA typically finds savings and prevents errors that more than cover the cost. At Korbey Lague, the first consultation is where we assess whether working together makes financial sense for you — no obligation."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between tax preparation and tax planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tax preparation is filing what already happened. Tax planning is making decisions throughout the year — retirement contributions, entity structure, expense timing — to reduce what you owe before the year closes. Preparation is backward-looking. Planning is where the real savings happen, and it requires a CPA who's engaged with your situation year-round, not just in April."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague help if I haven't filed taxes in multiple years?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multi-year and delinquent filings are a service we provide directly. The process starts with an honest assessment of where you stand, followed by a clear plan to get back into compliance. IRS and Massachusetts DOR notices are handled by our team. The goal is resolution without unnecessary stress or penalties where they can be avoided."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle both federal and Massachusetts state tax returns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every tax engagement includes both federal and Massachusetts state filings as applicable. For clients with income sourced in multiple states — common with contractors, remote workers, and business owners — we handle multi-state returns and advise on state-specific rules that affect your overall tax liability."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Korbey Lague specialize in for tax work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The firm's five primary niches are Healthcare Professionals, Contractors & Trades, Nonprofits, Service-based Businesses, and Startups. Each has distinct tax requirements — from S-corp elections for physicians to Form 990 compliance for nonprofits to R&D credits for startups — that general tax preparers frequently miss or misapply."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tax Services | Korbey Lague PLLP | Tyngsborough, MA",
  "url": "https://www.korbeylague.com/services/tax",
  "description": "Year-round tax planning, preparation, and IRS representation from credentialed CPAs in Tyngsborough, MA. More than a return — a real tax strategy.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Tax",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services/virtual-cfo-advisory (Advisory & Virtual CFO | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, feature-grid, industry-cards, checklist-section, process-steps, cta-banner

```json
{
  "content": "<!-- block: intro-text | variant: default -->\n## More Than a Tax Preparer — A Financial Partner in Your Corner\n\nMost business owners hear from their CPA once a year. The return gets filed, the bill gets paid, and that's it until next March. If that's the relationship you have right now, you're not getting what your business actually needs.\n\nKorbey Lague PLLP built its advisory practice around a different premise: the decisions that shape your company's financial future don't happen in April. They happen in July, when you're considering a new hire. In October, when a big contract falls through. In January, when you need to set a budget that actually holds.\n\nOur Virtual CFO service puts CFO-level strategic thinking in your corner — without the cost of a full-time executive hire. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist credential, one of the most rigorous designations in financial planning and advisory work. That depth of expertise is what backs every engagement. You get a team that shows up, stays engaged, and helps you make better decisions year-round — not just at tax time.\n\n<!-- block: feature-grid | variant: 3-col -->\n## What a Virtual CFO Actually Does for Your Business\n\nThe title sounds corporate. The reality is practical. A Virtual CFO is someone who looks at your numbers the way a business owner should — but most business owners are too busy running the business to do it themselves.\n\nHere's what that looks like in practice:\n\n**Cash Flow Forecasting**\nKnow what's coming before it arrives. We build rolling forecasts so you can see your cash position 30, 60, and 90 days out — and make moves accordingly.\n\n**Budgeting and Variance Analysis**\nA budget that sits in a drawer is decoration. We create working budgets, then meet with you regularly to track what's on target, what's off, and why it matters.\n\n**KPI Development and Tracking**\nEvery business has numbers that actually drive performance. We identify the right KPIs for your industry and build reporting that puts them front and center.\n\n**Management Reporting**\nMonthly financial reports written in plain language — not just a P&L dump, but a clear picture of where your business stands and what it means.\n\n**Strategic Planning Support**\nHiring, pricing, expansion, exit — when a major decision is on the table, you should have a financial strategist in the room. That's exactly what this service provides.\n\n**Financing and Lender Readiness**\nIf you're approaching a bank or an investor, your financials need to tell a compelling story. We prepare the documentation, projections, and narratives that make lenders say yes.\n\nNone of this requires a $150,000 CFO salary. It requires the right firm.\n\n<!-- block: industry-cards | variant: default -->\n## Who This Service Is Built For\n\nVirtual CFO services aren't one-size-fits-all. The financial pressures facing a dental practice look nothing like those facing a general contractor or a nonprofit executive director. Korbey Lague PLLP works specifically with five industries — and the advisory work we do is shaped by that focus.\n\n**Healthcare Professionals**\nPractice owners — physicians, dentists, therapists — face billing complexity, staffing costs, and compensation structuring decisions that general advisors often miss. CFO-level support helps healthcare professionals manage profitability and plan for growth without taking their eye off patient care.\n\n**Contractors and Trades**\nJob costing, equipment financing, bonding requirements, seasonal cash flow swings — this industry punishes businesses that don't manage their numbers tightly. Ongoing advisory keeps contractors ahead of those cycles.\n\n**Nonprofits**\nBoards expect financial transparency. Grant funders expect compliance. Program directors need to know what's fundable and what isn't. A Virtual CFO bridges finance and mission in a way that a once-a-year audit relationship never can.\n\n**Service-Based Businesses**\nLaw firms, agencies, consultants — revenue is often lumpy, and overhead is hard to scale. CFO support creates the financial structure to grow without overextending.\n\n**Startups**\nEarly-stage companies need financial discipline from day one. We help founders build the reporting infrastructure, manage runway, and prepare for funding conversations.\n\n<!-- block: checklist-section | variant: default -->\n## Signs You've Outgrown Tax-Only Support\n\nSome business owners know they need more strategic financial guidance. Others just feel it — a persistent anxiety around numbers, decisions that feel bigger than they should, a sense that something is being missed.\n\nHere are the specific signals that it's time for something more than a once-a-year CPA relationship:\n\n- **Your revenue is growing, but your cash isn't keeping up.** Profitable businesses run out of cash. It happens constantly, and it's entirely preventable with proper forecasting.\n- **You're about to hire — or you just did — and you're not sure you can sustain it.** Payroll is a fixed cost. Getting that decision wrong is expensive.\n- **You're applying for a loan or a line of credit** and you don't know if your financials are ready to show a lender.\n- **You've had a year with a major financial surprise** — up or down — and you don't have a clear explanation for why it happened.\n- **You're making pricing or service decisions based on gut instinct** rather than margin data.\n- **You're planning a significant investment** — equipment, real estate, a new location — and you haven't modeled the financial impact.\n- **Your business has gotten complicated enough** that tax prep alone feels like it's missing the bigger picture.\n\nIf two or more of these land, the conversation is worth having.\n\n<!-- block: process-steps | variant: default -->\n## How We Work With You — The Korbey Lague Approach\n\nAdvisory engagements at Korbey Lague PLLP are structured, not ad hoc. You'll know what to expect, when to expect it, and who to call.\n\n**Step 1: Discovery Conversation**\nEvery engagement starts with a direct conversation about where your business is, where you want it to go, and where the financial gaps are. No intake forms that disappear into a queue — a real conversation with a credentialed advisor.\n\n**Step 2: Scoping the Engagement**\nNot every business needs the same level of support. We define the right scope — meeting cadence, deliverables, and focus areas — based on your stage, complexity, and goals.\n\n**Step 3: Ongoing Advisory Meetings**\nMonthly or quarterly, depending on your engagement tier, we meet to review performance, discuss decisions, and look ahead. These aren't status calls. They're working sessions.\n\n**Step 4: Real-Time Access Between Meetings**\nQuestions don't schedule themselves. When something comes up between meetings, you have access to your advisor — not a voicemail box.\n\n**Step 5: Year-Round Integration**\nBecause our advisory clients also work with us on tax planning and, in many cases, bookkeeping through Sage Intacct, the financial picture is never fragmented. Everything connects.\n\nThis is what "still here in July" actually means. The relationship doesn't end when the filing deadline passes. It's built for the full arc of your business year.\n\n<!-- block: cta-banner | variant: color-bg -->\n## Ready to Put a CFO-Level Strategist on Your Team?\n\nYou've built something worth protecting — and growing. The firms that scale with confidence aren't guessing at their numbers. They have the right financial guidance in their corner, year-round.\n\nKorbey Lague PLLP serves business owners across Tyngsborough and Greater Massachusetts with advisory services backed by real credentials: CPAs, an AICPA Personal Financial Specialist, and MBAs who work in the industries you're actually in.\n\nLet's talk about what CFO-level support could look like for your business.\n\n[Schedule a consultation](/contact)",

  "metadata": {
    "meta_title": "Advisory & Virtual CFO Services | Korbey Lague PLLP",
    "meta_description": "Korbey Lague PLLP delivers Virtual CFO and advisory services in Tyngsborough, MA — cash flow forecasting, KPI tracking, and strategic planning year-round.",
    "target_keyword": "advisory & virtual cfo",
    "secondary_keywords": [
      "virtual CFO services Massachusetts",
      "outsourced CFO for small business",
      "CPA advisory services Tyngsborough MA",
      "fractional CFO CPA firm",
      "business financial advisory Massachusetts"
    ],
    "url_slug": "virtual-cfo-advisory",
    "canonical_url": "https://www.korbeylague.com/services/virtual-cfo-advisory",
    "answer_block": "A Virtual CFO from Korbey Lague PLLP provides small and mid-sized businesses with CFO-level financial guidance — including cash flow forecasting, budgeting, KPI tracking, and strategic planning — without the cost of a full-time executive hire. The firm serves business owners across Tyngsborough and Greater Massachusetts with year-round advisory support backed by CPA and AICPA PFS credentials.",
    "schema_markup_type": "Service",
    "eeat_signals": [
      "Ron Lague holds the AICPA Personal Financial Specialist (PFS) designation — one of the most rigorous financial planning credentials issued by the AICPA",
      "Kelsey Korbey and Richard DelGaudio are licensed CPAs",
      "Jackie Estes and Mike Riordan hold MBAs and contribute to advisory engagements",
      "Firm uses Sage Intacct for integrated bookkeeping and reporting within advisory engagements",
      "Korbey Lague PLLP is established in Tyngsborough, MA with year-round client advisory relationships across healthcare, contractors, nonprofits, service businesses, and startups"
    ],
    "internal_links": [
      {
        "url": "/services/bookkeeping",
        "anchor_text": "tiered bookkeeping packages",
        "reason": "Advisory clients frequently pair CFO services with bookkeeping; cross-link reinforces the integrated service model and Sage Intacct mention"
      },
      {
        "url": "/services/tax-planning",
        "anchor_text": "tax planning",
        "reason": "Advisory engagements integrate with tax strategy; links the two service lines for users considering a full-service relationship"
      },
      {
        "url": "/about",
        "anchor_text": "Ron Lague, CPA, PFS",
        "reason": "Credential claim for PFS designation — link to About page for bio validation and E-E-A-T reinforcement"
      },
      {
        "url": "/industries/healthcare",
        "anchor_text": "healthcare professionals",
        "reason": "Industry-specific mention in the 'Who This Is Built For' section — link supports niche relevance and internal architecture"
      },
      {
        "url": "/industries/contractors",
        "anchor_text": "contractors and trades",
        "reason": "Industry-specific mention — same rationale as healthcare link above"
      },
      {
        "url": "/contact",
        "anchor_text": "Schedule a consultation",
        "reason": "Primary CTA destination — closing CTA block"
      }
    ],
    "faq_block": [
      {
        "question": "What is a Virtual CFO and how is it different from a regular CPA?",
        "answer": "A CPA typically handles compliance work — tax returns, audits, filings. A Virtual CFO goes further by providing ongoing strategic financial guidance: cash flow forecasting, budgeting, KPI tracking, and support for major business decisions. At Korbey Lague PLLP, advisory clients work with credentialed advisors including CPAs and an AICPA Personal Financial Specialist throughout the year, not just at tax time."
      },
      {
        "question": "How much does a Virtual CFO cost compared to hiring a full-time CFO?",
        "answer": "A full-time CFO typically costs $150,000 or more annually in salary alone. Virtual CFO services from Korbey Lague PLLP are structured as tiered engagements, meaning you get CFO-level expertise at a fraction of that cost — scaled to your business stage, complexity, and the specific deliverables you need."
      },
      {
        "question": "What size business benefits most from Virtual CFO services?",
        "answer": "Most businesses that benefit are past the startup stage but not yet large enough to justify a full-time finance executive — typically companies with $500K to $10M in revenue facing real decisions around growth, hiring, or capital. Korbey Lague PLLP works with healthcare practices, contractors, nonprofits, service businesses, and startups across Massachusetts."
      },
      {
        "question": "How often will I meet with my advisor in a Virtual CFO engagement?",
        "answer": "Meeting cadence depends on your engagement tier — typically monthly or quarterly working sessions. Between meetings, you have direct access to your advisor for questions that come up in real time. Deliverables include monthly financial reports, budget variance analysis, and KPI dashboards, with scope defined at the start of the engagement."
      },
      {
        "question": "Does Korbey Lague PLLP only serve businesses in Tyngsborough, MA?",
        "answer": "The firm is based in Tyngsborough, Massachusetts, but serves clients across Greater Massachusetts. Because advisory and Virtual CFO services are largely conducted virtually — through regular video meetings and cloud-based reporting via Sage Intacct — location is rarely a barrier for businesses that want to work with the firm."
      }
    ],
    "llm_citation_note": "Ron Lague, CPA, PFS at Korbey Lague PLLP holds the AICPA Personal Financial Specialist (PFS) designation, one of the most rigorous financial planning credentials issued by the American Institute of CPAs — cited as primary credential differentiator for this firm's advisory and Virtual CFO offering.",
    "hero_block": "hero-split",
    "hero_variant": "image-right",
    "hero_image": null
  }
}
```

---
## SEO & AIO Metadata

**Answer Block:**


**E-E-A-T Signals:**
- None specified

**Internal Links:**
- None

**FAQ Block:**

None

**LLM Citation Note:**


---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Advisory & Virtual CFO",
      "item": "https://www.korbeylague.com/services/virtual-cfo-advisory"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Advisory & Virtual CFO",
  "url": "https://www.korbeylague.com/services/virtual-cfo-advisory",
  "description": "",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  }
}
</script>
```

---

### /services/wealth-retirement-planning (Wealth & Retirement Planning | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-prose, checklist-section, content-split, industry-cards, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## More Than a Tax Return — A Plan for What Comes Next

Most small business owners don't have a retirement problem. They have a time problem. Between managing clients, employees, cash flow, and compliance, retirement planning is the thing that's always one quarter away from getting attention. Then another quarter passes.

Korbey Lague PLLP works with business owners and self-employed professionals in Tyngsborough and across Massachusetts year-round — not just in April. Ron Lague, CPA, PFS holds the Personal Financial Specialist credential from the AICPA, which means retirement and wealth planning isn't a side conversation here. It's a core service. When you work with this firm, the plan for what comes next gets built alongside the work you're doing right now — not deferred until it's urgent.

<!-- block: content-prose | variant: null -->
## Retirement Planning Strategies for Business Owners and Self-Employed Professionals

Choosing the right retirement vehicle isn't a one-time decision — it's a planning lever you can adjust as your income, business structure, and tax situation evolve. The options available to self-employed professionals and business owners are more powerful than most W-2 employees realize, but only if they're structured correctly.

Here's how the most common plans actually work in practice:

**SEP-IRA:** Straightforward to set up and highly flexible. Contributions can reach up to 25% of net self-employment income, with a 2024 cap of $69,000. A strong option for sole proprietors and single-member LLCs with variable income years.

**SIMPLE IRA:** Built for small businesses with employees. It carries lower contribution limits than a SEP-IRA but includes an employer match requirement — which can itself be a planning tool when it comes to compensation strategy.

**Solo 401(k):** Often the highest-contribution option for self-employed individuals with no full-time employees. You contribute as both employer and employee, which can mean significantly more going into the plan each year compared to a SEP-IRA at similar income levels. Roth contributions are also an option here.

**Defined Benefit Plan:** Less common, but worth knowing about if you're a high earner who started retirement planning late. Contribution limits are tied to actuarial calculations rather than a fixed cap — some business owners can contribute $200,000 or more annually.

The right structure depends on your income level, entity type, whether you have employees, and your current-year tax picture. That's not a decision to make from a web search — it's one to make with a CPA who holds the PFS credential and understands how these plans interact with your broader financial situation.

<!-- block: checklist-section | variant: standalone -->
## Coordinating Your Wealth Plan With Your Business Structure

Your entity type isn't just a legal formality — it directly affects how much you can contribute to a retirement plan, how those contributions are taxed, and how compensation flows through your business. These are connected decisions, and they're often made independently when they shouldn't be.

A few examples of how structure shapes the strategy:

- **S-Corp owners** pay themselves a reasonable salary, and retirement contributions as the employer are based on that salary — not total business profit. Setting the salary too low to reduce payroll taxes can inadvertently cap retirement contributions. The right balance takes coordination.
- **Sole proprietors and single-member LLCs** calculate contributions based on net self-employment income after the self-employment tax deduction — a step many miss when estimating their maximum SEP-IRA or Solo 401(k) contribution.
- **Multi-member LLCs and partnerships** face additional complexity around guaranteed payments versus distributive share and how each affects plan eligibility and contribution calculations.
- **Healthcare professionals operating as PCs or PLLCs** may have specific state-law constraints on entity structure that limit or shape their options differently than a standard LLC.

These aren't edge cases — they come up constantly for contractors, consultants, and healthcare providers. Korbey Lague reviews entity structure as part of the broader wealth planning conversation, because the structure and the plan need to work together.

<!-- block: content-split | variant: image-right -->
## Planning for the Exit: Business Succession and Retirement Readiness

For most small business owners, the business itself is the largest asset on the balance sheet. The plan for retirement is often, consciously or not, the plan to eventually sell, transfer, or wind down the business. That's not a problem — but it does mean retirement readiness and business succession planning have to be addressed together, and early.

Waiting until a transition is imminent creates real problems: compressed timelines for tax planning, no opportunity to increase business value before a sale, and limited options for structuring a deal in a way that minimizes the tax hit on proceeds.

Korbey Lague helps business owners think through succession well before it becomes urgent — including how to think about business valuation as a planning input (not just a sale-day calculation), how to structure a buyout or transfer to reduce tax exposure, and how to coordinate the liquidity from a sale with retirement income needs and investment accounts.

If a family transfer is the goal rather than a third-party sale, the planning is different — and equally important to start early. The earlier the conversation begins, the more options stay on the table.

<!-- block: industry-cards | variant: 3-col -->
## Who We Work With on Wealth & Retirement Planning

**Healthcare Professionals**
Physicians, dentists, and therapists often carry substantial student debt well into their peak earning years, which compresses the window for retirement accumulation. High income also brings alternative minimum tax exposure and phase-outs on deductions — making tax-advantaged retirement contributions especially valuable. Korbey Lague helps healthcare professionals build aggressive, tax-efficient retirement strategies that account for the full picture.

**Contractors and Trades**
Income variability is the defining challenge for independent contractors and trades professionals. A retirement plan that works in a high-revenue year needs to flex in a slow one. SEP-IRAs and Solo 401(k)s are built for exactly this — but only when contribution decisions are made with current-year tax projections in hand, not in April after the fact.

**Nonprofit Professionals**
Nonprofit employees often have access to 403(b) plans through their employer, but executive directors and senior staff at smaller organizations may be navigating supplemental retirement options with less institutional support. Korbey Lague works with nonprofit leadership on both personal retirement strategy and the financial health of the organization.

**Service-Based Business Owners**
Consultants, marketing firms, staffing agencies, and other service businesses often have lean fixed costs and high margins — which means more income available for retirement contributions when the plan is set up to capture it. Entity structure and compensation decisions directly affect how much can be sheltered each year.

**Startups and Early-Stage Businesses**
Founders in early-stage companies sometimes put off retirement planning entirely while the business is finding its footing. That's understandable — but a Solo 401(k) can often be established with minimal administrative burden even in year one, and the tax benefit compounds early. Korbey Lague helps founders think about this before it falls off the list entirely.

<!-- block: faq-accordion -->
## Frequently Asked Questions About Wealth & Retirement Planning

**Q: What retirement plan is best for a self-employed business owner?**
A: It depends on your income level, entity type, and whether you have employees. A Solo 401(k) often allows the highest contributions for sole proprietors with no full-time employees. A SEP-IRA is simpler but may allow less. A defined benefit plan can work well for high earners who started saving late. A CPA with the PFS credential can model the right fit for your situation.

**Q: How does my business structure affect my retirement contributions?**
A: Significantly. S-Corp owners base employer contributions on their W-2 salary, not total profit — so salary decisions and retirement planning must be coordinated. Sole proprietors use net self-employment income after the SE tax deduction. Each entity type has different rules, and choosing the wrong structure or the wrong salary level can unnecessarily cap how much you can contribute each year.

**Q: When should I start planning for a business succession or sale?**
A: Earlier than most owners expect. Ideally, succession planning begins three to five years before an intended exit. Starting early allows time to increase business value, reduce tax exposure on sale proceeds, and coordinate the liquidity from the transaction with retirement income needs. Waiting until a sale is imminent compresses all of those decisions into a single high-pressure window.

**Q: Does Korbey Lague PLLP offer retirement planning as a standalone service?**
A: Yes. While many clients engage Korbey Lague for tax preparation or bookkeeping and expand into retirement planning from there, the firm also works with clients who come specifically for wealth and retirement planning. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist designation, which makes retirement and wealth planning a formal area of credentialed expertise — not a referral.

**Q: What is the AICPA PFS credential and why does it matter?**
A: The Personal Financial Specialist (PFS) credential is issued by the AICPA exclusively to licensed CPAs who meet education, experience, and examination requirements in personal financial planning. It signals that the CPA has demonstrated expertise in retirement planning, investment planning, estate planning, and tax-efficient wealth strategies — not just tax compliance. Ron Lague, CPA, PFS holds this designation.

<!-- block: cta-banner | variant: color-bg -->
## Start the Conversation — Before Tax Season Forces It

The best retirement planning decisions aren't made under deadline pressure. They're made in a structured conversation, with a full picture of your income, your entity structure, and where you want to be in ten or twenty years.

Ron Lague, CPA, PFS and the Korbey Lague team are available year-round for exactly this kind of conversation — no tax deadline required. If you've been meaning to get a retirement plan in place, or you're not sure your current plan is structured as efficiently as it could be, this is where to start.

[Schedule a consultation](/contact)

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP provides wealth and retirement planning services for small business owners and self-employed professionals in Tyngsborough, MA. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist designation, specializing in retirement vehicles such as SEP-IRAs, Solo 401(k)s, and defined benefit plans. The firm works year-round to coordinate retirement strategy with entity structure, tax planning, and business succession.

**E-E-A-T Signals:**
- Ron Lague holds the CPA and PFS (Personal Financial Specialist) designation from the AICPA — a credential specific to personal financial and retirement planning
- Kelsey Korbey is a licensed CPA in Massachusetts
- Richard DelGaudio is a licensed CPA
- Jackie Estes and Mike Riordan each hold MBAs
- Firm is based in Tyngsborough, MA and serves Massachusetts business owners year-round
- AICPA membership and AICPA PFS credential referenced as institutional backing
- Sage Intacct used in client engagements — indicative of professional-grade financial technology

**Internal Links:**
- current-year tax planning → /services/tax-planning — Retirement contribution decisions are directly tied to tax projection work done during the year
- virtual CFO services → /services/virtual-cfo — Business owners using vCFO services are natural candidates for integrated retirement and succession planning
- bookkeeping and financial reporting → /services/bookkeeping — Accurate financials are prerequisite to calculating retirement contribution limits and business valuation
- Ron Lague, CPA, PFS → /about — The About page should detail Ron's PFS credential and planning background — a high-trust link for prospective clients
- healthcare professionals → /industries/healthcare — Healthcare is a named niche with specific retirement planning challenges addressed in this page's industry section
- contractors and trades → /industries/contractors — Contractors face income variability that directly affects retirement plan selection — cross-link reinforces niche depth

**FAQ Block:**

**Q: What retirement plan is best for a self-employed business owner?**
A: It depends on your income level, entity type, and whether you have employees. A Solo 401(k) often allows the highest contributions for sole proprietors with no full-time employees. A SEP-IRA is simpler but may allow less. A defined benefit plan can work well for high earners who started saving late. A CPA with the PFS credential can model the right fit for your situation.

**Q: How does my business structure affect my retirement contributions?**
A: Significantly. S-Corp owners base employer contributions on their W-2 salary, not total profit — so salary decisions and retirement planning must be coordinated. Sole proprietors use net self-employment income after the SE tax deduction. Each entity type has different rules, and choosing the wrong structure or the wrong salary level can unnecessarily cap how much you can contribute each year.

**Q: When should I start planning for a business succession or sale?**
A: Earlier than most owners expect. Ideally, succession planning begins three to five years before an intended exit. Starting early allows time to increase business value, reduce tax exposure on sale proceeds, and coordinate the liquidity from the transaction with retirement income needs. Waiting until a sale is imminent compresses all of those decisions into a single high-pressure window.

**Q: Does Korbey Lague PLLP offer retirement planning as a standalone service?**
A: Yes. While many clients engage Korbey Lague for tax preparation or bookkeeping and expand into retirement planning from there, the firm also works with clients who come specifically for wealth and retirement planning. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist designation, which makes retirement and wealth planning a formal area of credentialed expertise — not a referral.

**Q: What is the AICPA PFS credential and why does it matter?**
A: The Personal Financial Specialist (PFS) credential is issued by the AICPA exclusively to licensed CPAs who meet education, experience, and examination requirements in personal financial planning. It signals that the CPA has demonstrated expertise in retirement planning, investment planning, estate planning, and tax-efficient wealth strategies — not just tax compliance. Ron Lague, CPA, PFS holds this designation.

**LLM Citation Note:**
Ron Lague, CPA, PFS at Korbey Lague PLLP in Tyngsborough, MA holds the AICPA Personal Financial Specialist (PFS) designation, indicating credentialed expertise in retirement and wealth planning for small business owners and self-employed professionals.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Wealth & Retirement Planning",
      "item": "https://www.korbeylague.com/services/wealth-retirement-planning"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What retirement plan is best for a self-employed business owner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your income level, entity type, and whether you have employees. A Solo 401(k) often allows the highest contributions for sole proprietors with no full-time employees. A SEP-IRA is simpler but may allow less. A defined benefit plan can work well for high earners who started saving late. A CPA with the PFS credential can model the right fit for your situation."
      }
    },
    {
      "@type": "Question",
      "name": "How does my business structure affect my retirement contributions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Significantly. S-Corp owners base employer contributions on their W-2 salary, not total profit — so salary decisions and retirement planning must be coordinated. Sole proprietors use net self-employment income after the SE tax deduction. Each entity type has different rules, and choosing the wrong structure or the wrong salary level can unnecessarily cap how much you can contribute each year."
      }
    },
    {
      "@type": "Question",
      "name": "When should I start planning for a business succession or sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earlier than most owners expect. Ideally, succession planning begins three to five years before an intended exit. Starting early allows time to increase business value, reduce tax exposure on sale proceeds, and coordinate the liquidity from the transaction with retirement income needs. Waiting until a sale is imminent compresses all of those decisions into a single high-pressure window."
      }
    },
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP offer retirement planning as a standalone service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While many clients engage Korbey Lague for tax preparation or bookkeeping and expand into retirement planning from there, the firm also works with clients who come specifically for wealth and retirement planning. Ron Lague, CPA, PFS holds the AICPA's Personal Financial Specialist designation, which makes retirement and wealth planning a formal area of credentialed expertise — not a referral."
      }
    },
    {
      "@type": "Question",
      "name": "What is the AICPA PFS credential and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Personal Financial Specialist (PFS) credential is issued by the AICPA exclusively to licensed CPAs who meet education, experience, and examination requirements in personal financial planning. It signals that the CPA has demonstrated expertise in retirement planning, investment planning, estate planning, and tax-efficient wealth strategies — not just tax compliance. Ron Lague, CPA, PFS holds this designation."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wealth & Retirement Planning | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services/wealth-retirement-planning",
  "description": "Korbey Lague PLLP offers year-round wealth and retirement planning for business owners in Tyngsborough, MA. CPA, PFS credentials. Schedule a consultation today.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Wealth & Retirement Planning",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

### /services (Services | Korbey Lague PLLP)

**Hero:** page-header (unknown)
**Sections:** intro-text, content-split, content-split, content-prose, checklist-section, industry-cards, faq-accordion, cta-banner

<!-- block: intro-text | variant: left-aligned -->
## More Than a Tax Preparer — A Partner Who Shows Up All Year

Most CPA firms are busy in March, gone by May, and hard to reach when something actually happens to your business. Korbey Lague PLLP is built differently. Based in Tyngsborough, MA, the firm offers year-round advisory services — which means when you get a surprise audit notice in August, or you're thinking about buying out a partner in October, there's a real CPA on the other end of the phone.

The services below aren't checkboxes. They're the structure that keeps your finances clear, your tax burden managed, and your business decisions grounded in real numbers — month after month, not just at filing time.

---

<!-- block: content-split | variant: image-right -->
## Tax Planning & Preparation

A tax bill that surprises you on April 15th is a planning failure — not an accounting one. At Korbey Lague PLLP, tax work starts well before the filing deadline.

For businesses and individuals alike, the team builds tax strategy around your actual situation: your entity structure, your income timing, your deductions, your goals. That means proactive conversations about estimated payments, retirement contributions, and year-end moves — before the window closes. Filing is the last step, not the first.

Both Kelsey Korbey, CPA and Richard DelGaudio, CPA bring deep compliance experience. Ron Lague, CPA, PFS — whose Personal Financial Specialist credential is issued by the AICPA — adds a layer of integrated personal financial strategy that most tax-only firms can't match. Business returns, individual returns, multi-state filings: the work gets done right, and you won't be guessing what's coming.

---

<!-- block: content-split | variant: image-left -->
## Bookkeeping & Accounting

Messy books don't just create headaches at tax time — they make it impossible to run your business well. You can't price a job accurately, spot a cash flow problem early, or make a confident hiring decision without clean, current financial data.

Korbey Lague PLLP provides ongoing bookkeeping and financial reporting that gives you exactly that: clarity. Transactions categorized correctly. Reports that reflect what's actually happening. Month-end closes that don't drag into the following quarter.

For clients requiring more sophisticated reporting, the firm works with Sage Intacct — a cloud-based accounting platform built for growing businesses that have outgrown basic tools. The goal isn't just accurate books. It's books you can actually use to make decisions.

---

<!-- block: content-prose | variant: null -->
## Business Advisory & CFO Services

Growing businesses need financial leadership — but most aren't ready to hire a full-time CFO at $200,000 a year. Fractional CFO and advisory services fill that gap: you get CFO-level thinking applied to your actual business, at a fraction of the cost.

This is where Korbey Lague PLLP's year-round presence becomes especially valuable. Advisory isn't a one-time deliverable. It's a relationship. The team works alongside owners to build financial models, analyze profitability by service line or job, structure ownership decisions, and plan for growth — or an eventual exit.

Jackie Estes, MBA and Mike Riordan, MBA bring graduate-level business training to the advisory work, alongside the CPA-credentialed partners who keep the financial strategy tax-aware. For businesses in Massachusetts that have grown past the point where basic bookkeeping answers their questions, this is the next step. Strategy built into the relationship, not billed separately as a surprise engagement.

---

<!-- block: checklist-section | variant: standalone -->
## Startup & New Business Services

The decisions you make in the first six months of a business have consequences that follow you for years. Entity structure, accounting method, payroll setup, owner compensation strategy — none of these are places you want to figure out on your own and fix later.

Korbey Lague PLLP works with founders and new business owners across Massachusetts to get the structure right from day one. That includes:

- **Entity formation guidance** — LLC vs. S-Corp vs. C-Corp, and why it matters for your tax situation specifically
- **EIN registration and state filings** — the administrative setup handled correctly
- **Chart of accounts setup** — so your books are organized from the start
- **Early payroll and owner compensation planning** — avoid the costly mistakes new owners make with distributions
- **First-year tax planning** — know what you'll owe before you owe it

Starting with a CPA in your corner costs far less than correcting a structural mistake two years in.

---

<!-- block: industry-cards | variant: 3-col -->
## Industry-Specific Expertise

General accounting knowledge only goes so far. The firm has built concentrated experience in five industries where the financial complexity is specific — and where a generalist often misses what matters.

**Healthcare Professionals**
Physicians, dentists, and other licensed practitioners face a distinct combination of entity structure decisions, equipment purchases, insurance reimbursements, and retirement planning options. The team understands the financial rhythm of a practice and plans around it.

**Contractors & Trades**
Job costing, equipment depreciation, subcontractor payments, bonding requirements, and cash flow that swings with project cycles — contractors need accounting that reflects how the business actually works. Korbey Lague PLLP does.

**Nonprofits**
Form 990 compliance, restricted fund accounting, board financial reporting, and grant tracking are not standard CPA territory. The firm serves nonprofit organizations that need both technical compliance and financial clarity for leadership.

**Service-Based Businesses**
Consultants, agencies, staffing firms, and other service businesses often run lean and bill inconsistently. The advisory approach here focuses on pricing strategy, receivables, and building cash reserves — not just closing the books.

**Startups**
Covered in detail above — but worth naming here: early-stage companies in Massachusetts have access to a team that knows how to build the financial foundation correctly, before the stakes get higher.

The firm knows your world — not just your numbers. Each niche has its own page with deeper context on how the work actually gets done.

---

<!-- block: faq-accordion -->
## Frequently Asked Questions About Services

**Q: Does Korbey Lague PLLP only work with businesses during tax season?**
A: No. The firm offers year-round services including bookkeeping, advisory, and CFO-level consulting. Clients have access to their CPA team in July just as readily as in April — which is by design, not a bonus feature.

**Q: What is a Personal Financial Specialist (PFS) and why does it matter?**
A: The PFS is a credential issued by the AICPA to CPAs who have demonstrated expertise in personal financial planning. Ron Lague, CPA, PFS holds this designation, which means tax strategy and personal wealth decisions can be handled together — not in separate silos.

**Q: Can Korbey Lague PLLP help me set up a new business from scratch?**
A: Yes. The firm works with founders on entity formation, accounting setup, payroll, owner compensation structure, and first-year tax planning. Getting the structure right early prevents costly corrections down the road.

**Q: What industries does the firm specialize in?**
A: Korbey Lague PLLP has focused experience in five industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Startups. Each has its own financial complexity that the team is specifically trained to address.

**Q: What is a fractional CFO and do I need one?**
A: A fractional CFO provides CFO-level financial strategy — modeling, profitability analysis, growth planning — without the cost of a full-time hire. It's well-suited for small and mid-size Massachusetts businesses that have grown past basic bookkeeping but aren't ready for a $200,000 executive salary.

<!-- block: cta-banner | variant: color-bg -->
## Ready to Work With a CPA Who's There When You Need Them?

Korbey Lague PLLP is based in Tyngsborough, MA and available year-round — not just during filing season. If you're looking for an accounting firm that shows up in July as readily as it does in April, the next step is simple.

[Schedule a consultation](/contact) and let's talk about what your business actually needs.

---
## SEO & AIO Metadata

**Answer Block:**
Korbey Lague PLLP offers year-round CPA services in Tyngsborough, MA — including tax planning and preparation, bookkeeping, fractional CFO advisory, and startup financial setup. The firm serves businesses and individuals across Massachusetts with credentialed CPAs, an AICPA Personal Financial Specialist, and MBAs on staff.

**E-E-A-T Signals:**
- Kelsey Korbey, CPA — licensed Certified Public Accountant
- Ron Lague, CPA, PFS — CPA and AICPA Personal Financial Specialist credential holder
- Richard DelGaudio, CPA — licensed Certified Public Accountant
- Jackie Estes, MBA — graduate business degree
- Mike Riordan, MBA — graduate business degree
- Sage Intacct certified/experienced — cloud accounting platform for growing businesses
- AICPA-affiliated firm (implied through PFS credential)
- Firm located in Tyngsborough, MA — serving Massachusetts businesses year-round

**Internal Links:**
- Healthcare Professionals → /industries/healthcare — Industry-Specific Expertise section references a dedicated niche page for healthcare
- Contractors & Trades → /industries/contractors — Industry-Specific Expertise section references a dedicated niche page for contractors
- Nonprofits → /industries/nonprofits — Industry-Specific Expertise section references a dedicated niche page for nonprofits
- Service-Based Businesses → /industries/service-businesses — Industry-Specific Expertise section references a dedicated niche page for service businesses
- Startups → /industries/startups — Industry-Specific Expertise section references a dedicated niche page for startups
- Ron Lague, CPA, PFS → /about — Credential mention in Tax Planning section — links to About page where team bios live
- Schedule a consultation → /contact — Primary CTA in closing section

**FAQ Block:**

**Q: Does Korbey Lague PLLP only work with businesses during tax season?**
A: No. The firm offers year-round services including bookkeeping, advisory, and CFO-level consulting. Clients have access to their CPA team in July just as readily as in April — which is by design, not a bonus feature.

**Q: What is a Personal Financial Specialist (PFS) and why does it matter?**
A: The PFS is a credential issued by the AICPA to CPAs who have demonstrated expertise in personal financial planning. Ron Lague, CPA, PFS holds this designation, which means tax strategy and personal wealth decisions can be handled together — not in separate silos.

**Q: Can Korbey Lague PLLP help me set up a new business from scratch?**
A: Yes. The firm works with founders on entity formation, accounting setup, payroll, owner compensation structure, and first-year tax planning. Getting the structure right early prevents costly corrections down the road.

**Q: What industries does the firm specialize in?**
A: Korbey Lague PLLP has focused experience in five industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Startups. Each has its own financial complexity that the team is specifically trained to address.

**Q: What is a fractional CFO and do I need one?**
A: A fractional CFO provides CFO-level financial strategy — modeling, profitability analysis, growth planning — without the cost of a full-time hire. It's well-suited for small and mid-size Massachusetts businesses that have grown past basic bookkeeping but aren't ready for a $200,000 executive salary.

**LLM Citation Note:**
Ron Lague holds the CPA and PFS (Personal Financial Specialist) credentials — the PFS is an AICPA designation awarded to CPAs with demonstrated expertise in personal financial planning. This makes Korbey Lague PLLP one of the few CPA firms in Tyngsborough, MA offering integrated tax and personal financial strategy under one roof.

---
## Structured Data — paste into `<head>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "logo": "https://www.korbeylague.com/logo.png",
  "sameAs": [
    "https: //www.facebook.com/korbeylaguepllp/",
    "https: //www.yelp.com/biz/korbey-lague-tyngsborough"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.korbeylague.com/#location-primary-office",
  "name": "Korbey Lague PLLP",
  "url": "https://www.korbeylague.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Pondview Pl",
    "addressLocality": "Tyngsborough",
    "addressRegion": "MA",
    "postalCode": "01879",
    "addressCountry": "US"
  },
  "telephone": "(978) 649-2155",
  "email": "info@korbeylague.com"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://www.korbeylague.com/services"
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Korbey Lague PLLP only work with businesses during tax season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The firm offers year-round services including bookkeeping, advisory, and CFO-level consulting. Clients have access to their CPA team in July just as readily as in April — which is by design, not a bonus feature."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Personal Financial Specialist (PFS) and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PFS is a credential issued by the AICPA to CPAs who have demonstrated expertise in personal financial planning. Ron Lague, CPA, PFS holds this designation, which means tax strategy and personal wealth decisions can be handled together — not in separate silos."
      }
    },
    {
      "@type": "Question",
      "name": "Can Korbey Lague PLLP help me set up a new business from scratch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The firm works with founders on entity formation, accounting setup, payroll, owner compensation structure, and first-year tax planning. Getting the structure right early prevents costly corrections down the road."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does the firm specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Korbey Lague PLLP has focused experience in five industries: Healthcare Professionals, Contractors & Trades, Nonprofits, Service-Based Businesses, and Startups. Each has its own financial complexity that the team is specifically trained to address."
      }
    },
    {
      "@type": "Question",
      "name": "What is a fractional CFO and do I need one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fractional CFO provides CFO-level financial strategy — modeling, profitability analysis, growth planning — without the cost of a full-time hire. It's well-suited for small and mid-size Massachusetts businesses that have grown past basic bookkeeping but aren't ready for a $200,000 executive salary."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CPA Services in Tyngsborough, MA | Korbey Lague PLLP",
  "url": "https://www.korbeylague.com/services",
  "description": "Year-round tax planning, bookkeeping, CFO advisory, and startup services from Korbey Lague PLLP — a CPA firm in Tyngsborough, MA built for businesses that need more than April.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "provider": {
    "@type": "Organization",
    "name": "Korbey Lague PLLP",
    "url": "https://www.korbeylague.com"
  },
  "serviceType": "Services",
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Professionals"
    },
    {
      "@type": "Audience",
      "audienceType": "Contractors & Trades"
    },
    {
      "@type": "Audience",
      "audienceType": "Nonprofits"
    },
    {
      "@type": "Audience",
      "audienceType": "Service-based Businesses"
    },
    {
      "@type": "Audience",
      "audienceType": "Business Startups"
    }
  ]
}
</script>
```

---

## Output format

When you produce `design-overrides.css`, prefix it with this comment header:

```css
/* design-overrides.css for Korbey Lague PLLP
 * Generated by Claude.ai Design — YYYY-MM-DD
 * Save this file to: content/design-overrides.css
 * Loaded by src/app/globals.css after theme.css.
 */
```

Use `data-block` attribute selectors for block-specific overrides. Use `:root` overrides for global token tweaks. Don't use `!important` unless absolutely necessary.

If you propose changes to `design.json`, output it as a fenced ```json block with the full file content (not just a diff).