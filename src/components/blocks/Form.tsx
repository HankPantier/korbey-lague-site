'use client'

import { useState } from 'react'
import type { FormEvent, ComponentPropsWithoutRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
import { siteConfig } from '../../../site.config'

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

export type { FormProps }

const SERVICE_OPTIONS = [
  'Bookkeeping',
  'Tax Preparation',
  'Payroll Services',
  'CFO Advisory',
  'Business Consulting',
  'Other',
]

export function Form({
  variant,
  heading,
  intro,
  sidebar_content,
  success_message,
}: FormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [service, setService] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const defaultSuccess = "Thank you! We'll be in touch shortly."

  // Newsletter variant: inline compact layout
  if (variant === 'newsletter') {
    async function handleNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()

      // Honeypot check — silently succeed
      if (honeypot) {
        setSubmitted(true)
        return
      }

      setSubmitting(true)
      setError(false)

      if (siteConfig.formEndpoint) {
        try {
          const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
          const res = await fetch(siteConfig.formEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
          if (!res.ok) throw new Error('Submit failed')
          setSubmitted(true)
        } catch {
          setError(true)
        } finally {
          setSubmitting(false)
        }
      } else {
        // No endpoint configured — just optimistically mark submitted.
        // A mailto fallback is not meaningful for newsletter sign-ups.
        setSubmitted(true)
        setSubmitting(false)
      }
    }

    return (
      <Section bg="surface" dataBlock="form">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3"
          >
            {heading}
          </h2>
          {intro && (
            <p className="text-foreground/70 mb-6">{intro}</p>
          )}
          {submitted ? (
            <div role="status" aria-live="polite">
              <p className="text-foreground font-medium">
                {success_message ?? defaultSuccess}
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
                aria-label="Newsletter signup"
              >
                {/* Honeypot — invisible to humans, filled by bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute left-[-9999px] w-px h-px opacity-0"
                  aria-hidden="true"
                />
                <Label htmlFor="nl-email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="nl-email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  aria-required="true"
                  autoComplete="email"
                  inputMode="email"
                  className="flex-1"
                  disabled={submitting}
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: 'var(--color-action)',
                    color: 'var(--color-action-foreground)',
                  }}
                >
                  {submitting ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </form>
              {error && (
                <p className="mt-3 text-sm text-destructive" role="alert">
                  Something went wrong — please try again.
                </p>
              )}
            </>
          )}
        </div>
      </Section>
    )
  }

  // Contact / Quote: two-column layout (form 2/3, sidebar 1/3)
  const hasSidebar = !!sidebar_content

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Honeypot check — silently succeed without doing anything
    if (honeypot) {
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    setError(false)

    if (siteConfig.formEndpoint) {
      try {
        const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
        const res = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Submit failed')
        setSubmitted(true)
      } catch {
        setError(true)
      } finally {
        setSubmitting(false)
      }
    } else {
      // No endpoint configured — fall back to mailto: so the form is
      // functional at launch.
      const form = e.currentTarget
      const data = new FormData(form)
      const name = data.get('name')?.toString() ?? ''
      const email = data.get('email')?.toString() ?? ''
      const phone = data.get('phone')?.toString() ?? ''
      const message = data.get('message')?.toString() ?? ''

      const subject = encodeURIComponent(`Inquiry from ${name || 'website visitor'}`)
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          phone && `Phone: ${phone}`,
          '',
          message,
        ]
          .filter(Boolean)
          .join('\n')
      )
      // Optimistically mark submitted — if the user cancels the mail client
      // they can simply re-submit.
      window.location.href = `mailto:?subject=${subject}&body=${body}`
      setSubmitted(true)
      setSubmitting(false)
    }
  }

  return (
    <Section dataBlock="form">
      <header className="max-w-2xl mb-10">
        <h2
          className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
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
            <div
              role="status"
              aria-live="polite"
              className="rounded-lg border border-border bg-muted/40 p-8 text-center"
            >
              <p className="text-lg font-medium text-foreground">
                {success_message ?? defaultSuccess}
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label={variant === 'quote' ? 'Quote request form' : 'Contact form'}
              >
                {/* Honeypot — invisible to humans, filled by bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute left-[-9999px] w-px h-px opacity-0"
                  aria-hidden="true"
                />

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="f-name">Name *</Label>
                    <Input
                      id="f-name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      aria-required="true"
                      autoComplete="name"
                      disabled={submitting}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="f-email">Email *</Label>
                    <Input
                      id="f-email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      aria-required="true"
                      autoComplete="email"
                      inputMode="email"
                      disabled={submitting}
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
                    autoComplete="tel"
                    disabled={submitting}
                  />
                </div>

                {/* Service dropdown — quote variant only */}
                {variant === 'quote' && (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="f-service">Service of Interest</Label>
                    <Select value={service} onValueChange={setService} name="service">
                      <SelectTrigger id="f-service" disabled={submitting}>
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
                    aria-required="true"
                    autoComplete="off"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    style={{
                      backgroundColor: 'var(--color-action)',
                      color: 'var(--color-action-foreground)',
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </div>
              </form>

              {error && (
                <p className="mt-4 text-sm text-destructive" role="alert">
                  Something went wrong — please try again.
                </p>
              )}
            </>
          )}
        </div>

        {/* Sidebar column */}
        {hasSidebar && (
          <aside className="md:col-span-1">
            <div className="prose prose-sm max-w-none text-foreground/80">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_LINK_COMPONENTS}>
                {sidebar_content!}
              </ReactMarkdown>
            </div>
          </aside>
        )}
      </div>
    </Section>
  )
}
