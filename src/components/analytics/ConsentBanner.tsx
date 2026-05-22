'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

/**
 * ConsentBanner — sticky bottom card with Accept / Decline.
 *
 * Outer element is <aside data-component="cookie-consent"> so the
 * design-brief script's chrome-capture regex picks it up the same way
 * it captures navbar + footer. Slots are exposed via data-slot so
 * design-overrides.css can target precisely without inspecting our
 * internals.
 *
 * On Accept/Decline we write the cookie and call router.refresh(), which
 * re-runs the server tree against the new cookie state without a full
 * page reload — the <Analytics> server component then renders the GA/GTM
 * script tag (or nothing, on decline) in the next paint.
 */
export function ConsentBanner() {
  const router = useRouter()

  const setConsent = (value: 'accepted' | 'declined') => {
    document.cookie = `analytics-consent=${value}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`
    router.refresh()
  }

  return (
    <aside
      data-component="cookie-consent"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[calc(100%-2rem)] bg-background border border-border rounded-lg shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
    >
      <p data-slot="message" className="text-sm text-foreground">
        We use cookies to understand how visitors use our site.{' '}
        <Link href="/privacy" className="underline">
          Learn more
        </Link>
        .
      </p>
      <div className="flex gap-2 shrink-0">
        <Button
          data-slot="decline"
          variant="ghost"
          size="sm"
          onClick={() => setConsent('declined')}
        >
          Decline
        </Button>
        <Button
          data-slot="accept"
          size="sm"
          onClick={() => setConsent('accepted')}
        >
          Accept
        </Button>
      </div>
    </aside>
  )
}
