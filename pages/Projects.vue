<script setup>
  useHead({
    title: "kB Projects"
  })
</script>


<template>
  <div class="mx-auto md:w-2/4 space-y-16">
    <h1 class="focus-in-contract-bck md:my-24 my-16 md:text-4xl text-xl">Projects.</h1>
    <div>
      <p>Landing page. Practice course. Car shop.</p>
      <div class="mt-2">
        <NuxtLink target="_blank" to="https://github.com/KateBushka/tw-project-hr.git">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/project-2.png" alt="project-2">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Landing page. Practice course. Ectronics store.</p>
      <div class="mt-2">
        <NuxtLink to="https://github.com/KateBushka/tw-project-hr.git" target="_blank">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/project-3-1.png" alt="project-3">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Landing page. Practice course. HR services.</p>
      <div class="mt-2">
        <NuxtLink target="_blank" to="https://github.com/KateBushka/tw-project-hr.git">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/hr-project.png" alt="hr-project">
        </NuxtLink>
      </div>
    </div>
    <div>
      <p>Practice course. Booking services.</p>
      <div class="mt-2">
        <NuxtLink to="https://github.com/KateBushka/tw-project-hr.git" target="_blank">
          <img class="saturate-0 hover:filter-none" src="~/assets/images/book-project.png" alt="booking-project">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.focus-in-contract-bck {
  animation: focus-in-contract-bck 2s cubic-bezier(.25, .46, .45, .94) both
}

@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0
  }

  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1
  }
}
</style>
