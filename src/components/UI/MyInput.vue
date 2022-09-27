<template>
	<input class="myInput" :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String]
	},
	methods: {
		updateInput(event){
			this.$emit('update:modelValue', event.target.value);
		}
	}
}
</script>

<style scoped>
.myInput{
		border: none;
		background: rgba(0, 0, 0, 0.5);
		outline: none;
		padding: 10px 15px;
		color: #fff;
		font-size: 20px;
	}

	.myInput::placeholder{
		color: #fff;
	}

	.myInput:focus{
		-webkit-box-shadow: 1px 0px 39px 7px rgba(34, 60, 80, 0.8);
		-moz-box-shadow: 1px 0px 39px 7px rgba(34, 60, 80, 0.8);
		box-shadow: 1px 0px 39px 7px rgba(34, 60, 80, 0.8);	
	}


		@media (max-width: 820px) {
			.myInput {
				font-size: 15px;
			}
		}
</style>