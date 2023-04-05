<script setup>
const route = useRoute();
const { data: work } = await useFetch(`/api/projects/${route.params.name}`)
const project = computed(() => {
    return work.value;
});
definePageMeta({
    layout: 'project',
//     pageTransition: {
//     name: 'slide-right',
//     mode: 'out-in'
//   }
})
</script>

<template>
    <div class="padding-up" :project="project">
        <div class="card-box">
            <div class="card-content">
                <h2>{{ project.title }}</h2>
                <img :src="`${project.img}`" alt="">
            </div>
            <div class="card-text">
                <div><b>front-end</b>: {{ project.skills.css }}, {{ project.skills.js }}</div>
                <div><b>tools</b>: {{ project.tools }}</div>
                <div><b>back-end</b>:</div>
                <NuxtLink class="card-btn" :to="`${project.site}`" target="_blank">Look at this</NuxtLink>
            </div>
        </div>
        <div>
            <h2 class="page">{{ project.id }}</h2>
        </div>
        <!-- <div class="footer ">
          <NuxtLink v-if="project.prev" :to="`/projects/${project.prev.replaceAll(' ', '_')}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z"/></svg>
          </NuxtLink>
          <NuxtLink v-if="project.next" :to="`/projects/${project.next.replaceAll(' ', '_')}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z"/></svg>
          </NuxtLink>
      </div> -->

    </div>
</template>

<style scoped>
@import '../assets/css/main.css';
/* .bg-project{
  height: 100%;
  margin: 0;
  --x: calc(var(--posX, 0) * 1px);
  --y: calc(var(--posY, 0) * 1px);
  background-image: 
    linear-gradient(115deg, rgb(242, 220, 228), rgb(1, 58, 76)), 
    radial-gradient( 90% 100% at calc( 50% + var(--x)) calc( 0% + var(--y)), rgb(176, 122, 160), rgb(99, 126, 135)), 
    radial-gradient(100% 100% at calc( 80% - var(--x)) calc( 0% - var(--y)), rgb(250 255 000), rgb(173, 97, 97)), 
    radial-gradient(150% 210% at calc(100% + var(--x)) calc( 0% + var(--y)), rgb(020 175 125), rgb(0, 221, 255)), 
    radial-gradient(100% 100% at calc(100% - var(--x)) calc(30% - var(--y)), rgb(206, 117, 145), rgb(255, 255, 255)), 
    linear-gradient(60deg, rgb(242, 220, 228), rgb(248, 251, 252));
  background-blend-mode: overlay, overlay, difference, difference, difference, normal;
} */

@media only screen and (max-width: 600px) {
    .card-box {flex-wrap: wrap;}
    .card-text {width: 100%;}

}

@media only screen and (min-width: 600px) {
    .card-box {flex-wrap: wrap;}
    .card-text {width: 100%;}

}

@media only screen and (min-width: 992px) {
    .card-box {flex-wrap: nowrap;}
    .card-text {width: 50%;}
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
    display: flex;
    text-align: start;
    flex-direction: column;
    text-transform: uppercase;
    overflow-wrap: break-word;
}
.card-btn {
    padding: 10px 0;
    background-color: var(--color-blue);
    color: var(--color-pink);
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
}
.card-btn:hover {
    color: #FFD063;
    transition: 500ms;

}
.footer {
  padding: 4rem 0;
  display: flex;
  justify-content: space-evenly;
}
.page {
    padding-top: 20px;
}
.card-content img{
    margin-top: 2rem;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>