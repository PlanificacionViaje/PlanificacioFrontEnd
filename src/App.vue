<script setup>
import Header from "@/Components/Header.vue";
import Profile from "@/Components/Profile.vue";
import AxiosPlayground from "@/Components/AxiosPlayground.vue";
import LoginAndRegisterModal from "@/Components/LoginAndRegister/LoginAndRegisterModal.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header>
    <div class=""></div>
  </header>
  <main>
    <Header />
    <AxiosPlayground />
    <!-- <Profile />-->
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
