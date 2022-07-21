<script>
import * as crud from "@/axios/axiosFunctions.js";
export default {
  data() {
    return {    
    };
  },
  methods: {  
    postViaje(e) {
      const formData = new FormData(e.target);
      crud
        .postViaje(formData)
        .then((response) => console.log(response))
        .catch((error) => crud.handleError(error));
    },
  },
  props:{
    newEditTrip:Boolean, 
    displayNewEditTripModal: Boolean,   
    dataTrip:{},   
  }
};
</script>

<template>
  <div class="modal-background" v-show="displayNewEditTripModal" @click.prevent="displayNewEditTripModal=false">
    <div v-if="newEditTrip" class="modal"  @click.stop id="edit-component">
    <h1 class="title">Nuevo viaje</h1>
        <form class="form" action="" @submit.prevent="postViaje">
        <label class="form-field-container" for="tittle">
          <p>Tittle</p>
          <input class="form-input" type="text" name="tittle" id="tittle" />
        </label>
        <label class="form-field-container" for="fechaInicio">
          <p>Fecha Inicio</p>
          <input class="form-input" type="date" name="fechaInicio" id="fechaInicio" />
        </label>
        <label class="form-field-container" for="fechaFin">
          <p>Fecha Fin</p>
          <input class="form-input" type="date" name="Fechafin" id="fechaFin" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="descripcion">
            <p>Descripción</p>
            <textarea rows="4" class="form-input" type="textarea" name="descripcion" id="descripcion" />
          </label>
          <button class="form-button" type="submit">Añadir</button>
        </div>
        <a href="#" @click.prevent="displayNewEditTripModal=false">X</a>
      </form>       
    </div>
    <div v-else class="modal"  @click.stop id="edit-component">      
      <h1 class="title">Editar viaje</h1>
      <form class="form" action="" @submit.prevent="">
        <label class="form-field-container" for="tittle">
          <p>Tittle</p>
          <input class="form-input" type="text" name="tittle" id="tittle" />
        </label>
        <label class="form-field-container" for="fechaInicio">
          <p>Fecha Inicio</p>
          <input class="form-input" type="date" name="fechaInicio" id="fechaInicio" />
        </label>
        <label class="form-field-container" for="fechaFin">
          <p>Fecha Fin</p>
          <input class="form-input" type="date" name="Fechafin" id="fechaFin" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="descripcion">
            <p>Descripción</p>
            <textarea rows="4" class="form-input" type="textarea" name="descripcion" id="descripcion" />
          </label>
          <button class="form-button" type="submit">Guardar</button>
        </div>         
        <a href="#" @click.prevent="displayNewEditTripModal=false">X</a>
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
    top:0;
}

.modal {
    position: relative;
    z-index: 20;
    background-color: rgb(107, 131, 186);
    width: 600px;
    padding: 3rem;
    border-radius: 10px;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
.flexedElements{
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

textarea{
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
</style>