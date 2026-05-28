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
    /** Override canonical URL — usually unset; derived from /insights/<slug>. */
    canonical_url: z.string().optional(),
  })
  .passthrough()

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>
