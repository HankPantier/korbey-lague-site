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
  parseH3CardList,
  parseTeamMembers,
  parseStatsList,
  parseTestimonials,
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

// ---------------------------------------------------------------------------
// IntroText
// ---------------------------------------------------------------------------

export type IntroTextProps = {
  variant: 'centered' | 'left-aligned'
  heading: string
  body: string  // raw markdown — render via react-markdown
  cta?: { label: string; url: string }
}

export function extractIntroTextProps(section: PageSection): IntroTextProps {
  const { body, cta } = extractTrailingCta(section.content)
  return {
    variant: (section.variant as IntroTextProps['variant']) ?? 'centered',
    heading: section.heading,
    body,
    cta,
  }
}

// ---------------------------------------------------------------------------
// PageHeader
// ---------------------------------------------------------------------------

export type PageHeaderProps = {
  headline: string
  subheadline?: string
  breadcrumb?: Array<{ label: string; url: string }>
}

/**
 * PageHeader is page-level — sourced from the manifest, not a section.
 * Breadcrumb is left empty here; M5 admin nav editor populates it later.
 */
export function extractPageHeaderProps(manifest: PageManifest): PageHeaderProps {
  return {
    // Strip " | Firm Name" suffix from title for the clean page headline
    headline: manifest.title.split(' | ')[0].trim(),
    subheadline: manifest.meta_description || undefined,
    breadcrumb: [],
  }
}

// ---------------------------------------------------------------------------
// ServiceCards
// ---------------------------------------------------------------------------

export type ServiceCardsProps = {
  variant: '2-col' | '3-col'
  heading: string
  intro?: string
  cards: Array<{ title: string; description: string; url?: string; image?: string }>
}

export function extractServiceCardsProps(section: PageSection): ServiceCardsProps {
  const { intro, cards } = parseH3CardList(section.content)
  return {
    variant: (section.variant as ServiceCardsProps['variant']) ?? '3-col',
    heading: section.heading,
    intro,
    cards,
  }
}

// ---------------------------------------------------------------------------
// TeamGrid
// ---------------------------------------------------------------------------

export type TeamGridProps = {
  variant: '2-col' | '3-col' | '4-col'
  heading: string
  intro?: string
  members: Array<{
    name: string
    title?: string
    credentials?: string
    bio?: string
    photo?: string
    photo_alt?: string
  }>
}

export function extractTeamGridProps(section: PageSection): TeamGridProps {
  const { intro, members } = parseTeamMembers(section.content)
  return {
    variant: (section.variant as TeamGridProps['variant']) ?? '3-col',
    heading: section.heading,
    intro,
    members,
  }
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export type TestimonialsProps = {
  variant: 'carousel' | 'grid'
  heading?: string
  testimonials: Array<{
    quote: string
    name: string
    title?: string
    company?: string
    rating?: number
  }>
}

export function extractTestimonialsProps(section: PageSection): TestimonialsProps {
  const items = parseTestimonials(section.content)
  return {
    variant: (section.variant as TestimonialsProps['variant']) ?? 'grid',
    heading: section.heading || undefined,
    testimonials: items,
  }
}

// ---------------------------------------------------------------------------
// StatsBar
// ---------------------------------------------------------------------------

export type StatsBarProps = {
  variant: '3-up' | '4-up'
  heading?: string
  stats: Array<{ value: string; label: string }>
}

export function extractStatsBarProps(section: PageSection): StatsBarProps {
  // parseStatsList handles both list and inline dot-delimited formats
  const stats = parseStatsList(section.content)
  return {
    variant: (section.variant as StatsBarProps['variant']) ?? '3-up',
    heading: section.heading || undefined,
    stats,
  }
}
