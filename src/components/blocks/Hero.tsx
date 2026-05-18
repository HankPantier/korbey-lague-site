import { Section } from './Section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export type HeroProps = {
  variant: 'image' | 'video' | 'slider' | 'image-right' | 'image-left'
  image?: string
  headline: string
  subheadline: string
  cta_primary?: { label: string; url: string }
}

export function Hero({ image, headline, subheadline, cta_primary }: HeroProps) {
  // For M3, all hero variants render the image variant.
  // Slider/video come in M4.
  const bgUrl = image ? `/content-assets/${image}` : undefined

  return (
    <Section as="header" fullBleed bg="primary" className="relative overflow-hidden !py-0">
      {bgUrl && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="relative max-w-3xl mx-auto py-20 md:py-32 text-center">
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          {subheadline}
        </p>
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
