<script setup>
</script>

<template>
  <div class="viajes-imagen">
    <div class="box-viajes">
      <router-link :to="$session.userData ? '/trips' : ''">
        <img class="shadow-box" src="fotosPruebaSlider/example_2.png" alt="" />
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
  box-shadow: 5px 7px 2px #000000;
  width: -webkit-fill-available;
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
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>