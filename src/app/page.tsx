import type { Metadata } from 'next'
import { getPageMarkdown } from '@/lib/content/get-page'
import { parsePageMd } from '@/lib/assembly/parse-page-md'
import { getBrandConfig } from '@/lib/brand/get-brand-config'
import { PageLayout } from '@/components/layout/PageLayout'
import { BlockRenderer } from '@/components/assembly/BlockRenderer'
import { SchemaScript } from '@/components/layout/SchemaScript'
import { Hero } from '@/components/blocks/Hero'
import { extractHeroProps } from '@/lib/assembly/extract-block-props'

export async function generateMetadata(): Promise<Metadata> {
  const md = await getPageMarkdown('/')
  const manifest = parsePageMd(md)
  return {
    title: manifest.meta_title || manifest.title,
    description: manifest.meta_description,
    alternates: { canonical: manifest.canonical_url || undefined },
  }
}

export default async function HomePage() {
  const md = await getPageMarkdown('/')
  const manifest = parsePageMd(md)
  const brand = await getBrandConfig()

  const heroProps = extractHeroProps(manifest)
  const heroElement =
    manifest.hero_block !== 'page-header' ? <Hero {...heroProps} /> : null

  return (
    <>
      <SchemaScript manifest={manifest} brand={brand} />
      <PageLayout hero={heroElement}>
        {manifest.sections.map((section, i) => (
          <BlockRenderer key={i} section={section} manifest={manifest} />
        ))}
      </PageLayout>
    </>
  )
}
