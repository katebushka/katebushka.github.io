<script setup>
  useHead({
    title: "kB Home"
  })
</script>

<template>
    <div>
  <section class="md:space-x-16 space-x-1 py-10 flex justify-center">
    <div class="md:p-5 p-2">
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 roll-in-right ">
                    <img class="md:w-24 w-14" src="~/assets/svg/html5.svg" alt="html">
                    <p class="font-bold whitespace-nowrap">HTML</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-14 roll-in-right ">
                    <img src="~/assets/svg/css.svg" alt="css">
                    <p class="font-bold whitespace-nowrap">CSS</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-14 roll-in-right ">
                    <img src="~/assets/svg/js.svg" alt="js">
                    <p class="font-bold whitespace-nowrap">JS</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="w-96 jello-vertical -z-10">
        <img src="~/assets/images/image-main.jpg" alt="gate">
    </div>

    <div class="md:p-5 p-2 space-y-3 md:space-y-6">
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center mb-5 gap-4 md:w-24 w-14 roll-in-left ">
                    <img src="~/assets/svg/bs.svg" alt="bs">
                    <p class="font-bold whitespace-nowrap">Bootstrap</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-14 roll-in-left">
                    <img src="~/assets/svg/tailwindcss.svg" alt="tw">
                    <p class="font-bold whitespace-nowrap">Tailwind</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-14 roll-in-left ">
                    <img src="~/assets/svg/vue.svg" alt="vue">
                    <p class="font-bold whitespace-nowrap">Vue</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</div>
</template>
