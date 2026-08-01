<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.process

useSeoMeta({
  title: content.seoTitle,
  description: content.title
})
</script>

<template>
  <section class="bg-paper py-16 dark:bg-[#14161a] sm:py-20">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Proses" :title="content.title" />
      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <article
          v-for="item in content.steps"
          :key="item.step"
          class="rounded-lg bg-ink p-6 text-white dark:bg-white/8"
        >
          <p class="text-sm font-semibold text-copper dark:text-[#f1a37f]">{{ item.step }}</p>
          <h2 class="mt-8 text-xl font-semibold">{{ item.title }}</h2>
          <p class="mt-3 text-sm leading-6 text-white/72">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
