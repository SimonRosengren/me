// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxt/content',
    '@nuxt/image',
  ],

  gtag: {
      initialConsent: false
  },
  content: {
    experimental: {
      search: true
    },
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
    },
    navigation: {
      fields: ['author', 'publishedAt', 'image', 'keywords', 'description', 'ttr']
    }
  },

  compatibilityDate: '2024-09-17',
})