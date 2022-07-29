<script>
import * as crud from "@/utils/axiosFunctions.js";
import TravelItemComponent from "./TravelItemComponent.vue";

export default {
  props: {
    travelId: Number,
  },
  data() {
    return {
      //base cartas
      traveldata: null,
      backgroundColor: "lightgrey",
      randomColor: "#ff0000",
      dataItemTrip: [],
    };
  },
  methods: {
    randomBackgroundColor() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length !== 7) {
        return this.generateRandomHexColor();
      } else {
        return randomColor;
      }
    },
    loadDataTrip() {
      crud
        .getViajeById(this.travelId)
        .then((response) => {
          if (response.data.status == 200) {
            this.traveldata = response.data.data;
            this.loadDataTripItems();
          }
        })
        .catch((error) => crud.handleError(error));
    },
    loadDataTripItems() {
      crud
        .getAllItemsViajeFromViaje(this.travelId)
        .then((response) => {
          if (response.data.status == 200) {
            this.dataItemTrip = response.data.data;
          }
        })
        .catch((error) => crud.handleError(error));
    }
  },
  created() {
    this.loadDataTrip();
  },

  components: { TravelItemComponent },
};
</script>

<template>
  <TravelItemComponent v-for="item in dataItemTrip" :key="item.id" :item="item" :traveldata="traveldata"
    @deleteCorrect="loadDataTripItems" />
</template>

<style scoped>
.travel-block {
  margin-left: 10%;
  margin-right: 10%;
  color: black;
  display: flex;
  justify-content: center;
}

.div-fecha {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
}

.div-fechatravel {
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
  font-family: "Inter", sans-serif;
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

#icon-edit {
  margin-left: 80%;
}

.country {
  display: flex;
  justify-content: center;
}

.dias {
  padding: 50px;
  margin-left: 15%;
  margin-right: 15%;
  /* box-shadow: 0px 0px 10px 0px #333 inset;
  border-radius: 5%; */
}

.transition,
ul li i:before,
ul li i:after,
p {
  transition: all 0.25s ease-in-out;
}

.flipIn,
ul li,
h1 {
  animation: flipdown 0.5s ease both;
}

.no-select,
h2 {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1,
.title-second {
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 1;
}

h1 {
  text-transform: uppercase;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 3px;
  font-weight: 10;
}

.title-second {
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

ul li i:before,
ul li i:after {
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

ul li input[type="checkbox"] {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
}

ul li input[type="checkbox"]:checked~p {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
}

ul li input[type="checkbox"]:checked~i:before {
  transform: translate(2px, 0) rotate(45deg);
}

ul li input[type="checkbox"]:checked~i:after {
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

.hora {
  overflow: visible;
}
</style>
