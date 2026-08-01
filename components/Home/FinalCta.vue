<script setup lang="ts">
import { homeContent } from '~/content/home'
import { siteConfig } from '~/content/site'
</script>

<template>
  <section id="kontak" class="bg-moss py-16 text-white sm:py-20" aria-labelledby="cta-heading">
    <div class="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <h2 id="cta-heading" class="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          {{ homeContent.finalCta.title }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/78">
          {{ homeContent.finalCta.description }}
        </p>
      </div>
      <UiCtaLink :href="siteConfig.cta.href">
        {{ siteConfig.cta.label }}
      </UiCtaLink>
    </div>
  </section>
</template>
