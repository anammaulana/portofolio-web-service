<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary'
}>(), { variant: 'primary' })
</script>

<template>
  <a
    :href="href"
    class="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300"
    :class="variant === 'primary'
      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_14px_35px_rgba(249,115,22,.28)] hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(249,115,22,.38)]'
      : 'border border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-orange-200 dark:border-white/15 dark:bg-white/10 dark:text-white'"
  >
    <slot />
    <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
  </a>
</template>
