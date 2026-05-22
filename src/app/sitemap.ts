import type { MetadataRoute } from 'next'
import { cacheLife } from 'next/cache'
import { listPageSlugs } from '@/lib/content/get-page'
import { siteConfig } from '../../site.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Sitemap is build-time data; without 'use cache' the new Date() calls
  // below would make it per-request dynamic under cacheComponents: true.
  'use cache'
  cacheLife('max')
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '')
  const slugs = await listPageSlugs()

  // listPageSlugs already excludes 'home' (it's served from app/page.tsx).
  // Each remaining slug is one URL segment with '--' as path separator.
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...slugs.map(slug => ({
      url: `${baseUrl}/${slug.replace(/--/g, '/')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return entries
}
