<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.about

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="bg-paper py-16 dark:bg-[#14161a] sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-copper dark:text-[#f1a37f]">Tentang</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl">
          {{ content.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 text-ink/72 dark:text-white/72">
          {{ content.description }}
        </p>
      </div>
      <div class="grid gap-4">
        <article
          v-for="value in content.values"
          :key="value"
          class="rounded-lg border border-line bg-white p-6 dark:border-white/12 dark:bg-white/7"
        >
          <p class="text-base leading-7 text-ink/78 dark:text-white/76">{{ value }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
