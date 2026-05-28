import { z } from 'zod'

/**
 * Zod schema for page-markdown frontmatter.
 *
 * Mirrors the *shape* the existing parser tolerates (so it doesn't reject any
 * deliverable that builds today), but validates types — catching cases the old
 * `String(fm.x ?? '')` casts silently swallowed (e.g. `faq_block: "broken"`
 * being silently dropped, leaving the FAQ accordion + JSON-LD empty).
 *
 * Missing fields fall back to safe defaults (matches current behavior).
 * Type mismatches throw a clear `ZodError` that callers turn into a build-time
 * failure via `scripts/validate-deliverable.ts` or a runtime `notFound()` via
 * the page route handlers (defense in depth).
 */

const FaqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

const InternalLinkSchema = z.object({
  url: z.string(),
  anchor_text: z.string(),
  reason: z.string(),
})

export const PageFrontmatterSchema = z
  .object({
    title: z.string().default(''),
    url: z.string().default('/'),
    meta_title: z.string().default(''),
    meta_description: z.string().default(''),
    target_keyword: z.string().default(''),
    canonical_url: z.string().default(''),
    schema_markup: z.string().default('WebPage'),

    // Phase I emits `hero:` (newer) but older deliverables used `hero_block:`.
    // The parser falls back from one to the other — both stay optional here
    // and the resolved value is computed in parsePageMd.
    hero: z.string().optional(),
    hero_block: z.string().optional(),
    hero_variant: z.string().optional(),
    hero_image: z.string().optional(),
    hero_subhead: z.string().optional(),

    answer_block: z.string().optional(),
    eeat_signals: z.array(z.string()).optional(),
    internal_links: z.array(InternalLinkSchema).optional(),
    faq_block: z.array(FaqItemSchema).optional(),
    llm_citation_note: z.string().optional(),
  })
  // Pass through unknown fields without erroring — deliverables sometimes carry
  // extra review-only metadata we don't render but shouldn't reject.
  .passthrough()

export type PageFrontmatter = z.infer<typeof PageFrontmatterSchema>
