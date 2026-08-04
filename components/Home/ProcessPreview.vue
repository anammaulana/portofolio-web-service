<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
    <section id="proses" class="border-y border-slate-200 bg-slate-50 py-20 dark:border-white/10 dark:bg-[#080d19]">
        <div class="container-shell">
            <UiSectionHeader eyebrow="Proses kerja" title="Alur sederhana, transparan, dan mudah diikuti."
                description="Setiap tahap memiliki tujuan yang jelas agar project berjalan terarah dari awal sampai rilis." />
            <div class="mt-12 grid gap-5 md:grid-cols-5">
                <article v-for="item in homeContent.process" :key="item.step"
                    class="relative rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <span class="text-4xl font-black text-orange-100 dark:text-orange-500/20">{{ item.step }}</span>
                    <h3 class="mt-4 text-lg font-bold text-slate-950 dark:text-white">{{ item.title }}</h3>
                    <p class="mt-3 text-sm leading-6 text-slate-500 dark:text-white/60">{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
