<script>
import * as crud from "@/axios/axiosFunctions.js";
export default {
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    checkDataForm(form) {
      if (form.get("nombre").trim() == "") {
        this.errorMessage = "Nombre no puede estar vacío";
        return false;
      }
      if (form.get("fecha") == "") {
        this.errorMessage = "Fecha no puede estar vacía";
        return false;
      }
      if (form.get("hora") == "") {
        this.errorMessage = "Hora no puede estar vacía";
        return false;
      }
      if (form.get("precio").trim() == "") {
        this.errorMessage = "Precio no puede estar vacío";
        return false;
      }
      if (form.get("ubicacionlatitud").trim() == "") {
        this.errorMessage = "Ubicación latitud no puede estar vacía";
        return false;
      }
      if (form.get("ubicacionlongitud").trim() == "") {
        this.errorMessage = "Ubicación longitud no puede estar vacía";
        return false;
      }
      return true;
    },
    postItemsViaje(e) {
      const formData = new FormData(e.target);
      formData.append("idviajes", this.dataTrip.id);
      if (!this.checkDataForm(formData)) {
        return;
      }
      crud
        .postItemsViaje(formData)
        .then((response) => {
          console.log(response)
          this.closeModal()
        })
        .catch((error) => crud.handleError(error));
    },
    putItemsViaje(e) {
      const formData = new FormData(e.target);
      formData.append("idviajes", this.dataTrip.id);
      formData.append("id", this.dataItemTrip.id);
      this.checkDataForm(formData)
      crud
        .putItemsViaje(formData)
        .then((response) => {
          //console.log(response)
          this.closeModal();
        })
        .catch((error) => crud.handleError(error));
    },
    cleanElements() {
      document.querySelector("#itemnombre").value = "";
      document.querySelector("#itemdescripcion").value = "";
      document.querySelector("#itemfecha").value = this.dataTrip.fechainicio;
      document.querySelector("#itemhora").value = "00:00:00";
      document.querySelector("#itemprecio").value = 0;
      document.querySelector("#itemubicacionlatitud").value = 0;
      document.querySelector("#itemubicacionlongitud").value = 0;
    },
    closeModal() {
      if (this.newEditItemTrip) { this.cleanElements(); }
      this.errorMessage = "";
      this.$emit('closeTripModal');
    }
  },
  props: {
    dataTrip: {},
    dataItemTrip: {},

    //Display
    newEditItemTrip: Boolean,
    displayNewEditItemTripModal: Boolean,

  }
};
</script>

<template>
  <div class="modal-background" v-show="displayNewEditItemTripModal" @click.prevent="closeModal">
    <div v-if="newEditItemTrip" class="modal" @click.stop id="newItem-component">
      <h1 class="title">Nuevo Item</h1>
      <form class="form" action="" @submit.prevent="postItemsViaje">
        <label class="form-field-container" for="nombre">
          <p>Nombre</p>
          <input class="form-input" type="text" name="nombre" id="itemnombre" />
        </label>
        <label class="form-field-container" for="descripcion">
          <p>Descripción</p>
          <input class="form-input" type="text" name="descripcion" id="itemdescripcion" />
        </label>
        <label class="form-field-container" for="fecha">
          <p>Fecha</p>
          <input class="form-input" onkeydown="return false" :value="dataTrip.fechainicio" :min="dataTrip.fechainicio"
            :max="dataTrip.fechafin" type="date" name="fecha" id="itemfecha" placeholder="fecha" />
        </label>
        <label class="form-field-container" for="hora">
          <p>Hora</p>
          <input class="form-input" onkeydown="return false" type="time" name="hora" id="itemhora" placeholder="hora"
            value="00:00:00" step="1" />
        </label>
        <label class="form-field-container" for="precio">
          <p>Precio</p>
          <input class="form-input" value="0" type="number" name="precio" id="itemprecio" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="ubicacionlatitud">
            <p>Ubicación latitud</p>
            <input class="form-input" value="0" type="number" name="ubicacionlatitud" id="itemubicacionlatitud" />
          </label>
          <label class="form-field-container" for="ubicacionlongitud">
            <p>Ubicación longitud</p>
            <input class="form-input" value="0" type="number" name="ubicacionlongitud" id="itemubicacionlongitud" />
          </label>
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button class="form-button" name="submit" type="submit">Añadir</button>
        <a href="#" @click.prevent="closeModal">X</a>
      </form>
    </div>
    <div v-else class="modal" @click.stop id="editItem-component">
      <h1 class="title">Editar Item</h1>
      <form class="form" action="" @submit.prevent="putItemsViaje">
        <label class="form-field-container" for="nombre">
          <p>Nombre</p>
          <input class="form-input" :value=dataItemTrip.nombre type="text" name="nombre" id="nombre" />
        </label>
        <label class="form-field-container" for="descripcion">
          <p>Descripción</p>
          <input class="form-input" :value=dataItemTrip.descripcion type="text" name="descripcion" id="descripcion" />
        </label>
        <label class="form-field-container" for="fecha">
          <p>Fecha</p>
          <input class="form-input" onkeydown="return false" :min="dataTrip.fechainicio" :max="dataTrip.fechafin"
            :value="dataItemTrip.fecha" type="date" name="fecha" placeholder="fecha" />
        </label>
        <label class="form-field-container" for="hora">
          <p>Hora</p>
          <input class="form-input" onkeydown="return false" :value=dataItemTrip.hora type="time" name="hora"
            placeholder="hora" step="1" />
        </label>
        <label class="form-field-container" for="precio">
          <p>Precio</p>
          <input class="form-input" :value=dataItemTrip.precio type="number" name="precio" id="precio" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="ubicacionlatitud">
            <p>Ubicación latitud</p>
            <input class="form-input" :value=dataItemTrip.ubicacionlatitud type="number" name="ubicacionlatitud"
              id="ubicacionlatitud" />
          </label>
          <label class="form-field-container" for="ubicacionlongitud">
            <p>Ubicación longitud</p>
            <input class="form-input" :value=dataItemTrip.ubicacionlongitud type="number" name="ubicacionlongitud"
              id="ubicacionlongitud" />
          </label>
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button class="form-button" name="submit" type="submit">Guardar</button>
        <a href="#" @click.prevent="closeModal">X</a>
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
  align-items: center;
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

input[type="time"],
input#precio {
  width: unset;
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
  gap: 1rem;
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