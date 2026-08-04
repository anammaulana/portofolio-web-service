export const legalContent = {
  privacy: {
    seoTitle: 'Privacy Policy | Anam Web Studio',
    description: 'Ringkasan cara Anam Web Studio menangani informasi konsultasi awal secara aman dan terbatas.',
    title: 'Privacy Policy',
    sections: [
      {
        title: 'Informasi yang dikirim',
        body: 'Form konsultasi hanya meminta informasi dasar seperti nama, tipe bisnis, kebutuhan website, estimasi budget, dan timeline. Jangan mengirim password, token, private key, data pelanggan sensitif, atau credential produksi.'
      },
      {
        title: 'Penggunaan informasi',
        body: 'Informasi digunakan untuk memahami kebutuhan awal, menyusun scope, dan menyiapkan estimasi. Data tidak dijual atau dibagikan ke pihak lain untuk kebutuhan marketing.'
      },
      {
        title: 'Penyimpanan data',
        body: 'Website Sprint 4 tidak menyimpan submission ke database atau backend. Jika WhatsApp dikonfigurasi, pesan dikirim melalui aplikasi WhatsApp pengguna.'
      },
      {
        title: 'Batasan',
        body: 'Kebijakan ini adalah baseline website layanan dan perlu review legal formal sebelum production final jika bisnis membutuhkan kepatuhan khusus.'
      }
    ]
  },
  terms: {
    seoTitle: 'Terms of Service | Anam Web Studio',
    description: 'Ketentuan awal layanan Anam Web Studio untuk konsultasi, scope, estimasi, dan batasan klaim.',
    title: 'Terms of Service',
    sections: [
      {
        title: 'Konsultasi awal',
        body: 'Konsultasi awal bertujuan memahami kebutuhan website dan belum menjadi komitmen pengerjaan sampai scope, biaya, timeline, dan deliverables disetujui.'
      },
      {
        title: 'Estimasi dan scope',
        body: 'Harga di website memakai wording Mulai dari. Estimasi final ditentukan setelah kebutuhan, jumlah halaman, konten, integrasi, dan deadline disepakati.'
      },
      {
        title: 'Konten dan aset',
        body: 'Nama klien, logo, testimoni, angka performa, dan studi kasus hanya dipublikasikan setelah data dan izin publikasi terverifikasi.'
      },
      {
        title: 'Batasan jaminan',
        body: 'Website ini tidak menjanjikan hasil bisnis, ranking SEO, revenue, atau conversion tertentu tanpa data dan pengukuran yang disepakati.'
      }
    ]
  }
} as const
