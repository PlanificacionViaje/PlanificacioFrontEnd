<script setup>
import Footer from "./Components/Footer.vue";
import TravelPage from "@/Components/TravelPage.vue";
import TripModal from "./Components/TripModal.vue";
import ItemTripModal from "./Components/ItemTripModal.vue";
import TravelComponent from "@/Components/TravelComponent.vue";
import DeleteTripModal from "./Components/DeleteTripModal.vue";
import DeleteItemModal from "./Components/DeleteItemModal.vue";
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

      //Modal Trip Delete
      displayDeleteTripModal:false,      
      //Modal Item Delete
      displayDeleteItemModal:false,

      //testing
      idUsuario:1,
      idTrip:2,
      
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
  <TravelComponent :idTrip="idTrip"/>
  
   
<!--     

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

    <button @click="displayDeleteTripModal=true">delete trip</button>
    <DeleteTripModal 
    :displayDeleteTripModal="displayDeleteTripModal"
    :dataTrip="dataTrip"
    @closeTripModal="displayDeleteTripModal=false"
    />

    <button @click="displayDeleteItemModal=true">delete item</button>
    <DeleteItemModal 
    :displayDeleteItemModal="displayDeleteItemModal"
    :dataItemTrip="dataItemTrip"
    @closeTripModal="displayDeleteItemModal=false"
    />

   
     -->

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
