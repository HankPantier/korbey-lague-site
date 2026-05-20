import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { BrandJson } from './types'

let cached: BrandJson | null = null

export async function getBrandConfig(): Promise<BrandJson> {
  if (process.env.NODE_ENV === 'production' && cached) return cached
  const filePath = path.join(process.cwd(), 'content', 'brand.json')
  const raw = await fs.readFile(filePath, 'utf-8')
  const parsed = JSON.parse(raw) as BrandJson
  if (process.env.NODE_ENV === 'production') cached = parsed
  return parsed
}
