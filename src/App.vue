<script setup>
import Header from './Components/Header/header.vue';
import Profile from './Components/Profile.vue';
import TravelComponent from './components/TravelComponent.vue';
import Travel from './Components/travel/Travels.vue';

</script>

<script>
export default {
  components: {
    TravelComponent
  },
  data() {
    return {
      //base cartas
      traveldata:{id:1,nombre:"Tenerife",descripcion:"Por fin... Una semanita en las Canarias ;-;",fechainicio:"2022-08-12",fechafin:"2022-08-19","idusuarios":1}
    
  }},

}
</script>

<template>
 <main>
      <TravelComponent :traveldata = "traveldata"/>

      

  
 </main>
</template>

<style>
@import './assets/main.css';
</style>
