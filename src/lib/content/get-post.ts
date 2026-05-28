import { promises as fs } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { cacheLife } from 'next/cache'
import { PostFrontmatterSchema, type PostFrontmatter } from './post-frontmatter-schema'

const POSTS_DIR = () => path.join(process.cwd(), 'content', 'posts')

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  body: string
}

export type PostMeta = {
  slug: string
  frontmatter: PostFrontmatter
}

/**
 * List all post slugs (filename minus `.md`) in content/posts/. Returns an
 * empty array — never throws — when the directory doesn't exist (fresh-clone
 * state, before any insights are unpacked).
 */
export async function listPostSlugs(): Promise<string[]> {
  'use cache'
  cacheLife('max')
  try {
    const entries = await fs.readdir(POSTS_DIR())
    return entries.filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3))
  } catch {
    return []
  }
}

/**
 * Read a single post by slug. Throws ENOENT if the file is missing; the page
 * handler catches and notFound()s.
 */
export async function getPost(slug: string): Promise<Post> {
  'use cache'
  cacheLife('max')
  const filePath = path.join(POSTS_DIR(), `${slug}.md`)
  const raw = await fs.readFile(filePath, 'utf-8')
  const parsed = matter(raw)
  const frontmatter = PostFrontmatterSchema.parse(parsed.data)
  return {
    slug: frontmatter.slug || slug,
    frontmatter,
    body: parsed.content,
  }
}

/**
 * Lightweight metadata-only listing for the /insights index: reads every
 * post's frontmatter (skips the body) and returns them sorted newest-first by
 * `date` (string compare works for ISO YYYY-MM-DD).
 */
export async function listPostsMeta(): Promise<PostMeta[]> {
  'use cache'
  cacheLife('max')
  const slugs = await listPostSlugs()
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(POSTS_DIR(), `${slug}.md`), 'utf-8')
      const parsed = matter(raw)
      const frontmatter = PostFrontmatterSchema.parse(parsed.data)
      return { slug: frontmatter.slug || slug, frontmatter }
    })
  )
  return entries.sort((a, b) => {
    const da = a.frontmatter.date || ''
    const db = b.frontmatter.date || ''
    return db.localeCompare(da)
  })
}
