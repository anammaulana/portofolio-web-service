<script setup lang="ts">
import { portfolioContent } from '~/content/portfolio'

usePageSeo({
  title: portfolioContent.seoTitle,
  description: portfolioContent.seoDescription,
  path: '/portfolio'
})
</script>

<template>
  <section class="section-surface py-16 sm:py-20">
    <div class="container-shell">
      <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <UiSectionHeader
          eyebrow="Portfolio"
          :title="portfolioContent.title"
          :description="portfolioContent.description"
        />
        <p class="rounded-lg border border-copper/30 bg-white p-5 text-sm leading-6 text-ink/72 dark:border-[#f1a37f]/30 dark:bg-[#182027] dark:text-white/80">
          {{ portfolioContent.safetyNote }}
        </p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="item in portfolioContent.items"
          :key="item.slug"
          class="panel-surface overflow-hidden rounded-lg"
        >
          <img
            :src="item.image"
            alt="Visual placeholder portfolio dari Google CDN"
            class="h-44 w-full object-cover"
            width="480"
            height="280"
          >
          <div class="p-6">
            <p class="text-sm font-semibold text-copper dark:text-[#f1a37f]">{{ item.category }}</p>
            <h2 class="mt-3 text-xl font-semibold leading-7 text-ink dark:text-white">{{ item.title }}</h2>
            <p class="mt-3 text-sm leading-6 muted-copy">{{ item.summary }}</p>
            <p class="mt-4 text-xs font-semibold uppercase text-moss dark:text-[#a8d7b6]">{{ item.status }}</p>
            <NuxtLink
              :to="`/portfolio/${item.slug}`"
              class="mt-6 inline-flex text-sm font-semibold text-ocean hover:text-ink dark:text-[#89c7dc] dark:hover:text-white"
            >
              Lihat struktur studi kasus
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
