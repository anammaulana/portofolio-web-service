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

  test('supports desktop navigation to Sprint 2 pages', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 })
    await page.goto('/')

    const navigation = page.getByRole('navigation', { name: 'Navigasi utama' })
    await navigation.getByRole('link', { name: 'Tentang' }).click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Partner website development')

    await navigation.getByRole('link', { name: 'Harga' }).click()
    await expect(page).toHaveURL(/\/pricing$/)
    await expect(page.getByText(/Mulai dari Rp3\.500\.000/)).toBeVisible()
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
    await expect(page).toHaveURL(/\/faq$/)
    await expect(page.getByRole('heading', { name: /Pertanyaan yang sering muncul/ })).toBeVisible()
  })

  test('renders every Sprint 2 page from navigation and contact CTA safely', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 })
    await page.goto('/')

    for (const item of [
      { label: 'Tentang', url: '/about', heading: /Partner website development/ },
      { label: 'Layanan', url: '/services', heading: /Layanan inti/ },
      { label: 'Harga', url: '/pricing', heading: /Estimasi awal/ },
      { label: 'Proses', url: '/process', heading: /Proses kerja bertahap/ },
      { label: 'FAQ', url: '/faq', heading: /Pertanyaan yang sering muncul/ }
    ]) {
      await page.getByRole('navigation', { name: 'Navigasi utama' }).getByRole('link', { name: item.label }).click()
      await expect(page).toHaveURL(new RegExp(`${item.url}$`))
      await expect(page.getByRole('heading', { name: item.heading })).toBeVisible()
    }

    await page.getByRole('navigation', { name: 'Navigasi utama' }).getByRole('link', { name: 'Konsultasi awal' }).click()
    await expect(page).toHaveURL(/\/contact$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Mulai konsultasi awal')
  })

  test('theme toggle is keyboard accessible and persists after reload', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    const toggle = page.getByRole('button', { name: 'Gunakan mode gelap' }).first()
    await expect(toggle).toBeVisible()
    await toggle.focus()
    await expect(toggle).toBeFocused()
    await page.keyboard.press('Enter')

    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.getByRole('button', { name: 'Gunakan mode terang' }).first()).toHaveAttribute('aria-pressed', 'true')

    await page.reload()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('dark mode keeps Sprint 2 page content visible', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await page.evaluate(() => {
      localStorage.setItem('anam-web-studio-theme', 'dark')
      document.documentElement.classList.add('dark')
    })

    for (const item of [
      { url: '/about', heading: /Partner website development/ },
      { url: '/services', heading: /Layanan inti/ },
      { url: '/pricing', heading: /Estimasi awal/ },
      { url: '/process', heading: /Proses kerja bertahap/ },
      { url: '/portfolio', heading: /Portfolio disiapkan/ },
      { url: '/blog', heading: /Blog draft/ },
      { url: '/faq', heading: /Pertanyaan yang sering muncul/ },
      { url: '/contact', heading: /Mulai konsultasi awal/ }
    ]) {
      await page.goto(item.url)
      await expect(page.locator('html')).toHaveClass(/dark/)
      await expect(page.getByRole('heading', { name: item.heading })).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
    }
  })

  test('renders Sprint 3 portfolio, blog, seo routes, and 404 safely', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 })
    await page.goto('/')

    const navigation = page.getByRole('navigation', { name: 'Navigasi utama' })
    await navigation.getByRole('link', { name: 'Portfolio' }).click()
    await expect(page).toHaveURL(/\/portfolio$/)
    await expect(page.getByRole('heading', { name: /Portfolio disiapkan/ })).toBeVisible()
    await expect(page.getByText(/Nama klien, logo, angka performa/)).toBeVisible()

    await page.getByRole('link', { name: /Lihat struktur studi kasus/ }).first().click()
    await expect(page).toHaveURL(/\/portfolio\/company-profile-service-business$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Company Profile')
    await expect(page.getByText(/Tidak ada nama klien, logo, angka performa/)).toBeVisible()
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/portfolio\/company-profile-service-business$/)

    await page.goto('/blog')
    await expect(page.getByRole('heading', { name: /Blog draft/ })).toBeVisible()
    await page.getByRole('link', { name: /Baca draft artikel/ }).first().click()
    await expect(page).toHaveURL(/\/blog\/cara-menyiapkan-brief-website-bisnis$/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Cara Menyiapkan Brief')
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Cara Menyiapkan Brief/)

    const robots = await page.request.get('/robots.txt')
    expect(robots.ok()).toBeTruthy()
    await expect(await robots.text()).toContain('Sitemap:')

    const sitemap = await page.request.get('/sitemap.xml')
    expect(sitemap.ok()).toBeTruthy()
    await expect(await sitemap.text()).toContain('/portfolio/company-profile-service-business')

    await page.goto('/halaman-tidak-ada')
    await expect(page.getByRole('heading', { name: /Halaman ini belum tersedia/ })).toBeVisible()
  })
})
