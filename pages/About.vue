<script setup>
  useHead({
    title: "kB About"
  })
</script>


<template>
  <div class="mx-auto">
    <h1 class=" tracking-in-contract-bck md:my-24 my-16 md:text-4xl text-xl">About.</h1>
    <h3 class="mb-10 md:text-lg">Hi. My name's Kate Bush. I am 29 y.o. I graduated from university in the field of economics. Last 6 years worked as a financial manager. This year I decided to completely change my profession and now I'm studying to be a front-end developer. I already have a small case of
    <NuxtLink to="/projects" class="hover:text-neutral-600 underline">projects</NuxtLink>.</h3>
  </div>
  <TheTable />
</template>

<style>
.tracking-in-contract-bck {
  animation: tracking-in-contract-bck 2s cubic-bezier(.215, .61, .355, 1.000) both
}

@keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0
  }

  40% {
    opacity: .6
  }

  100% {
    transform: translateZ(0);
    opacity: 1
  }
}
</style>