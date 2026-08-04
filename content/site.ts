export const siteConfig = {
  name: 'Anam Web Studio',
  tagline: 'Build · Design · Optimize',
  description: 'Jasa pembuatan website profesional untuk UMKM, bisnis jasa, personal brand, dan perusahaan yang ingin tampil lebih kredibel di internet.',
  navItems: [
    { label: 'Tentang', href: '/#tentang' },
    { label: 'Layanan', href: '/#layanan' },
    { label: 'Harga', href: '/#harga' },
    { label: 'Proses', href: '/#proses' },
    { label: 'Portofolio', href: '/#portofolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' }
  ],
  legalItems: [
    { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Syarat & Ketentuan', href: '/terms' }
  ],
  cta: {
    label: 'Konsultasi Gratis',
    href: '/contact'
  }
} as const
