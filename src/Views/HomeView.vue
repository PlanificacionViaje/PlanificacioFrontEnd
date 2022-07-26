<script setup>
import Slider from "@/Components/Carousel/Carousel_Slider.vue";
import Home from "@/Components/Home.vue";
import Header from "@/Components/Header.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  {{ $userData }}
  <!-- <button @click="$userData.nombre = 'Jose'">asdf</button>
  <router-link to="/profile">Pro</router-link> -->
  <Slider />
  <Home />
</template>
