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
                <h5 class="">Presupuesto</h5>              
                    <input type="" class="" id="Presupuesto-input" rows="3" v-model="notePresupuestoEdited">            
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
            <section id="cabecera-grid">           
            <p> icono </p>  
             <h4 class="text-note-nombre" v-html="note.Nombre" ></h4>
            <a href="#" @click.prevent="editCard" id="edit-flashcard">
            <img src="public\Icons\edit.svg" id="icon-edit"  alt="icon delete">
            </a>       
            </section>

            <!-- <h5 class="text-note">{{ note.Nombre }}</h5> -->
            <h6  class="text-note">{{ note.Fechainicio }}</h6>
            <h6  class="text-note">{{ note.Fechafin }}</h6>
            <h6 class="text-note">{{ note.Presupuesto }}</h6>
            <h6 class="text-note-desc">{{ note.Descripcion }}</h6>        
            
            <section id="fin-grid">
            <a href="#" @click.prevent="deleteCard" id="delete-flashcard">
            <img src="public\Icons\delete.svg"  id="icon-delete" alt="icon delete" >
            </a>
            </section>



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
            notePresupuestoEdited:"",
            noteDescripcionEdited:""
            
        }
    },
    methods: {
        submitEditNote() {
            this.$emit("edit", { id: this.note.id, newData: { Nombre: this.noteNombreEdited, Fechainicio: this.noteFechainicioEdited, Fechafin: this.noteFechafinEdited,Presupuesto:this.notePresupuestoEdited,Descripcion:this.noteDescripcionEdited } });

            this.showEditCard = !this.showEditCard;
            this.noteNombreEdited = "";
            this. noteFechainicioEdited ="";
            this. noteFechafinEdited = "";
            this.notePresupuestoEdited ="";
            this.noteDescripcionEdited ="";
            
        },
        cancelEditNote() {
            this.noteNombreEdited = "";         
            this. noteFechainicioEdited ="";
            this. noteFechafinEdited = "";
            this.notePresupuestoEdited ="";
            this.noteDescripcionEdited ="";
            this.showEditCard = !this.showEditCard;
        },
        editCard() {
            this.noteNombreEdited = this.note.Nombre;        
            this. noteFechainicioEdited =this.note.Fechainicio;
            this. noteFechafinEdited = this.note.Fechafin;
            this.notePresupuestoEdited =this.note.Presupuesto;
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: start; 
  margin-top: 10px;
  filter: drop-shadow(5px 7px 2px #000000);
  border-radius: 24px;
  min-height: 430px;
  width: 270px;
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



#icon-edit { opacity: 0; } 
#icon-edit:hover { opacity: 1.0; } 
</style>
