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

// Cache Components requires generateStaticParams to return at least one
// entry. Use a placeholder when the content directory only has home.md
// (the fresh-clone state, before any deliverable is unpacked); the page
// handler maps it to a 404 below.
const EMPTY_PLACEHOLDER = '__no_pages__'

export async function generateStaticParams() {
  const slugs = await listPageSlugs()
  if (slugs.length === 0) {
    return [{ slug: [EMPTY_PLACEHOLDER] }]
  }
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
  if (slug[0] === EMPTY_PLACEHOLDER) return { title: 'Not found' }
  try {
    const md = await getPageMarkdown(slugToUrl(slug))
    const manifest = parsePageMd(md)
    const ogUrl = `/api/og/${slug.join('/')}`
    return {
      title: manifest.meta_title || manifest.title,
      description: manifest.meta_description,
      alternates: { canonical: manifest.canonical_url || undefined },
      // OG + Twitter images come from /api/og/[[...slug]] — branded per page,
      // generated from frontmatter, no per-page PNG required.
      openGraph: {
        title: manifest.meta_title || manifest.title,
        description: manifest.meta_description,
        url: manifest.canonical_url || undefined,
        type: 'website',
        images: [{ url: ogUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: manifest.meta_title || manifest.title,
        description: manifest.meta_description,
        images: [ogUrl],
      },
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
  if (slug[0] === EMPTY_PLACEHOLDER) notFound()
  let manifest: ReturnType<typeof parsePageMd>
  try {
    const md = await getPageMarkdown(slugToUrl(slug))
    manifest = parsePageMd(md)
  } catch (err) {
    // Missing file OR malformed frontmatter (Zod). The validate-deliverable
    // script catches the latter at CI time; the runtime fallback is notFound.
    console.error('[page] Failed to load/parse:', err)
    notFound()
  }
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
