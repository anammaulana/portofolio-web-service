<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
    <section id="faq" class="bg-white py-20 dark:bg-[#0b1020]">
        <div class="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <UiSectionHeader eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan"
                description="Informasi awal sebelum Anda memulai konsultasi project." />
            <div class="space-y-3">
                <details v-for="faq in homeContent.faqs" :key="faq.question"
                    class="group rounded-2xl border border-slate-200 bg-white p-5 open:border-orange-200 open:shadow-sm dark:border-white/10 dark:bg-white/5">
                    <summary class="cursor-pointer list-none font-bold text-slate-900 dark:text-white">{{ faq.question
                        }}<span class="float-right text-orange-500 group-open:rotate-45">+</span></summary>
                    <p class="mt-4 text-sm leading-7 text-slate-500 dark:text-white/60">{{ faq.answer }}</p>
                </details>
            </div>
        </div>
    </section>
</template>
