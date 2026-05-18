import type { PageManifest } from '@/lib/assembly/parse-page-md'
import type { BrandJson } from '@/lib/brand/types'

export function SchemaScript({ manifest, brand }: { manifest: PageManifest; brand: BrandJson }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': manifest.schema_markup || 'WebPage',
    name: manifest.title,
    url: manifest.canonical_url,
    description: manifest.meta_description,
  }

  if (manifest.schema_markup === 'LocalBusiness' && brand.contact.address) {
    schema['address'] = {
      '@type': 'PostalAddress',
      streetAddress: brand.contact.address.street,
      addressLocality: brand.contact.address.city,
      addressRegion: brand.contact.address.state,
      postalCode: brand.contact.address.zip,
    }
    if (brand.contact.phone) schema['telephone'] = brand.contact.phone
    if (brand.contact.email) schema['email'] = brand.contact.email
  }

  if (manifest.faq_block?.length) {
    // Emit a second JSON-LD blob for FAQPage schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: manifest.faq_block.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </>
    )
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
