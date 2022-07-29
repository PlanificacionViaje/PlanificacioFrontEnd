<script setup>
import ItemTripModal from "@/Components/ItemTripModal.vue";
import DeleteItemModal from "@/Components/DeleteItemModal.vue";
</script>

<script>
export default {
    props: ["item", "traveldata"],
    data() {
        return {
            isOpen: false,
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

            //Modal Item Trip
            newEditItemTrip: true,
            displayNewEditItemTripModal: false,
            //Modal Item Delete
            displayDeleteItemModal: false,
        }
    },
    computed: {
        fecha() {
            const fecha = new Date(this.item.fecha);
            return { dia: fecha.getDate(), mes: this.ARRAY_MESES[fecha.getMonth()] };
        },
    },

}
</script>

<template>
    <div class="item-trip">
        <div class="visible" @click="isOpen = !isOpen" :class="{ active: isOpen }">
            <div class="fecha fecha-inicio">
                <p class="mes">{{ fecha.mes }}</p>
                <p class="dia">{{ fecha.dia }}</p>
            </div>
            <div class="hora">{{ item.hora }}</div>
            <div class="nombre">{{ item.nombre }}</div>
        </div>
        <div class="hidden" v-show="isOpen">
            <div class="info">
                <p class="descripcion">{{ item.descripcion }}</p>
                <div class="less-important">
                    <p>Precio: {{ item.precio }}€</p>
                    <p>Latitud: {{ item.ubicacionlatitud }}</p>
                    <p>Longitud: {{ item.ubicacionlongitud }}</p>
                </div>
            </div>
            <div class="actions">
                <img @click="displayNewEditItemTripModal = true" class="icon" src="/Icons/edit.svg">
                <img @click="displayDeleteItemModal = true" class="icon" src="/Icons/delete.svg">
            </div>
        </div>
    </div>

    <ItemTripModal v-if="item" :newEditItemTrip="false" :displayNewEditItemTripModal="displayNewEditItemTripModal"
        :dataTrip="traveldata" :dataItemTrip="item" @closeTripModal="displayNewEditItemTripModal = false" />

    <DeleteItemModal v-if="item" :displayDeleteItemModal="displayDeleteItemModal" :dataItemTrip="item"
        @closeTripModal="displayDeleteItemModal = false" @deleteCorrect="$emit('deleteCorrect')" />
</template>


<style scoped>
* {
    color: black;
}

.item-trip {
    padding: 2rem;
}

.visible {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: aliceblue;
    border-radius: 20px;
}

.visible.active {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}

.hidden {
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 1rem;
}

.descripcion {
    margin: 0;
}

.less-important,
.actions {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.actions {
    justify-content: space-between;
}

.icon {
    width: 36px;
}

.icon:hover {
    cursor: pointer;
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
</style>