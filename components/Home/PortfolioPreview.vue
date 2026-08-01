<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="portofolio" class="bg-white py-16 dark:bg-[#14191f] sm:py-20" aria-labelledby="portfolio-heading">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <UiSectionHeader
        id="portfolio-heading"
        eyebrow="Portofolio"
        :title="homeContent.portfolio.title"
        :description="homeContent.portfolio.description"
      />
      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="(item, index) in homeContent.portfolio.items"
          :key="item"
          class="rounded-lg border border-dashed border-line bg-[linear-gradient(145deg,#faf8f4,#edf5f6)] p-5 dark:border-white/16 dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(137,199,220,0.08))]"
        >
          <div class="mb-8 overflow-hidden rounded-md border border-line bg-white dark:border-white/12 dark:bg-white/8">
            <img
              :src="`https://www.gstatic.com/webp/gallery/${index + 1}.jpg`"
              alt="Visual placeholder portofolio dari Google CDN"
              class="h-24 w-full object-cover opacity-80 saturate-75"
              width="320"
              height="180"
            >
          </div>
          <h3 class="text-sm font-semibold leading-6 text-ink dark:text-white">{{ item }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>
