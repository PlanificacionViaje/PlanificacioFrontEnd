<template>
    <div class="grid-container">      
        <div class="grid-item"> 
            
            
            <div class="div-nombre"> 
                <div class="div-arrow-ubi">     
            <a href="www.google.com" id="arrow-flashcard">
            <img src="public\Icons\arrow_forward_ios.svg"  id="icon-arrow" alt="icon arrow">
            </a>            
            <img src="  public\Icons\location-deco.svg" id="icon-ubi" alt="icon ubi">           
            <h1 class="text-note-nombre" v-html="traveldata.nombre" ></h1>
            </div>  
            <!-- cierre div ubi -->
           
             <a href="#" @click.prevent="editCard" id="edit-flashcard">
            <img src="public\Icons\edit.svg" id="icon-edit" alt="icon edit" class="icon">
            </a>   
            </div>
               <!-- cierre div nombre -->

            <div class="div-fecha">
            <h2 class="text-mide">fecha Inicio:</h2>
            <h2  class="text-mide">Fecha Fin:</h2>
            </div>


            <div class="div-fechatravel">
            <h6  class="text-note">{{ traveldata.fechainicio }}</h6>
            <h6  class="text-note">{{ traveldata.fechafin }}</h6>
            </div>



            <div class="div-descripcion">
            <h2  class="text-mide">Descripción:</h2>
            </div>


            <div class="div-descripciontravel">
             <h6 class="text-note-desc">{{ traveldata.descripcion }}</h6>    
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
.grid-item {
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
}


.text-note-desc{
    font-family: inherit;
    overflow-wrap: break-word;
    margin-bottom: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;    
    }

   
    .text-note{
       font-size: 18px;
        font-family: inherit;
    }

    #icon-edit{
     width: 24px;
    height: 24px;
    }


/* animacion icones (delete y edit) */
.icon {
    opacity: 0;
} 
.grid-item:hover .icon {
    opacity: 1;
}


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


    #icon-ubi{
    height: 70px;
    }


    
    .text-mide{
        font-size: 30px;
         font-family: inherit;
    }

    .text-note-nombre{
        font-size: 40px;
        font-family: inherit;
    }

   

</style>
