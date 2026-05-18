// site.config.ts — per-client runtime config.
// Edit this for each new client repo (siteUrl, legalLinks, form endpoint).

export const siteConfig = {
  siteUrl: 'https://korbeylague.com',
  legalLinks: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ],
  formEndpoint: '',  // set per-client; left blank for the template
}
