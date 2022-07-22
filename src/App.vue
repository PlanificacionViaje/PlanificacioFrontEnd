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
      userData: {},
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
  <header>
    <div class=""></div>
  </header>
  <main>
    <Header @loginCorrect="(userData) => loginCorrect(userData)" @registerCorrect="(userData) => loginCorrect(userData)"
      :userData="userData" />
    <!-- <AxiosPlayground /> -->
    <Profile :userData="userData" v-if="userDataHaveData" />
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
