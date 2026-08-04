<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.contact

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="section-surface py-16 sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">Kontak</p>
        <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
          {{ content.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 muted-copy">
          {{ content.description }}
        </p>
        <div class="mt-8">
          <ContactCta />
        </div>
      </div>
      <div class="panel-surface rounded-lg p-6">
        <h2 class="text-xl font-semibold text-ink dark:text-white">Informasi konsultasi</h2>
        <ul class="mt-6 grid gap-4 text-sm leading-6 muted-copy">
          <li v-for="channel in content.channels" :key="channel" class="flex gap-3">
            <span aria-hidden="true" class="mt-2 h-2 w-2 shrink-0 rounded-full bg-moss dark:bg-[#a8d7b6]" />
            <span>{{ channel }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-shell mt-12">
      <QuoteForm />
    </div>
  </section>
</template>
