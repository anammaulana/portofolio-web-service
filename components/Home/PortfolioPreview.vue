<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
    <section id="portofolio" class="bg-white py-20 dark:bg-[#0b1020]">
        <div class="container-shell">
            <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <UiSectionHeader eyebrow="Portofolio" :title="homeContent.portfolio.title"
                    :description="homeContent.portfolio.description" />
                <NuxtLink to="/portfolio"
                    class="text-sm font-semibold text-slate-600 hover:text-orange-500 dark:text-white/70">Lihat semua
                    project →</NuxtLink>
            </div>
            <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                <article v-for="item in homeContent.portfolio.items" :key="item.title"
                    class="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                    <div :class="['relative h-48 bg-gradient-to-br p-5', item.gradient]">
                        <div class="h-full rounded-2xl border border-white/80 bg-white/75 p-4 shadow-xl backdrop-blur">
                            <div class="flex gap-1.5"><span class="h-2 w-2 rounded-full bg-red-300" /><span
                                    class="h-2 w-2 rounded-full bg-amber-300" /><span
                                    class="h-2 w-2 rounded-full bg-emerald-300" /></div>
                            <div class="mt-5 grid grid-cols-[.7fr_1.3fr] gap-3">
                                <div class="space-y-2">
                                    <div class="h-4 rounded bg-slate-200" />
                                    <div class="h-2 rounded bg-slate-100" />
                                    <div class="h-2 w-2/3 rounded bg-slate-100" />
                                </div>
                                <div class="h-32 rounded-xl bg-gradient-to-br from-slate-800 to-slate-600" />
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-xs font-bold uppercase tracking-wider text-orange-500">{{ item.category }}</p>
                        <h3 class="mt-2 text-xl font-bold text-slate-950 dark:text-white">{{ item.title }}</h3><span
                            class="mt-4 inline-block text-sm font-semibold text-slate-500 transition group-hover:translate-x-1 group-hover:text-orange-500">Lihat
                            detail →</span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
