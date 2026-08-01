<script setup lang="ts">
import { businessContent } from '~/content/business'

const content = businessContent.faq

useSeoMeta({
  title: content.seoTitle,
  description: content.title
})
</script>

<template>
  <section class="bg-paper py-16 dark:bg-[#14161a] sm:py-20">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <UiSectionHeader eyebrow="FAQ" :title="content.title" />
      <div class="divide-y divide-line rounded-lg border border-line bg-white dark:divide-white/12 dark:border-white/12 dark:bg-white/7">
        <details
          v-for="faq in content.items"
          :key="faq.question"
          class="group p-5"
        >
          <summary class="cursor-pointer list-none text-base font-semibold text-ink dark:text-white">
            {{ faq.question }}
            <span class="float-right pl-4 text-copper group-open:hidden dark:text-[#f1a37f]">+</span>
            <span class="float-right hidden pl-4 text-copper group-open:inline dark:text-[#f1a37f]">-</span>
          </summary>
          <p class="mt-4 text-sm leading-6 text-ink/70 dark:text-white/72">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
