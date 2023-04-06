export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  css: ['assets/css/main.css', ],
  app: {
      head: {
        // charset: 'utf-8',
        // viewport: 'width=500, initial-scale=1',
        // link: [
        //   { rel: 'icon', href: '/favicon.ico' },
        //   { href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap', rel: 'stylesheet'},
        //   {href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap", rel: "stylesheet"}
        // ],
      },
    },
    colorMode: {
      classSuffix: '',
    },
  });
