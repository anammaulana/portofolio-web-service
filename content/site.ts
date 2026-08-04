export const siteConfig = {
  name: 'Anam Web Studio',
  description: 'Jasa pembuatan website profesional untuk bisnis yang butuh fondasi digital rapi, cepat, dan siap berkembang.',
  navItems: [
    { label: 'Tentang', href: '/about' },
    { label: 'Layanan', href: '/services' },
    { label: 'Harga', href: '/pricing' },
    { label: 'Proses', href: '/process' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' }
  ],
  legalItems: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ],
  cta: {
    label: 'Konsultasi gratis',
    href: '/contact'
  }
} as const
