<template>
    <div class="md:p-5 p-2 z-10">
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-16 roll-in-right ">
                    <img src="~/assets/svg/html5.svg" alt="html">
                    <p class="font-bold whitespace-nowrap">HTML</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-16 roll-in-right ">
                    <img src="~/assets/svg/css.svg" alt="css">
                    <p class="font-bold whitespace-nowrap">CSS</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-16 roll-in-right ">
                    <img src="~/assets/svg/js.svg" alt="js">
                    <p class="font-bold whitespace-nowrap">JS</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
.roll-in-right {
    animation: roll-in-right 2s ease-out 2s both
}

@keyframes roll-in-right {
    0% {
        transform: translateX(800px) rotate(540deg);
        opacity: 0
    }

    100% {
        transform: translateX(0) rotate(0deg);
        opacity: 1
    }
}
</style>