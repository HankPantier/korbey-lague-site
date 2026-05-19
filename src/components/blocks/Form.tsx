'use client'

import { useState } from 'react'
import { Section } from './Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { FormProps } from '@/lib/assembly/extract-block-props'

export type { FormProps }

const SERVICE_OPTIONS = [
  'Bookkeeping',
  'Tax Preparation',
  'Payroll Services',
  'CFO Advisory',
  'Business Consulting',
  'Other',
]

function renderMarkdown(text: string): string {
  // Minimal inline markdown: **bold** and line breaks
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />')
}

export function Form({
  variant,
  heading,
  intro,
  sidebar_content,
  success_message,
}: FormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState('')

  const defaultSuccess = 'Thank you! We\'ll be in touch shortly.'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  // Newsletter: inline compact layout
  if (variant === 'newsletter') {
    return (
      <Section bg="surface" dataBlock="form">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {heading}
          </h2>
          {intro && (
            <p className="text-foreground/70 mb-6">{intro}</p>
          )}
          {submitted ? (
            <p className="text-foreground font-medium">
              {success_message ?? defaultSuccess}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Label htmlFor="nl-email" className="sr-only">
                Email address
              </Label>
              <Input
                id="nl-email"
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1"
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: 'var(--color-action)',
                  color: 'var(--color-action-foreground)',
                }}
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Section>
    )
  }

  // Contact / Quote: two-column layout (form 2/3, sidebar 1/3)
  const hasSidebar = !!sidebar_content

  return (
    <Section dataBlock="form">
      <header className="max-w-2xl mb-10">
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

      <div className={hasSidebar ? 'grid md:grid-cols-3 gap-12' : undefined}>
        {/* Form column */}
        <div className={hasSidebar ? 'md:col-span-2' : undefined}>
          {submitted ? (
            <div className="rounded-lg border border-border bg-muted/40 p-8 text-center">
              <p className="text-lg font-medium text-foreground">
                {success_message ?? defaultSuccess}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="f-name">Name *</Label>
                  <Input id="f-name" name="name" placeholder="Jane Smith" required />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="f-email">Email *</Label>
                  <Input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="f-phone">Phone</Label>
                <Input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                />
              </div>

              {/* Service dropdown — quote variant only */}
              {variant === 'quote' && (
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="f-service">Service of Interest</Label>
                  <Select value={service} onValueChange={setService} name="service">
                    <SelectTrigger id="f-service">
                      <SelectValue placeholder="Select a service…" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map(opt => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="f-message">Message *</Label>
                <Textarea
                  id="f-message"
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  style={{
                    backgroundColor: 'var(--color-action)',
                    color: 'var(--color-action-foreground)',
                  }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar column */}
        {hasSidebar && (
          <aside className="md:col-span-1">
            <div
              className="prose prose-sm max-w-none text-foreground/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(sidebar_content!) }}
            />
          </aside>
        )}
      </div>
    </Section>
  )
}
