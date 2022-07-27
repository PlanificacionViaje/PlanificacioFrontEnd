<script setup>
import Travels from "./travel/Travels.vue";
</script>

<template>
 
    <div class="grid-container">      
        <div class="grid-item"> 
            
            
            <div class="div-nombre"> 
                <div class="div-arrow-ubi">     
            <a href="www.google.com" id="arrow-flashcard">
            <img src="public\Icons\arrow_forward_ios.svg"  id="icon-arrow" alt="icon arrow">
            </a>            
            <img src="  public\Icons\location-deco.svg" id="icon-ubi" alt="icon ubi">           
            <h1 class="text-title" v-html="traveldata.nombre" ></h1>
            </div>  
            <!-- cierre div ubi -->
           
             <a href="#" @click.prevent="editCard" id="edit-flashcard">
            <img src="public\Icons\edit.svg" id="icon-edit" alt="icon edit" class="icon">
            </a>   
            </div>
               <!-- cierre div nombre -->

            <div class="div-fecha">
            <h2 class="text-subtitle">fecha Inicio:</h2>
            <h2  class="text-subtitle">Fecha Fin:</h2>
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
            <h2  class="text-subtitle">Descripción:</h2>
            </div>


            <div class="div-descripciontravel">
             <p class="text-desc">{{ traveldata.descripcion }}</p>    
            </div>  


            <div class="div-delete">              
            <a href="#" @click.prevent="deleteCard" id="delete-flashcard">
            <img src="public\Icons\delete.svg"  id="icon-delete" alt="icon delete" class="icon">
            </a>
            </div>   
        </div>          
    </div>
 <Travels />
</template>

<script>
export default {
     data() {
    return {
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
        traveldata: Object
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
 }
}



</script>

<style scoped>


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

  .text-title{
    font-family: 'Inter', sans-serif;
}



   
    .text-desc{
       font-size: 18px;
       font-family: 'Inter', sans-serif;
    }

   


/* animacion icones (delete y edit) */
.icon {
    opacity: 0;
} 
.grid-item:hover .icon {
    opacity: 1;
}


/* iconos de la pagina */
#icon-ubi{
 height: 70px;
 }


 #icon-edit{
    width: 24px;
    height: 24px;
    }

/* div de la pagina */
.div-nombre{
    width: 100%;
    height: 100%;
     display: flex;
     justify-content: space-around;   
     align-items: center;
}

 .div-arrow-ubi{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }


.div-fecha{
     display: flex;
    justify-content: space-evenly;   
    align-items: center;    
    color:slategray;
}

.div-fechatravel{
     display: flex;
    justify-content: space-evenly;   
    align-items: center;
    }

.grid-container{
  padding: 10px;
  gap: 20px;
  margin: 10px;
  background-color: #FDE74C;
  border-radius: 24px;
}





/* tamaño tablet */
@media (max-width: 915px) {
.grid-container {
  padding: 10px;
  gap: 20px;
  margin: 10px;
  min-height: 302px;
  max-width: 700px;
  background-color: #FDE74C;
}

/* div de la pagina */
.div-nombre{
     display: flex;
    justify-content: space-between;   
    align-items: center;
    max-width: 700px;
   
}

 .div-arrow-ubi{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 100px;
        max-width: 700px;
    }


.div-fecha{
     display: flex;
    justify-content: space-between;   
    align-items: center;   
    max-width: 700px; 
}

.div-fechatravel{
     display: flex;
    justify-content: space-between;   
    align-items: center;
    max-width: 700px;
    }


#icon-ubi{
 height: 50px;
 }

.grid-container{
    margin: 10px;
}
}




</style>
