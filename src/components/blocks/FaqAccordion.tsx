'use client'

import { Section } from './Section'
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MD_LINK_COMPONENTS } from '@/lib/markdown-components'
import type { FaqAccordionProps } from '@/lib/assembly/extract-block-props'

export type { FaqAccordionProps }

export function FaqAccordion({ heading, items }: FaqAccordionProps) {
  if (!items || items.length === 0) return null

  return (
    <Section dataBlock="faq-accordion">
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground"
        >
          {heading}
        </h2>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base md:text-lg m-0">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                <div className="prose prose-neutral max-w-none prose-p:my-2 prose-a:text-primary prose-a:underline">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_LINK_COMPONENTS}>{item.answer}</ReactMarkdown>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
