<script setup>
import { useRoute } from 'vue-router'
const route = useRoute();
const { data: work } = await useFetch(`/api/projects/${route.params.name}`)
const project = computed(() => {
    return work.value;
});

// const prev = computed(() => null)
// const next = computed(() => null)

// const next = computed(() => '/projects/' + (work.value.next.replaceAll(' ', '_')))
useHead({
  link: [
      { rel: 'icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap', rel: 'stylesheet'},
      {href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap", rel: "stylesheet"}
        ],
})
onMounted(function(){
document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})
})

</script>
<template>
  <div class="bg-pink">
    <div class="container">
      <NuxtLoadingIndicator />
      <div>
        <NuxtLink class="breadcramb" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"/></svg>
          <div>Home</div>
        </NuxtLink>
      </div>
      <!-- <slot :next="next" :prev="prev"></slot> -->
      <slot></slot>
      <div class="footer">
          <NuxtLink  :to="project.prev.replaceAll(' ', '_')">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z"/></svg>
          </NuxtLink>
          <NuxtLink :to="project.next.replaceAll(' ', '_')">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z"/></svg>
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
 @import '../assets/css/main.css'; 
 .footer {
  padding: 4rem 0;
  display: flex;
  justify-content: space-evenly;
} 

.bg-project{
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
    linear-gradient(60deg, rgb(242, 220, 228), rgb(1, 58, 76));
  background-blend-mode: overlay, overlay, difference, difference, difference, normal;
  /* --color-pink: rgb(242, 220, 228);
  --color-blue: rgb(1, 58, 76); */

}
</style>
