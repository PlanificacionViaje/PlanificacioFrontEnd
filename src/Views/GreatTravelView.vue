<script setup>
import Header from "@/Components/Header.vue";
import Slider from "@/Components/Carousel/Carousel_Slider.vue";
import TravelComponent from "@/Components/TravelComponent.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  <TravelComponent :idTrip="$route.params.id" />
</template>
