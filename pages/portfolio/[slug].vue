<script setup lang="ts">
import { findPortfolioItem } from '~/content/portfolio'

const route = useRoute()
const slug = String(route.params.slug || '')
const item = findPortfolioItem(slug)

if (!item) {
  throw createError({ statusCode: 404, statusMessage: 'Portfolio item tidak ditemukan' })
}

usePageSeo({
  title: `${item.title} | Portfolio Anam Web Studio`,
  description: item.summary,
  path: `/portfolio/${item.slug}`,
  image: item.image
})
</script>

<template>
  <article v-if="item" class="section-surface py-16 sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <NuxtLink to="/portfolio" class="text-sm font-semibold text-ocean dark:text-[#89c7dc]">
          Kembali ke portfolio
        </NuxtLink>
        <p class="mt-8 text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">{{ item.category }}</p>
        <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
          {{ item.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 muted-copy">{{ item.summary }}</p>
        <p class="mt-6 rounded-lg border border-copper/30 bg-white p-4 text-sm leading-6 text-ink/72 dark:border-[#f1a37f]/30 dark:bg-[#182027] dark:text-white/80">
          Status: {{ item.status }}. Tidak ada nama klien, logo, angka performa, atau testimoni sampai data terverifikasi.
        </p>
      </div>

      <div class="panel-surface overflow-hidden rounded-lg">
        <img
          :src="item.image"
          alt="Visual placeholder studi kasus dari Google CDN"
          class="h-72 w-full object-cover"
          width="800"
          height="480"
        >
        <div class="grid gap-5 p-6">
          <section>
            <h2 class="text-lg font-semibold text-ink dark:text-white">Challenge</h2>
            <p class="mt-2 text-sm leading-6 muted-copy">{{ item.challenge }}</p>
          </section>
          <section>
            <h2 class="text-lg font-semibold text-ink dark:text-white">Approach</h2>
            <p class="mt-2 text-sm leading-6 muted-copy">{{ item.approach }}</p>
          </section>
          <section>
            <h2 class="text-lg font-semibold text-ink dark:text-white">Outcome</h2>
            <p class="mt-2 text-sm leading-6 muted-copy">{{ item.outcome }}</p>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>
