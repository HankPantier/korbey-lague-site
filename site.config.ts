// site.config.ts — per-client runtime config.
// Edit this for each new client repo (siteUrl, legalLinks, forms).

export type FormsConfig = {
  /**
   * External POST target for form submissions (Formspree, Zapier, etc.).
   * When set, Form.tsx POSTs here INSTEAD of the built-in /api/contact
   * route. Useful for clients who want submissions to land in their
   * existing CRM / lead pipeline without provisioning Resend.
   *
   * Leave blank to use the built-in /api/contact + Resend flow.
   */
  endpoint: string

  /**
   * Resend sender address used by /api/contact. Must be a verified-domain
   * address in Resend for production clients. The default
   * 'onboarding@resend.dev' works without domain verification — useful
   * for dev and for clients who haven't set up a sender domain yet.
   */
  fromEmail: string

  /**
   * Recipient override for /api/contact. When blank, the route falls back
   * to brand.contact.email from content/brand.json (the normal case).
   * Set this when the firm wants submissions to land somewhere other
   * than their public contact address.
   */
  toEmail: string

  // API key for Resend is read from process.env.RESEND_API_KEY.
  // Never commit secrets here. See .env.example.
}

export type SiteConfig = {
  siteUrl: string
  legalLinks: { label: string; url: string }[]
  forms: FormsConfig
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://korbeylague.com',
  legalLinks: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ],
  forms: {
    endpoint: '',
    fromEmail: 'onboarding@resend.dev',
    toEmail: '',
  },
}
