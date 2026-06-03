import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Section } from '@/components/blocks/Section'
import { Button } from '@/components/ui/button'
import { getBrandConfig } from '@/lib/brand/get-brand-config'
import { getPost, listPostSlugs } from '@/lib/content/get-post'
import { siteConfig } from '../../../../site.config'
import { MD_LINK_COMPONENTS } from '@/lib/markdown-components'
import { resolveImageSrc } from '@/lib/assembly/resolve-image'

type Props = {
  params: Promise<{ slug: string }>
}

const EMPTY_PLACEHOLDER = '__no_posts__'

// Cache Components requires generateStaticParams to return at least one entry,
// matching the [...slug] pattern. The page handler maps the placeholder to 404.
export async function generateStaticParams() {
  const slugs = await listPostSlugs()
  return slugs.length === 0 ? [{ slug: EMPTY_PLACEHOLDER }] : slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (slug === EMPTY_PLACEHOLDER) return { title: 'Not found' }
  try {
    const post = await getPost(slug)
    const url = post.frontmatter.canonical_url || `${siteConfig.siteUrl.replace(/\/$/, '')}/insights/${post.slug}`
    const ogUrl = `/api/og/insights/${post.slug}`
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      alternates: { canonical: url },
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        url,
        type: 'article',
        publishedTime: post.frontmatter.date || undefined,
        authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
        images: [{ url: ogUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        images: [ogUrl],
      },
    }
  } catch {
    return { title: 'Not found' }
  }
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00Z')
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  if (slug === EMPTY_PLACEHOLDER) notFound()

  let post: Awaited<ReturnType<typeof getPost>>
  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  const brand = await getBrandConfig()
  const canonical =
    post.frontmatter.canonical_url ||
    `${siteConfig.siteUrl.replace(/\/$/, '')}/insights/${post.slug}`

  // BlogPosting JSON-LD — built from validated frontmatter only, never raw
  // user input, so the same dangerouslySetInnerHTML pattern as
  // src/components/layout/SchemaScript.tsx is safe here.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt || undefined,
    datePublished: post.frontmatter.date || undefined,
    author: post.frontmatter.author
      ? { '@type': 'Person', name: post.frontmatter.author }
      : { '@type': 'Organization', name: brand.firm.name },
    publisher: { '@type': 'Organization', name: brand.firm.name },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    image: resolveImageSrc(post.frontmatter.image),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section dataBlock="page-header" className="max-w-3xl mx-auto">
        <Link href="/insights" className="text-sm text-foreground/60 hover:text-primary">
          ← Back to Insights
        </Link>
        {post.frontmatter.date && (
          <time
            dateTime={post.frontmatter.date}
            className="mt-6 block text-sm text-muted-foreground"
          >
            {formatDate(post.frontmatter.date)}
          </time>
        )}
        <h1 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.author && (
          <p className="mt-3 text-foreground/70">By {post.frontmatter.author}</p>
        )}
        {post.frontmatter.excerpt && (
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
            {post.frontmatter.excerpt}
          </p>
        )}
      </Section>

      {post.frontmatter.image && (
        <Section className="max-w-4xl mx-auto !pt-0">
          <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={resolveImageSrc(post.frontmatter.image)!}
              alt={post.frontmatter.image_alt ?? post.frontmatter.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </Section>
      )}

      <Section className="max-w-3xl mx-auto">
        <article
          className="prose prose-neutral max-w-none prose-headings:font-heading prose-a:text-primary prose-a:underline"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_LINK_COMPONENTS}>
            {post.body}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <Button asChild variant="outline">
            <Link href="/insights">More insights →</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
