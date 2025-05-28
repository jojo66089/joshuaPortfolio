export default defineNuxtConfig({
  // ← NUXT handles vite + postcss order
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/main.scss',         // keep your file as SCSS
    '~/assets/css/view-transition.css',
    '~/assets/safari-fixes.css'
  ],

  experimental: { viewTransition: true },
  future:       { compatibilityVersion: 3 },
  app:          { viewTransition: true },
  compatibilityDate: '2025-04-23'
})