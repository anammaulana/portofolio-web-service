export const homeContent = {
  seo: {
    title: 'Jasa Pembuatan Website Profesional | Anam Maulana',
    description: 'Anam Maulana membantu UMKM, bisnis jasa, personal brand, dan perusahaan membuat website profesional, cepat, responsif, serta SEO-friendly.'
  },
  hero: {
    eyebrow: 'Jasa pembuatan website profesional',
    titlePrefix: 'Website profesional yang membuat bisnis Anda terlihat',
    titleAccent: 'siap dan dipercaya.',
    description: 'Bangun kehadiran digital yang lebih meyakinkan melalui website modern, cepat, responsif, mudah ditemukan di Google, dan disesuaikan dengan kebutuhan bisnis Anda.',
    primaryCta: 'Konsultasi Gratis',
    secondaryCta: 'Lihat Contoh Project',
    highlights: ['Konsultasi awal gratis', 'Harga transparan', 'Revisi sesuai paket']
  },
  trust: ['Nuxt', 'Vue.js', 'Laravel', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
  services: [
    { icon: '◎', title: 'Web Development', description: 'Website company profile, landing page, dan aplikasi web yang cepat serta responsif.' },
    { icon: '▣', title: 'E-Commerce', description: 'Toko online profesional dengan katalog produk, checkout, dan pengelolaan yang mudah.' },
    { icon: '↗', title: 'SEO Optimization', description: 'Optimasi teknis dan struktur konten agar website lebih mudah ditemukan di Google.' },
    { icon: '✦', title: 'UI/UX Design', description: 'Desain modern, nyaman digunakan, dan konsisten dengan identitas bisnis Anda.' },
    { icon: '⚡', title: 'Maintenance', description: 'Perawatan, pembaruan, backup, dan dukungan teknis agar website tetap optimal.' }
  ],
  benefits: [
    { title: 'Desain profesional', description: 'Tampilan dibuat sesuai karakter bisnis agar terlihat lebih kredibel dan meyakinkan.' },
    { title: 'Cepat dan responsif', description: 'Website dioptimalkan agar nyaman digunakan melalui laptop, tablet, maupun smartphone.' },
    { title: 'Siap dikembangkan', description: 'Struktur kode modular sehingga fitur baru dapat ditambahkan saat bisnis Anda berkembang.' }
  ],
  portfolio: {
    title: 'Project & Portfolio',
    description:
      'Beberapa project berikut menunjukkan pengalaman saya dalam membangun website dan aplikasi modern. Sebagian merupakan personal project, demo, atau studi kasus yang merepresentasikan kemampuan teknis dan pendekatan pengembangan yang saya terapkan.',
    items: [
      {
        category: 'Personal Website',
        title: 'Personal Portfolio Website',
        description:
          'Website portfolio modern berbasis Nuxt dengan fokus pada performa, SEO, responsive design, dan pengalaman pengguna.',
        gradient: 'from-orange-100 via-white to-amber-100'
      },
      {
        category: 'Web Application',
        title: 'Freelance Job & Invoice Tracker',
        description:
          'Aplikasi manajemen proyek freelance untuk mengelola klien, invoice, pembayaran, dan laporan keuangan.',
        gradient: 'from-blue-100 via-white to-cyan-100'
      },
      {
        category: 'Artificial Intelligence',
        title: 'AI Multi-Agent Workspace',
        description:
          'Workspace AI menggunakan OpenClaw untuk membantu workflow software development mulai dari planning hingga dokumentasi.',
        gradient: 'from-violet-100 via-white to-fuchsia-100'
      },
      {
        category: 'Dashboard',
        title: 'Monitoring Dashboard',
        description:
          'Dashboard interaktif dengan visualisasi data, filter, export laporan, dan autentikasi pengguna.',
        gradient: 'from-emerald-100 via-white to-lime-100'
      },
      {
        category: 'Website Demo',
        title: 'Company Profile & Landing Page',
        description:
          'Contoh website modern untuk company profile, landing page, dan bisnis UMKM yang mengutamakan desain profesional dan optimasi SEO.',
        gradient: 'from-slate-100 via-white to-zinc-100'
      }
    ]
  },
  process: [
    { step: '01', title: 'Konsultasi', description: 'Diskusikan kebutuhan, tujuan bisnis, target pengguna, dan gambaran website yang Anda inginkan.' },
    { step: '02', title: 'Perencanaan', description: 'Kami menyusun struktur halaman, kebutuhan fitur, estimasi biaya, serta timeline pengerjaan.' },
    { step: '03', title: 'Desain & Development', description: 'Tampilan dirancang dan dikembangkan menjadi website responsif sesuai scope yang disepakati.' },
    { step: '04', title: 'Review & Revisi', description: 'Anda meninjau hasil pengerjaan dan mengajukan revisi sesuai ketentuan paket.' },
    { step: '05', title: 'Launch & Support', description: 'Website dipublikasikan, diuji kembali, dan siap digunakan untuk mendukung bisnis Anda.' }
  ],
  pricing: {
    title: 'Pilih paket yang sesuai kebutuhan Anda',
    description: 'Harga awal transparan dan dapat menyesuaikan kompleksitas, fitur, serta kebutuhan konten project.',
    packages: [
      {
        name: 'Paket Starter',
        subtitle: 'Cocok untuk bisnis pemula',
        price: 'Rp 2.500.000',
        features: ['1 halaman utama', 'Desain responsif', 'Form kontak atau WhatsApp', 'Basic SEO', 'Revisi 2 kali'],
        cta: 'Pilih Paket Starter',
        featured: false
      },
      {
        name: 'Paket Business',
        subtitle: 'Untuk bisnis yang ingin berkembang',
        price: 'Rp 5.000.000',
        features: ['Hingga 5 halaman', 'Desain premium dan responsif', 'CMS sederhana bila diperlukan', 'Basic SEO on-page', 'Revisi 3 kali', 'Konsultasi konten'],
        cta: 'Pilih Paket Business',
        featured: true
      },
      {
        name: 'Paket Custom',
        subtitle: 'Sesuai kebutuhan spesifik Anda',
        price: 'Mulai dari Rp 7.500.000',
        features: ['Fitur sesuai kebutuhan', 'Desain custom', 'Integrasi sistem atau API', 'SEO lanjutan sesuai scope', 'Revisi sesuai kesepakatan'],
        cta: 'Konsultasi Sekarang',
        featured: false
      }
    ],
    note: 'Harga belum termasuk domain, hosting, layanan pihak ketiga berbayar, dan fitur tambahan di luar scope.'
  },
  faqs: [
    { question: 'Berapa lama waktu pengerjaan website?', answer: 'Rata-rata 1–4 minggu, tergantung jumlah halaman, kompleksitas fitur, kesiapan materi, dan kecepatan proses review.' },
    { question: 'Apakah sudah termasuk domain dan hosting?', answer: 'Belum. Kami dapat membantu memilih dan mengatur domain serta hosting sesuai kebutuhan dan anggaran Anda.' },
    { question: 'Apakah bisa revisi jika ada perubahan?', answer: 'Bisa. Jumlah revisi mengikuti paket yang dipilih. Perubahan besar di luar scope akan dihitung sebagai pekerjaan tambahan.' },
    { question: 'Bagaimana cara memulai project?', answer: 'Klik tombol konsultasi, ceritakan kebutuhan Anda, lalu kami akan membantu menyusun scope, estimasi biaya, dan timeline.' },
    { question: 'Apakah saya bisa mengelola website sendiri?', answer: 'Bisa. Untuk project yang membutuhkan pengelolaan konten, kami dapat menyediakan CMS dan panduan penggunaan.' },
    { question: 'Bagaimana jika setelah website selesai?', answer: 'Kami menyediakan layanan maintenance terpisah untuk update konten, backup, perbaikan, dan pengembangan fitur lanjutan.' }
  ],
  finalCta: {
    title: 'Punya ide project website?',
    description: 'Yuk diskusikan kebutuhan Anda. Konsultasi awal gratis dan tanpa komitmen.'
  }
} as const
