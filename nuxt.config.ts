// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    'nuxt-swiper',
    '@nuxt/image',
    'nuxt-typed-router',
    '@prisma/nuxt'
  ],
  prisma: {
    autoSetupPrisma: true,
  },
  fonts: {
    families: [
      { name: 'Fira Sans', provider: 'google' },
      { name: 'Roboto', provider: 'google' },
    ]
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_vars.scss" as *;
          @use "@/assets/scss/_mixins.scss" as *;
        `,
      }
      }}
  }
})