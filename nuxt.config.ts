export default defineNuxtConfig({

  compatibilityDate: '2026-08-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        },
        {
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico'
        }
      ]
    }
  }
})
