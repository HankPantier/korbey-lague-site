import type { NextConfig } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'

async function readRedirectsCsv(): Promise<Array<{ source: string; destination: string; permanent: true }>> {
  const csvPath = path.join(process.cwd(), 'content', 'redirects.csv')
  let raw: string
  try {
    raw = await fs.readFile(csvPath, 'utf-8')
  } catch {
    // No file present — no redirects (e.g. before unpack).
    return []
  }

  const redirects: Array<{ source: string; destination: string; permanent: true }> = []
  for (const rawLine of raw.split('\n')) {
    const line = rawLine.trim()
    if (!line) continue
    // Skip comment lines.
    if (line.startsWith('#')) continue
    // Skip the header row.
    if (line.startsWith('old_url,')) continue

    // Minimal CSV parsing: handle quoted fields that may contain commas.
    const cells = parseCsvLine(line)
    const [from, to] = cells
    if (!from || !to) continue
    redirects.push({ source: from, destination: to, permanent: true })
  }
  return redirects
}

function parseCsvLine(line: string): string[] {
  const out: string[] = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        cur += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        out.push(cur)
        cur = ''
      } else {
        cur += ch
      }
    }
  }
  out.push(cur)
  return out.map(c => c.trim())
}

const nextConfig: NextConfig = {
  async redirects() {
    const r = await readRedirectsCsv()
    if (r.length > 0) {
      console.log(`[next.config] Loaded ${r.length} redirect(s) from content/redirects.csv`)
    }
    return r
  },
}

export default nextConfig
