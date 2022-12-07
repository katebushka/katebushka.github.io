<script setup>
  useHead({
    title: "kB Projects"
  })
</script>


<template>
  <div class="mx-auto md:w-2/4 space-y-16">
    <h1 class="tracking-in-contract-bck md:my-24 my-16 md:text-4xl text-xl">Projects.</h1>
    <div>
      <p>Landing page. Practice course. Car shop.</p>
      <div class="mt-2">
        <NuxtLink target="_blank" to="#">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/project-2.png" alt="project-2">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Landing page. Practice course. Ectronics store.</p>
      <div class="mt-2">
        <NuxtLink to="#" target="_blank">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/project-3-1.png" alt="project-3">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Project for HR services. Used during development: tailwind, flowbite, git, docker</p>
      <div class="mt-2">
        <NuxtLink target="_blank" to="#">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/hr-project.png" alt="hr-project">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Project for booking service.Bootstrap was used.</p>
      <div class="mt-2">
        <NuxtLink to="https://booking.emtza.ru/" target="_blank">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/book-project.png" alt="booking-project">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
