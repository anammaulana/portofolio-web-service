<script setup lang="ts">
import { siteConfig } from '~/content/site';

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#080d19]">
    <div class="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_.8fr_.8fr_1.2fr]">
      <div>
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 font-black text-white">AW</span>
          <div>
            <p class="font-black text-slate-950 dark:text-white">{{ siteConfig.name }}</p>
            <p class="text-xs text-slate-500 dark:text-white/50">{{ siteConfig.tagline }}</p>
          </div>
        </NuxtLink>
        <p class="mt-5 max-w-sm text-sm leading-7 text-slate-500 dark:text-white/60">
          Membantu bisnis dan personal brand membangun website profesional yang modern, cepat, responsif, dan mudah dikembangkan.
        </p>
      </div>

      <nav aria-label="Navigasi footer">
        <p class="font-bold text-slate-950 dark:text-white">Navigasi</p>
        <div class="mt-4 grid gap-3 text-sm">
          <NuxtLink v-for="item in siteConfig.navItems" :key="item.href" :to="item.href" class="text-slate-500 hover:text-orange-500 dark:text-white/60">{{ item.label }}</NuxtLink>
        </div>
      </nav>

      <div>
        <p class="font-bold text-slate-950 dark:text-white">Layanan</p>
        <div class="mt-4 grid gap-3 text-sm text-slate-500 dark:text-white/60">
          <span>Web Development</span><span>E-Commerce</span><span>SEO Optimization</span><span>UI/UX Design</span><span>Maintenance</span>
        </div>
      </div>

      <div>
        <p class="font-bold text-slate-950 dark:text-white">Mulai project</p>
        <p class="mt-4 text-sm leading-7 text-slate-500 dark:text-white/60">Ceritakan kebutuhan website Anda dan dapatkan konsultasi awal secara gratis.</p>
        <UiCtaLink href="/contact" class="mt-5">Konsultasi Gratis</UiCtaLink>
        <div class="mt-6 flex gap-4 text-sm">
          <NuxtLink v-for="item in siteConfig.legalItems" :key="item.href" :to="item.href" class="text-slate-500 hover:text-orange-500 dark:text-white/60">{{ item.label }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="border-t border-slate-200 py-5 dark:border-white/10">
      <div class="container-shell text-sm text-slate-500 dark:text-white/50">© {{ year }} Anam Maulana. All rights reserved.</div>
    </div>
  </footer>
</template>
