import { Section } from './Section'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { TeamGridProps } from '@/lib/assembly/extract-block-props'

export type { TeamGridProps }

export function TeamGrid({ variant, heading, intro, members }: TeamGridProps) {
  const colsClass =
    variant === '4-col'
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : variant === '2-col'
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <Section dataBlock="team-grid">
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
      <div className={cn('mt-12 grid gap-8', colsClass)}>
        {members.map((member, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative aspect-[4/5] bg-muted">
              {member.photo ? (
                <Image
                  src={`/content-assets/${member.photo}`}
                  alt={member.photo_alt ?? `Photo of ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
                  {member.name}
                </div>
              )}
            </div>
            <CardContent className="p-5">
              <p
                className="font-heading font-semibold text-lg text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {member.name}
                {member.credentials && (
                  <span className="font-normal text-foreground/60">, {member.credentials}</span>
                )}
              </p>
              {member.title && (
                <p className="mt-0.5 text-sm text-foreground/60">{member.title}</p>
              )}
              {member.bio && (
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{member.bio}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
