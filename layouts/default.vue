<script setup>
useHead({
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
onMounted(function(){

  function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.tracking'); 
for (let elm of elements) {
  observer.observe(elm);
}

let text = document.querySelectorAll('.text');
for (let txt of text) {
  observer.observe(txt);
}

let getCss = document.querySelectorAll('.css');
for (let css of getCss) {
  observer.observe(css);
}
let getHtml = document.querySelectorAll('.html');
for (let html of getHtml) {
  observer.observe(html);
}
let getJs = document.querySelectorAll('.js');
for (let js of getJs) {
  observer.observe(js);
}
let getVue = document.querySelectorAll('.vue');
for (let vue of getVue) {
  observer.observe(vue);
}


const myButton = document.getElementById("btn");

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

});

</script>

<template>

<div class="bg-pink padding-down">

  <nav class="container menu">
  <div class="logo">Kate Bush</div>

  <input type="checkbox" id="btn-menu" />
  <label for="btn-menu"></label>
  <ul class="list-menu">
    <li><NuxtLink to="#about">About</NuxtLink></li>
    <li><NuxtLink to="#skills">Skills</NuxtLink></li>
    <li><NuxtLink to="#project">Projects</NuxtLink></li>
    <li><NuxtLink to="#contact">Contact</NuxtLink></li>
  </ul>
</nav>
    <div class="hero">
      <h1 class="hero-title">front-end developer</h1>

  </div>

  </div>
  <slot></slot>
  <div id="btn" class="arrow-up">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z"/></svg>
  </div>
  <div class="footer">
    <!-- <TheFooter /> -->
  </div>
</template>

<style>
.arrow-up, #btn{
  font-size: 30px;
  position: fixed;
  bottom: 30px;
  right: 30px;  
  display: none;
}

/* .arrow-up:hover {
  color:#FFD063;
  cursor: pointer;
} */
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

.logo {
  font-size: 26px;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-menu{
  display: flex;
  list-style: none;
}
.list-menu > li > a{
  color: var(--color-blue);
  display: block;
  padding: 5px 15px;
  text-align: right;
}
.list-menu > li > a:hover{
  color: #FFD063;
  transition: 500ms;
  text-shadow: 1px 1px 2px var(--color-blue);
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

.hero-title {
  text-align: center;
  font-family: var(--font-palatino);
  color: #FFD063;
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
    font-size: 1em;
  line-height: 1em;
  }
  .project {
  columns: 1;
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

  .project {
  columns: 2;
}
  .project img {
    width: 100%;
    filter: drop-shadow(16px 16px 20px #FFD063);
  }

  .project img:hover {
    filter: blur(5px);
  }

  .text {
    font-size: 1.5em;
  line-height: 1.5em;
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
  background-position: center;
  padding: 20rem 0;
}
/* .element-animation {
  opacity: 0;
  transform: translateY(100%);
}
.element-animation.element-show {
  opacity: 1;
  transition: all 1s;
  transform: translateY(0%);
}
.element-animation.element-show {
  opacity: 1;
  transition: opacity 1s;
} */
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

.project {
  position: relative;;
}

.project-box img {
  max-width: 500px;
}

</style>
