<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
    <section id="tentang" class="border-y border-slate-200 bg-slate-50 py-20 dark:border-white/10 dark:bg-[#080d19]">
        <div class="container-shell">
            <UiSectionHeader eyebrow="Tentang kami"
                title="Partner pembuatan website yang fokus pada kualitas, kejelasan, dan kebutuhan bisnis Anda." />
            <div class="mt-10 grid gap-5 md:grid-cols-3">
                <article v-for="(item, index) in homeContent.benefits" :key="item.title"
                    class="rounded-3xl border border-white bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <span class="text-sm font-black text-orange-500">0{{ index + 1 }}</span>
                    <h3 class="mt-5 text-xl font-bold text-slate-950 dark:text-white">{{ item.title }}</h3>
                    <p class="mt-3 leading-7 text-slate-500 dark:text-white/60">{{ item.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
