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
</script>
<template>
  <div class="bg-project">
    <navbar-component></navbar-component>
    <div class="container">
      <NuxtLoadingIndicator />
      <!-- <div> -->
        <!-- <NuxtLink class="breadcramb" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"/></svg>
          <div>Home</div>
        </NuxtLink> -->
      <!-- </div> -->
      <!-- <slot :next="next" :prev="prev"></slot> -->
      <slot></slot>
      <!-- <div class="footer-arrow">
          <NuxtLink  :to="project.prev.replaceAll(' ', '_')">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z"/></svg>
          </NuxtLink>
          <NuxtLink :to="project.next.replaceAll(' ', '_')">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z"/></svg>
          </NuxtLink>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
 @import '../assets/css/main.css'; 
 .footer-arrow {
  padding: 4rem 0;
  display: flex;
  justify-content: space-evenly;
} 
</style>
