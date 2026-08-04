<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const isDark = ref(false)
const isReady = ref(false)
const storageKey = 'anam-web-studio-theme'

const applyTheme = (dark: boolean) => {
  if (!import.meta.client) return
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem(storageKey, dark ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem(storageKey)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
  document.documentElement.classList.toggle('dark', isDark.value)
  isReady.value = true
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

const label = computed(() => isDark.value ? 'Gunakan mode terang' : 'Gunakan mode gelap')
</script>

<template>
  <button
    type="button"
    class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-ink dark:border-white/16 dark:bg-white/8 dark:text-white dark:hover:border-white/42"
    :aria-label="label"
    :title="label"
    :aria-pressed="isReady && isDark"
    @click="toggleTheme"
  >
    <span aria-hidden="true" class="relative h-5 w-5">
      <span
        class="absolute inset-1 rounded-full bg-current transition"
        :class="isDark ? 'scale-75' : 'scale-100'"
      />
      <span
        v-if="isDark"
        class="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-ink dark:bg-[#14161a]"
      />
      <span
        v-else
        class="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current"
      />
    </span>
  </button>
</template>
