<script setup lang="ts">
import { findBlogPost } from '~/content/blog'

const route = useRoute()
const slug = String(route.params.slug || '')
const post = findBlogPost(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan' })
}

usePageSeo({
  title: `${post.title} | Blog Anam Web Studio`,
  description: post.excerpt,
  path: `/blog/${post.slug}`
})
</script>

<template>
  <article v-if="post" class="section-surface py-16 sm:py-20">
    <div class="container-shell max-w-4xl">
      <NuxtLink to="/blog" class="text-sm font-semibold text-ocean dark:text-[#89c7dc]">
        Kembali ke blog
      </NuxtLink>
      <p class="mt-8 text-sm font-semibold uppercase text-copper dark:text-[#f1a37f]">{{ post.status }}</p>
      <h1 class="mt-4 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
        {{ post.title }}
      </h1>
      <p class="mt-5 text-lg leading-8 muted-copy">{{ post.excerpt }}</p>
      <p class="mt-5 text-sm font-medium text-ink/58 dark:text-white/64">{{ post.date }} - {{ post.readingTime }}</p>

      <div class="panel-surface mt-10 rounded-lg p-6 sm:p-8">
        <p class="mb-6 rounded-md border border-copper/30 bg-paper p-4 text-sm leading-6 text-ink/72 dark:border-[#f1a37f]/30 dark:bg-[#101317] dark:text-white/80">
          Artikel ini masih draft placeholder untuk arah konten. Review Owner diperlukan sebelum publish final.
        </p>
        <div class="grid gap-5">
          <p v-for="paragraph in post.body" :key="paragraph" class="text-base leading-8 muted-copy">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
