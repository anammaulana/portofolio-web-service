export const homeContent = {
  seo: {
    title: 'Anam Web Studio | Jasa Pembuatan Website Profesional',
    description: 'Jasa pembuatan website profesional, cepat, responsif, dan SEO-friendly untuk UMKM, bisnis jasa, startup, serta personal brand.'
  },
  hero: {
    eyebrow: 'Web development service',
    titlePrefix: 'Website profesional yang membuat bisnis Anda terlihat',
    titleAccent: 'siap dan dipercaya.',
    description: 'Kami membantu bisnis membangun website modern, cepat, SEO-friendly, dan siap berkembang tanpa proses yang ribet.',
    primaryCta: 'Konsultasi gratis',
    secondaryCta: 'Lihat portofolio'
  },
  trust: ['Nuxt', 'Vue', 'Laravel', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
  services: [
    { icon: '◎', title: 'Web Development', description: 'Website custom, modern, cepat, dan scalable.' },
    { icon: '▣', title: 'E-Commerce', description: 'Toko online profesional yang siap membantu penjualan.' },
    { icon: '↗', title: 'SEO Optimization', description: 'Struktur teknis agar website mudah ditemukan.' },
    { icon: '✦', title: 'UI/UX Design', description: 'Desain nyaman digunakan dan sesuai identitas brand.' },
    { icon: '⚡', title: 'Maintenance', description: 'Perawatan rutin agar website tetap aman dan optimal.' }
  ],
  benefits: [
    { title: 'Cepat dan responsif', description: 'Dibangun mobile-first agar nyaman dibuka di semua ukuran layar.' },
    { title: 'SEO-friendly', description: 'Fondasi metadata, struktur konten, dan performa disiapkan sejak awal.' },
    { title: 'Mudah dikembangkan', description: 'Kode modular sehingga fitur dapat ditambah mengikuti perkembangan bisnis.' }
  ],
  portfolio: {
    title: 'Karya digital yang dirancang untuk kebutuhan bisnis nyata.',
    description: 'Contoh kategori project yang dapat kami kerjakan. Detail studi kasus dapat ditambahkan setelah materi project tersedia.',
    items: [
      { category: 'Company Profile', title: 'Website bisnis profesional', gradient: 'from-orange-100 via-white to-amber-100' },
      { category: 'Dashboard', title: 'Sistem monitoring modern', gradient: 'from-sky-100 via-white to-indigo-100' },
      { category: 'E-Commerce', title: 'Toko online responsif', gradient: 'from-emerald-100 via-white to-teal-100' }
    ]
  },
  process: [
    { step: '01', title: 'Konsultasi', description: 'Memahami tujuan bisnis, target pengguna, kebutuhan fitur, dan batasan project.' },
    { step: '02', title: 'Desain', description: 'Menyusun struktur halaman dan tampilan visual yang sesuai dengan brand.' },
    { step: '03', title: 'Development', description: 'Mengubah desain menjadi website responsif, cepat, dan mudah dirawat.' },
    { step: '04', title: 'Review', description: 'Melakukan pengujian, revisi terarah, dan penyempurnaan sebelum rilis.' },
    { step: '05', title: 'Launch', description: 'Website dipublikasikan dan disiapkan agar mudah dikembangkan berikutnya.' }
  ],
  faqs: [
    { question: 'Berapa lama proses pembuatan website?', answer: 'Umumnya 1–4 minggu, tergantung jumlah halaman, fitur, kesiapan konten, dan ruang lingkup project.' },
    { question: 'Apakah website bisa dibuka di HP?', answer: 'Ya. Seluruh tampilan dirancang responsif untuk desktop, tablet, dan smartphone.' },
    { question: 'Apakah sudah termasuk domain dan hosting?', answer: 'Domain dan hosting dapat disiapkan sebagai layanan tambahan sesuai kebutuhan dan anggaran.' },
    { question: 'Apakah saya bisa meminta revisi?', answer: 'Bisa. Jumlah dan ruang lingkup revisi akan disepakati sejak awal agar timeline tetap terkendali.' }
  ],
  finalCta: {
    title: 'Punya ide website untuk bisnis Anda?',
    description: 'Ceritakan kebutuhan Anda. Kami bantu menyusun solusi yang realistis, menarik, dan siap digunakan.'
  }
} as const
