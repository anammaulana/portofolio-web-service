<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.18em] text-copper dark:text-[#f1a37f]">
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 text-3xl font-semibold leading-tight text-ink dark:text-white sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-7 muted-copy sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
