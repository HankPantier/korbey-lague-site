/**
 * parse-page-md.ts
 * Stage 1 of the assembly pipeline: parse frontmatter + split sections.
 * Returns a fully typed PageManifest.
 */

import matter from 'gray-matter'
import { PageFrontmatterSchema } from './page-frontmatter-schema'

export type PageSection = {
  blockId: string
  variant?: string
  image?: string
  /**
   * Pexels search query Phase I emitted alongside this block's image, when
   * the image filename was stock-sourced. Not used by the Phase II renderer
   * (the image is already downloaded into public/content-assets/), but
   * preserved so consumers can introspect or surface it if needed.
   */
  query?: string
  heading: string
  content: string   // raw markdown body below the heading (excluding heading line)
  position: number
}

export type InternalLink = { url: string; anchor_text: string; reason: string }
export type FaqItem = { question: string; answer: string }

export type PageManifest = {
  // From frontmatter
  title: string
  url: string
  meta_title: string
  meta_description: string
  target_keyword: string
  canonical_url: string
  schema_markup: string
  hero_block: string        // 'hero' | 'hero-split' | 'page-header'
  hero_variant?: string
  hero_image?: string
  hero_image_alt?: string
  hero_subhead?: string     // Benefit-led hero copy; falls back to meta_description in consumers
  // Optional structured data (passed through)
  answer_block?: string
  eeat_signals?: string[]
  internal_links?: InternalLink[]
  faq_block?: FaqItem[]
  llm_citation_note?: string
  // Body
  sections: PageSection[]
}

/**
 * The Phase I deliverable .md files append a human-review metadata trailer
 * after the assembleable content — answer block, E-E-A-T signals, internal
 * links, FAQ dump, JSON-LD code block. It starts with a horizontal rule
 * followed by an "## SEO & AIO Metadata" heading. The trailer is intended
 * for the .docx + Word review pass, NOT for rendering on the site, so we
 * trim it before section parsing. Otherwise the last block annotation in
 * the body greedily captures everything down to end-of-file.
 */
const ASSEMBLY_END_MARKER = /\n---\n##\s+SEO\s*&(?:amp;)?\s*AIO Metadata\b/i

function trimMetadataTrailer(body: string): string {
  const m = body.match(ASSEMBLY_END_MARKER)
  return m && m.index !== undefined ? body.slice(0, m.index) : body
}

export function parsePageMd(markdown: string): PageManifest {
  const parsed = matter(markdown)
  // Validate the frontmatter shape via Zod. Throws on type mismatches (e.g.
  // `faq_block: "broken"` instead of an array) so the validate-deliverable
  // script can fail CI before a malformed deliverable ships. Missing fields
  // fall back to safe defaults — old deliverables keep building.
  const fm = PageFrontmatterSchema.parse(parsed.data)
  const body = trimMetadataTrailer(parsed.content)

  /**
   * Splits on the canonical annotation pattern:
   *   <!-- block: <id> | variant: <v> | image: <f> | query: "<q>" -->
   * immediately followed by a ## heading.
   * Variant, image, and query are all optional.
   *
   * `query` is the Pexels search query Phase I emitted alongside the image.
   * Captured here so it's surfaced on PageSection, but the renderer doesn't
   * use it — the image is already downloaded into public/content-assets/
   * by the time the deliverable lands.
   */
  const SECTION_PATTERN =
    /<!-- block: ([a-z-]+)(?:\s*\|\s*variant:\s*([a-z0-9-]+))?(?:\s*\|\s*image:\s*([^\s|>]+))?(?:\s*\|\s*query:\s*"([^"]+)")?\s*-->\s*\n##\s+(.+?)\n([\s\S]*?)(?=\n<!-- block:|$)/g

  const sections: PageSection[] = []
  let m: RegExpExecArray | null
  let i = 0

  while ((m = SECTION_PATTERN.exec(body)) !== null) {
    sections.push({
      blockId: m[1],
      variant: m[2] || undefined,
      image: m[3] || undefined,
      query: m[4] || undefined,
      heading: m[5].trim(),
      content: m[6].trim(),
      position: i++,
    })
  }

  /**
   * Drop duplicate FAQ sections.
   *
   * The Phase I content generator sometimes emits an "## Frequently Asked
   * Questions" section in the body (typically annotated as content-prose),
   * even though the deliverable-builder always auto-appends a structured
   * faq-accordion block from the page's faq_block metadata. Result: two
   * FAQ sections render back-to-back with substantially identical Q&A.
   *
   * When both exist, the auto-appended faq-accordion is canonical — it has
   * the structured data behind the FAQPage JSON-LD and the proper
   * accordion UI. The body-prose version is the stray duplicate, so drop it.
   *
   * Conservative: only drops non-faq-accordion sections whose heading
   * starts with "Frequently Asked Questions" or "FAQ" AND only when an
   * faq-accordion block exists on the page. A page that legitimately
   * uses ONLY a prose FAQ keeps its content.
   */
  const hasFaqAccordion = sections.some(s => s.blockId === 'faq-accordion')
  const filteredSections = hasFaqAccordion
    ? sections.filter(
        s =>
          s.blockId === 'faq-accordion' ||
          !/^(?:Frequently Asked Questions|FAQ)\b/i.test(s.heading)
      )
    : sections

  return {
    title: fm.title,
    url: fm.url,
    meta_title: fm.meta_title,
    meta_description: fm.meta_description,
    target_keyword: fm.target_keyword,
    canonical_url: fm.canonical_url,
    schema_markup: fm.schema_markup,
    hero_block: fm.hero ?? fm.hero_block ?? 'page-header',
    hero_variant: fm.hero_variant,
    hero_image: fm.hero_image,
    hero_image_alt: fm.hero_image_alt,
    hero_subhead: fm.hero_subhead?.trim() || undefined,
    answer_block: fm.answer_block,
    eeat_signals: fm.eeat_signals,
    internal_links: fm.internal_links,
    faq_block: fm.faq_block,
    llm_citation_note: fm.llm_citation_note,
    sections: filteredSections,
  }
}
