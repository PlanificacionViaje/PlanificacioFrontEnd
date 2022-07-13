<template>
    Los datos salen por consola <br>
    <button @click="getAllUsuarios">GET All Usuarios</button>
    <button @click="getAllViajes">GET All Viajes</button>
    <button @click="getAllItemsViaje">GET All Items Viajes</button>
</template>

<script>
import * as crud from "@/axios/axiosFunctions.js";

export default {
    methods: {
        getAllUsuarios() {
            crud.getAllUsuarios()
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

<style>
</style>