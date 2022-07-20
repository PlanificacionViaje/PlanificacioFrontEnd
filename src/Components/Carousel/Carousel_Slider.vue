<script setup>
</script>

<template>
  <div class="component">
    <div :style="{backgroundImage: getURL}" class="carousel">
        <div v-for="_, index in imgArray" :key="index"
              @click="SwitchImage(index)" class="btn">

        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            imgArray: ["fondo", "fondo1", "minusEyes"],
            index: 0,
        }
    },
    computed: {
    getURL() {
        return `url("../../../public/fotosPruebaSlider/${this.imgArray[this.index]}.jpg")`;
        },
    },
    methods: {
    SwitchImage(value) {
        this.index = value;
    },
    created() {
        setInterval (function () {
            if (this.index != this.imgArray.lenght-1) {
                this.index += index;                
            }
            else {
                this.index = 0;
            }
        }, 1000)
    },
    },
  }
</script>

<style scoped>
.component {
    width: 100vw;
    height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.carousel {
    width: 500px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
}

.btn{
    background-color: #6883BA;
    width: 15px;
    height: 15px;
    border-radius: 15px;
}
</style>