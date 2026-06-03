import { z } from 'zod'

/**
 * Frontmatter shape for an insights/blog post (content/posts/*.md). Lenient
 * defaults so a malformed deliverable still builds; consumers fall back to
 * sensible empty values. Mirrors the page-frontmatter schema's philosophy.
 *
 * `slug` is optional and derived from the filename when absent. `date` is a
 * string (YYYY-MM-DD) rather than a Date so it round-trips through gray-matter
 * cleanly; consumers parse it themselves where ordering matters.
 */
export const PostFrontmatterSchema = z
  .object({
    title: z.string().min(1, 'post title is required'),
    excerpt: z.string().default(''),
    date: z.string().default(''),
    author: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    /** Override canonical URL — usually unset; derived from /resources/<slug>. */
    canonical_url: z.string().optional(),
    /** SEO/AIO fields written by the onboarding draft generator. All optional. */
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    target_keyword: z.string().optional(),
    secondary_keywords: z.array(z.string()).optional(),
    /** 2-3 sentence direct answer to the post's core question (AIO). */
    answer_block: z.string().optional(),
    /** JSON-LD @type override: BlogPosting (default), Article, FAQPage. */
    schema_markup: z.string().optional(),
  })
  .passthrough()

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>
