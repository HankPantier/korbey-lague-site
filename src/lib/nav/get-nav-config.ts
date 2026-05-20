import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { NavJson } from './types'

let cached: NavJson | null = null

export async function getNavConfig(): Promise<NavJson> {
  if (process.env.NODE_ENV === 'production' && cached) return cached
  const filePath = path.join(process.cwd(), 'content', 'nav.json')
  const raw = await fs.readFile(filePath, 'utf-8')
  const parsed = JSON.parse(raw) as NavJson
  if (process.env.NODE_ENV === 'production') cached = parsed
  return parsed
}
