/**
 * BlockRenderer.tsx
 * Stage 3 of the assembly pipeline: dispatch each parsed section to its
 * block component. Falls back to UnknownBlockPlaceholder for blocks not
 * yet implemented (16 of 21 as of M3.B).
 *
 * Hero is NOT in the switch — it is page-level and rendered by PageLayout (M3.C).
 */

import type { PageSection, PageManifest } from '@/lib/assembly/parse-page-md'

import { ContentSplit } from '@/components/blocks/ContentSplit'
import { FeatureGrid } from '@/components/blocks/FeatureGrid'
import { CtaBanner } from '@/components/blocks/CtaBanner'
import { FaqAccordion } from '@/components/blocks/FaqAccordion'
import { IntroText } from '@/components/blocks/IntroText'
import { ServiceCards } from '@/components/blocks/ServiceCards'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { Testimonials } from '@/components/blocks/Testimonials'
import { StatsBar } from '@/components/blocks/StatsBar'
import { ContentProse } from '@/components/blocks/ContentProse'
import { ChecklistSection } from '@/components/blocks/ChecklistSection'
import { ProcessSteps } from '@/components/blocks/ProcessSteps'
import { IndustryCards } from '@/components/blocks/IndustryCards'
import { LogoBar } from '@/components/blocks/LogoBar'
import { Pricing } from '@/components/blocks/Pricing'
import { ContentCards } from '@/components/blocks/ContentCards'
import { Form } from '@/components/blocks/Form'
import { ContentTable } from '@/components/blocks/ContentTable'
import { ContactInfo } from '@/components/blocks/ContactInfo'
import { MapBlock } from '@/components/blocks/Map'

import {
  extractContentSplitProps,
  extractFeatureGridProps,
  extractCtaBannerProps,
  extractFaqAccordionProps,
  extractIntroTextProps,
  extractServiceCardsProps,
  extractTeamGridProps,
  extractTestimonialsProps,
  extractStatsBarProps,
  extractContentProseProps,
  extractChecklistSectionProps,
  extractProcessStepsProps,
  extractIndustryCardsProps,
  extractLogoBarProps,
  extractPricingProps,
  extractContentCardsProps,
  extractFormProps,
  extractContentTableProps,
} from '@/lib/assembly/extract-block-props'

type BlockRendererProps = {
  section: PageSection
  manifest: PageManifest
}

/**
 * Placeholder rendered for any blockId that doesn't have a component yet.
 * Shows block metadata and a content preview so pages don't crash during
 * incremental delivery.
 */
function UnknownBlockPlaceholder({ section }: { section: PageSection }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-md border border-dashed border-border bg-muted/40 p-6">
        <p className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
          Block not yet implemented: {section.blockId}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">{section.heading}</h2>
        <pre className="mt-3 text-xs text-muted-foreground whitespace-pre-wrap">
          {section.content.slice(0, 400)}
          {section.content.length > 400 ? '\n[…truncated]' : ''}
        </pre>
      </div>
    </section>
  )
}

export function BlockRenderer({ section, manifest }: BlockRendererProps) {
  switch (section.blockId) {
    case 'content-split':
      return <ContentSplit {...extractContentSplitProps(section)} />
    case 'feature-grid':
      return <FeatureGrid {...extractFeatureGridProps(section)} />
    case 'cta-banner':
      return <CtaBanner {...extractCtaBannerProps(section)} />
    case 'faq-accordion':
      return <FaqAccordion {...extractFaqAccordionProps(section, manifest)} />
    case 'intro-text':
      return <IntroText {...extractIntroTextProps(section)} />
    case 'service-cards':
      return <ServiceCards {...extractServiceCardsProps(section)} />
    case 'team-grid':
      return <TeamGrid {...extractTeamGridProps(section)} />
    case 'testimonials':
      return <Testimonials {...extractTestimonialsProps(section)} />
    case 'stats-bar':
      return <StatsBar {...extractStatsBarProps(section)} />
    case 'content-prose':
      return <ContentProse {...extractContentProseProps(section)} />
    case 'checklist-section':
      return <ChecklistSection {...extractChecklistSectionProps(section)} />
    case 'process-steps':
      return <ProcessSteps {...extractProcessStepsProps(section)} />
    case 'industry-cards':
      return <IndustryCards {...extractIndustryCardsProps(section)} />
    case 'logo-bar':
      return <LogoBar {...extractLogoBarProps(section)} />
    case 'pricing':
      return <Pricing {...extractPricingProps(section)} />
    case 'content-cards':
      return <ContentCards {...extractContentCardsProps(section)} />
    case 'form':
      return <Form {...extractFormProps(section)} />
    case 'content-table':
      return <ContentTable {...extractContentTableProps(section)} />
    case 'contact-info':
      // Data-driven block — reads from content/brand.json. Only needs the heading.
      return <ContactInfo heading={section.heading} />
    case 'map':
      // Data-driven block — reads address from content/brand.json.
      return <MapBlock heading={section.heading} />
    default:
      return <UnknownBlockPlaceholder section={section} />
  }
}
