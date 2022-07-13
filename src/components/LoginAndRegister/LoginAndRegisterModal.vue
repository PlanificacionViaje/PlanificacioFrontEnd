<script setup>
import LoginComponent from "./LoginComponent.vue";
import RegisterComponent from "./RegisterComponent.vue";
</script>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        loginActive: Boolean,
        displayLoginRegisterModal: Boolean
    },
    methods: {
        swapLoginRegister() {
            this.$emit("swapLoginRegister");
        },
        closeLoginRegisterModal() {
            this.$emit("closeLoginRegisterModal");
        }
    }
}
</script>

<template>
    <div id="modal-background" v-show="displayLoginRegisterModal" @click="closeLoginRegisterModal">
        <div id="modal" @click.stop>
            <LoginComponent v-if="loginActive" @swapLoginRegister="swapLoginRegister" />
            <RegisterComponent v-else @swapLoginRegister="swapLoginRegister" />
            <a href="#" @click.prevent="closeLoginRegisterModal">X</a>
        </div>
    </div>

</template>

<style scoped>
#modal-background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal {
    position: relative;
    z-index: 20;
    background-color: rgb(107, 131, 186);
    width: 500px;
    padding: 3rem;
    border-radius: 10px;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

a {
    position: absolute;
    color: red;
    font-size: 30px;
    top: 1rem;
    right: 1rem;
}
</style>