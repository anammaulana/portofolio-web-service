export const portfolioContent = {
  seoTitle: 'Portfolio Website | Anam Web Studio',
  seoDescription: 'Struktur portfolio Anam Web Studio untuk studi kasus yang hanya akan dipublikasikan setelah data, aset, dan izin publikasi terverifikasi.',
  title: 'Portfolio disiapkan untuk studi kasus yang terverifikasi, bukan klaim palsu.',
  description: 'Halaman ini memakai placeholder aman sampai aset project, izin publikasi, dan hasil kerja benar-benar tersedia untuk dipublikasikan.',
  safetyNote: 'Nama klien, logo, angka performa, testimoni, dan hasil bisnis tidak ditampilkan sebelum diverifikasi.',
  items: [
    {
      slug: 'company-profile-service-business',
      title: 'Company Profile untuk Bisnis Jasa',
      category: 'Website layanan profesional',
      status: 'Placeholder terverifikasi nanti',
      summary: 'Struktur studi kasus untuk website bisnis jasa dengan fokus pesan layanan, trust section, dan CTA konsultasi.',
      challenge: 'Calon pelanggan perlu memahami layanan, proses kerja, dan langkah konsultasi tanpa membaca halaman panjang.',
      approach: 'Menyusun alur halaman yang menampilkan value proposition, layanan utama, proses, FAQ, dan CTA yang konsisten.',
      outcome: 'Belum ada klaim hasil. Area outcome disiapkan untuk data yang akan diverifikasi Owner sebelum publish.',
      image: 'https://www.gstatic.com/webp/gallery/1.jpg'
    },
    {
      slug: 'landing-page-campaign',
      title: 'Landing Page Campaign',
      category: 'Conversion page',
      status: 'Placeholder terverifikasi nanti',
      summary: 'Struktur studi kasus untuk campaign page dengan offer yang jelas, section ringkas, dan CTA tunggal.',
      challenge: 'Campaign butuh halaman cepat dipahami yang tidak membingungkan pengunjung dengan terlalu banyak pilihan.',
      approach: 'Membuat flow konten dari problem, offer, benefit, process, FAQ, sampai contact action.',
      outcome: 'Belum ada klaim performa. Data conversion hanya akan ditambahkan setelah tersedia dan disetujui.',
      image: 'https://www.gstatic.com/webp/gallery/2.jpg'
    },
    {
      slug: 'business-website-redesign',
      title: 'Redesign Website Bisnis',
      category: 'Website redesign',
      status: 'Placeholder terverifikasi nanti',
      summary: 'Struktur studi kasus redesign untuk merapikan navigasi, hierarchy visual, dan pengalaman mobile.',
      challenge: 'Website lama sering punya konten penting, tetapi susunan halaman dan CTA belum membantu calon pelanggan mengambil keputusan.',
      approach: 'Audit konten, susun ulang section, perbaiki visual hierarchy, dan pastikan mobile-first navigation.',
      outcome: 'Belum ada angka hasil. Dampak redesign harus divalidasi sebelum ditampilkan sebagai bukti.',
      image: 'https://www.gstatic.com/webp/gallery/3.jpg'
    }
  ]
} as const

export const findPortfolioItem = (slug: string) => portfolioContent.items.find((item) => item.slug === slug)
