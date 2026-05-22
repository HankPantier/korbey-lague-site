import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getBrandConfig } from '@/lib/brand/get-brand-config'
import { siteConfig } from '../../../../site.config'
import {
  contactFormSchema,
  quoteFormSchema,
  newsletterFormSchema,
  buildCustomFormSchema,
} from '@/lib/forms/schemas'
import { buildEmailSubject, buildEmailBody } from '@/lib/forms/email-template'
import type { FormSubmitResponse, FormSubmitPayload, FieldDef, FormVariant } from '@/lib/forms/types'

// Resend's SDK uses node fetch under the hood — Edge runtime won't work.
export const runtime = 'nodejs'

/**
 * Form submission endpoint. Validates the request body with the same Zod
 * schema the client uses, then emails the firm via Resend. The recipient
 * is brand.contact.email (server-side from content/brand.json — visitors
 * never see the firm's email address in network requests, only in the
 * brand-data-driven contact-info block).
 *
 * Returns:
 *   200 { ok: true }                                 — sent
 *   400 { ok: false, error, fieldErrors }            — schema failed
 *   500 { ok: false, error }                         — unexpected
 *   502 { ok: false, error }                         — Resend rejected
 *   503 { ok: false, error: 'email not configured' } — RESEND_API_KEY missing
 *
 * The 503 path is the signal for the client to fall back to mailto:
 * — the form stays functional on deploys where Resend isn't wired yet.
 */

function jsonError(
  status: number,
  error: string,
  fieldErrors?: Record<string, string>
): NextResponse<FormSubmitResponse> {
  return NextResponse.json({ ok: false, error, fieldErrors }, { status })
}

function flattenFieldErrors(formatted: Record<string, string[] | undefined>): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(formatted)) {
    if (v && v.length > 0) out[k] = v[0]
  }
  return out
}

export async function POST(req: Request): Promise<NextResponse<FormSubmitResponse>> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Signal to the client that email isn't configured. The Form component
    // will fall back to a mailto: link — the form is still usable.
    return jsonError(503, 'Email service not configured')
  }

  let payload: FormSubmitPayload
  try {
    payload = (await req.json()) as FormSubmitPayload
  } catch {
    return jsonError(400, 'Invalid JSON body')
  }

  const { variant, fields, fieldDefs } = payload ?? {}
  if (!variant || typeof fields !== 'object' || fields === null) {
    return jsonError(400, 'Missing variant or fields')
  }

  // Pick the right schema for the variant
  let parseResult: { success: true; data: Record<string, unknown> } | { success: false; fieldErrors: Record<string, string> }
  if (variant === 'custom') {
    if (!Array.isArray(fieldDefs) || fieldDefs.length === 0) {
      return jsonError(400, 'Missing fieldDefs for custom variant')
    }
    const schema = buildCustomFormSchema(fieldDefs as FieldDef[])
    const r = schema.safeParse(fields)
    parseResult = r.success
      ? { success: true, data: r.data as Record<string, unknown> }
      : { success: false, fieldErrors: flattenFieldErrors(r.error.flatten().fieldErrors) }
  } else if (variant === 'contact' || variant === 'quote' || variant === 'newsletter') {
    const schema =
      variant === 'contact'
        ? contactFormSchema
        : variant === 'quote'
        ? quoteFormSchema
        : newsletterFormSchema
    const r = schema.safeParse(fields)
    parseResult = r.success
      ? { success: true, data: r.data as Record<string, unknown> }
      : { success: false, fieldErrors: flattenFieldErrors(r.error.flatten().fieldErrors) }
  } else {
    return jsonError(400, `Unknown form variant: ${String(variant)}`)
  }

  if (!parseResult.success) {
    return jsonError(400, 'Validation failed', parseResult.fieldErrors)
  }

  const brand = await getBrandConfig()
  // Prefer the per-client override in site.config.ts; fall back to the
  // firm's public contact address in brand.json.
  const recipient = siteConfig.forms.toEmail || brand.contact.email
  if (!recipient) {
    return jsonError(500, 'Firm email not configured (siteConfig.forms.toEmail or brand.contact.email)')
  }

  const validated = parseResult.data
  const submitterName = typeof validated.name === 'string' ? validated.name : undefined

  // Coerce values to strings for the email body
  const stringFields: Record<string, string> = {}
  for (const [k, v] of Object.entries(validated)) {
    if (v === undefined || v === null) continue
    stringFields[k] = typeof v === 'string' ? v : String(v)
  }

  const subject = buildEmailSubject(variant as FormVariant, brand.firm.name, submitterName)
  const text = buildEmailBody(stringFields, variant === 'custom' ? (fieldDefs as FieldDef[]) : undefined)
  const replyTo = typeof validated.email === 'string' ? validated.email : undefined

  const resend = new Resend(apiKey)
  try {
    const result = await resend.emails.send({
      from: siteConfig.forms.fromEmail || 'onboarding@resend.dev',
      to: recipient,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    })
    if (result.error) {
      console.error('[contact] Resend rejected:', result.error)
      return jsonError(502, 'Email service rejected the message')
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error sending email:', err)
    return jsonError(500, 'Unexpected error sending email')
  }
}
