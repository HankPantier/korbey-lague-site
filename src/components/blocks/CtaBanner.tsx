import { Section } from './Section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { CtaBannerProps } from '@/lib/assembly/extract-block-props'

export type { CtaBannerProps }

export function CtaBanner({
  variant,
  heading,
  body,
  background_asset,
  cta_primary,
}: CtaBannerProps) {
  const bgUrl =
    variant === 'image-bg' && background_asset
      ? `/content-assets/${background_asset}`
      : undefined

  return (
    <Section
      as="section"
      fullBleed
      bg={variant === 'image-bg' ? 'none' : 'primary'}
      className="relative overflow-hidden"
      dataBlock="cta-banner"
    >
      {bgUrl && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,59,113,0.85), rgba(0,59,113,0.85)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative text-center max-w-2xl mx-auto">
        <h2
          className="font-heading text-3xl md:text-4xl font-bold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {heading}
        </h2>
        {body && (
          <p className="mt-4 text-lg opacity-90 leading-relaxed">{body}</p>
        )}
        {cta_primary && (
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              style={{
                backgroundColor: 'var(--color-action)',
                color: 'var(--color-action-foreground)',
              }}
            >
              <Link href={cta_primary.url}>{cta_primary.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </Section>
  )
}
