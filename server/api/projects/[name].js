export default defineEventHandler((event) => {
    const projects = [
        {
            id: 1,
            title: 'booking service',
            img: '/images/projects/booking-service-bootstrap.png',
            site: 'http://booking.katebushka.ru',
            skills: {
                css: 'bootstrap',
                js: 'javascript',
            },
            tools: 'figma',    
            prev: 'photo collage',
            next: 'hr service'
        },
        {
            id: 2,
            title: 'hr service',
            img: '/images/projects/hr-service-tailwind.png',
            site: 'http://',
            skills:{
                css: 'tailwind',
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
            site: 'http://',
            skills: {
                css: 'tailwind',
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
            site: 'http://',
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
            site: 'http://',
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
            site: 'http://',
            skills:{
                css: 'tailwind',
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
            site: 'http://',
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
            img: '/images/projects/collage_korea.png',
            site: 'http://housedes.ru',
            skills:{
                css: 'tailwind',
                js: 'javascript, vue3',    
            },
            tools: 'figma, nuxt3, github, pocketbase, api',
            prev: 'desctop chat',
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

