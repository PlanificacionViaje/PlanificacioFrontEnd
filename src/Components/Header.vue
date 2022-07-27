<script setup>
import LoginAndRegisterModal from "@/components/LoginAndRegister/LoginAndRegisterModal.vue";
</script>

<script>
export default {
  name: "Header",
  emits: ["loginCorrect", "registerCorrect"],
  props: {
    userData: Object,
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
    },
  },
  computed: {
    userDataHaveData() {
      return this.$session.userData;
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="Title">
      <router-link to="/">
        <img
          class="logo"
          src="../../../public/Icons/logotipo-freeway.png"
          alt="Logotipo Free Way"
        />
      </router-link>
      <h1>Free Way</h1>
    </div>
    <router-link to="/profile"
      ><img
        v-if="userDataHaveData"
        class="perfil"
        src="../../../public/Icons/perfil.svg"
        alt=""
    /></router-link>
    <div v-if="!userDataHaveData" class="btns">
      <button @click="displayLoginRegisterModal = !displayLoginRegisterModal">
        Iniciar sesión
      </button>
      <button
        @click="
          (displayLoginRegisterModal = !displayLoginRegisterModal),
            swapLoginRegister()
        "
      >
        Registrarse
      </button>
    </div>
  </div>
  <LoginAndRegisterModal
    :loginActive="loginActive"
    :displayLoginRegisterModal="displayLoginRegisterModal"
    @swapLoginRegister="swapLoginRegister"
    @closeLoginRegisterModal="closeLoginRegisterModal"
    @loginCorrect="(userData) => loginCorrect(userData)"
    @registerCorrect="(userData) => registerCorrect(userData)"
  />
</template>

<style scoped>
h1 {
  display: inline;
  color: white;
  text-shadow: -2.5px 1px 1px black;
}

/*El boton del Registro / Iniciar sesion*/
button {
  background-color: transparent;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 2px solid white;
  border-radius: 15px;
  text-align: center;
  font-family: "Inter", sans-serif;
}

button:hover {
  background-color: white;
  color: black;
  border-color: transparent;
}

button:active {
  background-color: #c2dbff;
  color: white;
}

/*Aqui termina los botones de Registrarse / Iniciar sesion*/

.header {
  font-family: "Inter", sans-serif;
}

.header {
  background-color: #6883ba;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}

.logo {
  width: 96px;
  height: auto;
}

.perfil {
  margin: 10px;
  width: 48px;
  height: auto;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.Title {
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* A partir de aqui va las pantallas Responsive*/

/* Para Tablets */
/* Medida Media*/

@media only screen and (min-width: 768px) {
  .header {
    height: 100%;
  }
}

/* Para Moviles Grandes y Tablets Pequeñas */
/* Medida Pequeña*/

@media only screen and (min-width: 600px) {
  .header {
    width: 100%;
  }
}

/* Para Moviles Pequeños */
/* Medida Extra Pequeña */

@media only screen and (max-width: 600px) {
  .header {
    width: 100%;
  }

  .title-freeway {
    display: none;
  }
}
</style>