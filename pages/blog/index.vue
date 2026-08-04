<script setup lang="ts">
import { blogContent } from '~/content/blog'

usePageSeo({
  title: blogContent.seoTitle,
  description: blogContent.seoDescription,
  path: '/blog'
})
</script>

<template>
  <section class="bg-white py-16 dark:bg-[#14191f] sm:py-20">
    <div class="container-shell">
      <UiSectionHeader eyebrow="Blog" :title="blogContent.title" :description="blogContent.description" />

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="post in blogContent.posts"
          :key="post.slug"
          class="panel-surface rounded-lg p-6"
        >
          <p class="text-sm font-semibold text-copper dark:text-[#f1a37f]">{{ post.status }}</p>
          <h2 class="mt-4 text-xl font-semibold leading-7 text-ink dark:text-white">{{ post.title }}</h2>
          <p class="mt-3 text-sm leading-6 muted-copy">{{ post.excerpt }}</p>
          <p class="mt-5 text-xs font-medium uppercase text-ink/54 dark:text-white/60">
            {{ post.date }} - {{ post.readingTime }}
          </p>
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="mt-6 inline-flex text-sm font-semibold text-ocean hover:text-ink dark:text-[#89c7dc] dark:hover:text-white"
          >
            Baca draft artikel
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>
