import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getPageMarkdown, listPageSlugs } from '@/lib/content/get-page'
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

type Props = {
  params: Promise<{ slug: string[] }>
}

function slugToUrl(slug: string[]): string {
  return '/' + slug.join('/')
}

export async function generateStaticParams() {
  const slugs = await listPageSlugs()
  // Each slug like "services" or "services--virtual-cfo" — convert to slug[]
  // form. We use double-dash as URL segment separator in filenames, but the
  // Next.js dynamic [...slug] expects an array of single-segment strings.
  return slugs.map(filename => {
    const segments = filename.split('--')
    return { slug: segments }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const md = await getPageMarkdown(slugToUrl(slug))
    const manifest = parsePageMd(md)
    return {
      title: manifest.meta_title || manifest.title,
      description: manifest.meta_description,
      alternates: { canonical: manifest.canonical_url || undefined },
    }
  } catch {
    return { title: 'Not found' }
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

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params
  let md: string
  try {
    md = await getPageMarkdown(slugToUrl(slug))
  } catch {
    notFound()
  }

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
