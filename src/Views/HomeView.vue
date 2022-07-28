<script setup>
import Slider from "@/Components/Carousel/Carousel_Slider.vue";
import Home from "@/Components/Home.vue";
import Header from "@/Components/Header.vue";
</script>
<script>
export default {}
</script>
<template>
  <Header />
  <div class="home-title">
    <h1 class="title"> Bienvenid@ a Freeway</h1>
    <h2 class="slogan">Programa tus viajes en tan sólo un click</h2>
  </div>
  <div id="asdf">
    <Slider v-if="$session.userData" />
    <Home />
  </div>
</template>
<style scoped>
.home-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 350px;
  justify-content: center;
}

.title,
.slogan {
  text-align: center;
  color: white;
  text-transform: uppercase;
  margin: 0
}

#asdf {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#asdf>* {
  width: 50%;
}

.title {
  font-size: 55px;
  letter-spacing: 1rem;
  font-weight: 300;

}

.slogan {
  font-weight: 200;
  margin-top: 0;
}
</style>
