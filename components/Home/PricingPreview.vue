<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="harga" class="bg-white py-20 dark:bg-[#0b1020]">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Paket harga" :title="homeContent.pricing.title" :description="homeContent.pricing.description" />

      <div class="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
        <article
          v-for="item in homeContent.pricing.packages"
          :key="item.name"
          :class="[
            'relative flex flex-col rounded-3xl border bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,.07)] dark:bg-white/5',
            item.featured
              ? 'border-orange-500 ring-1 ring-orange-500 dark:border-orange-400'
              : 'border-slate-200 dark:border-white/10'
          ]"
        >
          <div v-if="item.featured" class="absolute inset-x-0 top-0 rounded-t-3xl bg-orange-500 py-2 text-center text-xs font-bold uppercase tracking-wider text-white">
            Paling populer
          </div>
          <div :class="item.featured ? 'pt-7' : ''">
            <h3 class="text-xl font-black text-slate-950 dark:text-white">{{ item.name }}</h3>
            <p class="mt-1 text-sm text-slate-500 dark:text-white/55">{{ item.subtitle }}</p>
            <p class="mt-6 text-3xl font-black text-slate-950 dark:text-white">{{ item.price }}</p>
          </div>

          <ul class="mt-7 grid gap-3 text-sm text-slate-600 dark:text-white/70">
            <li v-for="feature in item.features" :key="feature" class="flex gap-3">
              <span class="mt-0.5 font-bold text-orange-500">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <UiCtaLink :href="`/contact?package=${encodeURIComponent(item.name)}`" :variant="item.featured ? 'primary' : 'secondary'" class="mt-auto justify-center pt-8">
            {{ item.cta }}
          </UiCtaLink>
        </article>
      </div>
      <p class="mt-6 text-center text-xs text-slate-500 dark:text-white/50">* {{ homeContent.pricing.note }}</p>
    </div>
  </section>
</template>
