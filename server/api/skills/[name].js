export default defineEventHandler((event) => {
    const skills = [
        {
            name: 'html5',
            width: '90%'
        },
        {
            name: 'css3',
            width: '85%'
        },
        {
            name: 'sass',
            width: '30%'
        },
        {
            name: 'tailwindcss',
            width: '80%'
        },
        {
            name: 'bootstrap',
            width: '50%'
        },
        {
            name: 'js',
            width: '35%'

        },
        {
            name: 'vue3',
            width: '15%'

        },
        {
            name: 'nuxt3',
            width: '15%'

        },
        {
            name: 'github',
            width: '60%'

        },
        {
            name: 'docker',
            width: '10%'

        },
        {
            name: 'figma',
            width: '75%'

        },
        {
            name: 'node.js',
            width: '10%'

        },
        {
            name: 'wordpress',
            width: '25%'

        },

    ]
    let result = {}
    if (event.context.params.name == 'all') {
        return skills;
    } else {
        for (let skill of skills) {
            if (event.context.params.name == skill.name) {
                result = skill;
                break
            }
        }
        return result
    }


})