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

/**
 * Parse a body where each card is an H3 section:
 *
 *   ### Card Title
 *   Paragraph(s) of description...
 *   [Optional CTA](/url)
 *
 * Returns intro (text before first ###) + typed cards.
 * All functions are pure and never throw.
 */
export function parseH3CardList(body: string): {
  intro?: string
  cards: Array<{ title: string; description: string; url?: string }>
} {
  const firstH3 = body.indexOf('\n###')
  const intro =
    firstH3 > 0 ? body.slice(0, firstH3).trim() || undefined : undefined

  // Split on ### headings (preserve the delimiter via positive lookbehind split trick)
  const raw = firstH3 >= 0 ? body.slice(firstH3) : body
  const chunks = raw.split(/(?=^###\s)/m).filter(c => c.trim().startsWith('###'))

  const cards = chunks.map(chunk => {
    const lines = chunk.trim().split('\n')
    const title = lines[0].replace(/^###\s+/, '').trim()
    const rest = lines.slice(1).join('\n').trim()
    // Pop trailing link as card url
    const ctaMatch = rest.match(/\[([^\]]+)\]\(([^)]+)\)\s*$/)
    if (ctaMatch) {
      return {
        title,
        description: rest.slice(0, ctaMatch.index).trimEnd(),
        url: ctaMatch[2],
      }
    }
    return { title, description: rest }
  })

  return { intro, cards }
}

/**
 * Parse team member sections written as:
 *
 *   ### Ron Lague, PFS
 *   Managing Partner · 40 years experience
 *   photo: ron-lague.jpg
 *   Ron has been the senior partner since 1985.
 *
 * Returns intro (text before first ###) + typed members.
 * - Credentials come from the comma-separated suffix of the H3 name line.
 * - Title line may contain a · separator (title · subtitle merged as title).
 * - photo: line (if present) is the photo filename.
 * - Remaining lines form the bio paragraph.
 * All functions are pure and never throw.
 */
export function parseTeamMembers(body: string): {
  intro?: string
  members: Array<{
    name: string
    title?: string
    credentials?: string
    bio?: string
    photo?: string
    photo_alt?: string
  }>
} {
  const firstH3 = body.indexOf('\n###')
  const intro =
    firstH3 > 0 ? body.slice(0, firstH3).trim() || undefined : undefined

  const raw = firstH3 >= 0 ? body.slice(firstH3) : body
  const chunks = raw.split(/(?=^###\s)/m).filter(c => c.trim().startsWith('###'))

  const members = chunks.map(chunk => {
    const lines = chunk.trim().split('\n').map(l => l.trim())
    // Line 0: ### Name, Credentials
    const nameLine = lines[0].replace(/^###\s+/, '').trim()
    const commaIdx = nameLine.lastIndexOf(',')
    const name = commaIdx > 0 ? nameLine.slice(0, commaIdx).trim() : nameLine
    const credentials = commaIdx > 0 ? nameLine.slice(commaIdx + 1).trim() : undefined

    let titleLine: string | undefined
    let photo: string | undefined
    const bioLines: string[] = []

    for (const line of lines.slice(1)) {
      if (!titleLine && !line.startsWith('photo:')) {
        // First non-photo, non-bio line is title
        titleLine = line.replace(/\*\*/g, '').trim()
      } else if (line.startsWith('photo:')) {
        photo = line.replace(/^photo:\s*/, '').trim()
      } else {
        bioLines.push(line)
      }
    }

    return {
      name,
      credentials: credentials || undefined,
      title: titleLine || undefined,
      photo: photo || undefined,
      photo_alt: photo ? `Photo of ${name}` : undefined,
      bio: bioLines.join(' ').trim() || undefined,
    }
  })

  return { intro, members }
}

/**
 * Parse testimonials written as blockquote pairs:
 *
 *   > "Quote text here."
 *   > — Name, Title at Company
 *
 * or single-line inline:
 *
 *   > "Quote" — Name, Title, Company
 *
 * Stanzas are separated by blank lines.
 * Returns typed testimonial objects. Never throws.
 */
export function parseTestimonials(body: string): Array<{
  quote: string
  name: string
  title?: string
  company?: string
}> {
  // Split into stanzas (blank-line separated groups)
  const stanzas = body.split(/\n{2,}/).map(s => s.trim()).filter(Boolean)

  return stanzas
    .map(stanza => {
      const bqLines = stanza.split('\n').filter(l => l.startsWith('> '))
      if (bqLines.length === 0) return null

      // Attribution line: last line starting with "> —" or "> --"
      const attrIdx = bqLines.findLastIndex(l =>
        /^>\s*(—|--|-)/.test(l)
      )
      if (attrIdx < 0) return null

      const attrLine = bqLines[attrIdx].replace(/^>\s*(—|--|-)?\s*/, '').trim()
      const quoteLines = bqLines.slice(0, attrIdx).map(l =>
        l.replace(/^>\s*/, '').replace(/^"|"$/g, '').trim()
      )
      const quote = quoteLines.join(' ').trim()

      // Parse: "Name, Title at Company" or "Name, Title, Company"
      const atCompanyMatch = attrLine.match(/^(.+?)\s+at\s+(.+)$/)
      let nameWithTitle = attrLine
      let company: string | undefined

      if (atCompanyMatch) {
        nameWithTitle = atCompanyMatch[1].trim()
        company = atCompanyMatch[2].trim()
      } else {
        // Fallback: last comma-separated segment is company
        const parts = attrLine.split(',').map(p => p.trim())
        if (parts.length >= 3) {
          company = parts.pop()
          nameWithTitle = parts.join(', ')
        }
      }

      // Split name from title at first comma
      const nameComma = nameWithTitle.indexOf(',')
      const name = nameComma > 0 ? nameWithTitle.slice(0, nameComma).trim() : nameWithTitle.trim()
      const title = nameComma > 0 ? nameWithTitle.slice(nameComma + 1).trim() : undefined

      if (!quote || !name) return null
      return { quote, name, title: title || undefined, company }
    })
    .filter((t): t is NonNullable<typeof t> => t !== null)
}
