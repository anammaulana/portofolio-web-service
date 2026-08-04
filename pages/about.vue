<script setup lang="ts">
import { businessContent } from '~/content/business';

const content = businessContent.about

useSeoMeta({
  title: content.seoTitle,
  description: content.description
})
</script>

<template>
  <section class="bg-[linear-gradient(135deg,#faf8f4,#eef4f1)] py-16 dark:bg-[linear-gradient(135deg,#101317,#17231d)] sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">Tentang</p>
        <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
          {{ content.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 muted-copy">
          {{ content.description }}
        </p>
        <img
          src="https://www.gstatic.com/webp/gallery/5.jpg"
          alt="Visual sementara dari Google CDN untuk halaman tentang Anam Maulana"
          class="mt-8 h-64 w-full rounded-lg object-cover shadow-soft"
          width="720"
          height="420"
        >
      </div>
      <div class="grid gap-4">
        <article
          v-for="value in content.values"
          :key="value"
          class="panel-surface rounded-lg p-6"
        >
          <p class="text-base leading-7 muted-copy">{{ value }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
