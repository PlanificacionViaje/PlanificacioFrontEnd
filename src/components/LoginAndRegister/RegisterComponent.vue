<script>
import * as crud from "../../utils/axiosFunctions";
import * as utils from "@/utils/utils.js";

export default {
  emits: ["swapLoginRegister"],
  data() {
    return {
      registerIncorrect: false,
      registerIncorrectMessage: "",
    };
  },
  methods: {
    swapLoginRegister() {
      this.$emit("swapLoginRegister");
    },
    postUsuario(e) {
      const formData = new FormData(e.target);

      crud
        .postUsuario(formData)
        .then((response) => {
          if (response.data.status !== 201) {
            this.registerIncorrect = true;
            this.registerIncorrectMessage = response.data.message;
            return;
          }

          this.registerIncorrect = false;
          this.registerIncorrectMessage = "";

          this.$session.userData = response.data.data;
          utils.setLocalStorageSession("session", this.$session.userData, 30 * 1000);

          this.$router.go();
        })
        .catch((error) => crud.handleError(error));
    },
  },
};
</script>

<template>
  <div id="register-component">
    <h1 class="title">Registro</h1>
    <form name="form1" class="form" action="" @submit.prevent="postUsuario">
      <label class="form-field-container" for="nombre">
        <p>Nombre</p>
        <input class="form-input" type="text" name="nombre" id="nombre" />
      </label>
      <label class="form-field-container" for="apellidos">
        <p>Apellidos</p>
        <input class="form-input" type="text" name="apellidos" id="apellidos" />
      </label>
      <label class="form-field-container" for="email">
        <p>Correo</p>
        <input class="form-input" type="email" name="correo" id="email" />
      </label>
      <label class="form-field-container" for="contrasena">
        <p>Contraseña</p>
        <input class="form-input" type="password" name="contrasena" id="contrasena" />
      </label>
      <p class="error-message" v-if="registerIncorrect">
        {{ registerIncorrectMessage }}
      </p>
      <button class="form-button" type="submit">Registrarse</button>
    </form>
    <p class="login-text">
      ¿Ya tienes cuenta?
      <a href="#" id="login-link" @click.prevent="swapLoginRegister">¡Inicia sesión!</a>
    </p>
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

.login-text {
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
  font-weight: 400;
}
</style>