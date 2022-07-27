<script setup>
import Header from "./Components/Header.vue";
import Home from "./Components/Home.vue";
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
import Carousel_Slider from "./Components/Carousel/Carousel_Slider.vue";
import Footer from "./Components/Footer.vue";
import TravelPage from "@/Components/TravelPage.vue";
import TripModal from "./Components/TripModal.vue";
import ItemTripModal from "./Components/ItemTripModal.vue";

import * as utils from "@/utils/utils.js";
</script>

<script>
export default {
  data() {
    return {
      userData: {},
      loginActive: true,
      displayLoginRegisterModal: false,

      //Modal Trip
      newEditTrip: true,
      displayNewEditTripModal: false,
      //Modal Item Trip
      newEditItemTrip: true,
      displayNewEditItemTripModal: false,

      //testing
      idUsuario: 1,
      dataTrip: {
        id: 1,
        nombre: "Tenerife",
        descripcion: "Por fin... Una semanita en las Canarias ;-;",
        fechainicio: "2022-08-12",
        fechafin: "2022-08-19",
        idusuarios: 1,
      },
      dataItemTrip: {
        id: 1,
        nombre: "Guigui",
        descripcion: "asdf",
        fecha: "2022-08-11",
        hora: "16:00:00",
        precio: 100,
        ubicacionlatitud: 0,
        ubicacionlongitud: -100,
        idviajes: 1,
      },
    };
  },
  methods: {
    loginCorrect(userData) {
      this.userData = userData;
    },
  },
  computed: {
    userDataHaveData() {
      return Object.keys(this.userData).length != 0;
    },
  },
  beforeMount() {
    const localData = utils.getLocalStorageSession("session");

    if (localData) {
      if ((new Date).getTime() <= localData.expires) {
        console.log("session is active");
        this.$session.userData = localData.data;
        console.log("userDataApp");
      } else {
        console.log("session expired");
        localStorage.removeItem("session");
      }
    } else {
      console.log("no session");
    }
  },
  beforeUnmount() {
    if (this.$session.userData) {
      utils.setLocalStorageSession("session", this.$session.userData, 30 * 1000)
    }
  }
};
</script>

<template>
  <main>
    <!-- <Header @loginCorrect="(userData) => loginCorrect(userData)" @registerCorrect="(userData) => loginCorrect(userData)"
      :userData="userData" /> -->
    <!-- <Home />
    <Profile :userData="userData" v-if="userDataHaveData" />
    <LoginAndRegisterModal :loginActive="loginActive" :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister" @closeLoginRegisterModal="closeLoginRegisterModal" />
    <TravelPage :UserInfo="userData" /> -->

    <!-- <AxiosPlayground /> -->
    <!-- <TripModal :newEditTrip="newEditTrip" :displayNewEditTripModal="displayNewEditTripModal" :idUsuario="idUsuario"
      :dataTrip="dataTrip" @closeTripModal="displayNewEditTripModal = false" />

    <button @click="(displayNewEditTripModal = true), (newEditTrip = true)">
      Display modal new trip
    </button>
    <button @click="(displayNewEditTripModal = true), (newEditTrip = false)">
      Display modal edit trip
    </button>

    <button @click="(displayNewEditItemTripModal = true), (newEditItemTrip = true)">
      Display modal new item trip
    </button>
    <button @click="(displayNewEditItemTripModal = true), (newEditItemTrip = false)">
      Display modal edit item trip
    </button>
    <ItemTripModal :newEditItemTrip="newEditItemTrip" :displayNewEditItemTripModal="displayNewEditItemTripModal"
      :idViajes="1" :dataTrip="dataTrip" :dataItemTrip="dataItemTrip"
      @closeTripModal="displayNewEditItemTripModal = false" />

    <TravelPage :UserInfo="userData" /> -->
    <router-view></router-view>
  </main>

  <Footer />
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: "Inter", sans-serif;

}

body {
  /* background: rgb(162, 210, 255); */
  padding-bottom: 130px;

  background: linear-gradient(184deg, rgba(104, 131, 186, 1) 3%, rgba(162, 210, 255, 1) 35%, rgba(255, 255, 255, 1) 100%);
  /* background: linear-gradient(180deg, rgba(162, 210, 255, 1) 35%, rgba(255, 255, 255, 1) 100%); */
}

router-link {
  text-decoration: none;
}

router-link:visited {
  color: inherit;
}
</style>
