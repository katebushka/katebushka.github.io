export default defineEventHandler((event) => {
    const projects = [
        {
            id: 1,
            title: 'booking service',
            img: '/images/projects/booking-service-bootstrap.png',
            site: 'http://booking.katebushka.ru',
            skills: {
                css: 'bootstrap-5',
                js: 'javascript',
            },
            tools: 'figma',    
            prev: 'personal account game test',
            next: 'hr service'
        },
        {
            id: 2,
            title: 'hr service',
            img: '/images/projects/hr-service-tailwind.png',
            site: '#',
            skills:{
                css: 'tailwindcss',
                js: 'javascript',
            },
            tools: 'docker',
            prev: 'booking service',
            next: 'estate agency'

        },
        {
            id: 3,
            title: 'estate agency',
            img: '/images/projects/agency-estate-korean-tailwind.png',
            site: '#',
            skills: {
                css: 'tailwindcss',
                js: 'javascript, node.js',    
            },
            tools: 'poketbase, api',
            prev: 'hr service',
            next: 'market shop'

        },
        {
            id: 4,
            title: 'market shop',
            img: '/images/projects/market-shop-css.png',
            site: 'https://github.com/katebushka/myproject-first',
            skills:{
                css: 'css',
                js: 'javascript, jquery',
    
            },
            tools: 'github, figma',
            prev: 'estate agency',
            next: 'statistic info'

        },
        {
            id: 5,
            title: 'statistic info',
            img: '/images/projects/statistic-landing-css.png',
            site: 'https://github.com/katebushka/landing-page2',
            skills:{
                css: 'css',
                js: 'javascript',
    
            },
            tools: 'github, figma',
            prev: 'market shop',
            next: 'first portfolio'

        },
        {
            id: 6,
            title: 'first portfolio',
            img: '/images/projects/first-portfolio-nuxt3.png',
            site: 'https://github.com/katebushka/first-portfolio-Nuxt-3',
            skills:{
                css: 'tailwindcss',
                js: 'javascript, nuxt3',
    
            },
            tools: 'figma, github',
            prev: 'statistic info',
            next: 'desctop chat'


        },
        {
            id: 7,
            title: 'desctop chat',
            img: '/images/projects/desktop-chat-css.png',
            site: 'https://github.com/katebushka/chat-desktope',
            skills:{
                css: 'css',
                js: 'javascript',
    
            },
            tools: 'figma',
            prev: 'first portfolio',
            next: 'photo collage'

        },
        {
            id: 8,
            title: 'photo collage',
            img: '/images/projects/collage-korea.png',
            site: 'http://housedes.ru',
            skills:{
                css: 'tailwindcss',
                js: 'javascript, vue3',    
            },
            tools: 'figma, nuxt3, pocketbase, api',
            prev: 'desctop chat',
            next: 'tatto portfolio site'
        },
        {
            id: 9,
            title: 'tatto portfolio site',
            img: '/images/projects/tattoo-site.png',
            site: 'https://github.com/katebushka/tattoo',
            skills:{
                css: 'sass, BEM',
                js: 'javascript, vue3',    
            },
            tools: 'figma, nuxt3',
            prev: 'photo collage',
            next: 'personal account game test'
        },
        {
            id: 10,
            title: 'personal account game test',
            img: '/images/projects/game-pa.png',
            site: 'https://github.com/katebushka/test-1',
            skills:{
                css: 'css, BEM',
                js: '-',    
            },
            tools: 'figma',
            prev: 'tatto portfolio site',
            next: 'booking service'
        },

    ]

    if (event.context.params.name == 'all') {
        return projects;
    } else {
        for (let project of projects) {
            if (event.context.params.name.replaceAll('_', ' ') == project.title) {
                return project;
            }
        }
        return {}
    }
});

