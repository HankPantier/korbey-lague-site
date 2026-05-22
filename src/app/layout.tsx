import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Public_Sans } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/nav/NavBar'
import { Footer } from '@/components/footer/Footer'
import { Analytics } from '@/components/analytics/Analytics'
import { getBrandConfig } from '@/lib/brand/get-brand-config'
import { getNavConfig } from '@/lib/nav/get-nav-config'
import { siteConfig } from '../../site.config'

// Placeholder fonts — generate-theme.ts will rewrite these per client in a
// future iteration. For now, hardcode Public Sans (matches design.json default).
// Loaded once and aliased to both heading + body CSS variables so theme.css
// (which references --font-{heading,body}-loaded) keeps working without a
// second next/font instance for the same family.
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading-loaded',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getBrandConfig()
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: brand.firm.name,
      template: `%s | ${brand.firm.name}`,
    },
    description:
      brand.firm.tagline ?? `${brand.firm.name} — accounting & advisory services`,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [brand, nav] = await Promise.all([getBrandConfig(), getNavConfig()])

  return (
    <html
      lang="en"
      className={publicSans.variable}
      style={{ '--font-body-loaded': 'var(--font-heading-loaded)' } as CSSProperties}
    >
      <body
        className="min-h-screen flex flex-col antialiased bg-background text-foreground"
        // Surface the firm's contact email as a body data-attribute so the
        // client-side Form component's mailto fallback can read it without
        // needing brand data plumbed through BlockRenderer as a prop. Empty
        // string when no email is configured — the fallback just opens a
        // blank "to:" mailto, which is still slightly better than nothing.
        data-contact-email={brand.contact.email ?? ''}
        data-firm-name={brand.firm.name}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:text-foreground focus:rounded-md focus:px-4 focus:py-2 focus:shadow-lg focus:outline focus:outline-2 focus:outline-cyan-500"
        >
          Skip to main content
        </a>
        <NavBar brand={brand} nav={nav} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
