import { cookies } from 'next/headers'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ConsentBanner } from './ConsentBanner'

/**
 * Analytics — orchestrates analytics scripts + the consent banner.
 *
 * Reads the analytics IDs from env (NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GTM_ID)
 * and the visitor's consent state from the `analytics-consent` cookie.
 * Runs as an async Server Component so the SSR'd HTML is correct — the
 * design-brief script fetches plain SSR markup and needs the banner to be
 * present in that output.
 *
 * When both GA4 and GTM IDs are set, GTM wins (it can load GA4 itself, so
 * loading both is double-counting).
 *
 * The `_cookie-preview` cookie is an escape hatch used by
 * scripts/export-design-brief.ts to force-render the banner before a real
 * analytics ID is configured, so the banner's markup can be captured in
 * the design brief alongside navbar + footer.
 */
export async function Analytics() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID ?? ''
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? ''

  const cookieStore = await cookies()
  const consent = cookieStore.get('analytics-consent')?.value
  const preview = cookieStore.get('_cookie-preview')?.value === '1'

  if (consent === 'accepted') {
    if (gtmId) return <GoogleTagManager gtmId={gtmId} />
    if (ga4Id) return <GoogleAnalytics gaId={ga4Id} />
    return null
  }
  if (consent === 'declined') return null

  if (ga4Id || gtmId || preview) return <ConsentBanner />
  return null
}
