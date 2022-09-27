<template >
	<div class="temperature__wrapper" v-if="dailyWeather.length > 0">
		<div class="container">
			<div class="cards" >
				<temperature v-for="weather in paginate(dailyWeather) " 
					:key="weather.dt" 
					:weather="weather"
				/>
				<left-arrow 
					v-if="page > 1"
					@click="page=page - 1" 
					class="left__arr"
				/>
				<right-arrow 
					v-if="page < lastPage"
					@click="page=page + 1"
					class="right__arr"
				/>				
			</div>
		</div>
	</div>
</template>

<script>
import Temperature from './Temperature.vue'
import MyButton from './UI/MyButton.vue';
import RightArrow from './UI/RightArrow.vue';
import LeftArrow from './UI/LeftArrow.vue';
export default {
  components: { Temperature, MyButton, RightArrow, LeftArrow },
	props: {
		dailyWeather: {
			type: Array,
			required: true,
		},

		page: {
			type: Number,
			required: false,
		},

		perPage: {
			type: Number,
			required: false,
		},

		lastPage: {
			type: Number, 
			required: false,
		},
		
	},
	data(){
		return {
			
		}
	},

	methods: {
		paginate(array){
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return array.slice(from, to);
		}
	}
}
</script>

<style scoped>
.temperature__wrapper{
		background: rgba(0, 0, 0, 0.5);
		margin-top: auto;
	}
	.cards{
		text-align: center;	
		align-items: center;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		position: relative;
		gap: 20px;
	}

	.left__arr{
		position: absolute;
		left: -50px;
	}
	.right__arr{
		position: absolute;
		right: -80px;
	}

	@media (max-width: 1170px) {
		.cards{
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 1020px) {
		.cards{
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 820px) {
		.cards{
			grid-template-columns: repeat(2, 1fr);
		}
	}

		
</style>