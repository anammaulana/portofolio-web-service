<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="layanan" class="section-surface py-16 sm:py-20" aria-labelledby="services-heading">
    <div class="container-shell">
      <UiSectionHeader
        id="services-heading"
        eyebrow="Layanan"
        title="Preview layanan untuk kebutuhan website marketing profesional."
        description="Detail layanan, paket, dan pricing belum termasuk Sprint 1."
      />
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(service, index) in homeContent.services"
          :key="service"
          class="group flex min-h-40 flex-col justify-between rounded-lg border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-ocean/40 dark:border-white/15 dark:bg-[#182027]"
        >
          <span class="text-sm font-semibold text-copper dark:text-[#f1a37f]">Layanan 0{{ index + 1 }}</span>
          <h3 class="text-base font-semibold leading-6 text-ink dark:text-white">{{ service }}</h3>
          <span class="h-1 w-10 rounded-full bg-ocean transition group-hover:w-16 dark:bg-[#89c7dc]" />
        </article>
      </div>
    </div>
  </section>
</template>
