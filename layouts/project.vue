<script setup>
const route = useRoute();
</script>
<template>
<div class="bg-pink">
  <NuxtLoadingIndicator />
  <div class="container">
      <NuxtLink class="breadcramb" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"/></svg>
        <div>Home</div>
      </NuxtLink>

  <slot></slot>
</div>
</div>

</template>

<style>
* {
  margin: 0;
}
:root {
  --font-roboto: 'Roboto Mono', monospace;
  --font-palatino: 'Orbitron', sans-serif;
  --color-pink: rgb(242, 220, 228);
  --color-blue: rgb(1, 58, 76);
}

html {
  scroll-behavior: smooth;
}
body {
  scrollbar-width: none;
  /* Firefox */
  line-height: 30px;
  word-spacing: 5px;
  text-align: center;
  height: 100%;
  font-family: var(--font-roboto);
}

body::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.container {
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  /* width: 100%; */
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    max-width: 550px;
  }

}
/*  */
@media only screen and (min-width: 600px) {
  .container {
    max-width: 500px;
  }

  }
/*  */
@media only screen and (min-width: 992px) {
  .container {
    max-width: 700px;
  }
}
/*  */
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1000px;
  }
}
.bg-pink {
  background-color: var(--color-pink);
  color: var(--color-blue);
  background-size: 100%;
}

.breadcramb {
  display: flex;
  text-align: start;
}
.breadcramb svg {
  margin-right: 5px;
}
</style>
