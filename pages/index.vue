<script setup>
useHead({
  title: "kB Portfolio"
})
</script>

<template>
  <div class="bg-blue padding-up padding-down">
    <div class="container" id="about">
      <div class="tracking">About me.</div>
      <span class="text">
        Hi. My name's Kate. I'm learning front-end. I work on pure CSS and Bootstrap and Tailwind frameworks. I
        have basic skills with javascript and frameworks Nuxt js and Vue js. I already have a small case of
        projects.
      </span>
    </div>
  </div>
  <div class="bg-white padding-up padding-down">
    <div class="container slider" id="skills">
      <div class="tracking">Skills.</div>
      <div class="flex-skill">
      <p>HTML5</p>
      <div class="container-skill">
        <div class="skills html">90%</div>
      </div>
    </div>
    <div class="flex-skill">
      <p>CSS3</p>
      <div class="container-skill">
        <div class="skills css">80%</div>
      </div>
    </div>
    <div class="flex-skill">

      <p>JavaScript</p>
      <div class="container-skill">
        <div class="skills js">65%</div>
      </div>
    </div>
    <div class="flex-skill">
      <p>Vue</p>
      <div class="container-skill">
        <div class="skills vue">60%</div>
      </div>
    </div>
    <div class="flex-skill">
      <p>GitHub</p>
      <div class="container-skill">
        <div class="skills html">90%</div>
      </div>
    </div>
    <div class="flex-skill">
      <p>Docker</p>
      <div class="container-skill">
        <div class="skills css">80%</div>
      </div>
    </div>
    <div class="flex-skill">

      <p>Figma</p>
      <div class="container-skill">
        <div class="skills js">65%</div>
      </div>
    </div>

  </div>
  </div>

  <div class="bg-pink padding-up padding-down">
    <div class="container" id="project">
      <div class="tracking">Project.</div>
      <div class="project">
        <div class="project-box">
          <div class="project-card">
            <img src="~/assets/images/projects/desktop-chat-css.png" alt="project-2">
            <!-- <div class="blocText">
                            <div class="project-text">
                              <h2>Desktop chat. Used CSS, JS</h2>
                              <p>skills</p>
                              <NuxtLink to="#">link github</NuxtLink>
                          </div>
                          </div> -->
          </div>
        </div>
        <div class="project-box">
          <!-- <p>Electronics store landing page. Practice course.  Used CSS</p> -->
          <NuxtLink to="#" target="_blank">
            <img src="~/assets/images/projects/market-shop-css.png" alt="project-3">
          </NuxtLink>
        </div>
        <div class="project-box">
          <!-- <p>Project HR services. Used during development: Tailwind, flowbite, docker</p> -->
          <NuxtLink target="_blank" to="#">
            <img src="~/assets/images/projects/hr-service-tailwind.png" alt="hr-project">
          </NuxtLink>
        </div>
        <div class="project-box">
          <!-- <p>Project booking service.Used Bootstrap.</p> -->
          <NuxtLink to="https://booking.emtza.ru/" target="_blank">
            <img src="~/assets/images/projects/booking-service-bootstrap.png" alt="booking-project">
          </NuxtLink>
        </div>
        <div class="project-box">
          <!-- <p>Project statistic information landing page. Used during development: CSS, JS</p> -->
          <NuxtLink target="_blank" to="#">
            <img src="~/assets/images/projects/statistic-landing-css.png" alt="stat-project">
          </NuxtLink>
        </div>
        <div class="project-box">
          <!-- <p>Project real estate service. Used during development: Tailwind, Nuxt 3, JS, API</p> -->
          <NuxtLink target="_blank" to="https://housedes.ru">
            <img src="~/assets/images/projects/agency-estate-korean-tailwind.png" alt="estate-project">
          </NuxtLink>
        </div>
        <div class="project-box">
          <!-- <p>First portfolio. Used Tailwind, Nuxt3, localed</p> -->
          <NuxtLink target="_blank" to="#">
            <img src="~/assets/images/projects/first-portfolio-nuxt3.png" alt="project-2">
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-blue padding-up padding-down">
    <div class="container" id="contact">
      <div class="tracking">Contact.</div>
      <div class="text">
        You can contact me in any convenient way
      </div>
      <div class="item">
        <NuxtLink to="#" title="telegramm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path
              d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
          </svg></NuxtLink>
        <NuxtLink to="#" title="github"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg></NuxtLink>
      </div>
      <NuxtLink to="mailto:katerbysh@gmail.com" class="btn-email">
        email me
      </NuxtLink>

    </div>
  </div>
</template>

<style>
.text.element-show {
  background: linear-gradient(#FFD063, #FFD063) left no-repeat, rgba(0, 0, 0, .3);
  background-size: 0% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: change 5s linear forwards;
}

@keyframes change {
  100% {
    background-size: 100% 100%
  }
}

.tracking.element-show {
  animation: tracking 2s cubic-bezier(.215, .61, .355, 1.000) both;
  font-size: 40px;
  padding-bottom: 5rem;
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
.flex-skill {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.flex-skill p {
  background-color: var(--color-blue);
  color: #ddd;
  line-height: 22px;
  border-radius: 5px 0 0 5px;
  padding-left: 10px;
}
.container-skill {
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  display: relative;
  text-align: start;
}

.skills {
  text-align: right;
  padding-right: 20px;
  line-height: 22px;
  color: white;
  background-color: var(--color-blue);
}

.html.element-show {
  width: 90%;
  animation: html5 2s ease-out;
}

.css.element-show  {
  width: 80%;
  animation: css3 2s ease-out;
}

.js.element-show  {
  width: 65%;
  animation: js 2s ease-out;
}

.vue.element-show  {
  width: 60%;
  animation: vue 2s ease-out;
}

@keyframes html5 {
  0% {
    width: 0px;
  }

  100% {
    width: 90%;
  }
}

@keyframes css3 {
  0% {
    width: 0px;
  }

  100% {
    width: 80%;
  }
}

@keyframes js {
  0% {
    width: 0px;
  }

  100% {
    width: 65%;
  }
}

@keyframes vue {
  0% {
    width: 0px;
  }

  100% {
    width: 60%;
  }
}
</style>