<script setup>
import Header from "@/Components/Header.vue";
import Profile from "@/Components/Profile.vue";
import AxiosPlayground from "@/Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
</script>

<script>
export default {
  data() {
    return {
      loginActive: true,
      displayLoginRegisterModal: true,
      userData: {},
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
    loginCorrect(userData) {
      this.userData = userData;
      this.displayLoginRegisterModal = false;
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
    <AxiosPlayground /> -->
    <LoginAndRegisterModal
      :loginActive="loginActive"
      :displayLoginRegisterModal="displayLoginRegisterModal"
      @swapLoginRegister="swapLoginRegister"
      @closeLoginRegisterModal="closeLoginRegisterModal"
      @loginCorrect="(userData) => loginCorrect(userData)"
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
  font-family: "Inter", sans-serif;
}
</style>
