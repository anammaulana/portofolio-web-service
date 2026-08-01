import { buildCanonicalUrl, seoConfig } from '~/content/seo'

export const usePageSeo = (input: {
  title: string
  description: string
  path: string
  image?: string
}) => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl || seoConfig.siteUrl
  const url = buildCanonicalUrl(input.path, siteUrl)
  const image = input.image || seoConfig.defaultImage

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogUrl: url,
    ogImage: image,
    twitterCard: seoConfig.twitterCard,
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: image
  })

  useHead({
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
