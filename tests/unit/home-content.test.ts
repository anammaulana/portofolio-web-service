import { describe, expect, it } from 'vitest'
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
    expect(siteConfig.cta.href).toBe('#kontak')
  })

  it('does not claim fake testimonials or verified client results', () => {
    const serialized = JSON.stringify(homeContent).toLowerCase()

    expect(serialized).not.toContain('testimoni klien')
    expect(serialized).not.toContain('meningkatkan revenue')
    expect(serialized).not.toContain('dipercaya oleh 100')
    expect(serialized).toContain('placeholder')
    expect(serialized).toContain('terverifikasi')
  })
})
