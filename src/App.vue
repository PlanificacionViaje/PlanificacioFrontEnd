<script setup>
import Header from "./Components/Header.vue";
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "./components/LoginAndRegister/LoginAndRegisterModal.vue";
import Footer from "./Components/Footer.vue";
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
    <!-- <button
      id="loginregister"
      @click="displayLoginRegisterModal = !displayLoginRegisterModal"
    >
      asdfasdf
    </button> -->
    <Footer></Footer>
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
