<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="proses" class="border-y border-line bg-paper py-16 sm:py-20" aria-labelledby="process-heading">
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
          class="rounded-lg bg-ink p-6 text-white"
        >
          <p class="text-sm font-semibold text-copper">{{ item.step }}</p>
          <h3 class="mt-8 text-xl font-semibold">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/72">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
