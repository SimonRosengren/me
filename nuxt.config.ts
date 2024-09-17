// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxt/content'],

  gtag: {
      initialConsent: false
  },
  content: {
    experimental: {
      search: true
    }
  },

  compatibilityDate: '2024-09-17',
})