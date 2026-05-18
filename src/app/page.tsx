import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getPageMarkdown } from '@/lib/content/get-page'
import { parsePageMd } from '@/lib/assembly/parse-page-md'
import { getBrandConfig } from '@/lib/brand/get-brand-config'
import { PageLayout } from '@/components/layout/PageLayout'
import { BlockRenderer } from '@/components/assembly/BlockRenderer'
import { SchemaScript } from '@/components/layout/SchemaScript'
import { Hero } from '@/components/blocks/Hero'
import { HeroSplit } from '@/components/blocks/HeroSplit'
import { PageHeader } from '@/components/blocks/PageHeader'
import {
  extractHeroProps,
  extractHeroSplitProps,
  extractPageHeaderProps,
} from '@/lib/assembly/extract-block-props'

export async function generateMetadata(): Promise<Metadata> {
  const md = await getPageMarkdown('/')
  const manifest = parsePageMd(md)
  return {
    title: manifest.meta_title || manifest.title,
    description: manifest.meta_description,
    alternates: { canonical: manifest.canonical_url || undefined },
  }
}

function renderHeroBlock(manifest: Parameters<typeof extractHeroProps>[0]): ReactNode {
  switch (manifest.hero_block) {
    case 'hero':
      return <Hero {...extractHeroProps(manifest)} />
    case 'hero-split':
      return <HeroSplit {...extractHeroSplitProps(manifest)} />
    case 'page-header':
      return <PageHeader {...extractPageHeaderProps(manifest)} />
    default:
      // Unknown hero_block — fall back to PageHeader for safety
      return <PageHeader {...extractPageHeaderProps(manifest)} />
  }
}

export default async function HomePage() {
  const md = await getPageMarkdown('/')
  const manifest = parsePageMd(md)
  const brand = await getBrandConfig()

  return (
    <>
      <SchemaScript manifest={manifest} brand={brand} />
      <PageLayout hero={renderHeroBlock(manifest)}>
        {manifest.sections.map((section, i) => (
          <BlockRenderer key={i} section={section} manifest={manifest} />
        ))}
      </PageLayout>
    </>
  )
}
