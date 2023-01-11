<template>
	<div class="main-sector">
	<div class="box-gallery">
		<section class="gallery">

			<div class="frame">
				<div class="frame__content">
					<p class="tracking-in-contract-bck pb-16 md:text-4xl text-xl">Projects</p>
				</div>
			</div>

			<div class="frame"></div>

			<div class="frame">
				<ul class="text-left frame__content relative left-[18vw]">
					<p class="text-3xl md:text-5xl">Agency estate</p>
					<li>CSS: Tailwind</li>
					<li>JS: Nuxt 3</li>
					<li>Tools: API, GitHub, Figma </li>
					<li>Time: On development stage</li>
				</ul>
			</div>

			<div class="frame frame_bg">
				<div class="frame__content">
					<div class="frame-media frame-media_left bg-1"></div>
				</div>
			</div>

			<div class="frame"></div>

			<div class="frame">
				<ul class="text-right frame__content relative right-[18vw]">
					<p class="text-3xl md:text-5xl">Analytics site</p>
					<li>CSS: pure css</li>
					<li>JS: pure js</li>
					<li>Tools: GitHub, Figma </li>
					<li>Time: 4 hours</li>
				</ul>
			</div>

			<div class="frame frame_bg">
				<div class="frame__content">
					<div class="frame-media frame-media_right bg-2"></div>
				</div>
			</div>

			<div class="frame"></div>

			<div class="frame">
				<ul class="text-left frame__content relative left-[18vw]">
					<p class="text-3xl md:text-5xl">Booking sistem</p>
					<li>CSS: Bootstrap</li>
					<li>JS: Vue 3</li>
					<li>Tools: GitHub, Figma </li>
					<li>Time: 25 hours</li>
				</ul>
			</div>

			<div class="frame frame_bg">
				<div class="frame__content">
					<div class="frame-media frame-media_left bg-3"></div>
				</div>
			</div>

			<div class="frame"></div>

			<div class="frame">
				<ul class="text-right frame__content relative right-[18vw]">
					<p class="text-3xl md:text-5xl">Store landing</p>
					<li>CSS: pure css</li>
					<li>JS: pure js</li>
					<li>Tools: </li>
					<li>Time: 18 hours</li>
				</ul>
			</div>

			<div class="frame">
				<div class="frame__content">
					<div class="frame-media frame-media_right bg-4"></div>	
				</div>
			</div>

			<div class="frame"></div>


			<div class="frame">
				<ul class="text-left frame__content relative left-[18vw]">
					<p class="text-3xl md:text-5xl">HR service</p>
					<li>CSS: Tailwind</li>
					<li>JS: use framework for TW Flowbite</li>
					<li>Tools: Docker, GitHub, Figma </li>
					<li>Time: 20 hours</li>
				</ul>
			</div>

			<div class="frame frame_bg">
				<div class="frame__content">
					<div class="frame-media frame-media_left bg-5"></div>
				</div>
			</div>

			<div class="frame"></div>

			<!-- <div class="frame frame_bg">
				<div class="frame__content">
					<div class="frame-media bg-6"></div>
				</div>
			</div> -->

			<!-- <div class="frame"></div> -->

			<div class="frame" id="first-button">
					<div class="frame__content ">
						<img src="~/assets/images/logo.png" class="" alt="Logo">
					</div>
			</div>

		</section>
	</div>

	<NuxtLink to="/" class="opacity-0 top-[50%] right-[47%] fixed p-10">link</NuxtLink>
</div>
</template>

<script setup>
// definePageMeta({
// 	layout: 'firstpage'
// })
onMounted(function(){
    // 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

})
</script>

<style>

.bg-1 {
    background-image: url(/assets/images/agency.png)
}
.bg-2 {
    background-image: url(/assets/images/project-4.png)
}
.bg-3 {
    background-image: url(/assets/images/booking.png)
}
.bg-4 {
    background-image: url(/assets/images/project-3.png)
}
.bg-5 {
    background-image: url(/assets/images/hr-project.png)
}
.bg-6 {
    background-image: url(/assets/images/project-estate.png)
}
.bg-7 {
    background-image: url(/assets/images/project-chat.png)
}

div .main-sector  {
	--index: calc(1vw + 1vh);
	--gutter: 30px;
	--side-small: 26;
	--side-big: 36;
	--depth: 4000px;
	--transition: .75s cubic-bezier(.075, .5, 0, 1)
}

div .main-sector  {
	background-color: #000;
	color: #fff;
	font-size: calc(var(--index) * .8);
	font-family: raleway_c, sans-serif;
	line-height: 1.75;
	height: var(--depth);
	font-weight: 300;
}
.box-gallery {
	width: 100%;
	height: 100%;
	position: fixed;
	perspective: 1500px;
}
.gallery {
	transform-style: preserve-3d;
	height: 100%;
}
.frame {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: var(--transition), opacity .75s ease;
	will-change: transform;
	transform-style: preserve-3d;
}
.main-sector h2, h3, h4  {
	font-weight: 100;
	text-transform: uppercase;
	width: min-content;
	line-height: 1;
}
.frame h2 {
	text-align: center;
	font-size: calc(var(--index) * 3.3);
}
.frame-media {
	position: relative;
	width: calc(var(--index) * var(--side-small));
	height: calc(var(--index) * var(--side-big));
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
}
.frame-media_left {
	right: calc(var(--side-small) / 2 * var(--index) + var(--gutter));
}
.frame-media_right {
	left: calc(var(--side-small) / 2 * var(--index) + var(--gutter));
}
.frame_bg {
	background-color: rgb(0 0 0 / .87);
}
img.frame-media {
	width: calc(var(--index) * var(--side-big));
	height: calc(var(--index) * var(--side-small));
}
img.frame-media_right {
	left: calc(var(--side-big) / 2 * var(--index) + var(--gutter));
}
img.frame-media_left {
	right: calc(var(--side-big) / 2 * var(--index) + var(--gutter));
}

.frame h3 {
	font-size: calc(var(--index) * 3);
}
.frame p {
	max-width: 30vw;
	margin-top: 3vh;
}

</style>