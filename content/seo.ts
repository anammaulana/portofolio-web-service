export const seoConfig = {
  siteUrl: 'https://example.com',
  defaultImage: 'https://www.gstatic.com/webp/gallery/4.jpg',
  twitterCard: 'summary_large_image'
} as const

export const buildCanonicalUrl = (path: string, siteUrl: string = seoConfig.siteUrl) => {
  const normalizedBase = siteUrl.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizedBase}${normalizedPath}`
}
