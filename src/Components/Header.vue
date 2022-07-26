<script setup>
import LoginAndRegisterModal from "@/components/LoginAndRegister/LoginAndRegisterModal.vue";
</script>

<script>
export default {
  name: "Header",
  emits: ["loginCorrect", "registerCorrect"],
  props: {
    userData: Object
  },
  data() {
    return {
      isOnline: false,
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
    loginCorrect(userData) {
      this.displayLoginRegisterModal = false;
      this.$emit("loginCorrect", userData);
    },
    registerCorrect(userData) {
      this.displayLoginRegisterModal = false;
      this.$emit("registerCorrect", userData);
    }
  },
  computed: {
    userDataHaveData() {
      return Object.keys(this.userData).length != 0;
    }
  }
};
</script>

<template>
  <div class="header">
    <div class="Title">
      <img class="logo" src="../../../public/Icons/logotipo-freeway.png" alt="Logotipo Free Way" />
      <h1 class="title-freeway">Free Way</h1>
    </div>
    <img v-if="userDataHaveData" class="perfil" src="../../../public/Icons/perfil.svg" alt="" />
    <div v-if="!userDataHaveData" class="btns">
      <button @click="displayLoginRegisterModal = !displayLoginRegisterModal">
        Iniciar sesión
      </button>
      <button @click="
        (displayLoginRegisterModal = !displayLoginRegisterModal),
        swapLoginRegister()
      ">
        Registrarse
      </button>
    </div>
  </div>
  <LoginAndRegisterModal :loginActive="loginActive" :displayLoginRegisterModal="displayLoginRegisterModal"
    @swapLoginRegister="swapLoginRegister" @closeLoginRegisterModal="closeLoginRegisterModal"
    @loginCorrect="(userData) => loginCorrect(userData)" @registerCorrect="(userData) => registerCorrect(userData)" />
</template>

<style scoped>
h1 {
  display: inline;
  color: white;
  text-shadow: -2.5px 1px 1px black;
}
/*El boton del Registro / Iniciar sesion*/
button{
  background-color: transparent;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 2px solid white;
  border-radius: 15px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

button:hover{

background-color:white;
color: black;
border: none;
}

button:active {

background-color: #C2DBFF;
color:white;

}
/*Aqui termina los botones de Registrarse / Iniciar sesion*/

.header {
  font-family: "Inter", sans-serif;
}

.header {
  background-color: #6883ba;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 128px;
  height: auto;
}

.perfil {
  margin:10px;
  width: 48px;
  height: auto;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin:5px;
}
.Title{
  margin:10px;
}

/* A partir de aqui va las pantallas Responsive*/

/* Para Tablets */ /* Medida Media*/

@media only screen and (min-width:768px) {

.header{

  height:100%;

}

}
/* Para Moviles Grandes y Tablets Pequeñas */ /* Medida Pequeña*/

@media only screen and (min-width: 600px) {
.header{

  width: 100%;
  
  }
  
}

/* Para Moviles Pequeños */ /* Medida Extra Pequeña */

@media only screen and (max-width: 600px) {
  .header{
  width: 100%;
  }
  .title-freeway{
    
    display: none;
  }

}

</style>