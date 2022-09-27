<template>
	<button class="myButton">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style scoped>
.myButton{
		color: #fff;
		border: none;
		background: rgba(0, 0, 0, 0.5);
		padding: 10px;
		font-size: 20px;
	}


		@media (max-width: 820px) {
			.myButton {
				font-size: 15px;
			}
		}
</style>