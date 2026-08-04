export const portfolioContent = {
  seoTitle: 'Portfolio | Anam Maulana',
  seoDescription:
    'Kumpulan project website dan aplikasi yang dikembangkan menggunakan teknologi modern.',
  title: 'Project & Portfolio',
  description:
    'Beberapa project berikut merupakan personal project, demo, dan studi kasus yang menunjukkan pengalaman saya dalam membangun website dan aplikasi modern.',
  safetyNote:
    'Beberapa project menggunakan gambar placeholder sebagai ilustrasi. Screenshot asli akan diperbarui seiring perkembangan project dan izin publikasi.',

  items: [
    {
      slug: 'personal-portfolio',
      title: 'Personal Portfolio Website',
      category: 'Nuxt.js',
      status: 'Live',
      summary:
        'Website portfolio modern dengan fokus pada performa, SEO, dark mode, dan responsive design.',
      challenge:
        'Membangun personal branding yang profesional sekaligus menjaga performa website tetap optimal.',
      approach:
        'Dikembangkan menggunakan Nuxt, TypeScript, Tailwind CSS, dan optimasi SEO.',
      outcome:
        'Website siap digunakan sebagai media promosi jasa pembuatan website.',
      image: 'https://placehold.co/1200x800/F8FAFC/94A3B8?text=Portfolio+Preview'
    },
    {
      slug: 'freelance-job-tracker',
      title: 'Freelance Job & Invoice Tracker',
      category: 'Laravel',
      status: 'Personal Project',
      summary:
        'Aplikasi untuk mengelola client, project, invoice, pembayaran, dan laporan keuangan.',
      challenge:
        'Menyederhanakan administrasi project freelance dalam satu aplikasi.',
      approach:
        'Laravel, SQLite, Tailwind CSS, dan dashboard interaktif.',
      outcome:
        'Mempermudah pengelolaan project dan invoice.',
      image: 'https://placehold.co/1200x800/F8FAFC/94A3B8?text=Portfolio+Preview'
    },
    {
      slug: 'ai-workspace',
      title: 'AI Multi-Agent Workspace',
      category: 'Artificial Intelligence',
      status: 'Personal Project',
      summary:
        'Workspace AI berbasis OpenClaw untuk membantu workflow software development.',
      challenge:
        'Mengotomatisasi proses planning, coding, QA, dan dokumentasi.',
      approach:
        'Mengintegrasikan OpenClaw, GPT, dan workflow agent.',
      outcome:
        'Workflow pengembangan menjadi lebih efisien.',
      image: 'https://placehold.co/1200x800/F8FAFC/94A3B8?text=Portfolio+Preview'
    },
    {
      slug: 'monitoring-dashboard',
      title: 'Monitoring Dashboard',
      category: 'Dashboard',
      status: 'Case Study',
      summary:
        'Dashboard monitoring dengan visualisasi data, filter, dan export laporan.',
      challenge:
        'Menyajikan data operasional secara ringkas dan mudah dipahami.',
      approach:
        'Dashboard responsif dengan fokus pada performa dan usability.',
      outcome:
        'Membantu proses monitoring dan analisis data.',
      image: 'https://placehold.co/1200x800/F8FAFC/94A3B8?text=Portfolio+Preview'
    },
    {
      slug: 'company-profile-demo',
      title: 'Company Profile Demo',
      category: 'Website',
      status: 'Demo Project',
      summary:
        'Contoh website company profile modern untuk berbagai jenis bisnis.',
      challenge:
        'Meningkatkan kredibilitas bisnis melalui tampilan profesional.',
      approach:
        'Desain modern, CTA yang jelas, dan SEO-friendly.',
      outcome:
        'Menjadi referensi bagi calon klien.',
      image: 'https://placehold.co/1200x800/F8FAFC/94A3B8?text=Portfolio+Preview'
    }
  ]
} as const

export const findPortfolioItem = (slug: string) =>
  portfolioContent.items.find((item) => item.slug === slug)