<script setup lang="ts">
import { homeContent } from '~/content/home'
</script>

<template>
  <section id="kontak" class="bg-[linear-gradient(135deg,#254d37,#1c5f78)] py-16 text-white dark:bg-[linear-gradient(135deg,#183324,#173a49)] sm:py-20" aria-labelledby="cta-heading">
    <div class="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <h2 id="cta-heading" class="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          {{ homeContent.finalCta.title }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/78">
          {{ homeContent.finalCta.description }}
        </p>
      </div>
      <ContactCta />
    </div>
  </section>
</template>
