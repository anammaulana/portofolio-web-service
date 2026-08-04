<script setup lang="ts">import { homeContent } from '~/content/home'
</script>
<template>
    <section id="kontak" class="bg-white px-5 pb-20 dark:bg-[#0b1020]">
        <div
            class="container-shell overflow-hidden rounded-[36px] bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-12 text-white shadow-[0_30px_80px_rgba(249,115,22,.28)] sm:px-12 lg:px-16">
            <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <h2 class="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{{ homeContent.finalCta.title }}
                    </h2>
                    <p class="mt-4 max-w-2xl text-white/80">{{ homeContent.finalCta.description }}</p>
                </div>
                <ContactCta />
            </div>
        </div>
    </section>
</template>
