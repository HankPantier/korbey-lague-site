'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function setConsent(value: 'accepted' | 'declined') {
  document.cookie = `analytics-consent=${value}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`
  // Reload so the server-rendered <Analytics> re-evaluates with the new
  // cookie state and injects (or doesn't) the GA/GTM script tag.
  window.location.reload()
}

/**
 * ConsentBanner — sticky bottom card with Accept / Decline.
 *
 * Outer element is <aside data-component="cookie-consent"> so the
 * design-brief script's chrome-capture regex picks it up the same way
 * it captures navbar + footer. Slots are exposed via data-slot so
 * design-overrides.css can target precisely without inspecting our
 * internals.
 */
export function ConsentBanner() {
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
