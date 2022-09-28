<template>
	<div class="container">
		<form class="form" @submit.prevent>
			<my-input autofocus 
				class="form-input" 
				placeholder="Название города..." 
				v-model="city"
				@enter="$emit('search', city)" />
			<my-button 
				class="form-button"
				@click="$emit('search', city)"
			>
				Прогноз
			</my-button>
		</form>
	</div>
	
</template>

<script>
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'
export default {
  components: { MyInput, MyButton },
  
	data(){
		return {
			city: '',
		}
	},

	mounted(){
		this.city = localStorage.getItem('city')
	}
}
</script>

<style scoped>
.form{
		margin-top: 50px;
	}

		@media (max-width: 820px) {
			.form{
				margin-top: 0;
			}
		}
</style>