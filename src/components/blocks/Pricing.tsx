import { Section } from './Section'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PricingProps } from '@/lib/assembly/extract-block-props'

export type { PricingProps }

export function Pricing({ variant, heading, intro, tiers, disclaimer }: PricingProps) {
  const colsClass =
    variant === '4-tier'
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : variant === '2-tier'
        ? 'sm:grid-cols-2 max-w-3xl mx-auto'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <Section>
      <header className="max-w-2xl mx-auto text-center">
        <h2
          className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {heading}
        </h2>
        {intro && (
          <p className="mt-3 text-foreground/70 leading-relaxed">{intro}</p>
        )}
      </header>

      <div className={cn('mt-12 grid gap-6 items-start', colsClass)}>
        {tiers.map((tier, i) => (
          <Card
            key={i}
            className={cn(
              'flex flex-col p-6 gap-4',
              tier.highlighted
                ? 'border-primary ring-2 ring-primary shadow-lg scale-[1.03] bg-primary text-primary-foreground'
                : 'border-border'
            )}
            style={
              tier.highlighted
                ? { backgroundColor: 'var(--color-primary, theme(colors.blue.700))' }
                : { boxShadow: 'var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))' }
            }
          >
            {/* Tier name */}
            <h3
              className={cn(
                'font-heading text-xl font-bold',
                tier.highlighted ? 'text-primary-foreground' : 'text-foreground'
              )}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {tier.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-1">
              <span
                className={cn(
                  'font-heading text-4xl font-bold',
                  tier.highlighted ? 'text-primary-foreground' : 'text-foreground'
                )}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {tier.price}
              </span>
              {tier.price_period && (
                <span
                  className={cn(
                    'text-sm',
                    tier.highlighted ? 'text-primary-foreground/70' : 'text-foreground/60'
                  )}
                >
                  {tier.price_period}
                </span>
              )}
            </div>

            {/* Description */}
            {tier.description && (
              <p
                className={cn(
                  'text-sm leading-relaxed',
                  tier.highlighted ? 'text-primary-foreground/85' : 'text-foreground/70'
                )}
              >
                {tier.description}
              </p>
            )}

            {/* Separator */}
            <hr
              className={cn(
                'border-t',
                tier.highlighted ? 'border-primary-foreground/20' : 'border-border'
              )}
            />

            {/* Features */}
            <ul className="flex-1 space-y-2">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check
                    className={cn(
                      'mt-0.5 h-4 w-4 shrink-0',
                      tier.highlighted ? 'text-primary-foreground' : ''
                    )}
                    style={
                      tier.highlighted
                        ? undefined
                        : { color: 'var(--color-action, theme(colors.cyan.500))' }
                    }
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      'text-sm leading-snug',
                      tier.highlighted ? 'text-primary-foreground/90' : 'text-foreground/80'
                    )}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              asChild
              variant={tier.highlighted ? 'secondary' : 'default'}
              className="w-full mt-2"
            >
              <Link href={tier.cta.url}>{tier.cta.label}</Link>
            </Button>
          </Card>
        ))}
      </div>

      {disclaimer && (
        <p className="mt-8 text-center text-xs text-foreground/50">{disclaimer}</p>
      )}
    </Section>
  )
}
