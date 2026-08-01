import { expect, test } from '@playwright/test'

test.describe('homepage smoke', () => {
  test('renders all Sprint 1 homepage sections with one primary heading', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Anam Web Studio \| Jasa Pembuatan Website Profesional/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Website profesional/)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Website profesional')

    await expect(page.getByRole('heading', { name: /Fondasi website yang kuat/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Preview layanan/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Ruang portofolio/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Alur kerja/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Pertanyaan awal/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Siapkan website/ })).toBeVisible()
  })

  test('supports desktop navigation anchors', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 })
    await page.goto('/')
    await page.getByRole('navigation', { name: 'Navigasi utama' }).getByRole('link', { name: 'Proses' }).click()

    await expect(page.locator('#proses')).toBeInViewport()
  })

  test('opens and closes mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 })
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1000)

    const menuButton = page.getByRole('button', { name: /buka menu navigasi/i })
    await expect(menuButton).toBeVisible()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await menuButton.click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await expect(page.locator('#mobile-menu').getByRole('link', { name: 'FAQ' })).toBeVisible()

    await page.locator('#mobile-menu').getByRole('link', { name: 'FAQ' }).click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(page.locator('#faq')).toBeInViewport()
  })
})
