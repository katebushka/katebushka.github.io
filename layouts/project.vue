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

<style setup>
.breadcramb {
  display: flex;
  text-align: start;
}
.breadcramb svg {
  margin-right: 5px;
}
</style>
