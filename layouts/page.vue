<script setup>
onMounted(function () {
  const myButton = document.getElementById("btn-arrow");

  window.onscroll = function () {
    if (window.pageYOffset >= 800) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  };
  myButton.onclick = function () {
    window.scrollTo(0, 0);
  };
})
</script>

<template>
  <div>
    <div class="container">
      <NuxtLoadingIndicator />
      <div>
        <NuxtLink class="breadcramb" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z" />
          </svg>
          <div>Home</div>
        </NuxtLink>
      </div>
    </div>
    <slot></slot>
    <div id="btn-arrow" class="arrow-up">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="var(--color-blue)"
          d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z" />
      </svg>
    </div>

  </div>
</template>

<style scoped>@import '../assets/css/main.css';</style>
