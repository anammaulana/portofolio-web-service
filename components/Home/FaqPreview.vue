<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="faq" class="bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <UiSectionHeader
        id="faq-heading"
        eyebrow="FAQ"
        title="Pertanyaan awal sebelum masuk sprint berikutnya."
      />
      <div class="divide-y divide-line rounded-lg border border-line">
        <details
          v-for="faq in homeContent.faqs"
          :key="faq.question"
          class="group p-5"
        >
          <summary class="cursor-pointer list-none text-base font-semibold text-ink">
            {{ faq.question }}
            <span class="float-right pl-4 text-copper group-open:hidden">+</span>
            <span class="float-right hidden pl-4 text-copper group-open:inline">-</span>
          </summary>
          <p class="mt-4 text-sm leading-6 text-ink/70">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
