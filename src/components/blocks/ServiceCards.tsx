import { Section } from './Section'
import { InlineProse } from './InlineProse'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ServiceCardsProps } from '@/lib/assembly/extract-block-props'

export type { ServiceCardsProps }

export function ServiceCards({ variant, heading, intro, cards }: ServiceCardsProps) {
  const colsClass =
    variant === '2-col'
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <Section dataBlock="service-cards">
      <header className="max-w-2xl">
        <h2
          className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
        >
          {heading}
        </h2>
        {intro && (
          <InlineProse text={intro} className="mt-3 text-foreground/70 leading-relaxed" />
        )}
      </header>
      <div className={cn('mt-10 grid gap-6', colsClass)}>
        {cards.map((card, i) => (
          <Card
            key={i}
            className="flex flex-col"
            style={{ boxShadow: 'var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))' }}
          >
            <CardHeader className="pb-2">
              <h3
                className="font-heading text-xl font-semibold text-foreground"
              >
                {card.title}
              </h3>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-foreground/75 leading-relaxed text-sm">
                {card.description}
              </p>
            </CardContent>
            {card.url && (
              <CardFooter className="pt-2">
                <Button asChild variant="link" className="px-0 text-sm">
                  <Link href={card.url} aria-label={`Learn more about ${card.title}`}>
                    Learn more &rarr;
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
