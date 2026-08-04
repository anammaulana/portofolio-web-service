<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section
    class="hero-grid relative overflow-hidden border-b border-slate-200/70 bg-[#fffdfb] dark:border-white/10 dark:bg-[#080d19]">
    <div
      class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl dark:bg-orange-500/10" />
    <div
      class="pointer-events-none absolute right-0 top-10 h-[32rem] w-[32rem] rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-500/10" />
    <div class="container-shell grid min-h-[680px] gap-12 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:py-20">
      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[.12em] text-orange-600 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
          <span>⚡</span>{{ homeContent.hero.eyebrow }}
        </div>
        <h1
          class="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[64px]">
          {{ homeContent.hero.titlePrefix }} <span
            class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{{
              homeContent.hero.titleAccent }}</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-white/70">{{ homeContent.hero.description }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiCtaLink href="#kontak">{{ homeContent.hero.primaryCta }}</UiCtaLink>
          <UiCtaLink href="#portofolio" variant="secondary">{{ homeContent.hero.secondaryCta }}</UiCtaLink>
        </div>
        <div class="mt-8 flex items-center gap-4 text-sm text-slate-500 dark:text-white/60">
          <div class="flex -space-x-2">
            <span v-for="i in 5" :key="i"
              class="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-300 text-xs font-bold text-slate-700 dark:border-[#080d19]">{{
                i }}</span>
          </div>
          <div>
            <div class="text-amber-400">★★★★★</div>
            <div>Siap membantu project digital Anda</div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[720px] pb-12 pt-8 lg:pb-0">
        <span
          class="absolute left-[5%] top-[8%] h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-400 opacity-80 shadow-xl" />
        <span
          class="absolute left-[-2%] top-[42%] h-14 w-14 rounded-full bg-gradient-to-br from-cyan-200 to-blue-500 opacity-75 blur-[1px]" />
        <div
          class="relative ml-auto w-[88%] rounded-[26px] border-[10px] border-slate-900 bg-slate-900 p-1 shadow-[0_35px_80px_rgba(15,23,42,.28)] rotate-[-3deg] dark:border-black">
          <div class="overflow-hidden rounded-[14px] bg-white dark:bg-[#111827]">
            <div class="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-white/10">
              <div class="flex items-center gap-2"><span class="h-5 w-5 rounded-md bg-orange-500" /><span
                  class="text-xs font-bold text-slate-900 dark:text-white">Anam Web Studio</span></div>
              <div class="flex gap-3 text-[9px] text-slate-500">
                <span>Tentang</span><span>Layanan</span><span>Harga</span><span>Proses</span>
              </div>
            </div>
            <div
              class="grid min-h-[340px] grid-cols-[.9fr_1.1fr] items-center gap-4 bg-gradient-to-br from-white to-orange-50 px-8 py-8 dark:from-[#111827] dark:to-[#1f2937]">
              <div>
                <p class="text-[10px] text-orange-500">WEBSITE DEVELOPMENT</p>
                <h3 class="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white">Elevate Your Business
                  With Modern Website</h3>
                <p class="mt-3 text-xs leading-5 text-slate-500 dark:text-white/60">Modern, responsive, fast, and
                  designed to grow.</p><button
                  class="mt-5 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-bold text-white">Get
                  Started</button>
              </div>
              <div
                class="relative h-56 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-white to-orange-100">
                <div class="absolute -bottom-20 left-8 h-56 w-72 rotate-[-14deg] rounded-[44px] bg-slate-900/90" />
                <div class="absolute left-20 top-10 h-24 w-24 rounded-full bg-blue-500/50 blur-xl" />
                <div class="absolute right-6 top-6 h-28 w-28 rounded-full bg-orange-400/60 blur-xl" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3 border-t border-slate-100 px-8 py-5 text-[10px] dark:border-white/10">
              <div><b>Fast Performance</b>
                <p class="mt-1 text-slate-400">Optimized loading</p>
              </div>
              <div><b>SEO Friendly</b>
                <p class="mt-1 text-slate-400">Search ready</p>
              </div>
              <div><b>Responsive Design</b>
                <p class="mt-1 text-slate-400">All devices</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-[-2%] right-[0%] w-[29%] rounded-[30px] border-[8px] border-slate-900 bg-slate-900 p-1 shadow-[0_24px_55px_rgba(15,23,42,.35)] rotate-[5deg] dark:border-black">
          <div class="min-h-[330px] overflow-hidden rounded-[20px] bg-white px-4 py-6 dark:bg-[#111827]">
            <div class="flex justify-between"><span class="text-[10px] font-bold dark:text-white">AW Studio</span><span
                class="text-xs">☰</span></div>
            <h4 class="mt-8 text-xl font-black leading-tight text-slate-950 dark:text-white">Solusi Website Untuk Bisnis
              Anda</h4>
            <p class="mt-3 text-[10px] leading-4 text-slate-500">Modern, cepat, dan mudah ditemukan.</p><button
              class="mt-5 rounded-full bg-orange-500 px-4 py-2 text-[9px] font-bold text-white">Mulai Sekarang</button>
            <div class="mt-6 h-28 rounded-2xl bg-gradient-to-br from-blue-200 via-white to-orange-200" />
            <p class="mt-6 text-[9px] text-slate-400">Built for modern business</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-shell pb-8">
      <div
        class="rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div class="flex flex-col items-center gap-5 md:flex-row"><span
            class="whitespace-nowrap text-sm font-medium text-slate-600 dark:text-white/65">Teknologi yang kami
            gunakan</span>
          <div class="grid w-full grid-cols-2 gap-4 text-center font-bold text-slate-400 sm:grid-cols-3 md:grid-cols-6">
            <span v-for="item in homeContent.trust" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
