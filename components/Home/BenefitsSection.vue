<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section class="bg-white py-16 sm:py-20" aria-labelledby="benefit-heading">
    <div class="container-shell">
      <UiSectionHeader
        id="benefit-heading"
        eyebrow="Value"
        title="Fondasi website yang kuat dimulai dari pesan, struktur, dan pengalaman pengguna."
        description="Sprint 1 menyiapkan dasar yang premium namun tetap ringan untuk kebutuhan website development service."
      />
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="benefit in homeContent.benefits"
          :key="benefit.title"
          class="rounded-lg border border-line bg-paper p-6"
        >
          <h3 class="text-lg font-semibold text-ink">{{ benefit.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-ink/70">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
