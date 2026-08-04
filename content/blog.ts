export const blogContent = {
  seoTitle: 'Blog Website Development | Anam Maulana',
  seoDescription: 'Draft blog Anam Maulana tentang strategi website, SEO dasar, dan proses project yang aman untuk pengembangan bertahap.',
  title: 'Blog draft untuk edukasi calon pelanggan sebelum mulai project.',
  description: 'Artikel sementara ini membantu menyusun arah konten. Semua tulisan dapat direvisi sebelum publish final.',
  posts: [
    {
      slug: 'cara-menyiapkan-brief-website-bisnis',
      title: 'Cara Menyiapkan Brief Website Bisnis',
      excerpt: 'Checklist ringkas agar kebutuhan website lebih jelas sebelum masuk tahap scope dan estimasi.',
      date: '2026-08-01',
      readingTime: '4 menit baca',
      status: 'Draft placeholder',
      body: [
        'Brief yang baik menjelaskan tujuan bisnis, target pengguna, halaman prioritas, konten yang sudah tersedia, dan batasan budget atau deadline.',
        'Untuk website layanan, informasi paling penting biasanya mencakup daftar layanan, area operasi, proses kerja, pertanyaan umum, dan jalur kontak yang ingin dipakai.',
        'Brief tidak harus sempurna di awal, tetapi harus cukup jelas untuk mencegah scope melebar tanpa keputusan.'
      ]
    },
    {
      slug: 'kenapa-website-jasa-butuh-struktur-konten',
      title: 'Kenapa Website Jasa Butuh Struktur Konten',
      excerpt: 'Website jasa perlu menjawab keraguan pengunjung secara bertahap, bukan hanya menampilkan daftar layanan.',
      date: '2026-08-01',
      readingTime: '5 menit baca',
      status: 'Draft placeholder',
      body: [
        'Pengunjung website jasa biasanya ingin tahu apakah penyedia layanan memahami masalah mereka, punya proses yang jelas, dan mudah dihubungi.',
        'Struktur konten yang rapi membantu mengurutkan pesan dari value proposition, layanan, bukti kerja, proses, FAQ, sampai CTA.',
        'Bukti kerja tetap harus dipublikasikan secara hati-hati. Jangan tampilkan nama klien, logo, atau angka hasil tanpa izin dan data yang jelas.'
      ]
    },
    {
      slug: 'seo-dasar-untuk-website-layanan',
      title: 'SEO Dasar untuk Website Layanan',
      excerpt: 'Fondasi SEO dimulai dari metadata, struktur heading, internal links, performa, dan konten yang relevan.',
      date: '2026-08-01',
      readingTime: '4 menit baca',
      status: 'Draft placeholder',
      body: [
        'SEO dasar bukan hanya memasukkan keyword. Halaman perlu punya title, description, heading yang masuk akal, URL bersih, dan konten yang menjawab kebutuhan pencarian.',
        'Internal link membantu pengunjung dan mesin pencari memahami hubungan antar halaman seperti layanan, pricing, portfolio, blog, FAQ, dan kontak.',
        'Sitemap, robots, Open Graph, dan Twitter metadata membantu kesiapan teknis sebelum website dipublikasikan.'
      ]
    }
  ]
} as const

export const findBlogPost = (slug: string) => blogContent.posts.find((post) => post.slug === slug)
