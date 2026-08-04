export const businessContent = {
  about: {
    seoTitle: 'Tentang Anam Maulana | Website Profesional',
    title: 'Partner website development untuk bisnis yang ingin tampil rapi dan dipercaya.',
    description: 'Anam Maulana membantu bisnis jasa, UMKM, dan brand profesional membangun website marketing yang jelas, responsif, dan mudah dikembangkan bertahap.',
    values: [
      'Scope dikunci sebelum implementasi agar biaya dan timeline tetap terkendali.',
      'Konten disusun untuk menjawab kebutuhan calon pelanggan, bukan sekadar memenuhi halaman.',
      'Setiap klaim publik harus berbasis bukti kerja atau data yang sudah diverifikasi.'
    ]
  },
  services: {
    seoTitle: 'Layanan Website | Anam Maulana',
    title: 'Layanan inti untuk membangun fondasi digital yang siap dipakai.',
    description: 'Paket layanan dapat disesuaikan setelah discovery singkat dan approval scope.',
    items: [
      {
        title: 'Company profile website',
        description: 'Website profil bisnis dengan struktur layanan, keunggulan, proses kerja, FAQ, dan CTA konsultasi.'
      },
      {
        title: 'Landing page campaign',
        description: 'Halaman promosi fokus konversi untuk produk, event, atau penawaran spesifik.'
      },
      {
        title: 'Website layanan profesional',
        description: 'Website untuk konsultan, agensi, studio, atau penyedia jasa yang membutuhkan presentasi kredibel.'
      },
      {
        title: 'Redesign website bisnis',
        description: 'Perapihan struktur, UI, konten, dan pengalaman mobile untuk website yang sudah ada.'
      }
    ]
  },
  pricing: {
    seoTitle: 'Pricing Website | Anam Maulana',
    title: 'Estimasi awal yang transparan, bukan harga final yang dijamin.',
    description: 'Harga final ditentukan setelah kebutuhan, jumlah halaman, konten, integrasi, dan deadline disepakati.',
    packages: [
      {
        name: 'Starter',
        price: 'Mulai dari Rp3.500.000',
        fit: 'Untuk landing page atau website sederhana.',
        includes: ['1-3 halaman utama', 'Responsive mobile-first', 'CTA konsultasi']
      },
      {
        name: 'Business',
        price: 'Mulai dari Rp7.500.000',
        fit: 'Untuk company profile atau website layanan.',
        includes: ['4-7 halaman bisnis', 'Struktur konten reusable', 'Basic SEO on-page']
      },
      {
        name: 'Growth',
        price: 'Mulai dari Rp12.500.000',
        fit: 'Untuk website yang butuh ruang pengembangan.',
        includes: ['Halaman bisnis lebih lengkap', 'Komponen scalable', 'Support handover teknis']
      }
    ],
    note: 'Estimasi di atas tidak termasuk biaya domain, hosting, aset premium, integrasi pihak ketiga berbayar, atau fitur di luar scope yang disetujui.'
  },
  process: {
    seoTitle: 'Proses Kerja | Anam Maulana',
    title: 'Proses kerja bertahap agar keputusan tetap jelas.',
    steps: [
      {
        step: '01',
        title: 'Discovery',
        description: 'Menyepakati tujuan bisnis, audience, prioritas halaman, konten tersedia, dan batasan project.'
      },
      {
        step: '02',
        title: 'Scope dan struktur',
        description: 'Menyusun halaman, section, user flow, acceptance criteria, serta hal yang tidak termasuk pengerjaan.'
      },
      {
        step: '03',
        title: 'Design dan implementasi',
        description: 'Membangun UI responsive, komponen reusable, dan integrasi ringan sesuai scope.'
      },
      {
        step: '04',
        title: 'QA dan handover',
        description: 'Memverifikasi build, navigasi, responsive behavior, konten, lalu menyiapkan catatan penggunaan.'
      }
    ]
  },
  faq: {
    seoTitle: 'FAQ | Anam Maulana',
    title: 'Pertanyaan yang sering muncul sebelum mulai project.',
    items: [
      {
        question: 'Apakah harga di halaman pricing sudah final?',
        answer: 'Belum. Semua paket memakai wording Mulai dari dan final quote hanya diberikan setelah scope disepakati.'
      },
      {
        question: 'Apakah bisa memakai WhatsApp untuk konsultasi?',
        answer: 'Bisa, jika nomor publik sudah dikonfigurasi melalui environment variable. Jika belum, website tetap memakai placeholder aman.'
      },
      {
        question: 'Apakah portofolio dan testimoni sudah tersedia?',
        answer: 'Belum. Bukti kerja, nama klien, testimoni, atau angka hasil hanya akan dipublikasikan setelah terverifikasi.'
      },
      {
        question: 'Apakah website bisa dikembangkan bertahap?',
        answer: 'Ya. Struktur Nuxt, komponen, dan content config disiapkan agar pengembangan berikutnya tetap rapi.'
      }
    ]
  },
  contact: {
    seoTitle: 'Konsultasi Proyek | Anam Maulana',
    title: 'Mari diskusikan kebutuhan proyek Anda.',
    description:
      'Setiap proyek dimulai dari pemahaman yang baik. Ceritakan tujuan bisnis, kebutuhan fitur, target pengguna, serta timeline yang diharapkan. Saya akan membantu menyusun solusi yang tepat beserta estimasi waktu dan biaya secara transparan.',
    channels: [
      '💬 Konsultasi awal gratis tanpa komitmen.',
      '⚡ Respon cepat melalui WhatsApp pada jam kerja.',
      '📋 Estimasi biaya dan timeline disesuaikan dengan kebutuhan proyek.',
      '🤝 Siap mengerjakan website company profile, landing page, dashboard, hingga aplikasi web custom.'
    ]
  }
} as const
