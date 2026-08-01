<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section class="bg-white py-16 dark:bg-[#14191f] sm:py-20" aria-labelledby="benefit-heading">
    <div class="container-shell">
      <UiSectionHeader
        id="benefit-heading"
        eyebrow="Value"
        title="Fondasi website yang kuat dimulai dari pesan, struktur, dan pengalaman pengguna."
        description="Sprint 1 menyiapkan dasar yang premium namun tetap ringan untuk kebutuhan website development service."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="(benefit, index) in homeContent.benefits"
          :key="benefit.title"
          class="panel-surface rounded-lg p-6 transition hover:-translate-y-1 hover:border-moss/35"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-white dark:bg-white dark:text-ink">
            0{{ index + 1 }}
          </span>
          <h3 class="mt-6 text-lg font-semibold text-ink dark:text-white">{{ benefit.title }}</h3>
          <p class="mt-3 text-sm leading-6 muted-copy">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
