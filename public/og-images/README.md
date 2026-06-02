# OG Images

Each generated page references an Open Graph / social-share image at:

    <site-origin>/og-images/<filename>.png

The filename is derived from the page's URL by stripping the leading slash and
replacing remaining slashes with double-hyphens (the same convention used for
the page markdown filenames in pages/). For example:

    /                                  → og-images/home.png
    /services                          → og-images/services.png
    /services/virtual-cfo-advisory     → og-images/services--virtual-cfo-advisory.png
    /industries/nonprofits             → og-images/industries--nonprofits.png

You can confirm the exact filename for each page in its frontmatter under
`og_image`. The package does not generate the actual image files — drop the
PNGs into this folder before deploying so social shares on LinkedIn, Facebook,
X/Twitter, and similar pick up the right image.

Recommended:
- 1200×630 px, < 5 MB
- High-contrast text legible at thumbnail size
- Brand palette colors (see design.md)
