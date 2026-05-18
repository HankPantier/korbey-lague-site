/**
 * md-utils.ts
 * Markdown parsing helpers for the block assembly pipeline.
 * All functions are pure and never throw.
 */

/**
 * Split a markdown body into its first heading (H1 or H2) and the body below it.
 * Heading text excludes the leading "## " or "# ".
 * If no heading is found, returns { heading: '', body: markdown }.
 */
export function splitHeadingFromBody(markdown: string): { heading: string; body: string } {
  const match = markdown.match(/^#{1,2}\s+(.+?)(?:\n|$)([\s\S]*)/)
  if (!match) return { heading: '', body: markdown.trim() }
  return { heading: match[1].trim(), body: match[2].trim() }
}

/**
 * If the body ends with a markdown link on its own line ("[Label](url)"), pop
 * it off as a CTA. Returns { body, cta }. cta is undefined if no trailing link.
 */
export function extractTrailingCta(body: string): {
  body: string
  cta?: { label: string; url: string }
} {
  const ctaMatch = body.match(/\[([^\]]+)\]\(([^)]+)\)\s*$/)
  if (!ctaMatch) return { body }
  return {
    body: body.slice(0, ctaMatch.index).trimEnd(),
    cta: { label: ctaMatch[1], url: ctaMatch[2] },
  }
}

/**
 * Parse a list where each line is "- Icon: **Title** — Description".
 * Also accepts en-dash (–) or double-hyphen (--) as the separator.
 * Skips lines that don't match the pattern.
 */
export function parseIconTitleDescriptionList(
  body: string
): Array<{ icon: string; title: string; description: string }> {
  return body
    .split('\n')
    .filter(line => /^\s*[-*]\s+/.test(line))
    .map(line => {
      const cleaned = line.replace(/^\s*[-*]\s+/, '')
      // Primary pattern: IconName: **Title** [—|–|--] Description
      const match = cleaned.match(
        /^(\w+):\s+\*\*(.+?)\*\*\s*(?:—|–|--)\s*(.+)$/
      )
      if (match) {
        return { icon: match[1], title: match[2].trim(), description: match[3].trim() }
      }
      // Fallback: no icon — treat as **Title** [—|–|--] Description or plain text
      const fallback = cleaned.match(/^(?:\*\*(.+?)\*\*\s*(?:—|–|--)\s*(.+)|(.+)(?:—|–|--)(.+))$/)
      if (fallback) {
        if (fallback[1]) {
          return { icon: 'CheckCircle', title: fallback[1].trim(), description: fallback[2].trim() }
        }
        return { icon: 'CheckCircle', title: fallback[3].trim(), description: fallback[4].trim() }
      }
      return { icon: 'CheckCircle', title: cleaned.replace(/\*\*/g, '').trim(), description: '' }
    })
}

/**
 * Parse a stats line like:
 *   25+ years · 400+ clients · 3 CPAs on staff
 * or a list:
 *   - 25+ years
 *   - 400+ clients
 * Returns Array<{ value: string; label: string }>.
 * Value is the leading number/figure ("25+"), label is the rest.
 */
export function parseStatsList(body: string): Array<{ value: string; label: string }> {
  // Try list format first
  const listLines = body.split('\n').filter(l => /^\s*[-*]\s+/.test(l))
  if (listLines.length > 0) {
    return listLines.map(line => {
      const text = line.replace(/^\s*[-*]\s+/, '').replace(/\*\*/g, '').trim()
      const m = text.match(/^([\d,+$%\.]+(?:\+)?)\s*(.+)?$/)
      if (m) return { value: m[1].trim(), label: (m[2] ?? '').trim() }
      return { value: text, label: '' }
    })
  }

  // Try dot/middle-dot delimited inline format: "25+ years · 400+ clients"
  const separators = /\s*[·•|]\s*/
  const parts = body.split(separators).map(s => s.trim()).filter(Boolean)
  if (parts.length > 1) {
    return parts.map(part => {
      const m = part.match(/^([\d,+$%\.]+(?:\+)?)\s*(.+)?$/)
      if (m) return { value: m[1].trim(), label: (m[2] ?? '').trim() }
      return { value: part, label: '' }
    })
  }

  return []
}

/**
 * Parse a numbered or unordered list of steps.
 * Each item becomes: { number: '01', title: 'First Step', description: 'Body...' }
 * Title comes from the first line of the item, description from any subsequent lines.
 */
export function parseStepsList(
  body: string
): Array<{ number: string; title: string; description: string }> {
  // Match numbered items (1. ...) or bullets (- ...) as step starters
  const itemPattern = /^(?:(\d+)\.\s+|[-*]\s+)(.+)/
  const lines = body.split('\n')

  const items: Array<{ number: string; title: string; descLines: string[] }> = []
  let current: { number: string; title: string; descLines: string[] } | null = null

  for (const line of lines) {
    const m = line.match(itemPattern)
    if (m) {
      if (current) items.push(current)
      const rawTitle = m[2].trim()
      // Extract title and optional inline description from "**Title** — Description"
      const inlineMatch = rawTitle.match(/^\*\*(.+?)\*\*\s*(?:—|–|--)\s*(.+)$/)
      if (inlineMatch) {
        current = {
          number: m[1] ?? String(items.length + 1),
          title: inlineMatch[1].trim(),
          descLines: [inlineMatch[2].trim()],
        }
      } else {
        current = {
          number: m[1] ?? String(items.length + 1),
          title: rawTitle.replace(/\*\*/g, '').trim(),
          descLines: [],
        }
      }
    } else if (current && line.trim()) {
      current.descLines.push(line.trim())
    }
  }
  if (current) items.push(current)

  return items.map((item, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: item.title,
    description: item.descLines.join(' ').trim(),
  }))
}

/**
 * Parse FAQ markdown of the format:
 *   **Q: question?**
 *   A: answer text
 * Returns Array<{ question: string; answer: string }>.
 */
export function parseFaqList(body: string): Array<{ question: string; answer: string }> {
  const results: Array<{ question: string; answer: string }> = []
  // Match pairs of **Q: ...** followed by A: ...
  const pattern = /\*\*Q:\s*(.+?)\*\*\s*\nA:\s*([\s\S]+?)(?=\n\*\*Q:|$)/g
  let m: RegExpExecArray | null
  while ((m = pattern.exec(body)) !== null) {
    results.push({
      question: m[1].trim(),
      answer: m[2].trim(),
    })
  }
  return results
}
