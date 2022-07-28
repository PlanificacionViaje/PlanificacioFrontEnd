<script setup>
</script>

<template>
  <div class="viajes-imagen">
    <div class="box-viajes">
      <router-link :to="$session.userData ? '/trips' : ''">
        <img class="shadow-box" src="fotosPruebaSlider/my_trips_home.png" alt="" />
      </router-link>
      <p class="text-box">Viajes</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.viajes-imagen {
  max-width: 100vw;
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.box-viajes {
  position: relative;
  width: fit-content;
  max-width: 100%;
  height: fit-content;
}

.shadow-box {
  position: relative;
  width: -webkit-fill-available;
  transition: filter 0.1s ease-in-out;
}

.shadow-box:hover {
  filter: brightness(0.38) contrast(1.04);
  cursor: pointer;
}

.shadow-box:active {
  box-shadow: 0px 0px;
}

.text-box {
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  position: absolute;
  color: white;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
}
</style>