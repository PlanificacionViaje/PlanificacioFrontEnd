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
    viajeData: Object,
  },
  computed: {
    fechainicio() {
      const fecha = new Date(this.viajeData.fechainicio);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
    fechafin() {
      const fecha = new Date(this.viajeData.fechafin);
      return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
    },
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    randomBackgroundColor() {
      const colors = ["#FDE74C", "#C3BEF7", "#E6AACE", "#80ED99"];
      let RandomIndex = this.getRandomInt(colors.length);
      return colors[RandomIndex];
    },
  },
};
</script>

<template>
  <div class="tarjeta-viaje" :style="{ backgroundColor: randomBackgroundColor() }">
    <h2 class="viaje-title">{{ viajeData.nombre }}</h2>
    <div class="fechas">
      <div class="fecha fecha-inicio">
        <p class="mes">{{ fechainicio.mes }}</p>
        <p class="dia">{{ fechainicio.dia }}</p>
      </div>
      <p class="fecha-arrow">&#9992;</p>
      <div class="fecha fecha-inicio">
        <p class="mes">{{ fechafin.mes }}</p>
        <p class="dia">{{ fechafin.dia }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tarjeta-viaje {
  overflow-wrap: break-word;
  padding: 2.5rem 1.5rem;
  max-width: 260px;
  border-radius: 20px;
  filter: drop-shadow(5px 7px 2px #00000054);
  background-color: orange;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2.5rem;
}

.viaje-title {
  margin: 0;
  text-align: center;
  font-size: 45px;
}

.fechas {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
}

.fecha-arrow {
  font-size: 2rem;
  margin: 0;
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

.descripcion {
  text-align: center;
}
</style>