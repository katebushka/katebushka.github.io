<script setup>
  const showMenu = ref(true)
</script>

<template>
  <nav>
    <div class="container navbar">
      <NuxtLink class="logo" to="/">Kate Bush</NuxtLink>
      <button class="btn-menu"  @click="showMenu = !showMenu" :class="showMenu? 'hide' : 'show'" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <path fill="currentColor" fill-rule="evenodd"
            d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <div class="menu-mobile" v-if="!showMenu">
        <ul class="menu-mobile-list" >
          <li>
            <NuxtLink to="#about" @click="showMenu = !showMenu">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#skills" @click="showMenu = !showMenu">Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#project" @click="showMenu = !showMenu">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#contact" @click="showMenu = !showMenu">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="menu">
        <ul class="menu-list" >
          <li>
            <NuxtLink to="#about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#skills">Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#project">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
  .container {
    max-width: 768px;
  }

  .menu-mobile{
    margin-top: 20px;
    letter-spacing: 5px;
    width: 100%;
  }
  .menu-mobile.hide{
  display: none;
}
.menu-mobile.show{
  display: block;
}
.menu{
  display: none;
}
.btn-menu svg{
  fill: var(--color-blue);
}
.btn-menu{
  background-color: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  margin-left: 5px;
}
.btn-menu:hover {
  background: #FFD063;
  border-radius: 10px;
}
.menu-mobile-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
  list-style: none;
  margin: 0 auto;
}
.menu-mobile-list > li > a{
  display: block;
  padding: 10px 5px;
}

}
@media only screen and (min-width: 769px) {
  .container {
    max-width: 1000px;
  }
.btn-menu{
  display: none;
}
.menu-list{
  display: flex;
  flex-direction: row;
  list-style: none;
}
.menu-list > li > a{
  letter-spacing: 5px;
  margin-right: 2rem;
}
.menu-mobile{
  display: none;
}
}
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
}
.logo {
  font-size: 26px;
}
.menu-list  > li > a:hover, .menu-mobile-list > li > a:hover{
  color: #FFD063;
  transition: 500ms;
  text-shadow: 1px 1px 2px var(--color-blue);
}
.menu-list  > li > a, .menu-mobile-list > li > a{
  color: var(--color-blue);
  display: block;
}
</style>
