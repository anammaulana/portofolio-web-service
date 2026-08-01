<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section class="relative overflow-hidden border-b border-line bg-paper">
    <div class="container-shell grid min-h-[calc(100vh-4rem)] gap-10 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
          {{ homeContent.hero.eyebrow }}
        </p>
        <h1 class="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {{ homeContent.hero.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
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

      <div class="relative rounded-lg border border-line bg-white p-5 shadow-soft">
        <div class="rounded-md border border-line bg-paper p-4">
          <div class="flex items-center gap-2 border-b border-line pb-3">
            <span class="h-3 w-3 rounded-full bg-copper" />
            <span class="h-3 w-3 rounded-full bg-moss" />
            <span class="h-3 w-3 rounded-full bg-ocean" />
          </div>
          <div class="grid gap-4 pt-5">
            <div class="h-8 w-4/5 rounded bg-ink" />
            <div class="h-3 w-full rounded bg-line" />
            <div class="h-3 w-5/6 rounded bg-line" />
            <div class="grid gap-3 pt-3 sm:grid-cols-2">
              <div class="rounded-md border border-line bg-white p-4">
                <div class="h-4 w-2/3 rounded bg-moss" />
                <div class="mt-4 h-16 rounded bg-paper" />
              </div>
              <div class="rounded-md border border-line bg-white p-4">
                <div class="h-4 w-3/4 rounded bg-ocean" />
                <div class="mt-4 h-16 rounded bg-paper" />
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 text-sm leading-6 text-ink/62">
          Preview visual foundation website. Bukan klaim performa atau hasil klien.
        </p>
      </div>
    </div>
  </section>
</template>
