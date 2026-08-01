<script setup lang="ts">
setResponseStatus(404)

usePageSeo({
  title: 'Halaman Tidak Ditemukan | Anam Web Studio',
  description: 'Halaman yang dicari belum tersedia. Kembali ke layanan, portfolio, blog, atau kontak Anam Web Studio.',
  path: '/404'
})
</script>

<template>
  <section class="section-surface py-16 sm:py-20">
    <div class="container-shell max-w-3xl">
      <p class="text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">404</p>
      <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
        Halaman ini belum tersedia.
      </h1>
      <p class="mt-5 text-lg leading-8 muted-copy">
        Link mungkin berubah atau halaman belum masuk scope sprint saat ini. Pilih halaman utama di bawah untuk melanjutkan.
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <UiCtaLink href="/portfolio">Lihat portfolio</UiCtaLink>
        <UiCtaLink href="/blog" variant="secondary">Baca blog</UiCtaLink>
        <UiCtaLink href="/contact" variant="secondary">Kontak</UiCtaLink>
      </div>
    </div>
  </section>
</template>
