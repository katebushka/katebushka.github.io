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
  <div class="page">
    <div class="card-box">
      <div class="card-content">
        <h2>{{ project.title }}</h2>
        <img :src="`${project.img}`" alt="">
      </div>
      <div class="card-text">
        <div><b>front-end</b>: {{ project.skills.css }}, {{ project.skills.js }}</div>
        <div><b>tools</b>: {{ project.tools }}</div>
        <div><b>back-end</b>:</div>
        <NuxtLink class="card-btn" :to="`${project.site}`" target="_blank">Visit</NuxtLink>
      </div>
    </div>
  </div>
  <div class="footer ">
      <NuxtLink v-if="project.prev" :to="`/projects/${project.prev.replaceAll(' ', '_')}`">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z" />
        </svg>
      </NuxtLink>
      <div class="page">
        <h2>{{ project.id }}</h2>
      </div>
      <NuxtLink v-if="project.next" :to="`/projects/${project.next.replaceAll(' ', '_')}`">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z" />
        </svg>
      </NuxtLink>
    </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .card-box {
    flex-wrap: wrap;
    padding: 30px 0;
  }

  .card-text {
    width: 100%;
  }

}

@media only screen and (min-width: 600px) {
  .card-box {
    flex-wrap: wrap;
    padding: 30px 0;
  }

  .card-text {
    width: 100%;
  }

}

@media only screen and (min-width: 992px) {
  .card-box {
    flex-wrap: nowrap;
    padding: 80px 0;
  }

  .card-text {
    width: 50%;
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
  display: flex;
  text-align: start;
  flex-direction: column;
  text-transform: uppercase;
  overflow-wrap: break-word;
  justify-content: space-between;
}

.card-btn {
  padding: 10px 0;
  background-color: var(--yellow);
  color: var(--color-main);
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
}

/* .card-btn:hover {
    color: var(--yellow);
    transition: 500ms;

} */
.footer {
  /* height: 20%; */
  /* padding-top: 4rem; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card-content img {
  margin-top: 2rem;
}

.page {
  height: 100%;
}</style>
