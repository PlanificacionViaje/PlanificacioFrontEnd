<script setup>
import Header from "./Components/Header/header.vue";
import Profile from "./Components/Profile.vue";
import AxiosPlayground from "./Components/AxiosPlayground.vue";
</script>

<template>
  <Header />
  <Profile />
  <AxiosPlayground />
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
}
</style>
