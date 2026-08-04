<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section
    class="hero-grid relative overflow-hidden border-b border-slate-200/70 bg-[#fffdfb] dark:border-white/10 dark:bg-[#080d19]">
    <!-- Background decorations -->
    <div
      class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl dark:bg-orange-500/10" />

    <div
      class="pointer-events-none absolute right-0 top-10 h-[24rem] w-[24rem] rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-500/10 sm:h-[32rem] sm:w-[32rem]" />

    <div
      class="container-shell grid gap-10 py-10 sm:py-14 lg:min-h-[680px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-20">
      <!-- Main content -->
      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[.1em] text-orange-600 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300 sm:px-4 sm:text-xs sm:tracking-[.12em]">
          <span aria-hidden="true">⚡</span>
          <span>{{ homeContent.hero.eyebrow }}</span>
        </div>

        <h1
          class="mt-5 max-w-2xl text-[38px] font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:mt-6 sm:text-5xl lg:text-[64px]">
          {{ homeContent.hero.titlePrefix }}

          <span class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {{ homeContent.hero.titleAccent }}
          </span>
        </h1>

        <p class="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
          {{ homeContent.hero.description }}
        </p>

        <!-- CTA -->
        <div class="mt-7 grid gap-3 sm:flex sm:flex-row">
          <UiCtaLink href="#kontak" class="w-full justify-center sm:w-auto">
            {{ homeContent.hero.primaryCta }}
          </UiCtaLink>

          <UiCtaLink href="#portofolio" variant="secondary" class="w-full justify-center sm:w-auto">
            {{ homeContent.hero.secondaryCta }}
          </UiCtaLink>
        </div>

        <!-- Highlights -->
        <div class="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3">
          <div v-for="item in homeContent.hero.highlights" :key="item"
            class="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-white/65">
            <span
              class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-50 text-xs font-bold text-orange-500 dark:bg-orange-500/10">
              ✓
            </span>

            <span>{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Mobile visual -->
      <div class="relative mx-auto w-full max-w-[360px] lg:hidden">
        <div
          class="pointer-events-none absolute -left-5 top-14 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-200 to-blue-500 opacity-70 blur-[1px]" />

        <div
          class="pointer-events-none absolute -right-4 top-0 h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-400 opacity-75 shadow-xl" />

        <div
          class="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,.16)] dark:border-white/10 dark:bg-[#101827]">
          <div class="rounded-[22px] bg-gradient-to-br from-slate-950 to-slate-800 p-5 text-white">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="h-7 w-7 rounded-lg bg-orange-500" />

                <div>
                  <p class="text-xs font-bold">Anam Maulana</p>
                  <p class="text-[9px] text-white/50">Web Developer</p>
                </div>
              </div>

              <span class="text-sm text-white/70">☰</span>
            </div>

            <div class="mt-8">
              <p class="text-[10px] font-semibold uppercase tracking-[.15em] text-orange-400">
                Website Development
              </p>

              <h3 class="mt-3 text-3xl font-black leading-tight">
                Solusi website modern untuk bisnis Anda
              </h3>

              <p class="mt-4 text-sm leading-6 text-white/60">
                Cepat, responsif, SEO-friendly, dan siap membantu meningkatkan
                kepercayaan pelanggan.
              </p>

              <div class="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-3 text-xs font-bold">
                Konsultasi Gratis
              </div>
            </div>

            <div
              class="mt-8 h-36 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-300/30 via-white/10 to-orange-300/30">
              <div class="mx-auto mt-10 h-32 w-52 rotate-[-8deg] rounded-[28px] bg-white/10" />
            </div>

            <div class="mt-6 grid grid-cols-3 gap-3 text-center">
              <div>
                <p class="text-xs font-bold">Cepat</p>
                <p class="mt-1 text-[9px] text-white/45">Performance</p>
              </div>

              <div>
                <p class="text-xs font-bold">SEO</p>
                <p class="mt-1 text-[9px] text-white/45">Search Ready</p>
              </div>

              <div>
                <p class="text-xs font-bold">Responsive</p>
                <p class="mt-1 text-[9px] text-white/45">All Devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop visual -->
      <div class="relative mx-auto hidden w-full max-w-[720px] pb-12 pt-8 lg:block lg:pb-0">
        <span
          class="absolute left-[5%] top-[8%] h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-400 opacity-80 shadow-xl" />

        <span
          class="absolute left-[-2%] top-[42%] h-14 w-14 rounded-full bg-gradient-to-br from-cyan-200 to-blue-500 opacity-75 blur-[1px]" />

        <!-- Laptop -->
        <div
          class="relative ml-auto w-[88%] rotate-[-3deg] rounded-[26px] border-[10px] border-slate-900 bg-slate-900 p-1 shadow-[0_35px_80px_rgba(15,23,42,.28)] dark:border-black">
          <div class="overflow-hidden rounded-[14px] bg-white dark:bg-[#111827]">
            <div class="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-white/10">
              <div class="flex items-center gap-2">
                <span class="h-5 w-5 rounded-md bg-orange-500" />

                <span class="text-xs font-bold text-slate-900 dark:text-white">
                  Anam Maulana
                </span>
              </div>

              <div class="flex gap-3 text-[9px] text-slate-500">
                <span>Tentang</span>
                <span>Layanan</span>
                <span>Harga</span>
                <span>Proses</span>
              </div>
            </div>

            <div
              class="grid min-h-[340px] grid-cols-[.9fr_1.1fr] items-center gap-4 bg-gradient-to-br from-white to-orange-50 px-8 py-8 dark:from-[#111827] dark:to-[#1f2937]">
              <div>
                <p class="text-[10px] text-orange-500">
                  WEBSITE DEVELOPMENT
                </p>

                <h3 class="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white">
                  Elevate Your Business With Modern Website
                </h3>

                <p class="mt-3 text-xs leading-5 text-slate-500 dark:text-white/60">
                  Modern, responsive, fast, and designed to grow.
                </p>

                <button type="button"
                  class="mt-5 rounded-full bg-orange-500 px-4 py-2 text-[10px] font-bold text-white">
                  Get Started
                </button>
              </div>

              <div
                class="relative h-56 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-white to-orange-100">
                <div class="absolute -bottom-20 left-8 h-56 w-72 rotate-[-14deg] rounded-[44px] bg-slate-900/90" />

                <div class="absolute left-20 top-10 h-24 w-24 rounded-full bg-blue-500/50 blur-xl" />

                <div class="absolute right-6 top-6 h-28 w-28 rounded-full bg-orange-400/60 blur-xl" />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3 border-t border-slate-100 px-8 py-5 text-[10px] dark:border-white/10">
              <div>
                <b>Fast Performance</b>
                <p class="mt-1 text-slate-400">Optimized loading</p>
              </div>

              <div>
                <b>SEO Friendly</b>
                <p class="mt-1 text-slate-400">Search ready</p>
              </div>

              <div>
                <b>Responsive Design</b>
                <p class="mt-1 text-slate-400">All devices</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="absolute bottom-[-2%] right-[0%] w-[29%] rotate-[5deg] rounded-[30px] border-[8px] border-slate-900 bg-slate-900 p-1 shadow-[0_24px_55px_rgba(15,23,42,.35)] dark:border-black">
          <div class="min-h-[330px] overflow-hidden rounded-[20px] bg-white px-4 py-6 dark:bg-[#111827]">
            <div class="flex justify-between">
              <span class="text-[10px] font-bold dark:text-white">
                AM
              </span>

              <span class="text-xs">☰</span>
            </div>

            <h4 class="mt-8 text-xl font-black leading-tight text-slate-950 dark:text-white">
              Solusi Website Untuk Bisnis Anda
            </h4>

            <p class="mt-3 text-[10px] leading-4 text-slate-500">
              Modern, cepat, dan mudah ditemukan.
            </p>

            <button type="button" class="mt-5 rounded-full bg-orange-500 px-4 py-2 text-[9px] font-bold text-white">
              Mulai Sekarang
            </button>

            <div class="mt-6 h-28 rounded-2xl bg-gradient-to-br from-blue-200 via-white to-orange-200" />

            <p class="mt-6 text-[9px] text-slate-400">
              Built for modern business
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Technology -->
    <div class="container-shell pb-8 sm:pb-10">
      <div
        class="rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:rounded-3xl sm:px-6">
        <div class="flex flex-col gap-5 md:flex-row md:items-center">
          <span
            class="text-center text-sm font-medium text-slate-600 dark:text-white/65 md:whitespace-nowrap md:text-left">
            Teknologi yang saya gunakan
          </span>

          <div
            class="grid w-full grid-cols-2 gap-x-4 gap-y-3 text-center text-sm font-bold text-slate-400 sm:grid-cols-3 md:grid-cols-6">
            <span v-for="item in homeContent.trust" :key="item">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>