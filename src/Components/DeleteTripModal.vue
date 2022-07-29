<script setup>
import CrossComponent from "@/Components/CrossComponent.vue";
</script>
<script>
import * as crud from "@/utils/axiosFunctions.js";
export default {
  data() {
    return {};
  },
  methods: {
    deleteViaje() {
      crud
        .deleteViaje(this.dataTrip.id)
        .then((response) => {
          console.log(response);
          this.closeModal();
        })
        .catch((error) => crud.handleError(error));
    },
    closeModal() {
      this.$emit("closeTripModal");
    },
  },
  props: {
    dataTrip: {},
    //Displays
    displayDeleteTripModal: Boolean,
  },
};
</script>

<template>
  <div
    class="modal-background"
    v-show="displayDeleteTripModal"
    @click.prevent="closeModal"
  >
    <div class="modal" @click.stop id="deleteTrip-component">
      <h1 class="title">
        Estas seguro que quieres eliminar el viaje
        <em>"{{ dataTrip.nombre }}"</em> ?
      </h1>
      <form class="form" action="" @submit.prevent="deleteViaje">
        <div class="flexedElements">
          <button class="form-button borrar-btn" type="submit">Borrar</button>
          <button class="form-button" type="submit" v-on:click="closeModal">
            Cancelar
          </button>
        </div>
        <a href="#" @click.prevent="closeModal"><CrossComponent /></a>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}

.modal {
  position: relative;
  z-index: 20;
  background-color: rgb(107, 131, 186);
  width: 600px;
  padding: 3rem;
  border-radius: 10px;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.title {
  margin: 0;
  font-size: 50px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  /* width: 100%; */
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

.flexedElements {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

textarea {
  resize: vertical;
  width: 90%;
}

a {
  position: absolute;
  color: red;
  font-size: 30px;
  top: 1rem;
  right: 1rem;
}

.borrar-btn {
  background-color: rgb(243, 60, 60);
}
</style>