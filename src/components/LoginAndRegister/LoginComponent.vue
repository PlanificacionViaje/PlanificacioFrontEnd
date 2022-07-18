
<script>
import * as crud from "../../axios/axiosFunctions";
export default {
  data() {
    return {
      email: "",
      password: "",
      userList: {},
    };
  },
  methods: {
    swapLoginRegister() {
      this.$emit("swapLoginRegister");
    },
    checkUser() {
      console.log("funcionaaaaaaaa");
      crud
        .getAllUsuarios()
        .then((response) => (this.userList = response.data))
        .catch((error) => crud.handleError(error));
      console.log(this.userList);
      for (let i = 0; i < this.userList.length; i++) {
        if (
          this.userList[i][correo] == this.email &&
          this.userList[i][contrasena] == this.password
        ) {
          console.log("Existe el usuario");
        } else {
          console.log("no existe :(");
        }
      }
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
        <input
          :v-model="{ email }"
          class="form-input"
          type="email"
          name="correo"
          id="correo"
        />
      </label>
      <label class="form-field-container" for="contrasena">
        <p>Contraseña</p>
        <input
          :v-model="{ password }"
          class="form-input"
          type="password"
          name="contrasena"
          id="contrasena"
        />
      </label>
      <button class="form-button" type="submit">Iniciar sesión</button>
    </form>
    <p class="register-text">
      ¿Aún no tienes cuenta?
      <a href="#" id="register-link" @click.prevent="swapLoginRegister"
        >¡Regístrate!</a
      >
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

.register-text {
  text-align: center;
}
</style>