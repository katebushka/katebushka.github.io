<template>
    <div class="md:p-5 p-2 space-y-3 md:space-y-6">
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center mb-5 gap-4 md:w-24 w-16 roll-in-left ">
                    <img src="~/assets/svg/bs.svg" alt="bs">
                    <p class="font-bold whitespace-nowrap">Bootstrap</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-16 roll-in-left">
                    <img src="~/assets/svg/tailwindcss.svg" alt="tw">
                    <p class="font-bold whitespace-nowrap">Tailwind</p>
                </div>
            </div>
        </div>
        <div class="left-border-one transition ease-in-out delay-100 flex left-border-two">
            <div class="transition ease-in-out hover:rotate-6">
                <div class="flex flex-col items-center gap-4 md:w-24 w-16 roll-in-left ">
                    <img src="~/assets/svg/vue.svg" alt="vue">
                    <p class="font-bold whitespace-nowrap">Vue</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

.roll-in-left {
    animation: roll-in-left 2s ease-out both
}

@keyframes roll-in-left {
    0% {
        transform: translateX(-800px) rotate(-540deg);
        opacity: 0
    }

    100% {
        transform: translateX(0) rotate(0deg);
        opacity: 1
    }
}
</style>