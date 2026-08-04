<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '~/content/site'
const isOpen = ref(false)
const closeMenu = () => { isOpen.value = false }
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1020]/85">
    <nav class="container-shell flex min-h-[76px] items-center gap-4" aria-label="Navigasi utama">
      <NuxtLink to="/" class="mr-auto flex items-center gap-3" @click="closeMenu">
        <span class="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-black text-white shadow-lg shadow-orange-500/20">AW</span>
        <span>
          <span class="block text-lg font-extrabold leading-tight text-slate-950 dark:text-white">Anam Web Studio</span>
          <span class="block text-xs text-slate-500 dark:text-white/55">{{ siteConfig.tagline }}</span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-7 lg:flex">
        <NuxtLink v-for="item in siteConfig.navItems" :key="item.href" :to="item.href" class="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-white/70 dark:hover:text-orange-400">
          {{ item.label }}
        </NuxtLink>
      </div>
      <ThemeToggle class="hidden sm:inline-flex" />
      <div class="hidden lg:block"><UiCtaLink :href="siteConfig.cta.href">{{ siteConfig.cta.label }}</UiCtaLink></div>
      <button type="button" class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white lg:hidden dark:border-white/15 dark:bg-white/10" :aria-expanded="isOpen" @click="isOpen = !isOpen">
        <span class="sr-only">Menu</span><span class="text-xl">☰</span>
      </button>
    </nav>
    <div v-if="isOpen" class="border-t border-slate-200 bg-white px-5 py-5 lg:hidden dark:border-white/10 dark:bg-[#0b1020]">
      <div class="mx-auto flex max-w-7xl flex-col gap-1">
        <NuxtLink v-for="item in siteConfig.navItems" :key="item.href" :to="item.href" class="rounded-xl px-3 py-3 font-medium text-slate-800 hover:bg-orange-50 dark:text-white dark:hover:bg-white/10" @click="closeMenu">{{ item.label }}</NuxtLink>
        <UiCtaLink class="mt-3" :href="siteConfig.cta.href">{{ siteConfig.cta.label }}</UiCtaLink>
      </div>
    </div>
  </header>
</template>
