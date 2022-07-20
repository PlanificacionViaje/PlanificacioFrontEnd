<template>
  <div class="header">
    <div class="Title">
        <img class="logo" src="../../../public/Icons/logotipo-freeway.png" alt="Logotipo Free Way">
        <h1>Free Way</h1>
    </div>
    <img v-show="isOnline" class="perfil" src="../../../public/Icons/perfil.svg" alt="">
    <div v-show="!isOnline" class="btns">
        <p>Log In</p>
        <p>Register</p>
    </div>
  </div>
</template>

<script>
    export default {
        name:"Header",

        data() {
        return {
            isOnline: false
        }
        }
    }
</script>

<style scoped>
h1 {
    display: inline;
    color: white;
    text-shadow: -2.5px 1px 1px black;
}

p {
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: 1px solid white;
    border-radius: 15px;
    text-align: center;
}

.header{
    font-family: 'Inter', sans-serif;
}
.header {
    background-color: #6883BA;
    display: flex;
    justify-content: space-between;
}

.logo{
    width: 128px;
    height: auto;
}

.perfil {
    width: 48px;
    height: auto;
}

.btns{
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

</style>