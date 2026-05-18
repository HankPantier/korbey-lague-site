/**
 * extract-block-props.ts
 * Stage 2 of the assembly pipeline: typed prop extraction for each block type.
 * For M3.B we implement extractors for the 5 blocks landing in M3.F:
 *   Hero (page-level, from manifest), ContentSplit, FeatureGrid, CtaBanner, FaqAccordion.
 */

import type { PageSection, PageManifest } from './parse-page-md'
import {
  extractTrailingCta,
  parseIconTitleDescriptionList,
  parseFaqList,
} from './md-utils'

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export type HeroProps = {
  variant: 'image' | 'video' | 'slider' | 'image-right' | 'image-left'
  image?: string
  headline: string
  subheadline: string
  cta_primary?: { label: string; url: string }
}

/**
 * Hero is page-level: sourced from frontmatter.
 * Subheadline comes from meta_description (a brief tagline authored in frontmatter).
 * This avoids duplicating body section content below the hero.
 */
export function extractHeroProps(manifest: PageManifest): HeroProps {
  return {
    variant: (manifest.hero_variant as HeroProps['variant']) ?? 'image',
    image: manifest.hero_image,
    // Strip " | Firm Name" suffix from title to get the clean page headline.
    headline: manifest.title.split(' | ')[0].trim(),
    subheadline: manifest.meta_description,
    cta_primary: undefined,
  }
}

// ---------------------------------------------------------------------------
// ContentSplit
// ---------------------------------------------------------------------------

export type ContentSplitProps = {
  variant: 'image-right' | 'image-left'
  heading: string
  body: string  // raw markdown
  image: string
  image_alt: string
  cta?: { label: string; url: string }
}

export function extractContentSplitProps(section: PageSection): ContentSplitProps {
  const { body, cta } = extractTrailingCta(section.content)
  return {
    variant: (section.variant as 'image-right' | 'image-left') ?? 'image-right',
    heading: section.heading,
    body,
    image: section.image ?? '',
    image_alt: section.heading,  // fallback alt text
    cta,
  }
}

// ---------------------------------------------------------------------------
// FeatureGrid
// ---------------------------------------------------------------------------

export type FeatureGridProps = {
  variant: '3-col' | '4-col'
  heading: string
  intro?: string
  items: Array<{ icon: string; title: string; description: string }>
}

export function extractFeatureGridProps(section: PageSection): FeatureGridProps {
  const items = parseIconTitleDescriptionList(section.content)

  // Detect optional intro paragraph before the first list item.
  const lines = section.content.split('\n')
  const firstListIdx = lines.findIndex(l => /^\s*[-*]\s+/.test(l))
  const intro =
    firstListIdx > 0
      ? lines.slice(0, firstListIdx).join('\n').trim() || undefined
      : undefined

  return {
    variant: (section.variant as '3-col' | '4-col') ?? '3-col',
    heading: section.heading,
    intro,
    items,
  }
}

// ---------------------------------------------------------------------------
// CtaBanner
// ---------------------------------------------------------------------------

export type CtaBannerProps = {
  variant: 'color-bg' | 'image-bg'
  heading: string
  body?: string
  background_asset?: string
  cta_primary?: { label: string; url: string }
}

export function extractCtaBannerProps(section: PageSection): CtaBannerProps {
  const { body, cta } = extractTrailingCta(section.content)
  return {
    variant: (section.variant as 'color-bg' | 'image-bg') ?? 'color-bg',
    heading: section.heading,
    body: body.trim() || undefined,
    background_asset: section.image,
    cta_primary: cta,
  }
}

// ---------------------------------------------------------------------------
// FaqAccordion
// ---------------------------------------------------------------------------

export type FaqAccordionProps = {
  heading: string
  items: Array<{ question: string; answer: string }>
}

/**
 * Prefer the structured manifest.faq_block (richer source) if present;
 * otherwise parse Q&A pairs from the section body.
 */
export function extractFaqAccordionProps(
  section: PageSection,
  manifest: PageManifest
): FaqAccordionProps {
  const items =
    manifest.faq_block && manifest.faq_block.length > 0
      ? manifest.faq_block
      : parseFaqList(section.content)
  return {
    heading: section.heading,
    items,
  }
}
