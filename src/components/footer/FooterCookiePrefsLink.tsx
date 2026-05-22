'use client'

/**
 * FooterCookiePrefsLink — clears the analytics-consent cookie and reloads,
 * which re-renders <Analytics> server-side with no cookie set and brings
 * the consent banner back. Satisfies the GDPR right-to-withdraw when the
 * banner is shipped enabled.
 */
export function FooterCookiePrefsLink() {
  return (
    <button
      type="button"
      onClick={() => {
        document.cookie =
          'analytics-consent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        window.location.reload()
      }}
      className="hover:text-background"
    >
      Cookie preferences
    </button>
  )
}
