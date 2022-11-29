<script setup>
  useHead({
    title: "kB Home"
  })
</script>

<template>
  <section class="md:space-x-16 space-x-1 py-10 flex mx-auto justify-center">
    <TheHeroimage />
    <div class="w-96 jello-vertical -z-50">
    <img src="~/assets/images/image-main.jpg" alt="gate">
    </div>
    <TheHeroimage2 />
  </section>
    <TheFooter />
</template>

<style scoped>
.jello-vertical {
  animation: jello-vertical 2s 4s both
}

@keyframes jello-vertical {
  0% {
    transform: scale3d(1, 1, 1)
  }

  30% {
    transform: scale3d(.75, 1.25, 1)
  }

  40% {
    transform: scale3d(1.25, .75, 1)
  }

  50% {
    transform: scale3d(.85, 1.15, 1)
  }

  65% {
    transform: scale3d(1.05, .95, 1)
  }

  75% {
    transform: scale3d(.95, 1.05, 1)
  }

  100% {
    transform: scale3d(1, 1, 1)
  }
}
</style>