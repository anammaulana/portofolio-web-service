<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.contact

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="bg-paper py-16 dark:bg-[#14161a] sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-copper dark:text-[#f1a37f]">Kontak</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl">
          {{ content.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 text-ink/72 dark:text-white/72">
          {{ content.description }}
        </p>
        <div class="mt-8">
          <ContactCta />
        </div>
      </div>
      <div class="rounded-lg border border-line bg-white p-6 dark:border-white/12 dark:bg-white/7">
        <h2 class="text-xl font-semibold text-ink dark:text-white">Informasi konsultasi</h2>
        <ul class="mt-6 grid gap-4 text-sm leading-6 text-ink/72 dark:text-white/72">
          <li v-for="channel in content.channels" :key="channel" class="flex gap-3">
            <span aria-hidden="true" class="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss dark:bg-[#a8d7b6]" />
            <span>{{ channel }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
