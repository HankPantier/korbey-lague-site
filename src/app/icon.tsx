import { ImageResponse } from 'next/og'
import { getBrandConfig } from '@/lib/brand/get-brand-config'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/**
 * Programmatic favicon. Reads brand.firm.name + brand.palette.primary at
 * build/request time and renders an initials-on-brand-color tile — no static
 * file shipped, no per-client setup. A future improvement could render
 * `brand.logo.mark` when present; for now the initials tile is consistent
 * across every client and works without any logo asset configured.
 */
export default async function Icon() {
  const brand = await getBrandConfig()
  const initials = brand.firm.name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: brand.palette.primary,
          color: brand.palette.nearWhite,
          fontSize: initials.length > 1 ? 18 : 22,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: 'sans-serif',
        }}
      >
        {initials || '·'}
      </div>
    ),
    { ...size }
  )
}
