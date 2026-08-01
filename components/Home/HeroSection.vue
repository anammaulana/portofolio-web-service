<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section class="relative overflow-hidden border-b border-line bg-paper dark:border-white/12 dark:bg-[#14161a]">
    <div class="container-shell grid min-h-[calc(100vh-4rem)] gap-10 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-copper dark:text-[#f1a37f]">
          {{ homeContent.hero.eyebrow }}
        </p>
        <h1 class="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
          {{ homeContent.hero.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/72">
          {{ homeContent.hero.description }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiCtaLink href="#kontak">
            {{ homeContent.hero.primaryCta }}
          </UiCtaLink>
          <UiCtaLink href="#proses" variant="secondary">
            {{ homeContent.hero.secondaryCta }}
          </UiCtaLink>
        </div>
      </div>

      <div class="relative rounded-lg border border-line bg-white p-5 shadow-soft dark:border-white/12 dark:bg-white/7">
        <div class="rounded-md border border-line bg-paper p-4 dark:border-white/12 dark:bg-[#14161a]">
          <div class="flex items-center gap-2 border-b border-line pb-3 dark:border-white/12">
            <span class="h-3 w-3 rounded-full bg-copper" />
            <span class="h-3 w-3 rounded-full bg-moss" />
            <span class="h-3 w-3 rounded-full bg-ocean" />
          </div>
          <div class="grid gap-4 pt-5">
            <div class="h-8 w-4/5 rounded bg-ink dark:bg-white" />
            <div class="h-3 w-full rounded bg-line dark:bg-white/16" />
            <div class="h-3 w-5/6 rounded bg-line dark:bg-white/16" />
            <div class="grid gap-3 pt-3 sm:grid-cols-2">
              <div class="rounded-md border border-line bg-white p-4 dark:border-white/12 dark:bg-white/7">
                <div class="h-4 w-2/3 rounded bg-moss" />
                <div class="mt-4 h-16 rounded bg-paper dark:bg-white/10" />
              </div>
              <div class="rounded-md border border-line bg-white p-4 dark:border-white/12 dark:bg-white/7">
                <div class="h-4 w-3/4 rounded bg-ocean" />
                <div class="mt-4 h-16 rounded bg-paper dark:bg-white/10" />
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 text-sm leading-6 text-ink/62 dark:text-white/62">
          Preview visual foundation website. Bukan klaim performa atau hasil klien.
        </p>
      </div>
    </div>
  </section>
</template>
