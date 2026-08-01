import { describe, expect, it } from 'vitest'
import { businessContent } from '../../content/business'
import { homeContent } from '../../content/home'
import { siteConfig } from '../../content/site'

describe('home content baseline', () => {
  it('defines the required homepage sections and unique metadata', () => {
    expect(homeContent.seo.title).toContain('Anam Web Studio')
    expect(homeContent.seo.description.toLowerCase()).toContain('website')
    expect(homeContent.benefits).toHaveLength(3)
    expect(homeContent.services.length).toBeGreaterThanOrEqual(4)
    expect(homeContent.process).toHaveLength(3)
    expect(homeContent.faqs.length).toBeGreaterThanOrEqual(3)
  })

  it('keeps contact configuration placeholder-friendly', () => {
    expect(siteConfig.cta.href).toBe('/contact')
  })

  it('defines Sprint 2 business pages and safe pricing language', () => {
    expect(siteConfig.navItems.map((item) => item.href)).toEqual([
      '/about',
      '/services',
      '/pricing',
      '/process',
      '/faq'
    ])

    expect(businessContent.pricing.packages.length).toBeGreaterThanOrEqual(3)
    for (const item of businessContent.pricing.packages) {
      expect(item.price).toContain('Mulai dari')
      expect(item.price.toLowerCase()).not.toContain('harga final')
      expect(item.price.toLowerCase()).not.toContain('garansi')
    }
  })

  it('does not claim fake testimonials or verified client results', () => {
    const serialized = JSON.stringify({ homeContent, businessContent }).toLowerCase()

    expect(serialized).not.toContain('testimoni klien')
    expect(serialized).not.toContain('meningkatkan revenue')
    expect(serialized).not.toContain('dipercaya oleh 100')
    expect(serialized).toContain('placeholder')
    expect(serialized).toContain('terverifikasi')
  })
})
