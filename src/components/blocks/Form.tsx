'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MD_LINK_COMPONENTS } from '@/lib/markdown-components'
import { Section } from './Section'
import { InlineProse } from './InlineProse'
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
import type { FieldDef, FormSubmitResponse } from '@/lib/forms/types'
import {
  buildCustomFormSchema,
  contactFormSchema,
  newsletterFormSchema,
  quoteFormSchema,
} from '@/lib/forms/schemas'
import { siteConfig } from '../../../site.config'

export type { FormProps }

const SERVICE_OPTIONS = [
  'Bookkeeping',
  'Tax Preparation',
  'Payroll Services',
  'CFO Advisory',
  'Business Consulting',
  'Other',
]

const DEFAULT_SUCCESS = "Thank you! We'll be in touch shortly."

// ---------------------------------------------------------------------------
// Submission helpers
// ---------------------------------------------------------------------------

type SubmitOutcome =
  | { kind: 'ok' }
  | { kind: 'field-errors'; errors: Record<string, string> }
  | { kind: 'error'; message: string }

async function submitToApi(
  variant: FormProps['variant'],
  fields: Record<string, string>,
  customFields?: FieldDef[]
): Promise<SubmitOutcome | { kind: 'fallback-mailto' }> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ variant, fields, fieldDefs: customFields }),
  })

  // 503 → Resend not configured. Signal the caller to fall back to mailto.
  if (res.status === 503) return { kind: 'fallback-mailto' }

  let data: FormSubmitResponse | null = null
  try {
    data = (await res.json()) as FormSubmitResponse
  } catch {
    return { kind: 'error', message: 'Network error — please try again.' }
  }

  if (data && 'ok' in data && data.ok) return { kind: 'ok' }
  if (data && 'ok' in data && !data.ok) {
    if (data.fieldErrors && Object.keys(data.fieldErrors).length > 0) {
      return { kind: 'field-errors', errors: data.fieldErrors }
    }
    return { kind: 'error', message: data.error || 'Submission failed' }
  }
  return { kind: 'error', message: 'Submission failed' }
}

function openMailtoFallback(fields: Record<string, string>, firmName: string, recipient: string) {
  const name = fields.name ?? ''
  const lines = Object.entries(fields)
    .filter(([k, v]) => k !== 'website' && v && v.trim())
    .map(([k, v]) => `${humanize(k)}: ${v}`)
  const subject = encodeURIComponent(
    `Inquiry to ${firmName} from ${name || 'website visitor'}`
  )
  const body = encodeURIComponent(lines.join('\n'))
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
}

function humanize(s: string): string {
  return s.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function flattenFieldErrors(formatted: Record<string, string[] | undefined>): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(formatted)) {
    if (v && v.length > 0) out[k] = v[0]
  }
  return out
}

// ---------------------------------------------------------------------------
// Field rendering for custom variant
// ---------------------------------------------------------------------------

function FieldRenderer({
  def,
  value,
  onChange,
  errorMessage,
  disabled,
  idPrefix,
}: {
  def: FieldDef
  value: string
  onChange: (v: string) => void
  errorMessage?: string
  disabled?: boolean
  idPrefix: string
}) {
  const id = `${idPrefix}-${def.name}`
  const label = (
    <Label htmlFor={id}>
      {def.label}
      {def.required && <span aria-hidden="true"> *</span>}
    </Label>
  )
  const errorId = errorMessage ? `${id}-error` : undefined
  const errorEl = errorMessage ? (
    <p id={errorId} className="text-xs text-destructive" role="alert">
      {errorMessage}
    </p>
  ) : null

  switch (def.type) {
    case 'textarea':
      return (
        <div className="flex flex-col gap-1.5">
          {label}
          <Textarea
            id={id}
            name={def.name}
            placeholder={def.placeholder}
            rows={5}
            required={def.required}
            aria-required={def.required || undefined}
            aria-invalid={!!errorMessage || undefined}
            aria-describedby={errorId}
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={disabled}
          />
          {errorEl}
        </div>
      )
    case 'select':
      return (
        <div className="flex flex-col gap-1.5">
          {label}
          <Select value={value} onValueChange={onChange} name={def.name}>
            <SelectTrigger
              id={id}
              disabled={disabled}
              aria-required={def.required || undefined}
              aria-invalid={!!errorMessage || undefined}
              aria-describedby={errorId}
            >
              <SelectValue placeholder={def.placeholder ?? 'Select…'} />
            </SelectTrigger>
            <SelectContent>
              {(def.options ?? []).map(opt => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errorEl}
        </div>
      )
    case 'checkbox':
      return (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <input
              id={id}
              name={def.name}
              type="checkbox"
              required={def.required}
              aria-required={def.required || undefined}
              aria-invalid={!!errorMessage || undefined}
              aria-describedby={errorId}
              checked={value === 'on' || value === 'true'}
              onChange={e => onChange(e.target.checked ? 'on' : '')}
              disabled={disabled}
              className="h-4 w-4 rounded border-border"
            />
            {label}
          </div>
          {errorEl}
        </div>
      )
    default: {
      const inputType =
        def.type === 'email' ? 'email' :
        def.type === 'tel' ? 'tel' :
        def.type === 'number' ? 'number' :
        'text'
      const inputMode =
        def.type === 'email' ? 'email' :
        def.type === 'tel' ? 'tel' :
        def.type === 'number' ? 'numeric' :
        undefined
      const autoComplete =
        def.name === 'name' ? 'name' :
        def.type === 'email' ? 'email' :
        def.type === 'tel' ? 'tel' :
        undefined
      return (
        <div className="flex flex-col gap-1.5">
          {label}
          <Input
            id={id}
            name={def.name}
            type={inputType}
            placeholder={def.placeholder}
            required={def.required}
            aria-required={def.required || undefined}
            aria-invalid={!!errorMessage || undefined}
            aria-describedby={errorId}
            inputMode={inputMode}
            autoComplete={autoComplete}
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={disabled}
          />
          {errorEl}
        </div>
      )
    }
  }
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function Form({
  variant,
  heading,
  intro,
  sidebar_content,
  success_message,
  customFields,
}: FormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [honeypot, setHoneypot] = useState('')

  // Custom-variant field state — one entry per declared field
  const [customValues, setCustomValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    for (const f of customFields ?? []) init[f.name] = ''
    return init
  })

  // Shared submit pipeline: read fields → zod validate → POST /api/contact
  // → on 503, fall back to mailto: → on field errors, render inline.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGeneralError(null)
    setFieldErrors({})

    // Honeypot — silently succeed without sending anything
    if (honeypot) {
      setSubmitted(true)
      return
    }

    // Collect fields. For custom we trust state; for built-ins we read FormData.
    let fields: Record<string, string>
    if (variant === 'custom') {
      fields = { ...customValues }
    } else {
      const formData = new FormData(e.currentTarget)
      fields = {}
      for (const [k, v] of formData.entries()) {
        if (k === 'website') continue
        fields[k] = typeof v === 'string' ? v : ''
      }
    }

    // Client-side validation — mirror the server's schema choice.
    const schema =
      variant === 'contact'
        ? contactFormSchema
        : variant === 'quote'
        ? quoteFormSchema
        : variant === 'newsletter'
        ? newsletterFormSchema
        : buildCustomFormSchema(customFields ?? [])
    const parsed = schema.safeParse(fields)
    if (!parsed.success) {
      setFieldErrors(flattenFieldErrors(parsed.error.flatten().fieldErrors))
      return
    }

    setSubmitting(true)

    // If a custom external endpoint is set, POST there and call it good.
    if (siteConfig.forms.endpoint) {
      try {
        const res = await fetch(siteConfig.forms.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        })
        if (!res.ok) throw new Error('Submit failed')
        setSubmitted(true)
      } catch {
        setGeneralError('Something went wrong — please try again.')
      } finally {
        setSubmitting(false)
      }
      return
    }

    // Otherwise hit the built-in /api/contact route. On 503 (Resend not
    // configured) fall back to mailto: so the form stays functional.
    const outcome = await submitToApi(variant, fields, customFields)
    if (outcome.kind === 'ok') {
      setSubmitted(true)
    } else if (outcome.kind === 'fallback-mailto') {
      const recipient = document.body.dataset.contactEmail ?? ''
      const firmName = document.body.dataset.firmName ?? 'the team'
      openMailtoFallback(fields, firmName, recipient)
      setSubmitted(true)
    } else if (outcome.kind === 'field-errors') {
      setFieldErrors(outcome.errors)
    } else {
      setGeneralError(outcome.message)
    }
    setSubmitting(false)
  }

  // -------------------------------------------------------------------------
  // Newsletter — inline compact layout
  // -------------------------------------------------------------------------
  if (variant === 'newsletter') {
    return (
      <Section bg="surface" dataBlock="form">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
            {heading}
          </h2>
          {intro && (
            <InlineProse text={intro} className="text-foreground/70 mb-6" />
          )}
          {submitted ? (
            <div role="status" aria-live="polite">
              <p className="text-foreground font-medium">
                {success_message ?? DEFAULT_SUCCESS}
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
                aria-label="Newsletter signup"
                noValidate
              >
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
                  aria-invalid={!!fieldErrors.email || undefined}
                  aria-describedby={fieldErrors.email ? 'nl-email-error' : undefined}
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
              {fieldErrors.email && (
                <p id="nl-email-error" className="mt-2 text-sm text-destructive text-left" role="alert">
                  {fieldErrors.email}
                </p>
              )}
              {generalError && (
                <p className="mt-3 text-sm text-destructive" role="alert">
                  {generalError}
                </p>
              )}
            </>
          )}
        </div>
      </Section>
    )
  }

  // -------------------------------------------------------------------------
  // Contact / Quote / Custom — two-column layout when sidebar present
  // -------------------------------------------------------------------------
  const hasSidebar = !!sidebar_content

  return (
    <Section dataBlock="form">
      <header className="max-w-2xl mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
          {heading}
        </h2>
        {intro && (
          <InlineProse text={intro} className="mt-3 text-foreground/70 leading-relaxed" />
        )}
      </header>

      <div className={hasSidebar ? 'grid md:grid-cols-3 gap-12' : undefined}>
        <div className={hasSidebar ? 'md:col-span-2' : undefined}>
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-lg border border-border bg-muted/40 p-8 text-center"
            >
              <p className="text-lg font-medium text-foreground">
                {success_message ?? DEFAULT_SUCCESS}
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label={
                  variant === 'quote'
                    ? 'Quote request form'
                    : variant === 'custom'
                    ? heading
                    : 'Contact form'
                }
                noValidate
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

                {variant === 'custom' ? (
                  // Dynamic fields from .md
                  (customFields ?? []).map(def => (
                    <FieldRenderer
                      key={def.name}
                      def={def}
                      value={customValues[def.name] ?? ''}
                      onChange={v => setCustomValues(s => ({ ...s, [def.name]: v }))}
                      errorMessage={fieldErrors[def.name]}
                      disabled={submitting}
                      idPrefix="f"
                    />
                  ))
                ) : (
                  // Built-in fields for contact + quote
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="f-name">Name *</Label>
                        <Input
                          id="f-name"
                          name="name"
                          placeholder="Jane Smith"
                          required
                          aria-required="true"
                          aria-invalid={!!fieldErrors.name || undefined}
                          aria-describedby={fieldErrors.name ? 'f-name-error' : undefined}
                          autoComplete="name"
                          disabled={submitting}
                        />
                        {fieldErrors.name && (
                          <p id="f-name-error" className="text-xs text-destructive" role="alert">
                            {fieldErrors.name}
                          </p>
                        )}
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
                          aria-invalid={!!fieldErrors.email || undefined}
                          aria-describedby={fieldErrors.email ? 'f-email-error' : undefined}
                          autoComplete="email"
                          inputMode="email"
                          disabled={submitting}
                        />
                        {fieldErrors.email && (
                          <p id="f-email-error" className="text-xs text-destructive" role="alert">
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="f-phone">Phone</Label>
                      <Input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        autoComplete="tel"
                        aria-invalid={!!fieldErrors.phone || undefined}
                        aria-describedby={fieldErrors.phone ? 'f-phone-error' : undefined}
                        disabled={submitting}
                      />
                      {fieldErrors.phone && (
                        <p id="f-phone-error" className="text-xs text-destructive" role="alert">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    {variant === 'quote' && (
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="f-service">Service of Interest *</Label>
                        <Select name="service">
                          <SelectTrigger
                            id="f-service"
                            disabled={submitting}
                            aria-invalid={!!fieldErrors.service || undefined}
                            aria-describedby={fieldErrors.service ? 'f-service-error' : undefined}
                          >
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
                        {fieldErrors.service && (
                          <p id="f-service-error" className="text-xs text-destructive" role="alert">
                            {fieldErrors.service}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="f-message">Message *</Label>
                      <Textarea
                        id="f-message"
                        name="message"
                        placeholder="How can we help?"
                        rows={5}
                        required
                        aria-required="true"
                        aria-invalid={!!fieldErrors.message || undefined}
                        aria-describedby={fieldErrors.message ? 'f-message-error' : undefined}
                        autoComplete="off"
                        disabled={submitting}
                      />
                      {fieldErrors.message && (
                        <p id="f-message-error" className="text-xs text-destructive" role="alert">
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

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
                    {submitting
                      ? 'Sending…'
                      : variant === 'quote'
                      ? 'Request Quote'
                      : 'Send Message'}
                  </Button>
                </div>
              </form>

              {generalError && (
                <p className="mt-4 text-sm text-destructive" role="alert">
                  {generalError}
                </p>
              )}
            </>
          )}
        </div>

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
