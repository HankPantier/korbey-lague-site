import { Section } from './Section'
import { cn } from '@/lib/utils'
import type { StatsBarProps } from '@/lib/assembly/extract-block-props'

export type { StatsBarProps }

export function StatsBar({ variant, heading, stats }: StatsBarProps) {
  if (!stats || stats.length === 0) return null

  const colsClass =
    variant === '4-up'
      ? 'grid-cols-2 sm:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-3'

  return (
    <Section as="section" fullBleed bg="primary">
      {heading && (
        <h2
          className="sr-only"
          aria-label={heading}
        >
          {heading}
        </h2>
      )}
      <div className={cn('grid gap-8 text-center', colsClass)}>
        {stats.map((stat, i) => (
          <div key={i}>
            <p
              className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {stat.value}
            </p>
            {stat.label && (
              <p className="mt-2 text-sm md:text-base text-primary-foreground/75 leading-snug">
                {stat.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
