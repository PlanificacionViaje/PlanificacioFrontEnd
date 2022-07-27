
<script>


export default {
  data() {
    return {
      //base cartas
    
            backgroundColor:"lightgrey" ,
            
      nextId: 1,
       randomColor: "#ff0000",
      GranViaje:0,
      notes: [{
        id: 0,
        Nombre: "Roma",
        Fechainicio: new Date (2022, 7, 10),
        Fechafin: new Date (2022, 7, 15),
        Presupuesto:"13030€",
        Descripcion:"Roma es una ciudad italiana, capital de la región del Lacio y de Italia. Con una población de 2 815 951 habitantes,​ es el municipio más poblado de Italia y la tercera ciudad más poblada de la Unión Europea.​ Por antonomasia, se la conoce desde la Antigüedad como la Urbe (Urbs).",
        open: false,
        dias: 0
      }, {
        id: 1,
        Nombre: "Tailandia",
        Fechainicio: new Date (2022, 7, 14),
        Fechafin: new Date (2022, 8, 1),
        Presupuesto:"1300€",
        Descripcion:"Tailandia, es un país del Sudeste Asiático que limita con Camboya y Laos al este, Myanmar al oeste y Malasia al sur. La costa oriental asoma al golfo de Tailandia y la occidental está bañada por el mar de Andamán",
        open: false,
        dias: 0
      },{
        id: 2,
        Nombre: "Puerto Rico",
        Fechainicio: new Date (2022, 12, 6),
        Fechafin: new Date (2022, 12, 8),
        Presupuesto:"240€",
        Descripcion:"Puerto Rico, oficialmente Estado Libre Asociado de Puerto Rico, es un territorio no incorporado de los Estados Unidos con estatus de autogobierno, situado al noreste del Caribe, al este de la República Dominicana y al oeste de las Islas Vírgenes.",
        open: false,
        dias: 0
      }],
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
      
      
    }
  },
  methods: {
    
    // increaseDays(){
      
    //   for (let index = 0; index < GranViaje; index++) {

    //       document.getElementById('dia').innerHTML = "Day "+ index;
    //   }
       
    // }
    // ,

//rgb(244, 176, 151), rgb(24, 230, 181), rgb(107, 232, 140), rgb(225, 207, 213), rgb(61, 170, 201), rgb(172, 233, 150), rgb(104, 137, 152), rgb(132, 183, 54), rgb(244, 217, 29), rgb(170, 103, 113),
// rgb(94, 212, 164), rgb(198, 99, 130, rgb(47, 220, 7), rgb(210, 165, 86), rgb(250, 53, 77), rgb(158, 144, 185) 


randomBackgroundColor() {
     const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length !== 7) {
        return this.generateRandomHexColor();
      } else {
        return randomColor;
      }
    },
fechainicio(GranViaje) {
      const fecha = new Date(this.notes[GranViaje].Fechainicio);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
    fechafin(GranViaje) {
      const fecha = new Date(this.notes[GranViaje].Fechafin);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
    countDays(GranViaje){
      let Difference_In_Time = this.notes[GranViaje].Fechafin.getTime() - this.notes[GranViaje].Fechainicio.getTime() ;
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.notes[GranViaje].dias = Difference_In_Days;   
      return this.notes[GranViaje].dias;       
    },
     toggleOpen: function (index) {
      this.notes = this.notes.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
    addNewNote(note) {
      this.notes.push({ id: this.nextId++, ...note });
      this.updateLocalStorage();
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id != id);
      this.updateLocalStorage();
    },
    editNote(data) {
      const target = this.notes.find(note => note.id == data.id);

      target.Nombre = data.newData.Nombre;
      target.Fechainicio = data.newData.Fechainicio;
      target.Fechafin = data.newData.Fechafin;
      target.Presupuesto = data.newData.Presupuesto;
      target.Descripcion = data.newData.Descripcion;

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.notes = JSON.stringify(this.notes);
      localStorage.nextId = this.nextId;
    }
  },
  mounted() {
    if (localStorage.notes) {
      this.notes = JSON.parse(localStorage.notes);
    }
    if (localStorage.nextId) {
      this.nextId = localStorage.nextId;
    }
  },

  
}
</script>

<template>


    <div  class="travel-block">
     

<ul>

  <li id="lista" :style="{ backgroundColor: randomBackgroundColor() }"  v-for="item in notes">

  
 

    <input type="checkbox" checked>
    

 
    <h2 class="title-second">{{item.Nombre}}</h2>

    <a href="#" @click.prevent="editCard" id="edit-flashcard">
            <img src="public\Icons\edit.svg" id="icon-edit" alt="icon edit" class="icon">
            </a>


    <p>{{item.Descripcion}}
              

               <div class="div-fecha">
            <h3 class="text-subtitle">Fecha Inicio:</h3>
            <h3  class="text-subtitle">Fecha Fin:</h3>
            </div>


            <div class="div-fechatravel">
            <div class="fecha fecha-inicio">
             <p class="mes">{{ fechainicio(item.id).mes }}</p>
             <p class="dia">{{ fechainicio(item.id).dia }}</p>
             </div>

            <div class="fecha fecha-inicio">
            <p class="mes">{{ fechafin(item.id).mes }}</p>
            <p class="dia">{{ fechafin(item.id).dia }}</p>
            </div>
            
            </div>

    </p>
    <p>Duración del viaje: {{countDays(item.id)}} dias</p>
    <p>Presupuesto disponible: {{item.Presupuesto}}</p>

  <a href="#" @click.prevent="deleteCard" id="delete-flashcard">
            <img src="public\Icons\delete.svg"  id="icon-delete" alt="icon delete" class="icon">
            </a>
</li>


</ul>


  <div class="">
      <div class="">
        <AddQuestion @newNote="(note) => addNewNote(note)" />
      </div>
    </div>

    <div class="" id="questions-list">
      <QuestionCard v-for="note in notes" :key="note.id" :note="note" :noteQuestion="note.question"
        @delete="(id) => deleteNote(id)" @edit="(data) => editNote(data)" />
        
    </div>

    </div>

<!-- Mostrando todos los dias de viaje  -->



           
<!-- <div class="tablaDias">
  <h1 class="country">{{notes[GranViaje].Nombre}}{{result}}</h1>
  <section class="day" v-for=" index in countDays(GranViaje)">Day {{index}}
    <button @click="collapse()" type="button" class="collapsible" >
  </button>
  <div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>  
  
  </section>
</div>
 -->

</template>




<style>


.travel-block{
  margin-left: 10%;
  margin-right: 10%;
  color: black;
  display: flex;
  justify-content: center;

  
}

.div-fecha{
     display: flex;
    justify-content: space-evenly;   
    align-items: center;  
    color: black;  
    
}

.div-fechatravel{
     display: flex;
    justify-content: space-evenly;   
    align-items: center;
    
    }

.fecha {
  
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.8) 2px 2px 2px;
  border-radius: 10px;
}

.fecha p {
  margin: 0;
  width: 100%;
  font-family: 'Inter', sans-serif;
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

.icon {
    opacity: 0;
} 
.travel-block:hover .icon {
    opacity: 1;
}

#icon-edit{
  margin-left: 80%;
}

.country{
  display: flex;
  justify-content: center;
}
.dias{
  padding: 50px;
  margin-left: 15%;
  margin-right: 15%;
  /* box-shadow: 0px 0px 10px 0px #333 inset;
  border-radius: 5%; */
}

.transition, ul li i:before, ul li i:after, p {
  transition: all 0.25s ease-in-out;
}

.flipIn, ul li, h1 {
  animation: flipdown 0.5s ease both;
}

.no-select, h2 {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
h1, .title-second {
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 1;
}

h1 {
  text-transform: uppercase;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 3px;
  font-weight: 10;
}

.title-second{
  font-size: 6vh;
  line-height: 34px;
  font-weight: 2000;
  width: 102%;
  letter-spacing: 1px;
  display: flex;  
  justify-content: center;
  cursor: pointer;
}

p {
  color: black;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
}

ul {
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
  
}
ul li {
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
  padding-top: 18px;
  border-top: 1px dotted #dce7eb;
  border-radius: 24px;
  
}

ul li:last-of-type {
  padding-bottom: 0;
}
ul li i {
  position: absolute;
  transform: translate(-6px, 0);
  margin-top: 16px;
  right: 0;
}
ul li i:before, ul li i:after {
  content: "";
  position: absolute;
  
  width: 3px;
  height: 9px;
  
}
ul li i:before {
  transform: translate(-2px, 0) rotate(45deg);
}
ul li i:after {
  transform: translate(2px, 0) rotate(-45deg);
}
ul li input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}
ul li input[type=checkbox]:checked ~ p {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}
ul li input[type=checkbox]:checked ~ i:before {
  transform: translate(2px, 0) rotate(45deg);
}
ul li input[type=checkbox]:checked ~ i:after {
  transform: translate(-2px, 0) rotate(-45deg);
}

ul li p {
  margin-left: 7%;
  margin-right: 7%;
  }

@keyframes flipdown {
  0% {
    opacity: 0;
    transform-origin: top center;
    transform: rotateX(-90deg);
  }
  5% {
    opacity: 1;
  }
  80% {
    transform: rotateX(8deg);
  }
  83% {
    transform: rotateX(6deg);
  }
  92% {
    transform: rotateX(-3deg);
  }
  100% {
    transform-origin: top center;
    transform: rotateX(0deg);
  }
}
</style>
