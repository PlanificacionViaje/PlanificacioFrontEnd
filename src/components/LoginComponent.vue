<script>

</script>
<!-- Me aburría en el tren y me puse a toquetear el login, espero que no te importe.
Lo cambié un montón, de repente el modo todo hiper redondo dejó de tener sentido, don't hate me :(, pero si lo quieres
todo redondo again, solo son tres border-radius. -->

<template>
    <div id="login-background"></div>
    <div id="login">
        <h1 class="title">Login</h1>
        <form class="form" action="">
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
        <p class="register-text">¿Ya tienes cuenta? <a href="#" id="register-link">Registrate!</a></p>
    </div>
</template>

<style scoped>
:root {
    --main-blue: rgb(93, 138, 197);
}

#login-background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    backdrop-filter: blur(5px);
}

#login {
    z-index: 20;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(107, 131, 186);
    width: 500px;
    padding: 3rem;
    border-radius: 10px;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

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