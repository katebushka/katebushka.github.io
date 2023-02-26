export default defineEventHandler((event) => {
    const skills = [
        {
            name: 'html5',
            width: '65%'
        },
        {
            name: 'css3',
            width: '55%'
        },
        {
            name: 'js',
            width: '25%'

        },
        {
            name: 'vue3',
            width: '10%'

        },
        {
            name: 'github',
            width: '50%'

        },
        {
            name: 'docker',
            width: '5%'

        },
        {
            name: 'figma',
            width: '65%'

        },
        {
            name: 'node.js',
            width: '5%'

        },
        {
            name: 'wordpress',
            width: '30%'

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