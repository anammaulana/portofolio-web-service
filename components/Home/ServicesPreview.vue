<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
  <section id="layanan" class="bg-white py-20 dark:bg-[#0b1020]" aria-labelledby="services-heading">
    <div class="container-shell">
      <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <UiSectionHeader id="services-heading" eyebrow="Layanan kami"
          title="Solusi lengkap untuk kebutuhan digital Anda"
          description="Dari landing page hingga sistem web yang dapat dikembangkan mengikuti pertumbuhan bisnis." />
        <NuxtLink to="/services" class="text-sm font-semibold text-slate-600 hover:text-orange-500 dark:text-white/70">
          Lihat semua layanan →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <article v-for="service in homeContent.services" :key="service.title"
          class="group flex min-h-[230px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_24px_60px_rgba(249,115,22,.12)] dark:border-white/10 dark:bg-white/5">
          <span
            class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-2xl font-bold text-white shadow-lg shadow-orange-500/20">{{
              service.icon }}</span>
          <h3 class="mt-6 text-lg font-bold text-slate-950 dark:text-white">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-500 dark:text-white/60">{{ service.description }}</p>
          <!-- <span class="mt-auto pt-5 text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-500">→</span> -->
        </article>
      </div>
    </div>
  </section>
</template>
