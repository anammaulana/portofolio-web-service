<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '~/content/site'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur">
    <nav class="container-shell flex min-h-16 items-center justify-between" aria-label="Navigasi utama">
      <NuxtLink to="/" class="text-base font-bold text-ink" @click="closeMenu">
        {{ siteConfig.name }}
      </NuxtLink>

      <div class="hidden items-center gap-7 md:flex">
        <a
          v-for="item in siteConfig.navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-ink/70 transition hover:text-ink"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden md:block">
        <UiCtaLink :href="siteConfig.cta.href">
          {{ siteConfig.cta.label }}
        </UiCtaLink>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Buka menu navigasi"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="block h-4 w-5" aria-hidden="true">
          <span class="mb-1 block h-0.5 w-5 bg-ink transition" :class="{ 'translate-y-1.5 rotate-45': isOpen }" />
          <span class="mb-1 block h-0.5 w-5 bg-ink transition" :class="{ 'opacity-0': isOpen }" />
          <span class="block h-0.5 w-5 bg-ink transition" :class="{ '-translate-y-1.5 -rotate-45': isOpen }" />
        </span>
      </button>
    </nav>

    <div
      id="mobile-menu"
      class="border-t border-line bg-paper md:hidden"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <div class="container-shell flex flex-col gap-1 py-4">
        <a
          v-for="item in siteConfig.navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-2 py-3 text-base font-medium text-ink"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <UiCtaLink class="mt-3 w-full" :href="siteConfig.cta.href" @click="closeMenu">
          {{ siteConfig.cta.label }}
        </UiCtaLink>
      </div>
    </div>
  </header>
</template>
