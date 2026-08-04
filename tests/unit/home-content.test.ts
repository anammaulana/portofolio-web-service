import { describe, expect, it } from 'vitest'
import { blogContent } from '../../content/blog'
import { businessContent } from '../../content/business'
import { homeContent } from '../../content/home'
import { legalContent } from '../../content/legal'
import { portfolioContent } from '../../content/portfolio'
import { buildCanonicalUrl } from '../../content/seo'
import { siteConfig } from '../../content/site'
import { buildQuoteMessage, buildWhatsAppHref, validateQuoteForm } from '../../utils/quote'

describe('home content baseline', () => {
  it('defines the required homepage sections and unique metadata', () => {
    expect(homeContent.seo.title).toContain('Anam Maulana')
    expect(homeContent.seo.description.toLowerCase()).toContain('website')
    expect(homeContent.benefits).toHaveLength(3)
    expect(homeContent.trust).toContain('Nuxt')
    expect(homeContent.trust).toContain('TypeScript')
    expect(homeContent.hero.primaryCta).toBeTruthy()
    expect(homeContent.services.length).toBeGreaterThanOrEqual(4)
    expect(homeContent.process).toHaveLength(5)
    expect(homeContent.faqs.length).toBeGreaterThanOrEqual(3)
  })

  it('keeps contact configuration placeholder-friendly', () => {
    expect(siteConfig.cta.href).toBe('/contact')
  })

  it('defines Sprint 2 business pages and safe pricing language', () => {
    expect(siteConfig.navItems.map((item) => item.href)).toEqual([
      '/#tentang',
      '/#layanan',
      '/#harga',
      '/#proses',
      '/#portofolio',
      '/blog',
      '/#faq'
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

  it('defines Sprint 3 portfolio and blog content without fake proof', () => {
    expect(portfolioContent.items.length).toBeGreaterThanOrEqual(3)
    expect(blogContent.posts.length).toBeGreaterThanOrEqual(3)

    const serialized = JSON.stringify({ portfolioContent, blogContent }).toLowerCase()
    expect(serialized).toContain('placeholder')
    expect(serialized).toContain('terverifikasi')
    expect(serialized).not.toContain('dipercaya oleh')
    expect(serialized).not.toContain('revenue naik')
    expect(serialized).not.toContain('logo klien')
  })

  it('builds canonical URLs from a configurable site URL', () => {
    expect(buildCanonicalUrl('/blog', 'https://anam.example/')).toBe('https://anam.example/blog')
    expect(buildCanonicalUrl('portfolio/demo', 'https://anam.example')).toBe('https://anam.example/portfolio/demo')
  })

  it('defines Sprint 4 legal pages with placeholder-safe data handling copy', () => {
    expect(siteConfig.legalItems.map((item) => item.href)).toEqual(['/privacy', '/terms'])
    expect(legalContent.privacy.sections.length).toBeGreaterThanOrEqual(4)
    expect(legalContent.terms.sections.length).toBeGreaterThanOrEqual(4)
    expect(JSON.stringify(legalContent.privacy).toLowerCase()).toContain('tidak menyimpan')
    expect(JSON.stringify(legalContent.terms).toLowerCase()).not.toContain('garansi hasil bisnis')
  })

  it('validates quote form input and builds safe WhatsApp messages', () => {
    expect(Object.keys(validateQuoteForm({
      name: '',
      businessType: '',
      projectNeed: '',
      budgetRange: '',
      timeline: ''
    }))).toEqual(['name', 'businessType', 'projectNeed', 'budgetRange', 'timeline'])

    const validForm = {
      name: 'Anam Maulana',
      businessType: 'Jasa profesional',
      projectNeed: 'Butuh website company profile dengan halaman layanan.',
      budgetRange: 'Rp3.500.000 - Rp7.500.000',
      timeline: '3-4 minggu',
      websiteUrl: 'https://example.com'
    }

    expect(validateQuoteForm(validForm)).toEqual({})
    expect(buildQuoteMessage(validForm)).toContain('Butuh website company profile')
    expect(buildWhatsAppHref('', buildQuoteMessage(validForm))).toBe('')
    expect(buildWhatsAppHref('+62 812-0000-0000', buildQuoteMessage(validForm))).toContain('https://wa.me/6281200000000?text=')
  })
})
