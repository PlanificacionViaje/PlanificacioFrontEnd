<script setup>
</script>

<template>
  <div class="header">
    <div class="Title">
        <img class="logo" src="../../../public/Icons/logotipo-freeway.png" alt="Logotipo Free Way">
        <h1>Free Way</h1>
    </div>
    <img class="perfil" src="../../../public/Icons/perfil.svg" alt="">
  </div>
</template>

<script>
    export default {
        name:"Header"
    }
</script>

<style scoped>
h1 {
    display: inline;
    color: white;
    text-shadow: -2.5px 1px 1px black;
    font-family: 'Inter', sans-serif;
}

.header {
    background-color: #6883BA;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

.logo{
    width: 128px;
    height: auto;
}

.perfil {
    width: 48px;
    height: auto;
}
</style>