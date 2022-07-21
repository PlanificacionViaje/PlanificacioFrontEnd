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
      newEditItemTrip:false,
      displayNewEditItemTripModal:true,
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
    <AxiosPlayground />
    <LoginAndRegisterModal
      :loginActive="loginActive"
      :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister"
      @closeLoginRegisterModal="closeLoginRegisterModal"
    />
    <button
      id="loginregister"
      @click="displayLoginRegisterModal = !displayLoginRegisterModal"
    >
      asdfasdf
    </button>
  <button @click="displayNewEditTripModal=true, newEditTrip=true">
    Display modal new trip
  </button>
   <button @click="displayNewEditTripModal=true, newEditTrip=false">
    Display modal edit trip
  </button>
    <TripModal 
    :newEditTrip="newEditTrip" 
    :displayNewEditTripModal="displayNewEditTripModal" />
    <ItemTripModal 
    :newEditItemTrip="newEditItemTrip" 
    :displayNewEditItemTripModal="displayNewEditItemTripModal"
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
