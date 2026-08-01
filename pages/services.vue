<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.services

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="bg-paper py-16 dark:bg-[#14161a] sm:py-20">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Layanan" :title="content.title" :description="content.description" />
      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <article
          v-for="service in content.items"
          :key="service.title"
          class="rounded-lg border border-line bg-white p-6 dark:border-white/12 dark:bg-white/7"
        >
          <h2 class="text-xl font-semibold text-ink dark:text-white">{{ service.title }}</h2>
          <p class="mt-4 text-base leading-7 text-ink/70 dark:text-white/72">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
