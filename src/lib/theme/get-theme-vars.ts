import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { DesignJson } from './types'

let cached: DesignJson | null = null

export async function getDesignConfig(): Promise<DesignJson> {
  if (cached) return cached
  const filePath = path.join(process.cwd(), 'content', 'design.json')
  const raw = await fs.readFile(filePath, 'utf-8')
  const parsed = JSON.parse(raw) as DesignJson
  cached = parsed
  return parsed
}
