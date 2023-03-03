export default defineEventHandler((event) => {
    const projects = [
        {
            title: 'Booking service',
            img: '/images/projects/booking-service-bootstrap.png',
            site: 'http://booking.emtza.ru',
            skills: {
                css: 'bootstrap',
                js: 'javascript',
            },
            tools: 'figma',    
            prev: '',
            next: 'HR service'
        },
        {
            title: 'HR service',
            img: '/images/projects/hr-service-tailwind.png',
            site: 'http://',
            skills:{
                css: 'tailwind',
                js: 'javascript',
            },
            tools: 'docker',
            prev: 'Booking service',
            next: 'Estate agency'

        },
        {
            title: 'Estate agency',
            img: '/images/projects/agency-estate-korean-tailwind.png',
            site: 'http://',
            skills: {
                css: 'tailwind',
                js: 'javascript, node.js',    
            },
            tools: 'poketbase, api',
            prev: 'HR service',
            next: 'Market shop'

        },
        {
            title: 'Market shop',
            img: '/images/projects/market-shop-css.png',
            site: 'http://',
            skills:{
                css: 'css',
                js: 'javascript, jquery',
    
            },
            tools: 'github, figma',
            prev: 'Estate agency',
            next: 'Statistic info'

        },
        {
            title: 'Statistic info',
            img: '/images/projects/statistic-landing-css.png',
            site: 'http://',
            skills:{
                css: 'css',
                js: 'javascript',
    
            },
            tools: 'github, figma',
            prev: 'Market shop',
            next: 'First portfolio'

        },
        {
            title: 'First portfolio',
            img: '/images/projects/first-portfolio-nuxt3.png',
            site: 'http://',
            skills:{
                css: 'tailwind',
                js: 'javascript, nuxt3',
    
            },
            tools: 'figma, github',
            prev: 'Statistic info',
            next: 'Desctop chat'


        },
        {
            title: 'Desctop chat',
            img: '/images/projects/desktop-chat-css.png',
            site: 'http://',
            skills:{
                css: 'css',
                js: 'javascript',
    
            },
            tools: 'figma',
            prev: 'First portfolio',
            next: 'Collage'

        },
        {
            title: 'Collage',
            img: '/images/projects/collage_korea.png',
            site: 'http://housedes.ru',
            skills:{
                css: 'tailwind',
                js: 'javascript, vue3',    
            },
            tools: 'figma, nuxt3, github, pocketbase, api',
            prev: 'Desctop chat',
            next: ''
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

