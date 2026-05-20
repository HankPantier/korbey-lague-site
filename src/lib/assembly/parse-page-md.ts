/**
 * parse-page-md.ts
 * Stage 1 of the assembly pipeline: parse frontmatter + split sections.
 * Returns a fully typed PageManifest.
 */

import matter from 'gray-matter'

export type PageSection = {
  blockId: string
  variant?: string
  image?: string
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
  const fm = parsed.data as Record<string, unknown>
  const body = trimMetadataTrailer(parsed.content)

  /**
   * Splits on the canonical annotation pattern:
   *   <!-- block: <id> | variant: <v> | image: <f> -->
   * immediately followed by a ## heading.
   * Variant and image are both optional.
   */
  const SECTION_PATTERN =
    /<!-- block: ([a-z-]+)(?:\s*\|\s*variant:\s*([a-z0-9-]+))?(?:\s*\|\s*image:\s*([^\s>]+))?\s*-->\s*\n##\s+(.+?)\n([\s\S]*?)(?=\n<!-- block:|$)/g

  const sections: PageSection[] = []
  let m: RegExpExecArray | null
  let i = 0

  while ((m = SECTION_PATTERN.exec(body)) !== null) {
    sections.push({
      blockId: m[1],
      variant: m[2] || undefined,
      image: m[3] || undefined,
      heading: m[4].trim(),
      content: m[5].trim(),
      position: i++,
    })
  }

  return {
    title: String(fm.title ?? ''),
    url: String(fm.url ?? '/'),
    meta_title: String(fm.meta_title ?? ''),
    meta_description: String(fm.meta_description ?? ''),
    target_keyword: String(fm.target_keyword ?? ''),
    canonical_url: String(fm.canonical_url ?? ''),
    schema_markup: String(fm.schema_markup ?? 'WebPage'),
    hero_block: String(fm.hero ?? fm.hero_block ?? 'page-header'),
    hero_variant: typeof fm.hero_variant === 'string' ? fm.hero_variant : undefined,
    hero_image: typeof fm.hero_image === 'string' ? fm.hero_image : undefined,
    hero_subhead:
      typeof fm.hero_subhead === 'string' && fm.hero_subhead.trim()
        ? fm.hero_subhead.trim()
        : undefined,
    answer_block: typeof fm.answer_block === 'string' ? fm.answer_block : undefined,
    eeat_signals: Array.isArray(fm.eeat_signals) ? (fm.eeat_signals as string[]) : undefined,
    internal_links: Array.isArray(fm.internal_links)
      ? (fm.internal_links as InternalLink[])
      : undefined,
    faq_block: Array.isArray(fm.faq_block) ? (fm.faq_block as FaqItem[]) : undefined,
    llm_citation_note:
      typeof fm.llm_citation_note === 'string' ? fm.llm_citation_note : undefined,
    sections,
  }
}
