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
            imgArray: ["example_1", "example_3", "example_5"],
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
    },
    created() {
        setInterval(() => {
            if (this.index+1 < this.imgArray.length) {
                this.index++;                
            }
            else {
                this.index = 0;
            }
        }, 3000)
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