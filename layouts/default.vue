<script setup>
useHead({
  // script: [
  //   {
  //     body: true
  //   }
  // ],
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Orbitron&display=swap",
      rel: "stylesheet"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap",
      rel: "stylesheet"

    }
  ]

})
</script>

<template>

<div class="bg-pink padding-down">

  <nav class="container">
  <input type="checkbox" id="btn-menu" />
  <label for="btn-menu"></label>

  <ul class="list-menu">
    <li><NuxtLink to="#about">About</NuxtLink></li>
    <li><NuxtLink to="#project">Projects</NuxtLink></li>
    <li><NuxtLink to="#contact">Contact</NuxtLink></li>
  </ul>
</nav>
    <div class="hero">
      <h1>front-end developer</h1>

  </div>

  </div>
  <slot></slot>
  <div class="footer">
    <!-- <TheFooter /> -->
  </div>
</template>

<style>
* {
  margin: 0;
}
:root {
  --font-roboto: 'Roboto Mono', monospace;
  --font-palatino: 'Orbitron', sans-serif;
  --color-pink: #F2DCE4;
  --color-blue: #013A4C;
}

body {
  scrollbar-width: none;
  /* Firefox */
  line-height: 30px;
  letter-spacing: 3px;
  word-spacing: 10px;
  text-align: center;
  height: 100%;
  font-family: var(--font-roboto);
}

body::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

a {
  text-decoration: none;
  color: currentColor;
}

nav {
  font-family: var(--font-palatino);
  font-weight: 700;
  padding: 2rem;
}
.list-menu{
  display: flex;
  list-style: none;
}
.list-menu > li > a{
  color: var(--color-blue);
  display: block;
  padding: 5px 15px;
}
.list-menu > li > a:hover{
  color: #FFD063;
}

#btn-menu{
  display: none;
}
#btn-menu + label{
  display: none; 
  position: relative;
  height: 20px;
  z-index: 1;
  cursor: pointer;
}
#btn-menu + label:before{
  content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0zIDE4di0yaDE4djJabTAtNXYtMmgxOHYyWm0wLTVWNmgxOHYyWiIvPjwvc3ZnPg==');  
  display: inline-block;
  font-size: 22px;
}
#btn-menu:checked + label:before{
  content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik02LjQgMTlMNSAxNy42bDUuNi01LjZMNSA2LjRMNi40IDVsNS42IDUuNkwxNy42IDVMMTkgNi40TDEzLjQgMTJsNS42IDUuNmwtMS40IDEuNGwtNS42LTUuNloiLz48L3N2Zz4=');
  color: #FFD063;
}

h1 {
  position: absolute;
  top: 47%;
  font-family: var(--font-palatino);
  color: #FFD063;
}

.container {
  margin: 0 auto;
  /* width: 100%; */
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    max-width: 550px;
  }

  #btn-menu + label{
      display: inline-block;
   }
  #btn-menu + label + .list-menu{
    display: none;
  }
  #btn-menu:checked + label + .list-menu{
    display: block;
  }

  h1 {
    font-size: 24px;
    left: 8%;
  }

  .project img {
    width: 100%;
    filter: drop-shadow(16px 16px 20px #FFD063);
  }

  .text {
    padding: 50px 0;
    color: #FFD063;
    font-size: 22px;
    line-height: 30px;
  }

}

@media only screen and (min-width: 600px) {
  .container {
    max-width: 500px;
  }

  h1 {
    font-size: 30px;
  left: 25%;

  }

  .project img {
    width: 100%;
    filter: blur(5px);
  }

  .project img:hover {
    filter: drop-shadow(16px 16px 20px #FFD063);
  }

  .text {
    padding: 50px 0;
    color: #FFD063;
    font-size: 22px;
    line-height: 50px;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    max-width: 700px;
  }

  h1 {
    font-size: 50px;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1000px;
  }

  h1 {
    font-size: 66px;
  }

}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
}
.padding-up {
  padding-top: 8rem;
}
.padding-down {
  padding-bottom: 8rem;
}
.bg-pink {
  background-color: var(--color-pink);
  color: var(--color-blue);
  width: 100%;
}

.bg-blue {
  background-color: var(--color-blue);
  color: var(--color-pink);
  width: 100%;
}

.hero {
  background-image: url('https://img.freepik.com/free-photo/diverse-hands-touching-white-paper-mockup-pink-wallpaper_53876-96147.jpg?w=1060&t=st=1675783765~exp=1675784365~hmac=2c254c7fdd74415f1c4f6329ed7add60ca2d8af491f8700126f22f941f7e74d5');
  background-size: cover;
  height: 600px;
  background-position: center;
  position: relative;

}

.tracking {
  animation: tracking 2s cubic-bezier(.215, .61, .355, 1.000) both;
  font-size: 40px;
  padding: 20px 0;
}

@keyframes tracking {
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

.item {
  padding: 20px 0;
}

.item a {
  margin: 10px;
}

.item svg {
  width: 40px;
  fill: var(--color-pink);
  border-radius: 50%;
}

.item svg:hover {
  fill: var(--color-blue);
  background: var(--color-pink);
}

.btn-email {
  border: 1px solid var(--color-pink);
  padding: 10px 20px;
  border-radius: 10px;
}

.btn-email:hover {
  color: var(--color-blue);
  background-color: var(--color-pink);
}

.project p {
  padding: 30px 0;
}
/* .project {
  columns: 2;
} */
/* .project-box {
  display: flex;
  flex-direction: row-reverse;
} */
/* .project-box img {
  position: relative;
}
.project-box p {
  position: absolute;
  z-index: 100;
} */
.bg-about {
  background-image: url('/assets/images/pngegg.png');
  background-position: center;
  height: 300px;
}
</style>
