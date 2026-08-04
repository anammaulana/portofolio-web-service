<script setup lang="ts">
const config = useRuntimeConfig()

const whatsappNumber = computed(() => String(config.public.whatsappNumber || '').trim())
const message = encodeURIComponent('Halo Anam Web Studio, saya ingin konsultasi awal tentang kebutuhan website.')
const href = computed(() => {
  if (!whatsappNumber.value) return '/contact'

  return `https://wa.me/${whatsappNumber.value}?text=${message}`
})
</script>

<template>
  <UiCtaLink :href="href">
    Konsultasi awal
  </UiCtaLink>
</template>
