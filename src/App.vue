<script setup>
import Header from "./Components/Header.vue";
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
import TripModal from "./Components/TripModal.vue";
import ItemTripModal from "./Components/ItemTripModal.vue";
</script>

<script>
export default {
  data() {
    return {
      loginActive: true,
      displayLoginRegisterModal: false,

      //Modal Trip
      newEditTrip:true,
      displayNewEditTripModal:false,
      //Modal Item Trip
      newEditItemTrip:true,
      displayNewEditItemTripModal:false,

      //testing
      idUsuario:1,
      dataTrip:{
          id:1,
          nombre:"Tenerife",
          descripcion:"Por fin... Una semanita en las Canarias ;-;",
          fechainicio:"2022-08-12",
          fechafin:"2022-08-19",
          idusuarios:1,
      },
      dataItemTrip:{
        id:1,
        nombre:"Guigui",
        descripcion:"asdf",
        fecha:"2022-08-11",
        hora:"16:00:00",
        precio:100,
        ubicacionlatitud:0,
        ubicacionlongitud:-100,
        idviajes:1
      }
    };
  },
  methods: {
    swapLoginRegister() {
      this.loginActive = !this.loginActive;
    },
    closeLoginRegisterModal() {
      this.displayLoginRegisterModal = !this.displayLoginRegisterModal;
      this.loginActive = true;
    },
  },
};
</script>

<template>
  <header>
    <div class=""></div>
  </header>
  <main>
    <Header />
    <Profile />
    <!-- <AxiosPlayground /> -->
    <LoginAndRegisterModal
      :loginActive="loginActive"
      :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister"
      @closeLoginRegisterModal="closeLoginRegisterModal"
    />
    <button
      id="loginregister"
      @click="displayLoginRegisterModal = !displayLoginRegisterModal"
    >      asdfasdf
    </button>
    <TripModal 
    :newEditTrip="newEditTrip" 
    :displayNewEditTripModal="displayNewEditTripModal" 
    :idUsuario="idUsuario"
    :dataTrip="dataTrip"
    @closeTripModal="displayNewEditTripModal=false"
    />

  <button @click="displayNewEditTripModal=true, newEditTrip=true">
    Display modal new trip
  </button>
   <button @click="displayNewEditTripModal=true, newEditTrip=false">
    Display modal edit trip
  </button>

  <button @click="displayNewEditItemTripModal=true, newEditItemTrip=true">
    Display modal new item trip
  </button>
   <button @click="displayNewEditItemTripModal=true, newEditItemTrip=false">
    Display modal edit item trip
  </button>
    <ItemTripModal 
    :newEditItemTrip="newEditItemTrip" 
    :displayNewEditItemTripModal="displayNewEditItemTripModal"
    :idViajes=1
    :dataTrip="dataTrip"
    :dataItemTrip="dataItemTrip"
    @closeTripModal="displayNewEditItemTripModal=false"
    />
    
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Inter", sans-serif;
}
</style>
