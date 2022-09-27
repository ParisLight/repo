<template>
	<div class="arrow">
		<div class="arrow-top"></div>
		<div class="arrow-bottom"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.arrow {
	cursor: pointer;
	height: 120px;
	width: 80px;
	position: relative;
	margin: 20px;
}
.arrow-top, 
.arrow-bottom {
	background: rgb(255, 255, 255);
	height: 10px;
	left: 20px;
	position: absolute;
	top: 60px;
	width: 40px;
}
.arrow-top {
	top: 64px;
}
.arrow-top {
	transform: rotate(45deg);
	transform-origin: bottom right;
}
.arrow-bottom {
	transform: rotate(-45deg);
	transform-origin: top right;
}
.arrow-top::after, 
.arrow-bottom::after {
	background: rgba(0, 0, 0, 0.5);
	content: '';
	height: 100%;
	position: absolute;
	top: 0;
	transition: all 0.15s;
}
.arrow-top::after {
	left: 100%;
	right: 0;
	transition-delay: 0s;
}
.arrow-bottom::after {
	left: 0;
	right: 100%;
	transition-delay: 0.15s;
}
.arrow:hover .arrow-top::after {
	left: 0;
	transition-delay: 0.15s;
}
.arrow:hover .arrow-bottom::after {
	right: 0;
	transition-delay: 0s;
}

@media (max-width: 1250px) {
	.arrow-top,
		.arrow-bottom{
			width: 25px;
		}
}

</style>