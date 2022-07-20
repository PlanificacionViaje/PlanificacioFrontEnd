<script setup>
import Header from "./Components/Header.vue";
import Home from "./Components/Home.vue"
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "./components/LoginAndRegister/LoginAndRegisterModal.vue";
import Carousel_Slider from './Components/Carousel/Carousel_Slider.vue';
</script>

<script>
export default {
  data() {
    return {
      loginActive: true,
      displayLoginRegisterModal: false,
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
  <main>
     
    <Header></Header>
    <Carousel_Slider/> 
    <Home />
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
