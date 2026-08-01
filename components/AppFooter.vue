<script setup lang="ts">
import { siteConfig } from '~/content/site'
</script>

<template>
  <footer class="border-t border-line bg-ink text-white dark:border-white/12 dark:bg-[#0d0f12]">
    <div class="container-shell grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-start">
      <div>
        <p class="text-lg font-semibold">{{ siteConfig.name }}</p>
        <p class="mt-3 max-w-xl text-sm leading-6 text-white/70">
          Fondasi website marketing untuk bisnis yang membutuhkan presentasi digital profesional, jelas, dan bertahap.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2">
        <nav class="grid gap-3 text-sm" aria-label="Navigasi footer">
          <NuxtLink
            v-for="item in siteConfig.navItems"
            :key="item.href"
            :to="item.href"
            class="text-white/72 hover:text-white"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <nav class="grid content-start gap-3 text-sm" aria-label="Legal">
          <NuxtLink
            v-for="item in siteConfig.legalItems"
            :key="item.href"
            :to="item.href"
            class="text-white/72 hover:text-white"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
    <div class="container-shell border-t border-white/12 py-5 text-sm text-white/60">
      (c) 2026 Anam Web Studio. Konten portofolio akan ditambahkan setelah terverifikasi.
    </div>
  </footer>
</template>
