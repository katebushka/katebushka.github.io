<script setup>
onMounted(function () {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector(".hero-title").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)].toLowerCase()
        })
        .join("");
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }

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

});
</script>

<template>
  <div>
    <Title>kB Portfolio</Title>
    <div class="block">
      <h1 class="hero-title" data-value="frontend_developer">frontend_developer</h1>
      <div>
        <div class="container padding-up padding-down" id="about">
          <!-- <h2 class="tracking">Hello!</h2> -->
          <span class="text">
            My name's Kate. I'm learning front-end. I work on pure CSS and Bootstrap and Tailwind frameworks. I
            have basic skills with javascript and frameworks Nuxt js and Vue js. I already have a small case of
            projects.
          </span>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="circles" id="no1"> </div>
      <div class="circles" id="no2"> </div>
      <div class="circles" id="no3"> </div>
    </div>
    <div class="cont2">
      <div class="circles" id="no1"> </div>
      <div class="circles" id="no2"> </div>
      <div class="circles" id="no3"> </div>
    </div>
  </div>
</template>

<style>
/* @import '../assets/css/main.css'; */

@media only screen and (min-width: 1200px) {

  .cont {
    position: absolute;
    left: 0%;
    top: 32%;
  }

  .cont2 {
    position: absolute;
    right: 22%;
    top: 65%;
  }
.dark-mode .circles{
  background: url("/images/gear2.svg");
  height: 120px;
    width: 120px;
    background-size: cover;
    position: absolute;
    left: 7px;
    top: 27px;
    overflow: hidden;

}
.light-mode .circles{
  background: url("/images/gear.svg");
  height: 120px;
    width: 120px;
    background-size: cover;
    position: absolute;
    left: 7px;
    top: 27px;
    overflow: hidden;

}

  #no1 {
    left: 154px;
    top: -50px;
    animation-name: crcA1;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #no2 {
    left: 45px;
    top: -25px;
    animation-name: crcA2;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #no3 {
    left: 63px;
    top: 86px;
    animation-name: crcA1;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }


  @keyframes crcA1 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes crcA2 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
}</style>