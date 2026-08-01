<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section class="relative overflow-hidden border-b border-line bg-[linear-gradient(135deg,#faf8f4_0%,#eef4f1_48%,#f8efe8_100%)] dark:border-white/12 dark:bg-[linear-gradient(135deg,#101317_0%,#17231d_52%,#191318_100%)]">
    <div class="container-shell grid min-h-[calc(100vh-4rem)] gap-10 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-18">
      <div>
        <p class="text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">
          {{ homeContent.hero.eyebrow }}
        </p>
        <h1 class="mt-5 max-w-4xl text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
          {{ homeContent.hero.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 muted-copy">
          {{ homeContent.hero.description }}
        </p>
        <div class="mt-7 flex flex-wrap gap-2">
          <span
            v-for="point in homeContent.proofPoints"
            :key="point"
            class="rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-ink/74 backdrop-blur dark:border-white/12 dark:bg-white/8 dark:text-white/74"
          >
            {{ point }}
          </span>
        </div>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiCtaLink href="#kontak">
            {{ homeContent.hero.primaryCta }}
          </UiCtaLink>
          <UiCtaLink href="#proses" variant="secondary">
            {{ homeContent.hero.secondaryCta }}
          </UiCtaLink>
        </div>
      </div>

      <figure class="relative">
        <div class="overflow-hidden rounded-lg border border-white/70 bg-white/50 shadow-[0_30px_90px_rgba(28,95,120,0.22)] backdrop-blur dark:border-white/12 dark:bg-white/8 dark:shadow-none">
          <img
            :src="homeContent.hero.image.src"
            :alt="homeContent.hero.image.alt"
            class="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[36rem]"
            width="900"
            height="720"
          >
        </div>
        <figcaption class="mt-3 text-sm leading-6 text-ink/62 dark:text-white/62">
          Visual sementara dari Google CDN untuk mood board, bukan bukti hasil klien.
        </figcaption>
        <div class="absolute bottom-10 left-4 right-4 rounded-lg border border-white/70 bg-white/88 p-4 shadow-soft backdrop-blur dark:border-white/12 dark:bg-[#11161a]/88 sm:left-8 sm:right-auto sm:w-80">
          <p class="text-xs font-semibold uppercase text-copper dark:text-[#f1a37f]">Conversion brief</p>
          <p class="mt-2 text-sm leading-6 text-ink/74 dark:text-white/74">
            Struktur halaman, CTA, dan konten disusun untuk konsultasi yang jelas sejak kunjungan pertama.
          </p>
        </div>
      </figure>
    </div>
  </section>
</template>
