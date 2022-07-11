<script setup>
import LoginComponent from "./components/LoginComponent.vue";
</script>

<template>
  <header>
    <div class="">
     
    </div>
  </header>
  <main>
    <LoginComponent />
  </main>
  
</template>

<style>
* {
  box-sizing: border-box;
}
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family:'Inter', sans-serif;
}

#app {
  background: url("bg2.jpg");
      background-repeat: no-repeat;
    background-size: cover;
}
</style>
