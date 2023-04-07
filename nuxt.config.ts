export default defineNuxtConfig({
  ssr: false,
  css: ['assets/css/main.css', ],
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'light',
    fallback: 'dark',
    classSuffix: '',
  },
  nitro: {
    preset: 'vercel',
  },
  });
