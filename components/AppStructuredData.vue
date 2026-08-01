<script setup lang="ts">
import { buildCanonicalUrl } from '~/content/seo'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || 'https://example.com')
const structuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Anam Web Studio',
      url: buildCanonicalUrl('/', siteUrl),
      inLanguage: 'id-ID'
    },
    {
      '@type': 'Organization',
      name: 'Anam Web Studio',
      url: buildCanonicalUrl('/', siteUrl)
    },
    {
      '@type': 'Service',
      name: 'Jasa pembuatan website profesional',
      provider: {
        '@type': 'Organization',
        name: 'Anam Web Studio'
      },
      areaServed: 'Indonesia',
      serviceType: 'Website development service',
      description: 'Website profesional untuk bisnis jasa, UMKM, dan brand yang membutuhkan struktur SEO-friendly dan jalur konsultasi yang jelas.'
    }
  ]
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData.value)
    }
  ]
})
</script>

<template>
  <span class="hidden" aria-hidden="true" />
</template>
