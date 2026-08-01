<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="proses" class="section-surface py-16 sm:py-20" aria-labelledby="process-heading">
    <div class="container-shell">
      <UiSectionHeader
        id="process-heading"
        eyebrow="Proses"
        title="Alur kerja dibuat bertahap agar scope, kualitas, dan timeline tetap terkendali."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in homeContent.process"
          :key="item.step"
          class="rounded-lg bg-ink p-6 text-white shadow-[0_22px_60px_rgba(21,21,21,0.16)] dark:bg-white/8 dark:shadow-none"
        >
          <p class="text-sm font-semibold text-[#f1a37f]">{{ item.step }}</p>
          <h3 class="mt-8 text-xl font-semibold">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/76">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
