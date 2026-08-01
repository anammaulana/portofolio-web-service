<script setup lang="ts">
import { legalContent } from '~/content/legal'

const content = legalContent.privacy

usePageSeo({
  title: content.seoTitle,
  description: content.description,
  path: '/privacy'
})
</script>

<template>
  <section class="section-surface py-16 sm:py-20">
    <div class="container-shell max-w-4xl">
      <p class="text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">Legal</p>
      <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
        {{ content.title }}
      </h1>
      <p class="mt-5 text-lg leading-8 muted-copy">{{ content.description }}</p>

      <div class="mt-10 grid gap-5">
        <section v-for="section in content.sections" :key="section.title" class="panel-surface rounded-lg p-6">
          <h2 class="text-xl font-semibold text-ink dark:text-white">{{ section.title }}</h2>
          <p class="mt-3 text-base leading-8 muted-copy">{{ section.body }}</p>
        </section>
      </div>
    </div>
  </section>
</template>
