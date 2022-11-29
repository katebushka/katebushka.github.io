<template>
<nav class="container flex flex-wrap md:justify-center justify-between items-center mx-auto">
    <NuxtLink to="/" class="flex items-center">
      <img src="~/assets/images/logo.png" class="hover:scale-150 hover:duration-1000 mr-3 h-9 sm:h-14" alt="Logo">
    </NuxtLink>
    <button @click="showMenu" type="button" class="navbar-default inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
      <svg class="w-6 h-6 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>
    <div class="relative navbar-content hidden w-full md:z-0 md:block md:w-auto" id="navbar-default">
      <MenuNavbar />
    </div>
  </nav>
</template>

<script setup>
    const showMenu = () => {
    let menu = document.getElementById('navbar-default');
    if (menu.classList.contains('hidden')){
      menu.classList.remove('hidden');
    }
    else {
      menu.classList.add('hidden');
    }
  }
</script>
