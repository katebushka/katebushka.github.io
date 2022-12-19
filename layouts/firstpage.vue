<template>
<slot></slot>
</template>
<style>
/* Скрываем Scrollbar */
body {
	scrollbar-width: none; /* Firefox */
}
body::-webkit-scrollbar { 
	display: none; /* Safari and Chrome */
}
</style>