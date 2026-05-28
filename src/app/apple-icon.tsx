import { ImageResponse } from 'next/og'
import { getBrandConfig } from '@/lib/brand/get-brand-config'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/**
 * Apple touch icon — larger sibling of `src/app/icon.tsx`. Same brand-color +
 * initials approach; iOS home-screen + Apple share UI use this.
 */
export default async function AppleIcon() {
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
          fontSize: initials.length > 1 ? 96 : 120,
          fontWeight: 700,
          letterSpacing: -3,
          fontFamily: 'sans-serif',
        }}
      >
        {initials || '·'}
      </div>
    ),
    { ...size }
  )
}
