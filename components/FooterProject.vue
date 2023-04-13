<template>
    <div>
        <div class="footer ">
          <NuxtLink v-if="project.prev" :to="`/projects/${project.prev.replaceAll(' ', '_')}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M23 3.5V20l-9-6v6L3 12l11-8v6l9-6.5ZM2 2v20V2Z"/></svg>
          </NuxtLink>
            <h2 class="page">{{ project.id }}</h2>
          <NuxtLink v-if="project.next" :to="`/projects/${project.next.replaceAll(' ', '_')}`">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 3.5V20l9-6v6l11-8l-11-8v6L1 3.5ZM22 2v20V2Z"/></svg>
          </NuxtLink>
      </div>

    </div>
</template>
<script setup>
const route = useRoute();
const { data: work } = await useFetch(`/api/projects/${route.params.name}`)
const project = computed(() => {
    return work.value;
});
</script>