'use client'

import { Section } from './Section'
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FaqAccordionProps } from '@/lib/assembly/extract-block-props'

export type { FaqAccordionProps }

export function FaqAccordion({ heading, items }: FaqAccordionProps) {
  if (!items || items.length === 0) return null

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {heading}
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger
                className="text-left font-heading text-base md:text-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
