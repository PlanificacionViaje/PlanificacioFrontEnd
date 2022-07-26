<script setup>
</script>

<template>
    <div class="contenidoCarousel">
        <div class="component" id="compo">
            <div class="carousel">
                <img :src="getURL" alt="" srcset="" class="carousel-image">
                <div class="buttons">
                    <div v-for="_, ind in imgArray" :key="ind" @click="SwitchImage(ind)" class="btn"
                        :class="{ active: index === ind }">
                    </div>
                </div>
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
            interval: null
        }
    },
    computed: {
        getURL() {
            return `/fotosPruebaSlider/${this.imgArray[this.index]}.jpg`;
        },
    },
    methods: {
        SwitchImage(value) {
            this.index = value;
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                if (this.index + 1 < this.imgArray.length) {
                    this.index++;
                }
                else {
                    this.index = 0;
                }
            }, 3000);
        }
    },
    created() {
        this.interval = setInterval(() => {
            if (this.index + 1 < this.imgArray.length) {
                this.index++;
            }
            else {
                this.index = 0;
            }
        }, 3000);;
    },
}
</script>

<style scoped>
.contenidoCarousel {
    margin: 10px;
}

#compo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.component {
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel {
    width: 100%;
    max-width: fit-content;
    height: fit-content;
    max-height: 400px;
    position: relative;
}

.carousel-image {
    max-height: inherit;
    width: inherit;
}

.carousel .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
}

.btn {
    background-color: #91a9d8;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    transition: background-color .2s;
    box-shadow: 0 2px 2px rgba(0, 18, 43, 0.637);
}

.btn.active {
    background-color: #3a6dd3;
}

.btn:hover {
    cursor: pointer;
    background-color: #3a6dd3;
}
</style>