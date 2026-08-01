import { blogContent } from '~/content/blog'
import { portfolioContent } from '~/content/portfolio'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = (config.public.siteUrl || 'https://example.com').replace(/\/$/, '')
  const staticPaths = [
    '/',
    '/about',
    '/services',
    '/pricing',
    '/process',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/portfolio',
    '/blog'
  ]
  const portfolioPaths = portfolioContent.items.map((item) => `/portfolio/${item.slug}`)
  const blogPaths = blogContent.posts.map((post) => `/blog/${post.slug}`)
  const paths = [...staticPaths, ...portfolioPaths, ...blogPaths]

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
    .join('\n')}\n</urlset>`
})
