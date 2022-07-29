<script setup>
import TripModal from "@/Components/TripModal.vue";
import ItemTripModal from "@/Components/ItemTripModal.vue";
import DeleteTripModal from "@/Components/DeleteTripModal.vue";
import Travels from "@/Components/travel/Travels.vue";
</script>
<script>
import * as crud from "@/utils/axiosFunctions.js";
export default {
  data() {
    return {
      //Modal Trip
      displayNewEditTripModal: false,
      //Modal Trip Delete
      displayDeleteTripModal: false,
      //Modal Item Trip
      displayNewEditItemTripModal: false,

      traveldata: null,
      ARRAY_MESES: [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN",
        "JUL",
        "AGO",
        "SEP",
        "OCT",
        "NOV",
        "DIC",
      ],
    };
  },
  props: {
    idTrip: Number,
    //Se necesita pasarle el id usuario para crear nuevo viaje
    idUsuario: Number,
  },
  computed: {
    fechainicio() {
      const fecha = new Date(this.traveldata.fechainicio);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
    fechafin() {
      const fecha = new Date(this.traveldata.fechafin);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
  },
  methods: {
    loadDataTrip() {
      crud
        .getViajeById(this.idTrip)
        .then((response) => {
          console.log(response.data.data);
          if (response.data.status == 200) {
            this.traveldata = response.data.data;
            console.log(this.traveldata.nombre);
          }
        })
        .catch((error) => crud.handleError(error));
    },
  },
  created() {
    this.loadDataTrip();
  },
};
</script>

<template>
  <div class="grid-container" v-if="traveldata">
    <div class="grid-item">
      <div class="div-nombre">
        <div class="div-arrow-ubi">
          <!-- <a href="www.google.com" id="arrow-flashcard">
            <img src="/Icons/arrow_forward_ios.svg" id="icon-arrow" alt="icon arrow" />
          </a> -->
          <img src="  /Icons/map.png" id="icon-ubi" alt="icon ubi" />
          <h1 class="text-title" v-html="traveldata.nombre"></h1>
        </div>
        <!-- cierre div ubi -->

        <a href="#" @click="displayNewEditTripModal = true" id="edit-flashcard">
          <img
            src="/Icons/edit.svg"
            id="icon-edit"
            alt="icon edit"
            class="icon"
          />
        </a>
      </div>
      <!-- cierre div nombre -->

      <div class="div-fecha">
        <h2 class="text-subtitle">fecha Inicio:</h2>
        <h2 class="text-subtitle">Fecha Fin:</h2>
      </div>

      <div class="div-fechatravel">
        <div class="fecha fecha-inicio">
          <p class="mes">{{ fechainicio.mes }}</p>
          <p class="dia">{{ fechainicio.dia }}</p>
        </div>

        <div class="fecha fecha-inicio">
          <p class="mes">{{ fechafin.mes }}</p>
          <p class="dia">{{ fechafin.dia }}</p>
        </div>
      </div>

      <div class="div-descripcion">
        <h2 class="text-subtitle">Descripción:</h2>
      </div>

      <div class="div-descripciontravel">
        <p class="text-desc">{{ traveldata.descripcion }}</p>
      </div>

      <div class="div-delete">
        <a
          href="#"
          @click="displayDeleteTripModal = true"
          id="delete-flashcard"
        >
          <img
            src="/Icons/delete.svg"
            id="icon-delete"
            alt="icon delete"
            class="icon"
          />
        </a>
      </div>
    </div>
  </div>
  <button class="button-add" @click="displayNewEditItemTripModal = true">
    <p>Añadir un item</p>
    <img class="img-button" src="plus.png" alt="" />
  </button>
  <TripModal
    v-if="traveldata"
    :newEditTrip="false"
    :displayNewEditTripModal="displayNewEditTripModal"
    :dataTrip="traveldata"
    @closeTripModal="displayNewEditTripModal = false"
  />
  <DeleteTripModal
    v-if="traveldata"
    :displayDeleteTripModal="displayDeleteTripModal"
    :dataTrip="traveldata"
    @closeTripModal="displayDeleteTripModal = false"
  />
  <ItemTripModal
    v-if="traveldata"
    :newEditItemTrip="true"
    :displayNewEditItemTripModal="displayNewEditItemTripModal"
    :dataTrip="traveldata"
    :dataItemTrip="{}"
    @closeTripModal="displayNewEditItemTripModal = false"
  />

  <Travels v-if="traveldata" :travelId="traveldata.id" />
</template>

<style scoped>
h2,
.text-desc {
  color: black;
}

.fecha p {
  margin: 0;
  width: 100%;
}

.fecha .mes {
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 5px 0;
  background-color: rgb(220, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
}

.fecha .dia {
  background-color: white;
  color: black;
  font-size: 1.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%;
  text-align: center;
  line-height: 40px;
}

/* textos de la pagina */

.text-title {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  letter-spacing: 0.5rem;
  align-items: center;
}

.text-desc {
  font-size: 18px;
  font-family: "Inter", sans-serif;
}

/* animacion icones (delete y edit) */
.icon {
  opacity: 0;
}

.grid-item:hover .icon {
  opacity: 1;
}

/* iconos de la pagina */
#icon-ubi {
  height: 70px;
}

#icon-edit {
  width: 24px;
  height: 24px;
}

/* div de la pagina */
.div-nombre {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.div-arrow-ubi {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.div-fecha {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: slategray;
}

.div-fechatravel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.grid-container {
  padding: 10px;
  gap: 20px;
  margin: 10px;
  background-color: #fde74c;
  border-radius: 24px;
}

.button-add {
  margin: auto;
  background-color: orange;
  border: none;
  width: 30vw;
  min-width: 350px;
  min-height: 60px;
  height: 5vh;
  box-shadow: rgb(255, 255, 255) 5px 5px, rgba(2255, 255, 255, 0.3) 10px 10px,
    rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px,
    rgba(255, 255, 255, 0.05) 25px 25px;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

/* tamaño tablet */
@media (max-width: 915px) {
  .grid-container {
    padding: 10px;
    gap: 20px;
    margin: 10px;
    min-height: 302px;
    max-width: 700px;
    background-color: #fde74c;
  }

  /* div de la pagina */
  .div-nombre {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
  }

  .div-arrow-ubi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    max-width: 700px;
  }

  .div-fecha {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
  }

  .div-fechatravel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
  }

  #icon-ubi {
    height: 50px;
  }

  .grid-container {
    margin: 10px;
  }
}
</style>
