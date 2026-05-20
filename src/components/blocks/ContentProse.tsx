import { Section } from './Section'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { ContentProseProps } from '@/lib/assembly/extract-block-props'
import type { ComponentPropsWithoutRef } from 'react'

const MD_LINK_COMPONENTS = {
  a: ({ href, children, ...rest }: ComponentPropsWithoutRef<'a'>) => {
    const external = href?.startsWith('http://') || href?.startsWith('https://')
    return (
      <a
        {...rest}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {external && <span className="sr-only"> (opens in new tab)</span>}
      </a>
    )
  },
}

export type { ContentProseProps }

export function ContentProse({ heading, body }: ContentProseProps) {
  return (
    <Section dataBlock="content-prose">
      <div className="max-w-2xl mx-auto">
        {heading && (
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6"
          >
            {heading}
          </h2>
        )}
        <div className="prose prose-neutral max-w-none text-foreground/85 leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_LINK_COMPONENTS}>{body}</ReactMarkdown>
        </div>
      </div>
    </Section>
  )
}
