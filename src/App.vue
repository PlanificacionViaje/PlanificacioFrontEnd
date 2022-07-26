<script setup>
import Header from "./Components/Header.vue";
import Home from "./Components/Home.vue";
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
import Carousel_Slider from "./Components/Carousel/Carousel_Slider.vue";
import Footer from "./Components/Footer.vue";
import TravelPage from "@/Components/TravelPage.vue";
</script>

<script>
export default {
  data() {
    return {
      userData: {},
      loginActive: true,
      displayLoginRegisterModal: false,
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
};
</script>

<template>
  <Header
    @loginCorrect="(userData) => loginCorrect(userData)"
    @registerCorrect="(userData) => loginCorrect(userData)"
    :userData="userData"
  />
  <main>
    <!-- <Carousel_Slider />
    <Home />
    <Profile :userData="userData" v-if="userDataHaveData" />
    <LoginAndRegisterModal :loginActive="loginActive" :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister" @closeLoginRegisterModal="closeLoginRegisterModal" />
    <TravelPage :UserInfo="userData" />-->
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
