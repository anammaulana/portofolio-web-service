<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary'
})
</script>

<template>
  <a
    :href="href"
    class="inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition"
    :class="variant === 'primary'
      ? 'bg-ink text-white hover:bg-ink/88 dark:bg-white dark:text-[#14161a] dark:hover:bg-white/88'
      : 'border border-line bg-white/70 text-ink hover:border-ink dark:border-white/18 dark:bg-white/8 dark:text-white dark:hover:border-white/42'"
  >
    <slot />
  </a>
</template>
