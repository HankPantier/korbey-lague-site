import { NextResponse, type NextRequest } from 'next/server'

/**
 * Agent-readiness proxy (formerly "middleware" before Next 16). Two jobs:
 *
 *   1. Rewrite `<page>.md` URLs to the internal markdown route handler at
 *      `/api/md/[[...slug]]`, so agents that request the raw markdown of a
 *      page get text/markdown without any client-side detection. The browser
 *      address stays exactly as requested (rewrite ≠ redirect).
 *
 *   2. For HTML page responses, advertise the `.md` companion via a per-URL
 *      `Link: rel=alternate; type=text/markdown` header. The two static Link
 *      headers in `next.config.ts` (rel=describedby → /llms.txt, rel=sitemap)
 *      apply globally; this one varies per page and so has to live here.
 *
 * The matcher excludes Next internals, /api/*, and static asset extensions —
 * so robots.txt, sitemap.xml, llms.txt, images, fonts, etc. all flow through
 * untouched.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.endsWith('.md')) {
    // `/index.md` → `/api/md`  (home)
    // `/services/virtual-cfo.md` → `/api/md/services/virtual-cfo`
    const stripped = pathname.slice(0, -3)
    const internalPath =
      stripped === '/index' || stripped === '/' || stripped === ''
        ? '/api/md'
        : `/api/md${stripped}`
    const url = req.nextUrl.clone()
    url.pathname = internalPath
    return NextResponse.rewrite(url)
  }

  const res = NextResponse.next()
  const mdUrl = pathname === '/' ? '/index.md' : `${pathname}.md`
  res.headers.append(
    'Link',
    `<${mdUrl}>; rel="alternate"; type="text/markdown"`
  )
  return res
}

export const config = {
  matcher: [
    // Skip Next internals (_next/), the existing /api/* routes, and any static
    // asset by extension. Everything else (HTML pages + .md URLs) flows in.
    '/((?!_next/|api/|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff2?|css|js|map|txt|xml|json)$).*)',
  ],
}
