<script>
import * as crud from "@/utils/axiosFunctions.js";

export default {
  methods: {
    // USUARIOS
    getAllUsuarios() {
      crud
        .getAllUsuarios()
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    getUsuarioById(e) {
      crud
        .getUsuarioById(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    postUsuario(e) {
      const formData = new FormData(e.target);

      crud
        .postUsuario(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    deleteUsuario(e) {
      crud
        .deleteUsuario(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    putUsuario(e) {
      const formData = new FormData(e.target);

      crud
        .putUsuario(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },

    // VIAJES
    getAllViajes() {
      crud
        .getAllViajes()
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    getAllViajesFromUsuario(e) {
      crud
        .getAllViajesFromUsuario(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    getViajeById(e) {
      crud
        .getViajeById(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    postViaje(e) {
      const formData = new FormData(e.target);

      crud
        .postViaje(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    putViaje(e) {
      const formData = new FormData(e.target);

      crud
        .putViaje(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    deleteViaje(e) {
      crud
        .deleteViaje(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },

    // ITEMS VIAJES
    getAllItemsViaje() {
      crud
        .getAllItemsViaje()
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    getAllItemsViajeFromViaje(e) {
      crud
        .getAllItemsViajeFromViaje(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    getItemsViajeById(e) {
      crud
        .getItemsViajeById(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    postItemsViaje(e) {
      const formData = new FormData(e.target);

      //   formData.set("hora", "10:12:12");
      console.log(formData.get("hora"));

      crud
        .postItemsViaje(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    putItemsViaje(e) {
      const formData = new FormData(e.target);

      crud
        .putItemsViaje(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
    deleteItemsViaje(e) {
      crud
        .deleteItemsViaje(e.target.elements["id"].value)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
  },
};
</script>

<template>
  <div class="playground">
    <div class="third usuarios">
      <h2>Usuarios</h2>
      <div class="action">
        <h4>Get all</h4>
        <button @click="getAllUsuarios">GET ALL Usuarios</button>
      </div>
      <hr />
      <div class="action">
        <h4>Get by id</h4>
        <form action="" @submit.prevent="getUsuarioById">
          <input type="number" name="id" />
          <button type="submit">GET Usuario</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Post</h4>
        <form action="" @submit.prevent="postUsuario">
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="apellidos" placeholder="apellidos" />
          <input type="email" name="correo" placeholder="correo" />
          <input type="password" name="contrasena" placeholder="contrasena" />
          <button type="submit">POST Usuario</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Delete by id</h4>
        <form action="" @submit.prevent="deleteUsuario">
          <input type="number" name="id" />
          <button type="submit">DELETE Usuario</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Put</h4>
        <form action="" @submit.prevent="putUsuario">
          <input type="number" name="id" placeholder="id" />
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="apellidos" placeholder="apellidos" />
          <input type="email" name="correo" placeholder="correo" />
          <input type="password" name="contrasena" placeholder="contrasena" />
          <button type="submit">PUT Usuario</button>
        </form>
      </div>
    </div>
    <div class="third viajes">
      <h2>Viajes</h2>

      <div class="action">
        <h4>Get all</h4>
        <button @click="getAllViajes">GET ALL Viajes</button>
      </div>
      <hr />
      <div class="action">
        <h4>Get by id</h4>
        <form action="" @submit.prevent="getViajeById">
          <input type="number" name="id" />
          <button type="submit">GET Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Get Viajes from Usuario</h4>
        <form action="" @submit.prevent="getAllViajesFromUsuario">
          <input type="number" name="id" />
          <button type="submit">GET ALL Viajes from Usuario</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Post</h4>
        <form action="" @submit.prevent="postViaje">
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="descripcion" placeholder="descripcion" />
          <input type="date" name="fechainicio" placeholder="fechainicio" />
          <input type="date" name="fechafin" placeholder="fechafin" />
          <input type="number" name="idusuarios" placeholder="idusuarios" />
          <button type="submit">POST Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Delete by id</h4>
        <form action="" @submit.prevent="deleteViaje">
          <input type="number" name="id" />
          <button type="submit">DELETE Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Put</h4>
        <form action="" @submit.prevent="putViaje">
          <input type="number" name="id" placeholder="id" />
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="descripcion" placeholder="descripcion" />
          <input type="date" name="fechainicio" placeholder="fechainicio" />
          <input type="date" name="fechafin" placeholder="fechafin" />
          <input type="number" name="idusuarios" placeholder="idusuarios" />
          <button type="submit">PUT Viaje</button>
        </form>
      </div>
    </div>
    <div class="third items-viajes">
      <h2>Items viajes</h2>

      <div class="action">
        <h4>Get all</h4>
        <button @click="getAllItemsViaje">GET ALL Items Viajes</button>
      </div>
      <hr />
      <div class="action">
        <h4>Get by id</h4>
        <form action="" @submit.prevent="getItemsViajeById">
          <input type="number" name="id" />
          <button type="submit">GET ItemsViaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Get Items Viaje from Viajes</h4>
        <form action="" @submit.prevent="getAllItemsViajeFromViaje">
          <input type="number" name="id" />
          <button type="submit">GET ALL ItemsViaje from Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Post</h4>
        <form action="" @submit.prevent="postItemsViaje">
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="descripcion" placeholder="descripcion" />
          <!-- <input type="time" name="hora" placeholder="hora" /> -->
          <input type="time" name="hora" placeholder="hora" value="00:00:00" step="1" />
          <input type="number" name="precio" placeholder="precio" />
          <input type="number" name="ubicacionlatitud" placeholder="ubicacionlatitud" />
          <input type="number" name="ubicacionlongitud" placeholder="ubicacionlongitud" />
          <input type="number" name="idviajes" placeholder="idviaje" />
          <button type="submit">POST Items Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Delete by id</h4>
        <form action="" @submit.prevent="deleteItemsViaje">
          <input type="number" name="id" />
          <button type="submit">DELETE Viaje</button>
        </form>
      </div>
      <hr />
      <div class="action">
        <h4>Put</h4>
        <form action="" @submit.prevent="putItemsViaje">
          <input type="number" name="id" placeholder="id" />
          <input type="text" name="nombre" placeholder="nombre" />
          <input type="text" name="descripcion" placeholder="descripcion" />
          <input type="time" name="hora" step="1" placeholder="hora" />
          <input type="number" name="precio" placeholder="precio" />
          <input type="number" name="ubicacionlatitud" placeholder="ubicacionlatitud" />
          <input type="number" name="ubicacionlongitud" placeholder="ubicacionlongitud" />
          <input type="number" name="idviajes" placeholder="idviaje" />
          <button type="submit">PUT ItemsViaje</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground {
  display: flex;
  flex-direction: row;
}

.third {
  width: calc(100% / 3);
  padding: 5px;
}

button {
  display: block;
  margin: 1rem 0;
}
</style>