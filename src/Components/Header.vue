<script setup>
import LoginAndRegisterModal from "@/components/LoginAndRegister/LoginAndRegisterModal.vue";
</script>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOnline: false,
      loginActive: true,
      displayLoginRegisterModal: false,
      userData: false,
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
      this.$emit("loginCorrect", userData);
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="Title">
      <img
        class="logo"
        src="../../../public/Icons/logotipo-freeway.png"
        alt="Logotipo Free Way"
      />
      <h1>Free Way</h1>
    </div>
    <img
      v-if="userData"
      class="perfil"
      src="../../../public/Icons/perfil.svg"
      alt=""
    />
    <div v-if="!userData" class="btns">
      <p @click="displayLoginRegisterModal = !displayLoginRegisterModal">
        Iniciar sesión
      </p>
      <p
        @click="
          (displayLoginRegisterModal = !displayLoginRegisterModal),
            swapLoginRegister()
        "
      >
        Registrarse
      </p>
    </div>
  </div>
  <LoginAndRegisterModal
    :loginActive="loginActive"
    :displayLoginRegisterModal="displayLoginRegisterModal"
    @swapLoginRegister="swapLoginRegister"
    @closeLoginRegisterModal="closeLoginRegisterModal"
    @loginCorrect="(userData) => loginCorrect(userData)"
  />
</template>

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
  width: 48px;
  height: auto;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
</style>