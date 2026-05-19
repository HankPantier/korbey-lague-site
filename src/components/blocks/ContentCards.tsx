import { Section } from './Section'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { ContentCardsProps } from '@/lib/assembly/extract-block-props'

export type { ContentCardsProps }

export function ContentCards({ variant, heading, intro, cards, cta }: ContentCardsProps) {
  const colsClass =
    variant === '2-col'
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <Section dataBlock="content-cards">
      <header className="max-w-2xl">
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

      <div className={cn('mt-10 grid gap-6', colsClass)}>
        {cards.map((card, i) => (
          <Card
            key={i}
            className="flex flex-col overflow-hidden"
            style={{ boxShadow: 'var(--shadow-card, 0 2px 8px rgba(0,59,113,0.08))' }}
          >
            {/* Image */}
            {card.image && (
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={`/content-assets/${card.image}`}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}

            <CardContent className="flex-1 pt-5 pb-3">
              {card.date && (
                <p className="text-xs text-muted-foreground mb-2">
                  {card.date}
                </p>
              )}
              <h3
                className="font-heading text-lg font-semibold text-foreground mb-2 leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {card.excerpt}
              </p>
            </CardContent>

            {card.url && card.url !== '#' && (
              <CardFooter className="pt-0 pb-4">
                <Button asChild variant="link" className="px-0 text-sm h-auto">
                  <Link href={card.url}>Read more &rarr;</Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {cta && (
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href={cta.url}>{cta.label}</Link>
          </Button>
        </div>
      )}
    </Section>
  )
}
