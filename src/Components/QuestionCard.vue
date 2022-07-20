<template>
    <div class="grid-container">      
        <div v-if="showEditCard" class="edit-grid-item">
            <form id="question-form" @submit.prevent>
                <!-- single input -->                
                <h5 class="text">Nombre</h5>
                    <input type="text" class="" id="Nombre-input" rows="3" v-model="noteNombreEdited" maxlength="45">
                <h5 class="">Fechainicio</h5>             
                    <input type="date" class="" id="fechainicio-input" rows="3" v-model="noteFechainicioEdited">          
                <h5 class="">Fechafin</h5>             
                    <input type="date" class="" id="Fechafin-input" rows="3" v-model="noteFechafinEdited">        
                <h5 class="">Descripcion</h5>              
                    <input type="text" class="" id="Descripcion-input" rows="3" v-model="noteDescripcionEdited" maxlength="500">
                    <div class="btnedit">
                      <button @click.prevent="submitEditNote" type="submit"
                    class="submitBtn">Guardar</button>
                <button @click.prevent="cancelEditNote" type="submit"
                    class="cancelBtn">Cancelar</button>
                <!-- end of single input -->              
            </div>
            </form>
        </div>

        <div v-else class="grid-item">           
            <div class="nombre"> 
         
            <a href="www.google.com" id="arrow-flashcard">
            <img src="public\Icons\arrow_forward_ios.svg"  id="icon-arrow" alt="icon arrow">
            </a>
             <a href="#" id="ubi-flashcard">
            <img src="  public\Icons\location-deco.svg" id="icon-ubi" alt="icon ubi">
            </a>    
           

             <h4 class="text-note-nombre" v-html="note.Nombre" ></h4>
             <a href="#" @click.prevent="editCard" id="edit-flashcard">
            <img src="public\Icons\edit.svg" id="icon-edit" alt="icon edit" class="icon">
            </a>   
            </div>
            <div class="fechainicio">
            <h2>fecha Inicio:</h2>
            <h2>Fecha Fin:</h2>
            </div>
            <div class="numerofecha">
             <h6  class="text-note">{{ note.Fechainicio }}</h6>
            <h6  class="text-note">{{ note.Fechafin }}</h6>
            </div>
            <div>
            <h2>descripcion</h2>
            </div>
            <div>
             <h6 class="text-note-desc">{{ note.Descripcion }}</h6>    
            </div>  
            <div>              
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
        note: Object
    },
    emits: ['delete', 'edit'],
    data() {
        return {
            showEditCard: false,
            showAnswer: false,
            noteNombreEdited: "",
            noteAnswerEdited: "",
            noteFechainicioEdited:"",
            noteFechafinEdited:"",
            noteDescripcionEdited:""
            
        }
    },
    methods: {
        submitEditNote() {
            this.$emit("edit", { id: this.note.id, newData: { Nombre: this.noteNombreEdited, Fechainicio: this.noteFechainicioEdited, Fechafin: this.noteFechafinEdited,Descripcion:this.noteDescripcionEdited } });

            this.showEditCard = !this.showEditCard;
            this.noteNombreEdited = "";
            this. noteFechainicioEdited ="";
            this. noteFechafinEdited = "";
            this.noteDescripcionEdited ="";
            
        },
        cancelEditNote() {
            this.noteNombreEdited = "";         
            this. noteFechainicioEdited ="";
            this. noteFechafinEdited = "";
            this.noteDescripcionEdited ="";
            this.showEditCard = !this.showEditCard;
        },
        editCard() {
            this.noteNombreEdited = this.note.Nombre;        
            this. noteFechainicioEdited =this.note.Fechainicio;
            this. noteFechafinEdited = this.note.Fechafin;
            this.noteDescripcionEdited =this.note.Descripcion;
            this.showEditCard = !this.showEditCard;
        },
        deleteCard() {
            this.$emit("delete", this.note.id);
        }
    }
}
</script>

<style>


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

    #cabecera-grid{
    display: flex;
    justify-content: space-between;   
    align-items: center;
    }

    #fin-grid{
        display: flex;
        justify-content: flex-end;
    }

    .text-note{
        margin-bottom: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        font-family: inherit;
    }

    #icon-edit{
     width: 24px;
    height: 24px;
    }



.icon {
    opacity: 0;
} 

.grid-item:hover .icon {
    opacity: 1;
}


.nombre{
     display: flex;
    justify-content: space-between;   
    align-items: center;
}


.fechainicio{
     display: flex;
    justify-content: space-between;   
    align-items: center;    
}

.numerofecha{
     display: flex;
    justify-content: space-between;   
    align-items: center;
    }

    #icon-ubi{
    height: 70px;
    }

   .obj{
    display: flex;
    justify-content: space-between;   
    align-items: center;
   }


</style>
