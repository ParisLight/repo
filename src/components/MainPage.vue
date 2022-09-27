<template>
    <div class="app"
      :style="{'background-image': setBackground}"
    > 
    <Form
      @search="searchCity"
    />
    <temperature v-if="currentWeather.temperature"
      :currentWeather="currentWeather"
    />
    <temperature-list v-if="dailyWeather.length > 0"
      :dailyWeather="dailyWeather"
      :perPage="perPage"
      :page="page"
      :lastPage="lastPage"
    />
    </div>
  </template>
  
<script>
  
import Form from './Form.vue';
import Temperature from './Temperature.vue';
import TemperatureList from './TemperatureList.vue';
import MyButton from './UI/MyButton.vue';

export default {
  components: { Form, Temperature, TemperatureList, MyButton },

  data(){
    return {
      dailyDataJson: null,
      currentDataJson: [],

      dailyWeather: [],
      currentWeather: {
        temperature: "",
        weather: "",
        icon: "",
        dt: "",
      }, 

      page: 1,
      perPage: 8,
      lastPage: 0,
    };
  },  

  methods: {
    async searchCity(city){
      this.city = city;
      localStorage.setItem('city', city);
      await this.loadWeather();
    },
    async loadWeather(){
      try{
        const dailyData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=2dc37cfef04dbd89b251a3a892381b35&units=metric&lang=ru`);
        const currentData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=2dc37cfef04dbd89b251a3a892381b35&units=metric&lang=ru`)
        if(!dailyData.ok ){
          const message = 'Error with Status Code:' + dailyData.status;
          throw new Error(message)
        }
        if(!currentData.ok){
          const message = 'Error with status code: ' + currentData.status;
          throw new Error(message);
        }
        this.dailyDataJson = await dailyData.json();
        this.currentDataJson = await currentData.json();
        
        this.lastPage = this.dailyDataJson.list.length / this.perPage;
        console.log(currentData);
        this.initialWeatherData()
      }
      catch(e){
        console.log(e);
      }
    },

    getDate(){
      let d = new Date();
      let nowDate = d.getTime() + d.getTimezoneOffset() * 60000 + (1000 * this.currentDataJson.timezone);
      return new Date(nowDate);
    },

    initialWeatherData(){
      for(let i = 0; i < this.dailyDataJson.list.length; i++){
          this.dailyWeather.push({
              temperature: this.dailyDataJson.list[i].main.temp,
              weather: this.dailyDataJson.list[i].weather[0].main,
              icon: this.dailyDataJson.list[i].weather[0].icon,
              dt: this.dailyDataJson.list[i].dt_txt,
          })
      }
      this.currentWeather.temperature = this.currentDataJson.main.temp;
      this.currentWeather.weather = this.currentDataJson.weather[0].main;
      this.currentWeather.icon = this.currentDataJson.weather[0].icon;
      this.currentWeather.dt = `${this.getDate().getHours()}: ${this.getDate().getMinutes()}`
    },
  },

  computed: {
      
    setBackground(){
      if(this.getDate().getHours() > 6 && this.getDate().getHours()  < 18){
        return 'url(../public/day-pc.jpg)';
      }
      if(this.getDate().getHours() >= 18 && this.getDate().getHours()  < 22){
        
        return 'url(../public/evening-pc.jpg)'
      }
      else{
        
        return 'url(../public/night-pc.jpg)';
        
      }
    },
  },
}
</script>
  
<style>
    
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  .app{
      margin: 0 auto;
      color: #fff;
      min-height: 100vh;
      background: url(../public/night-pc.jpg) no-repeat;
      background-size: cover;
      text-align: center;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
     
      
    }
    .container{
      margin: 0 auto;
      padding: 0 60px;
      text-align: center;
    }
  </style>
