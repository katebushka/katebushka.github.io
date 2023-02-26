// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "/katebushka.github.io/assets/css/main.css"
        // '@/assets/css/main.css',
    ],
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=500, initial-scale=1',
          link: [
            { rel: 'icon', href: '/favicon.ico' },
            {
              href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap', rel: 'stylesheet'
            },
            {
            href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap", rel: "stylesheet"
            }
          ],
        }
      },
    
})
