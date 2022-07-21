<script setup>
import Header from './Components/Header/header.vue';
import Profile from './Components/Profile.vue';
</script>

<script>


import TravelComponent from './components/TravelComponent.vue';

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
  <header>
    <div class="">
     <Header></Header>
    </div>
  </header>
  <div class="">
      <div class="">
      </div>
    </div>

    <div class="" id="questions-list">
      <TravelComponent :traveldata = "traveldata"/>
    </div>
  

  
</template>

<style>
@import './assets/main.css';
</style>
