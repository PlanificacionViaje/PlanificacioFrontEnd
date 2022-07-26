<script setup>
import Header from "./Components/Header.vue";
import Home from "./Components/Home.vue"
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
import Carousel_Slider from './Components/Carousel/Carousel_Slider.vue';
import Footer from "./Components/Footer.vue";
import TravelPage from "@/Components/TravelPage.vue";
import TripModal from "./Components/TripModal.vue";
import ItemTripModal from "./Components/ItemTripModal.vue";
import DeleteModal from "./Components/DeleteModal.vue";
</script>

<script>
export default {
  data() {
    return {
      userData: {},
      loginActive: true,
      displayLoginRegisterModal: false,

      //Modal Trip
      newEditTrip:true,
      displayNewEditTripModal:false,
      //Modal Item Trip
      newEditItemTrip:true,
      displayNewEditItemTripModal:false,

      //Modal Trip/Item Deletp
      deleteItemOrTrip:true,
      displayDeleteItemOrTripModal:false,

      //testing
      idUsuario:1,
      dataTrip:{
          id:9,
          nombre:"Tenerife",
          descripcion:"Por fin... Una semanita en las Canarias ;-;",
          fechainicio:"2022-08-12",
          fechafin:"2022-08-19",
          idusuarios:1,
      },
      dataItemTrip:{
        id:17,
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
    loginCorrect(userData) {
      this.userData = userData;
    },
  },
  computed: {
    userDataHaveData() {
      return Object.keys(this.userData).length != 0;
    }
  }
};
</script>

<template>
  <main>

    <Header @loginCorrect="(userData) => loginCorrect(userData)" @registerCorrect="(userData) => loginCorrect(userData)"
      :userData="userData" />
    <Carousel_Slider />
    <Home />
    <Profile :userData="userData" v-if="userDataHaveData" />
    <LoginAndRegisterModal :loginActive="loginActive" :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister" @closeLoginRegisterModal="closeLoginRegisterModal" />
    <TravelPage :UserInfo="userData" />    
   
    <!-- <AxiosPlayground /> -->    
    

  <button @click="displayNewEditTripModal=true, newEditTrip=true">
    Display modal new trip
  </button>
   <button @click="displayNewEditTripModal=true, newEditTrip=false">
    Display modal edit trip
  </button>
  <TripModal 
    :newEditTrip="newEditTrip" 
    :displayNewEditTripModal="displayNewEditTripModal" 
    :idUsuario="idUsuario"
    :dataTrip="dataTrip"
    @closeTripModal="displayNewEditTripModal=false"
    />

  <button @click="displayNewEditItemTripModal=true, newEditItemTrip=true">
    Display modal new item trip
  </button>
   <button @click="displayNewEditItemTripModal=true, newEditItemTrip=false">
    Display modal edit item trip
  </button>
    <ItemTripModal 
    :newEditItemTrip="newEditItemTrip" 
    :displayNewEditItemTripModal="displayNewEditItemTripModal"
    :dataTrip="dataTrip"
    :dataItemTrip="dataItemTrip"
    @closeTripModal="displayNewEditItemTripModal=false"
    />
    <br/><br/>

    <button @click="displayDeleteItemOrTripModal=true, deleteItemOrTrip=true">
    delete trip
    </button>
    <button @click="displayDeleteItemOrTripModal=true, deleteItemOrTrip=false">
    delete item
    </button>
    <DeleteModal 
    :deleteItemOrTrip="deleteItemOrTrip"
    :displayDeleteItemOrTripModal="displayDeleteItemOrTripModal"
    :dataTrip="dataTrip"
    :dataItemTrip="dataItemTrip"
    @closeTripModal="displayDeleteItemOrTripModal=false"
    />
    

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
  height: 100vh;
  min-height: 100vh;
  margin: 0;
  height: 100%;
  font-family: "Inter", sans-serif;
}

body {
  padding-bottom: 130px;
  height: 0;
  background-color: #a2d2ff;
}
</style>
