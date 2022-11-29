<script setup>
  useHead({
    title: "kB Contact"
  })
</script>


<template>
  <div class="mx-auto ">
    <h1 class="focus-in-contract-bck md:my-24 my-16 md:text-4xl text-xl">Contact.</h1>
    <h3>You can contact me in any convenient way</h3>
    <TheSocial />
      <NuxtLink to="mailto:marimacdolina@gmail.com" class="text-white bg-gradient-to-r py-3 px-6 from-black to-gray-200 hover:from-gray-200 hover:to-black focus:ring-2 focus:outline-none focus:ring-neutral-500 rounded-lg text-sm w-full sm:w-auto ">
        Email me
      </NuxtLink>
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