export type SocialLink = {
  platform: 'linkedin' | 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'other'
  url: string
}

export type Address = {
  street: string
  line2?: string
  city: string
  state: string
  zip: string
}

export type Certification = {
  src: string
  alt: string
  url?: string
}

export type BrandJson = {
  firm: {
    name: string
    tagline?: string
    foundingYear?: string
  }
  contact: {
    address?: Address
    phone?: string
    fax?: string
    email?: string
    hours?: Record<string, string>
  }
  palette: {
    primary: string
    secondary: string
    complementary: string
    action: string
    nearBlack: string
    nearWhite: string
  }
  social: SocialLink[]
  certifications: Certification[]
  logo: {
    primary: string
    alt: string
  }
}
