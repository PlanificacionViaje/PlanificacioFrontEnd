<template>
    <h3 class="titulo">Mis Viajes </h3>
    <button v-if="!showAddCard" @click.prevent="showAddCard = !showAddCard" class="btnshowAddCard"
        id="show-btn">Añadir <span class="material-symbols-outlined">add</span></button>        
    <div v-else class="card-box">
        <!-- close btn -->
        <a href="#" class="butonx" @click.prevent="cancelNewNote">
            X
        </a>
        <!-- end of close btn -->
        <div v-show="showAlertMsg" class="alert">
            No puedes dejar la tarjeta vacia
        </div>


        <form id="question-form" @submit.prevent="addNewNote">
            <!-- single input -->
            <h5 class="text">Nombre</h5>
            <div class="">
                <input type="text" class="inputsubmit" v-model="noteNombre" maxlength="45">
            </div>
            <!-- end of single input -->
            <!-- single input -->
            <h5 class="text">Fechainicio</h5>
            <div class="">
                <input type="date" class="inputsubmit" v-model="noteFechainicio">
            </div>
            <!-- end of single input -->
             <!-- single input -->
            <h5 class="text">Fechafin</h5>
            <div class="">
                <input type="date" class="inputsubmit" v-model="noteFechafin">
            </div>
            <!-- end of single input -->
             <!-- single input -->
            <h5 class="text">Presupuesto</h5>
            <div class="">
                <input type="" class="inputsubmit" v-model="notePresupuesto">
            </div>
            <!-- end of single input -->


             <!-- single input -->
            <h5 class="text">Descripción</h5>
            <div class="">
                <input type="text" class="inputsubmit" v-model="noteDescripcion" maxlength="500">
            </div>


            
            <!-- end of single input -->
            <button type="submit" class="submitBtn">Guardar</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['newNote'],
    data() {
        return {
            showAddCard: false,
            showAlertMsg: false,
            noteNombre: "",
            noteFechainicio: "",
            noteFechafin: "",
            notePresupuesto: "",
            noteDescripcion: ""
        }
    },
    methods: {
        addNewNote() {
            if (this.noteNombre.trim() == ""  || this.noteFechainicio.trim() == "" || this.noteFechafin.trim() == "" || this.notePresupuesto.trim() == "" || this.noteDescripcion.trim() == "") {
                this.showAlertMsg = true;

                setTimeout(() => {
                    this.showAlertMsg = false;
                }, 2000);

                return;
            }

            this.$emit("newNote", { Nombre: this.noteNombre, Fechainicio: this.noteFechainicio, Fechafin: this.noteFechafin, Presupuesto: this.notePresupuesto, Descripcion:this.noteDescripcion });
            this.showAddCard = !this.showAddCard;
            this.noteNombre = this.noteNombre = "";
            this.noteFechainicio = this.noteFechainicio="";
            this.noteFechafin = this.noteFechafin="";
            this.notePresupuesto = this.noteFechainicio="";
            this.noteDescripcion = this.noteDescripcion="";
            
        },
        cancelNewNote() {
            this.showAddCard = !this.showAddCard;
            this.noteNombre = this.noteNombre = "";
            this.noteFechainicio = this.noteFechainicio="";
            this.noteFechafin = this.noteFechafin="";
            this.notePresupuesto = this.notePresupuesto="";
            this.noteDescripcion = this.noteDescripcion="";
        }
    }
}
</script>

<style>

.titulo {
    display: flex;
    justify-content: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #FFFFFF;
    text-shadow: 2px 4px 2px #000000; 
    }
    .card-box {
        display: flex;
        justify-content: center;
        background-color:#FDE74C;
        filter: drop-shadow(5px 7px 2px #000000);
        border-radius: 42px;  


    }
    
</style>