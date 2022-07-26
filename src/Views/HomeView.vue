<script setup>
import Slider from "@/Components/Carousel/Carousel_Slider.vue";
</script>
<script>
export default {};
</script>
<template>
  {{ $userData }}
  <!-- <button @click="$userData.nombre = 'Jose'">asdf</button>
  <router-link to="/profile">Pro</router-link> -->
  <Slider />
</template>
