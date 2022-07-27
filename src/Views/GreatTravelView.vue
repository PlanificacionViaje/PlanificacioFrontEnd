<script setup>
import Header from "@/Components/Header.vue";
import Slider from "@/Components/Carousel/Carousel_Slider.vue";
import GreatTravel from "@/Components/GreatTravel.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  <Slider />
  <GreatTravel :id="$route.params.id" />
</template>
