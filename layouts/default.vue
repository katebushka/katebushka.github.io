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
    <div class="bg-pink">
    <div class="container navbar">
            <div class="logo">
                MY PROFILE
            </div>
            <button href="" type="button" id="btn" class="btn-burger" aria-expanded="false">
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="mobile-menu" id="navbar-default">
                <div class="menu">
                    <NuxtLink to="#about">About</NuxtLink>
                    <NuxtLink to="#project">Projects</NuxtLink>
                    <NuxtLink to="#contact">Contact</NuxtLink>
                </div>
            </div>
        </div>
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

h1 {
  position: absolute;
  top: 50%;
  left: 25%;
  font-family: var(--font-palatino);
  color: #FFD063;
}

.container {
  margin: 0 auto;

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    padding: 0 10px;
  }

  h1 {
    font-size: 20px;
  }

  .btn-burger {
    background: var(--color-pink);
    border: none;
    display: inline-flex;
  }

  .btn-burger svg {
    width: 24px;
    fill: var(--color-blue);
  }

  .mobile-menu {
    position: relative;
    display: none;
    width: 100%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 12px;
    background-color: var(--color-pink);
  }
  .menu a {
  margin-right: 0;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .container {
    width: 500px;
  }

  h1 {
    font-size: 30px;
  }

  .btn-burger {
    display: none;
  }

  .mobile-menu {
    display: block;
    width: auto;
  }

  .menu {
    font-size: 16px;
    position: relative;
  }
  .menu a {
  margin-right: 0.5rem;
}

}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {...} */
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .container {
    width: 700px;
  }

  h1 {
    font-size: 50px;
  }

  .menu {
    font-size: 20px;
  }
  .menu a {
  margin-right: 1rem;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .container {
    width: 1000px;
  }

  h1 {
    font-size: 66px;
  }
  .menu a {
  margin-right: 3rem;
}
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
}

.navbar {
  font-family: var(--font-palatino);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-top: -6rem;
}

.bg-pink {
  background-color: var(--color-pink);
  color: var(--color-blue);
  padding: 8rem 0;
  width: 100%;

}

.bg-blue {
  background-color: var(--color-blue);
  color: var(--color-pink);
  padding: 8rem 0;
  width: 100%;

}
.menu a:hover {
  color: #FFD063;
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

.text {
  padding: 50px 0;
  color: #FFD063;
  font-size: 22px;
  line-height: 50px;

}

.project img {
  width: 100%;
  filter: blur(10px);
}
.project img:hover {
  filter: drop-shadow(16px 16px 20px #FFD063);
}
.project p {
  padding: 30px 0;
}

.bg-about {
  background-image: url('/assets/images/pngegg.png');
  background-position: center;
  height: 300px;
}

</style>
