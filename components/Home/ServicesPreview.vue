<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="layanan" class="border-y border-line bg-paper py-16 dark:border-white/12 dark:bg-[#14161a] sm:py-20" aria-labelledby="services-heading">
    <div class="container-shell">
      <UiSectionHeader
        id="services-heading"
        eyebrow="Layanan"
        title="Preview layanan untuk kebutuhan website marketing profesional."
        description="Detail layanan, paket, dan pricing belum termasuk Sprint 1."
      />
      <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="service in homeContent.services"
          :key="service"
          class="flex min-h-32 items-end rounded-lg border border-line bg-white p-5 dark:border-white/12 dark:bg-white/7"
        >
          <h3 class="text-base font-semibold leading-6 text-ink dark:text-white">{{ service }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>
