<template>
    <div class="grid-container">      
        <div v-if="showEditCard" class="edit-grid-item">
            <form id="question-form" @submit.prevent>
                <!-- single input -->                
                <h5 class="text-capitalize">Nombre</h5>
                    <textarea class="" id="Nombre-input" rows="3" v-model="noteQuestionEdited"></textarea>
                <h5 class="">Fechainicio</h5>             
                    <textarea class="" id="fechainicio-input" rows="3" v-model="noteAnswerEdited"></textarea>            
                <h5 class="">Fechafin</h5>             
                    <textarea class="" id="Fechafin-input" rows="3" v-model="noteAnswerEdited"></textarea>             
                <h5 class="">Presupuesto</h5>              
                    <textarea class="" id="Presupuesto-input" rows="3" v-model="noteAnswerEdited"></textarea>              
                <h5 class="">Descripcion</h5>              
                    <textarea class="" id="Descripcion-input" rows="3" v-model="noteAnswerEdited"></textarea>
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
            <h4 class="text-note-nombre" v-html="note.question" ></h4>
            <h5 class="text-note">{{ note.Nombre }}</h5>
            <h6  class="text-note">{{ note.Fechainicio }}</h6>
            <h6  class="text-note">{{ note.Fechafin }}</h6>
            <h6 class="text-note">{{ note.Presupuesto }}</h6>
            <h6 class=".text-note-desc">{{ note.Descripcion }}</h6>        
            <a href="#" @click.prevent="editCard" id="edit-flashcard"
            class="edit-flashcard text-uppercase" data-id="">Editar</a>
            <a href="#" @click.prevent="deleteCard" id="delete-flashcard"
            class="delete-flashcard text-uppercase">Borrar</a>
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
            noteQuestionEdited: "",
            noteAnswerEdited: ""
        }
    },
    methods: {
        submitEditNote() {
            this.$emit("edit", { id: this.note.id, newData: { question: this.noteQuestionEdited, answer: this.noteAnswerEdited } });

            this.showEditCard = !this.showEditCard;
            this.noteQuestionEdited = "";
            this.noteAnswerEdited = "";
        },
        cancelEditNote() {
            this.noteQuestionEdited = "";
            this.noteAnswerEdited = "";
            this.showEditCard = !this.showEditCard;
        },
        editCard() {
            this.noteQuestionEdited = this.note.question;
            this.noteAnswerEdited = this.note.answer;
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
  text-align: center; 
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
    }

.text-note-desc{
    font-family: inherit;
    }

</style>
