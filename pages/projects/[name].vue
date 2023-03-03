<template>
    <div class="padding-up">
        <div class="card-box">
            <div class="card-content">
                <h2>{{ project.title }}</h2>
                <img :src="`${project.img}`" alt="">
            </div>
            <div class="card-text">
                <div><b>front-end</b>: {{ project.skills.css }}, {{ project.skills.js }}</div>
                <div><b>tools</b>: {{ project.tools }}</div>
                <div><b>back-end</b>:</div>
            </div>
        </div>
        <NuxtLink class="card-btn" :to="`${project.site}`" target="_blank">Look at this</NuxtLink>
    </div>
    <div class="footer">
    <NuxtLink v-if="project.prev" :to="`/projects/${project.prev.replaceAll(' ', '_')}`">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z"/></svg>
    </NuxtLink>
    <NuxtLink v-if="project.next" :to="`/projects/${project.next.replaceAll(' ', '_')}`">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z"/></svg>
    </NuxtLink>
  </div>

</template>
<script setup>
definePageMeta({
    layout: 'project'
})
const route = useRoute();
const { data: work } = await useFetch(`/api/projects/${route.params.name}`)
const project = computed(() => {
    return work.value;
});
// const { data: item } = await useFetch(`/api/skills/${route.params.name}`)
// const skill = computed(() => {
//   return item.value;
// });

</script>
<style scoped>
/* @import '../assets/css/main.css'; */

@media only screen and (max-width: 600px) {
    .card-box {
        flex-wrap: wrap;
    }
}

@media only screen and (min-width: 600px) {
    .card-box {
        flex-wrap: wrap;
    }

}

@media only screen and (min-width: 992px) {
    .card-box {
        flex-wrap: nowrap;
    }

}

.card-box {
    display: flex;
    align-items: center;
}

h2 {
    text-align: center;
}

.card-box img {
    max-width: 35rem;
    width: 100%;
}

.card-text {
    text-align: start;
    flex-direction: column;
    text-transform: uppercase;
    overflow-wrap: break-word;
}
.card-btn {
    padding: 5px 10px;
    background-color: var(--color-blue);
    color: var(--color-pink);
    border-radius: 5px;
}
.card-btn:hover {
    color: #FFD063;
    transition: 500ms;

}
.card-content img{
    margin-top: 2rem;
}
.footer {
  padding: 4rem 0;
  display: flex;
  justify-content: space-evenly;
}

</style>