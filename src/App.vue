<script setup>
import Footer from "./Components/Footer.vue";
import * as utils from "@/utils/utils.js";
</script>

<script>
export default {
  data() {
    return {

    };
  },
  beforeMount() {
    const localData = utils.getLocalStorageSession("session");

    if (localData) {
      if ((new Date).getTime() <= localData.expires) {
        console.log("session is active");
        this.$session.userData = localData.data;
        console.log("userDataApp");
      } else {
        console.log("session expired");
        localStorage.removeItem("session");
      }
    } else {
      console.log("no session");
    }
  },
  beforeUnmount() {
    if (this.$session.userData) {
      utils.setLocalStorageSession("session", this.$session.userData, 30 * 1000)
    }
  }
};
</script>
<template>
  <main>
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
  min-height: 100vh;
  margin: 0;
  font-family: "Inter", sans-serif;

}

body {
  padding-bottom: 130px;
  background: linear-gradient(184deg, rgba(104, 131, 186, 1) 3%, rgba(162, 210, 255, 1) 35%, rgba(255, 255, 255, 1) 100%);
}

a {
  text-decoration: none;
  color: black;
}
</style>
