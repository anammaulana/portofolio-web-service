<script setup lang="ts">
import { homeContent } from '~/content/home'

useSeoMeta({
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  ogTitle: homeContent.seo.title,
  ogDescription: homeContent.seo.description
})
</script>

<template>
  <HomeHeroSection />
  <HomeBenefitsSection />
  <HomeServicesPreview />
  <HomePortfolioPreview />
  <HomeProcessPreview />
  <HomePricingPreview />
  <HomeFaqPreview />
  <HomeFinalCta />
</template>
