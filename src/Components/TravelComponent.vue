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
            <h6  class="text-desc">{{ traveldata.fechainicio }}</h6>
            <h6  class="text-desc">{{ traveldata.fechafin }}</h6>
            </div>



            <div class="div-descripcion">
            <h2  class="text-subtitle">Descripción:</h2>
            </div>


            <div class="div-descripciontravel">
             <h6 class="text-desc">{{ traveldata.descripcion }}</h6>    
            </div>  


            <div class="div-delete">              
            <a href="#" @click.prevent="deleteCard" id="delete-flashcard">
            <img src="public\Icons\delete.svg"  id="icon-delete" alt="icon delete" class="icon">
            </a>
            </div>    
            
            
        </div>          
    </div>
   
</template>
<script>
export default {
    props: {
        traveldata: Object
    }, 
 }

</script>

<style scoped>

/* textos de la pagina */

  .text-title{
    font-size: 40px;
    font-family: 'Inter', sans-serif;
}

   .text-subtitle{
        font-size: 30px;
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
     display: flex;
    justify-content: space-between;   
    align-items: center;
}

 .div-arrow-ubi{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 610px;
    }


.div-fecha{
     display: flex;
    justify-content: space-between;   
    align-items: center;    
}

.div-fechatravel{
     display: flex;
    justify-content: space-between;   
    align-items: center;
    }
  

  /* divs gordos */

  /* .grid-item {
  padding: 20px;
  font-size: 30px;
}


.edit-grid-item{
background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center; 
  margin-top: 10px;
  filter: drop-shadow(5px 7px 2px #000000);
  border-radius: 24px;
} */


/* tamaño tablet */
@media (max-width: 915px) {


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

 .text-title{
    font-size: 35px;
    font-family: 'Inter', sans-serif;
}

}




</style>
