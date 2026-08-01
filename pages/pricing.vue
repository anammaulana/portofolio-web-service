<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.pricing

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="bg-white py-16 dark:bg-[#14191f] sm:py-20">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Pricing" :title="content.title" :description="content.description" />
      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <article
          v-for="item in content.packages"
          :key="item.name"
          class="flex flex-col rounded-lg border border-line bg-paper p-6 shadow-[0_20px_70px_rgba(21,21,21,0.08)] dark:border-white/15 dark:bg-[#182027] dark:shadow-none"
        >
          <div class="mb-6 h-1.5 w-16 rounded-full bg-copper dark:bg-[#f1a37f]" />
          <h2 class="text-xl font-semibold text-ink dark:text-white">{{ item.name }}</h2>
          <p class="mt-5 text-2xl font-bold text-moss dark:text-[#a8d7b6]">{{ item.price }}</p>
          <p class="mt-3 text-sm leading-6 text-ink/68 dark:text-white/80">{{ item.fit }}</p>
          <ul class="mt-6 grid gap-3 text-sm leading-6 muted-copy">
            <li v-for="feature in item.includes" :key="feature" class="flex gap-3">
              <span aria-hidden="true" class="mt-2 h-2 w-2 shrink-0 rounded-full bg-copper dark:bg-[#f1a37f]" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </article>
      </div>
      <p class="mt-8 max-w-4xl text-sm leading-6 text-ink/68 dark:text-white/80">
        {{ content.note }}
      </p>
    </div>
  </section>
</template>
