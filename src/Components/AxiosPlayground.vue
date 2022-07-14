<script>
import * as crud from "@/axios/axiosFunctions.js";

export default {
    methods: {
        // USUARIOS
        getAllUsuarios() {
            crud.getAllUsuarios()
                .then(response => console.log(response))
                .catch(error => crud.handleError(error));
        },
        getUsuarioById(e) {
            crud.getUsuarioById(e.target.elements["id"].value)
                .then(response => console.log(response))
                .catch(error => crud.handleError(error));
        },
        postUsuario(e) {
            const formData = new FormData(e.target);

            crud.postUsuario(formData)
                .then(response => console.log(response))
                .catch(error => crud.handleError(error));
        },
        deleteUsuario(e) {
            crud.deleteUsuario(e.target.elements["id"].value)
                .then(response => console.log(response));
        },








        getAllViajes() {
            crud.getAllViajes()
                .then(response => console.log(response));
        },
        getAllItemsViaje() {
            crud.getAllItemsViaje()
                .then(response => console.log(response));
        },
    }
}
</script>

<template>
    <div class="third usuarios">
        <h2>Usuarios</h2>

        <div class="action">
            <h4>Get all</h4>
            <button @click="getAllUsuarios">GET ALL Usuarios</button>
        </div>
        <hr>
        <div class="action">
            <h4>Get by id</h4>
            <form action="" @submit.prevent="getUsuarioById">
                <input type="number" name="id">
                <button type="submit">GET Usuario</button>
            </form>
        </div>
        <hr>
        <div class="action">
            <h4>Post</h4>
            <form action="" @submit.prevent="postUsuario">
                <input type="text" name="nombre" placeholder="nombre">
                <input type="text" name="apellidos" placeholder="apellidos">
                <input type="email" name="correo" placeholder="correo">
                <input type="password" name="contrasena" placeholder="contrasena">
                <button type="submit">POST Usuario</button>
            </form>
        </div>
        <hr>
        <div class="action">
            <h4>Delete by id</h4>
            <form action="" @submit.prevent="deleteUsuario">
                <input type="number" name="id">
                <button type="submit">DELETE Usuario</button>
            </form>
        </div>
    </div>


















    <div class="third viajes">
        <h2>Viajes</h2>

        <div class="actions">
            <button @click="getAllViajes">GET ALL Viajes</button>
        </div>
    </div>
    <div class="third items-viajes">
        <h2>Items viajes</h2>

        <div class="actions">
            <button @click="getAllItemsViaje">GET ALL Itemsviaje</button>
        </div>
    </div>
</template>

<style scoped>
.third {
    display: inline-block;
    height: 100%;
    width: calc(100% /3);
    padding: 1rem;
}

button {
    display: block;
    margin: 1rem 0;
}
</style>