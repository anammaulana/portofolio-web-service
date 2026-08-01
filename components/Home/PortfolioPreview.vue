<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="portofolio" class="bg-white py-16 dark:bg-[#181b20] sm:py-20" aria-labelledby="portfolio-heading">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <UiSectionHeader
        id="portfolio-heading"
        eyebrow="Portofolio"
        :title="homeContent.portfolio.title"
        :description="homeContent.portfolio.description"
      />
      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="item in homeContent.portfolio.items"
          :key="item"
          class="rounded-lg border border-dashed border-line bg-paper p-5 dark:border-white/16 dark:bg-white/7"
        >
          <div class="mb-8 h-24 rounded-md border border-line bg-white dark:border-white/12 dark:bg-white/8" />
          <h3 class="text-sm font-semibold leading-6 text-ink dark:text-white">{{ item }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>
