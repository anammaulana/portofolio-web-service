<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-ink/70 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
