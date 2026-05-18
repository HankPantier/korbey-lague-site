/**
 * FaqAccordion — placeholder stub.
 * Full implementation delivered in M3.F.
 */
import type { FaqAccordionProps } from '@/lib/assembly/extract-block-props'

export function FaqAccordion(props: FaqAccordionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <p className="text-xs font-mono text-muted-foreground">
        FaqAccordion — implemented in M3.F
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{props.heading}</h2>
    </section>
  )
}
