<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '~/content/site'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur dark:border-white/12 dark:bg-[#14161a]/92">
    <nav class="container-shell flex min-h-16 items-center gap-3" aria-label="Navigasi utama">
      <NuxtLink to="/" class="mr-auto text-base font-bold text-ink dark:text-white" @click="closeMenu">
        {{ siteConfig.name }}
      </NuxtLink>

      <div class="hidden items-center gap-5 lg:flex">
        <NuxtLink
          v-for="item in siteConfig.navItems"
          :key="item.href"
          :to="item.href"
          class="text-sm font-medium text-ink/70 transition hover:text-ink dark:text-white/70 dark:hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <ThemeToggle class="hidden sm:inline-flex" />

      <div class="hidden lg:block">
        <UiCtaLink :href="siteConfig.cta.href">
          {{ siteConfig.cta.label }}
        </UiCtaLink>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink lg:hidden dark:border-white/16 dark:bg-white/8 dark:text-white"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Buka menu navigasi"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="block h-4 w-5" aria-hidden="true">
          <span class="mb-1 block h-0.5 w-5 bg-ink transition dark:bg-white" :class="{ 'translate-y-1.5 rotate-45': isOpen }" />
          <span class="mb-1 block h-0.5 w-5 bg-ink transition dark:bg-white" :class="{ 'opacity-0': isOpen }" />
          <span class="block h-0.5 w-5 bg-ink transition dark:bg-white" :class="{ '-translate-y-1.5 -rotate-45': isOpen }" />
        </span>
      </button>
    </nav>

    <div
      id="mobile-menu"
      class="border-t border-line bg-paper lg:hidden dark:border-white/12 dark:bg-[#14161a]"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <div class="container-shell flex flex-col gap-1 py-4">
        <NuxtLink
          v-for="item in siteConfig.navItems"
          :key="item.href"
          :to="item.href"
          class="rounded-md px-2 py-3 text-base font-medium text-ink dark:text-white"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="flex items-center justify-between rounded-md px-2 py-3 sm:hidden">
          <span class="text-base font-medium text-ink dark:text-white">Mode tampilan</span>
          <ThemeToggle />
        </div>
        <UiCtaLink class="mt-3 w-full" :href="siteConfig.cta.href" @click="closeMenu">
          {{ siteConfig.cta.label }}
        </UiCtaLink>
      </div>
    </div>
  </header>
</template>
