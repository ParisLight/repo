<template>
	<div class="arrow__wrapper">
			<div class="arrow">
			<div class="arrow-top"></div>
			<div class="arrow-bottom"></div>
		</div>
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
	height: 11px;
	left: -10px;
	position: absolute;
	top: 60px;
	width: 40px;
}
.arrow-top {
	top: 64px;
}
.arrow-top {
	transform: rotate(-45deg);
	transform-origin: bottom left;
}
.arrow-bottom {
	transform: rotate(45deg);
	transform-origin: top left;
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
	right: 100%;
	left: 0;
	transition-delay: 0s;
}
.arrow-bottom::after {
	right: 0;
	left: 100%;
	transition-delay: 0.15s;
}
.arrow:hover .arrow-top::after {
	right: 0;
	transition-delay: 0.15s;
}
.arrow:hover .arrow-bottom::after {
	left: 0;
	transition-delay: 0s;
}


@media (max-width: 1250px) {
	.arrow-top,
	.arrow-bottom {
		width: 25px;
	}
}
</style>