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
    /**
     * Optional footer-specific logo variant. The footer surface is dark
     * (`bg-foreground`), so a dark primary logo is hard to read. When set,
     * the footer renders this asset directly. When unset, the footer falls
     * back to `primary` with an `invert` filter — works for dark logos,
     * fails silently for already-light ones. Provide this field for any
     * client whose primary logo is already light/white.
     */
    footer?: string
  }
}
