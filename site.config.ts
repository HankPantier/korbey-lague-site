// site.config.ts — per-client runtime config.
// Edit this for each new client repo (siteUrl, legalLinks, form settings).

export const siteConfig = {
  siteUrl: 'https://korbeylague.com',
  legalLinks: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ],
  // Optional external POST target for form submissions (Formspree, Zapier,
  // etc.). When set, Form.tsx POSTs here INSTEAD of the built-in
  // /api/contact route. Useful for clients who want submissions to land
  // in their existing CRM / lead pipeline without provisioning Resend.
  // Leave blank to use the built-in /api/contact + Resend flow.
  formEndpoint: '',
  // From address for the built-in /api/contact + Resend flow. Must be a
  // verified-domain address in Resend for production clients. The default
  // 'onboarding@resend.dev' works without domain verification — useful
  // for dev and for clients who haven't set up a sender domain yet.
  formFromEmail: 'onboarding@resend.dev',
}
