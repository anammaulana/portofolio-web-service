<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.services

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="section-surface py-16 sm:py-20">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Layanan" :title="content.title" :description="content.description" />
      <div class="mt-10 grid gap-4 md:grid-cols-2">
        <article
          v-for="(service, index) in content.items"
          :key="service.title"
          class="panel-surface rounded-lg p-6"
        >
          <div class="flex items-start gap-4">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ocean text-sm font-bold text-white dark:bg-[#89c7dc] dark:text-ink">
              0{{ index + 1 }}
            </span>
            <div>
              <h2 class="text-xl font-semibold text-ink dark:text-white">{{ service.title }}</h2>
              <p class="mt-4 text-base leading-7 muted-copy">{{ service.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
