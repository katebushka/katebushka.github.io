<template>
  <div>
  <Navbar />

  <slot></slot>
  </div>

</template>

<style>
:root {
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;

  color: rgba(255, 255, 255, 0.87);
  background-color: #000000;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}
</style>

<script setup>

</script>