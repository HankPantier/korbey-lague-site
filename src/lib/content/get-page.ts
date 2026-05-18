import { promises as fs } from 'node:fs'
import path from 'node:path'

/**
 * Convert a URL path to a .md filename in content/pages/.
 *   /                          → home.md
 *   /services                  → services.md
 *   /services/virtual-cfo      → services--virtual-cfo.md
 *   /industries/nonprofits     → industries--nonprofits.md
 */
export function pageUrlToFilename(url: string): string {
  const stripped = url.replace(/^\//, '').replace(/\/$/, '')
  if (!stripped) return 'home.md'
  return `${stripped.replace(/\//g, '--')}.md`
}

/**
 * Read a page markdown file by URL. Returns the raw .md content (frontmatter
 * + body). Throws ENOENT if the file doesn't exist — callers should catch
 * and 404 from page route handlers.
 */
export async function getPageMarkdown(url: string): Promise<string> {
  const filename = pageUrlToFilename(url)
  const filePath = path.join(process.cwd(), 'content', 'pages', filename)
  return fs.readFile(filePath, 'utf-8')
}

/**
 * List all page slugs available under content/pages/. Used by
 * generateStaticParams in the dynamic [...slug] route.
 */
export async function listPageSlugs(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'content', 'pages')
  const entries = await fs.readdir(dir)
  return entries
    .filter(f => f.endsWith('.md'))
    .map(f => f.slice(0, -3))  // drop .md
    .filter(slug => slug !== 'home')   // home is handled by app/page.tsx, not [...slug]
}
