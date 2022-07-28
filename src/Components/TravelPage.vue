<script setup>
import TarjetaViajePerfil from "./TarjetaViajePerfil.vue";
import * as crud from "@/utils/axiosFunctions.js";
import TripModal from "@/Components/TripModal.vue";
</script>
<script>
export default {
  data() {
    return {
      arrayTravels: [],
      displayNewEditTripModal: false,
    };
  },
  mounted() {
    this.loadTravels();
  },
  methods: {
    loadTravels() {
      crud
        .getAllViajesFromUsuario(this.$session.userData.id)
        .then((response) => (this.arrayTravels = response.data.data))
        .catch((error) => crud.handleError(error));
    },
  },
  computed: {
    userData() {
      return this.$session.userData;
    }
  }
};
</script>
<template>
  <div>
    <div class="header-travels">
      <h2>Mis viajes</h2>
      <button class="button-add" @click="displayNewEditTripModal = true">
        <p>Añadir un viaje</p>
        <img class="img-button" src="plus.png" alt="" />
      </button>
      <TripModal :newEditTrip=true :displayNewEditTripModal="displayNewEditTripModal" :idUsuario="userData.id"
        :dataTrip="dataTrip" @closeTripModal="displayNewEditTripModal = false" />
    </div>
    <div class="cards">
      <router-link v-for="travel in arrayTravels" :key="travel.id" :to="`/trip/${travel.id}`">
        <TarjetaViajePerfil :viajeData="travel" />
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.header-travels {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-add {
  background-color: #6e61fe9c;
  border: none;
  width: 30vw;
  min-width: 350px;
  min-height: 60px;
  height: 5vh;
  box-shadow: rgb(255, 255, 255) 5px 5px, rgba(2255, 255, 255, 0.3) 10px 10px,
    rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px,
    rgba(255, 255, 255, 0.05) 25px 25px;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.button-add:hover {
  cursor: pointer;
}

.img-button {
  height: 25px;
  filter: invert();
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

h2 {
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 45px;
  color: white;
}

p {
  text-transform: uppercase;
  color: white;
}

a {
  text-decoration: none;
}
</style>