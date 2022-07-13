<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        swapLoginRegister() {
            this.$emit("swapLoginRegister");
        }
    }
}
</script>

<template>
    <div id="login-component">
        <h1 class="title">Login</h1>
        <form class="form" action="" @submit.prevent>
            <label class="form-field-container" for="correo">
                <p>Email</p>
                <input class="form-input" type="email" name="correo" id="correo">
            </label>
            <label class="form-field-container" for="contrasena">
                <p>Correo</p>
                <input class="form-input" type="password" name="contrasena" id="contrasena">
            </label>
            <button class="form-button" type="submit">
                Login
            </button>
        </form>
        <p class="register-text">Aún no tienes cuenta? <a href="#" id="register-link"
                @click.prevent="swapLoginRegister">Registrate!</a></p>
    </div>
</template>

<style scoped>
.title {
    margin: 0;
    font-size: 50px;
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    width: 100%;
    margin: 2rem 0 2rem 0;
}

.form-field-container {
    width: 100%;
}

.form-field-container p {
    margin: 0;
}

.form-input {
    height: 50px;
    width: 100%;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    background-color: transparent;
    color: white;
}

.form-button {
    height: 60px;
    width: 200px;
    border-radius: 10px;
    font-size: 1.2rem;
    background-color: transparent;
    border: 2px solid white;
    color: inherit;
}

.register-text {
    text-align: center;
}
</style>