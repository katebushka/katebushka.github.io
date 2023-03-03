<script setup>
  useHead({
    link: [
            { rel: 'icon', href: '/favicon.ico' },
            {
              href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap', rel: 'stylesheet'
            },
            {
            href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap", rel: "stylesheet"
            }
          ],
  })
onMounted(function () {

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);

  function onSkill(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        let w = change.target.getAttribute('data-width-line')
        change.target.style.width = w
        console.log(w);
        change.target.animate(
          [
            { width: '0%' },
            { width: w }
          ],
          {
            // timing options
            duration: 2000,
            iterations: 1,
          }
        )
      }
    })
  };
  let options1 = { threshold: [0.5] };
  let observer1 = new IntersectionObserver(onSkill, options1);

  let elements = document.querySelectorAll('.tracking');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let text = document.querySelectorAll('.text');
  for (let txt of text) {
    observer.observe(txt);
  }

  let skills = document.querySelectorAll('.skills');
  for (let skill of skills) {
    observer1.observe(skill);
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
    <NavBar/>
    <div class="hero">
      <h1 class="hero-title">front-end developer</h1>

    </div>

  </div>
  <slot></slot>
  <div id="btn" class="arrow-up">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="#888888"
      d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z" />
  </svg>
</div>
</template>

<style>
@import '../assets/css/main.css';

</style>
