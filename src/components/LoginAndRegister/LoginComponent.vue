<script>
import * as crud from "@/axios/axiosFunctions.js";

export default {
  emits: ["loginCorrect", "swapLoginRegister"],
  data() {
    return {
      loginIncorrect: false,
      loginIncorrectMessage: "",
    };
  },
  methods: {
    swapLoginRegister() {
      this.$emit("swapLoginRegister");
    },
    checkUser(e) {
      const formData = new FormData(e.target);

      crud.onLogin(formData).then((response) => {
        if (response.data.status !== 200) {
          this.loginIncorrect = true;
          this.loginIncorrectMessage = response.data.message;
          return;
        }

        this.loginIncorrect = false;
        this.loginIncorrectMessage = "";
        console.log(this.$userData);
        this.$session.userData = response.data.data;
        this.$router.push("/profile");
        console.log(this.$userData);
        console.log("logged");
      });
    },
    loginCorrect(userData) {
      this.$emit("loginCorrect", userData);
    },
  },
};
</script>

<template>
  <div id="login-component">
    <h1 class="title">Login</h1>
    <form class="form" action="" @submit.prevent="checkUser">
      <label class="form-field-container" for="correo">
        <p>Correo</p>
        <input class="form-input" type="email" name="correo" id="correo" />
      </label>
      <label class="form-field-container" for="contrasena">
        <p>Contraseña</p>
        <input
          class="form-input"
          type="password"
          name="contrasena"
          id="contrasena"
        />
      </label>
      <p class="error-message" v-if="loginIncorrect">
        {{ loginIncorrectMessage }}
      </p>
      <button class="form-button" type="submit">Iniciar sesión</button>
    </form>
    <p class="register-text">
      ¿Aún no tienes cuenta?
      <a href="#" id="register-link" @click.prevent="swapLoginRegister"
        >¡Regístrate!</a
      >
    </p>
    <router-link to="/profile">al perfil</router-link>
  </div>
</template>

<style scoped>
.title {
  margin: 0;
  font-size: 50px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 2rem 0 2rem 0;
}

.form-field-container {
  width: 100%;
}

.form-field-container p {
  margin: 0;
}

.form-input {
  height: 50px;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  background-color: transparent;
  color: white;
}

.form-button {
  height: 60px;
  width: 200px;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  border: 2px solid white;
  color: inherit;
}

.register-text {
  text-align: center;
}

.error-message {
  width: 100%;
  background-color: rgb(255, 140, 140);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgb(255, 68, 68);
  margin: 0;
  color: rgb(121, 0, 0);
  font-weight: 100;
}
</style>