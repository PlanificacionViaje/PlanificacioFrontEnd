<script setup>
</script>

<template>
  <div class="home">
    <div class="container-slider">
      <h1 class="titulo-home">Bienvenidos a Free Way!</h1>
      <!--Aqui va el Slider-->
    </div>
    <div class="box-viajes">
      <router-link to="/trips"
        ><img class="shadow-box" src="public/img/example_2.png" alt=""
      /></router-link>
      <p class="text-box">Viajes</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.titulo-home {
  display: flex;
  justify-content: center;
}

.box-viajes {
  display: flex;
  justify-content: center;
}
.shadow-box {
  position: relative;
  box-shadow: 5px 7px 2px #000000;
  border-radius: 22px;
}

.shadow-box:hover {
  filter: brightness(0.38) contrast(1.04);
  animation-duration: 0.3s;
  cursor: pointer;
}

.shadow-box:active {
  box-shadow: 0px 0px;
}

.text-box {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  position: absolute;
  margin: 180px;
  display: flex;
  justify-content: center;
  color: white;
}
</style>