<template>
			<div class="temperature" >
				<div v-if="currentWeather" class="weather-now weatherData">
					<div class="temperature">
						{{ Math.ceil(currentWeather.temperature) + "°"	}}
					</div>
					<div class="weather">
						{{ currentWeather.weather }}
					</div>
					<img :src="`http://openweathermap.org/img/wn/${this.currentWeather.icon}@2x.png`" alt="">
					<div>
						{{ currentWeather.dt }}
					</div>
				</div>
				<div v-if="weather" class="weatherData">
					<div class="temperature">
						{{Math.ceil(weather.temperature) + "°" }}
					</div>
					<div class="weather">
						{{ weather.weather }}
					</div>
					<img :src="`http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`" alt="">
					<div class="datetime">
						{{ weather.dt }}
					</div>
				</div>
			</div>
			
</template>

<script>
export default {
	props: {
		
		weather: {
			type: Object,
			require: false
		},
		currentWeather: {
			type: Object,
			require: false,
		},
	},
	data(){
		return {

		}
	},
	
	
}
</script>

<style scoped>
	
	.temperature{
		display: block;
		
	}

	.weather-now{
		margin-top: 30px;
		
	}

	.weatherData{
		font-size: 30px;
		padding: 15px 0;
	}

	.weather-icon{
		width: 150px;
	}

	.datetime{
		font-size: 18px;
	}
	

	@media (max-width: 1250px) {
		.weatherData{
			font-size: 20px;
		}
	}

	
</style>