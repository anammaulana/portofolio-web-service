export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',

  devtools: {
    enabled: false
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '',
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        'https://domainkamu.com'
    }
  },

  site: {
    url:
      process.env.NUXT_PUBLIC_SITE_URL ||
      'https://domainkamu.com',

    name: 'Anam Maulana Web Developer',

    description:
      'Jasa pembuatan website profesional, modern, responsif, dan SEO-friendly.'
  },

  sitemap: {
    exclude: [
      '/admin/**',
      '/dashboard/**'
    ]
  },

  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: [
          '/admin',
          '/dashboard'
        ]
      }
    ],

    sitemap: [
      `${process.env.NUXT_PUBLIC_SITE_URL ||
      'https://domainkamu.com'
      }/sitemap.xml`
    ]
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  app: {
    head: {
      title: 'Jasa Pembuatan Website Profesional | Anam Maulana',

      titleTemplate: '%s | Anam Maulana',

      htmlAttrs: {
        lang: 'id'
      },

      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Jasa pembuatan website profesional, modern, cepat, responsif, dan SEO-friendly menggunakan teknologi terbaru.'
        },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },

        // Isi setelah mendapatkan token dari Google Search Console
        {
          name: 'google-site-verification',
          content:
            process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''
        },

        // Open Graph
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:locale',
          content: 'id_ID'
        },
        {
          property: 'og:site_name',
          content: 'Anam Maulana Web Developer'
        },
        {
          property: 'og:title',
          content: 'Jasa Pembuatan Website Profesional | Anam Maulana'
        },
        {
          property: 'og:description',
          content:
            'Jasa pembuatan website modern, cepat, responsif, dan SEO-friendly.'
        },
        {
          property: 'og:url',
          content:
            process.env.NUXT_PUBLIC_SITE_URL ||
            'https://domainkamu.com'
        },
        {
          property: 'og:image',
          content: `${process.env.NUXT_PUBLIC_SITE_URL ||
            'https://domainkamu.com'
            }/images/og-image.jpg`
        },

        // Twitter/X
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Jasa Pembuatan Website Profesional | Anam Maulana'
        },
        {
          name: 'twitter:description',
          content:
            'Jasa pembuatan website modern, cepat, responsif, dan SEO-friendly.'
        },
        {
          name: 'twitter:image',
          content: `${process.env.NUXT_PUBLIC_SITE_URL ||
            'https://domainkamu.com'
            }/images/og-image.jpg`
        }
      ],

      link: [
        {
          rel: 'canonical',
          href:
            process.env.NUXT_PUBLIC_SITE_URL ||
            'https://domainkamu.com'
        },
        {
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
})