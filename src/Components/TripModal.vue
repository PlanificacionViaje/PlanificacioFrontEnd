<script>
import * as crud from "@/axios/axiosFunctions.js";
export default {
  data() {
    return {    
      fechainicio:"",
      errorMessage:"",
    };
  },
  methods: {  
    checkDataForm(form){
      if(form.get("nombre").trim()==""){
        this.errorMessage="Nombre no puede estar vacío.";
        return false;
      }
      if(form.get("fechainicio")=="" || form.get("fechafin")==""){
        this.errorMessage="Fecha inicio o fecha final no puede estar vacía.";
        return false;
      } 
      return true;
    },
    postViaje(e) {
      const formData = new FormData(e.target);
      formData.append("idusuarios",this.idUsuario);
      this.checkDataForm(formData);
      if(!this.checkDataForm(formData)){
        return;
      }
      crud
        .postViaje(formData)
        .then((response) =>{ 
        console.log(response);
        this.closeModal();
        })
        .catch((error) => crud.handleError(error));
    },
    putViaje(e) {
      const formData = new FormData(e.target);
      formData.append("idusuarios",this.idUsuario);
      formData.append("id",this.dataTrip.id);
      if(!this.checkDataForm(formData)){
        return;
      }
      crud
        .putViaje(formData)
        .then((response) =>{ 
        //console.log(response)        
        this.closeModal();
        })
        .catch((error) => crud.handleError(error));
    },
    cleanElements(){
      document.querySelector("#TripNewnombre").value="";
      document.querySelector("#TripNewdescripcion").value="";
      document.querySelector("#TripNewfechainicio").value="";
      document.querySelector("#TripNewfechafin").value="";
    },
    closeModal(){
      if(this.newEditTrip){this.cleanElements();}
      this.errorMessage="";
      this.fechainicio="";
      this.$emit('closeTripModal');
    },
    changeOfEditfechainicio(e){
      var fechainicio=document.querySelector("#EditTripfechainicio");
      var fechainicioDate=new Date (fechainicio.value);
      var fechafin=document.querySelector("#EditTripfechafin");
      var fechafinDate=new Date (fechafin.value);      
      if(fechainicioDate.getTime()>fechafinDate.getTime()){
        fechafin.value=fechainicio.value;
      }
      fechafin.setAttribute('min',fechainicio.value);
    }
  },
  props:{
    idUsuario: Number,
    dataTrip:{},   
    //Displays
    newEditTrip:Boolean, 
    displayNewEditTripModal: Boolean,  
  },
   watch: {
        errorMessage: function(value) {
          setTimeout(() => {
            this.errorMessage = "";
          }, 6000);
        }
  },
};
</script>

<template>
  <div class="modal-background" v-show="displayNewEditTripModal" @click.prevent="closeModal">
    <div v-if="newEditTrip" class="modal"  @click.stop id="newTrip-component">
    <h1 class="title">Nuevo viaje</h1>
        <form class="form" action="" @submit.prevent="postViaje">
        <label class="form-field-container" for="nombre">
          <p>Nombre</p>
          <input class="form-input" type="text" name="nombre" id="TripNewnombre" />
        </label>
        <label class="form-field-container" for="fechainicio">
          <p>Fecha Inicio</p>
          <input class="form-input" onkeydown="return false" v-model="fechainicio" type="date" name="fechainicio" id="TripNewfechainicio" />
        </label>
        <label class="form-field-container" for="fechafin">
          <p>Fecha Fin</p>
          <input class="form-input" onkeydown="return false" :value=fechainicio :min=fechainicio type="date" name="fechafin" id="TripNewfechafin" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="descripcion">
            <p>Descripción</p>
            <textarea rows="4" class="form-input" type="textarea" name="descripcion" id="TripNewdescripcion" />
          </label>
          
          <button class="form-button" type="submit">Añadir</button>
        </div>
        <p v-if="errorMessage" class="error-message blink_me">{{errorMessage}}</p>
        <a href="#" @click.prevent="closeModal">X</a>
      </form>       
    </div>
    <div v-else class="modal"  @click.stop id="editTrip-component">      
      <h1 class="title">Editar viaje</h1>
      <form class="form" action="" @submit.prevent="putViaje">
        <label class="form-field-container" for="nombre">
          <p>Nombre</p>
          <input class="form-input" :value=dataTrip.nombre type="text" name="nombre" id="nombre" />
        </label>
        <label class="form-field-container" for="fechainicio">
          <p>Fecha Inicio</p>
          <input class="form-input" onkeydown="return false" :value=dataTrip.fechainicio type="date" name="fechainicio" id="EditTripfechainicio"  @change="changeOfEditfechainicio"/>
        </label>
        <label class="form-field-container" for="fechafin">
          <p>Fecha Fin</p>
          <input class="form-input" onkeydown="return false" :value=dataTrip.fechafin :min=dataTrip.fechainicio  type="date" name="fechafin" id="EditTripfechafin" />
        </label>
        <div class="flexedElements">
          <label class="form-field-container" for="descripcion">
            <p>Descripción</p>
            <textarea rows="4" class="form-input" :value=dataTrip.descripcion type="textarea" name="descripcion" id="descripcion" />
          </label>
          <p v-if="errorMessage" class="error-message blink_me">{{errorMessage}}</p>
          <button class="form-button" type="submit">Guardar</button>
        </div>         
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

.blink_me {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>