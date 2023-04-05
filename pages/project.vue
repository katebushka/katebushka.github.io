<script setup>
definePageMeta({
  layout: 'page',
})
const route = useRoute();
const { data: works } = await useFetch(`/api/projects/all`)
const projects = computed(() => {
  return works.value;
});

const { data: items } = await useFetch(`/api/skills/all`)
const skills = computed(() => {
  return items.value;
});

onMounted(function () {

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);

  function onSkill(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        let w = change.target.getAttribute('data-width-line')
        change.target.style.width = w
        console.log(w);
        change.target.animate(
          [{ width: '0%' }, { width: w }],
          { duration: 2000, iterations: 1, }
        )
      }
    })
  };
  let options1 = { threshold: [0.5] };
  let observer1 = new IntersectionObserver(onSkill, options1);

  let elements = document.querySelectorAll('.tracking');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let text = document.querySelectorAll('.text');
  for (let txt of text) {
    observer.observe(txt);
  }

  let skills = document.querySelectorAll('.skills');
  for (let skill of skills) {
    observer1.observe(skill);
  }
});
</script>

<template>
  <div>
    <Title>kB Projects</Title>
    <div class="padding-up padding-down">
      <div class="container" id="project">
        <h2 class="tracking">Project.</h2>
        <div class="project">
          <div v-for="project in projects" :key="project" class="project-box">
            <div class="project-image"><img :src="`${project.img}`" :alt="`${project.title}`"></div>
            <div class="middle project-text">
              <NuxtLink :to="`/projects/${project.title.replaceAll(' ', '_')}`">{{ project.title }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="padding-down">
      <div class="container slider" id="skills">
        <h2 class="tracking">Skills.</h2>
        <div v-for="skill in skills" :key="skill" class="flex-skill">
          <p>{{ skill.name }}</p>
          <div class="container-skill">
            <div :data-width-line="`${skill.width}`" class="skills">{{ skill.width }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
@import '../assets/css/main.css';
</style>