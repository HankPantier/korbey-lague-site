import { describe, expect, it, vi } from 'vitest'

// Mock the page loader so the test doesn't depend on Next's runtime
// (`'use cache' + cacheLife` require Next compilation). The handler's job under
// test is: route slug → URL, strip annotations, set headers, 404 on miss.
vi.mock('@/lib/content/get-page', () => ({
  getPageMarkdown: vi.fn(async (url: string) => {
    if (url === '/') {
      return [
        '---',
        'title: Test Home',
        'canonical_url: https://example.com/',
        '---',
        '',
        '<!-- block: hero | variant: image -->',
        '## Welcome',
        '',
        'Body text here.',
        '',
      ].join('\n')
    }
    throw Object.assign(new Error('ENOENT'), { code: 'ENOENT' })
  }),
}))

import { GET } from './route'

function call(slug?: string[]) {
  const path = slug ? `/api/md/${slug.join('/')}` : '/api/md'
  return GET(new Request(`http://localhost${path}`), {
    params: Promise.resolve(slug ? { slug } : {}),
  })
}

describe('GET /api/md/[[...slug]] — agent-facing markdown endpoint', () => {
  it('serves the home page when slug is undefined', async () => {
    const res = await call(undefined)
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toContain('text/markdown')
    expect(res.headers.get('Cache-Control')).toContain('s-maxage=')

    const body = await res.text()
    // Frontmatter is preserved (agents want this metadata).
    expect(body.startsWith('---')).toBe(true)
    expect(body).toMatch(/^title:/m)
    // Block annotations are stripped (HTML noise for an agent reader).
    expect(body).not.toMatch(/<!--\s*block:/)
    // Actual prose content survived.
    expect(body).toContain('## ')
  })

  it('returns 404 for a slug that does not exist', async () => {
    const res = await call(['nope', 'does-not-exist'])
    expect(res.status).toBe(404)
    expect(res.headers.get('Content-Type')).toContain('text/plain')
  })
})
