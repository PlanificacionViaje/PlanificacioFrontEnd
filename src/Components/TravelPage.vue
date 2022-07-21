<script setup>
import TarjetaViajePerfil from "./TarjetaViajePerfil.vue";
import * as crud from "@/axios/axiosFunctions.js";
</script>
<script>
export default {
  data() {
    return {
      arrayTravels: [],
    };
  },
  props: {
    UserInfo: Object,
  },
  created() {
    crud
      .getAllViajesFromUsuario(this.UserInfo.id)
      .then((response) => (this.arrayTravels = response.data.data))
      .catch((error) => crud.handleError(error));
  },
};
</script>
<template>
  <div>
    <h2>Mis viajes</h2>
    <TarjetaViajePerfil
      v-for="travel in arrayTravels"
      :key="travel.id"
      :viajeData="travel"
    />
  </div>
</template>
<style scooped>
</style>