<script>

</script>
<!-- Me aburría en el tren y me puse a toquetear el login, espero que no te importe.
Lo cambié un montón, de repente el modo todo hiper redondo dejó de tener sentido, don't hate me :(, pero si lo quieres
todo redondo again, solo son tres border-radius. -->

<template>
<div id="login">
    <div class="icon-container">
    <img class="icon-page" src="../assets/sustitutoIcono.png" alt="icono">
    </div>
    <h1 class="title">Login</h1>
    <form class="form" action="">
        <label class="form-field-container" for="correo">
            <input class="form-input" type="email" name="correo" id="correo" placeholder="Email">
        </label>
        <label class="form-field-container" for="contrasena">
            <input class="form-input" type="password" name="contrasena" id="contrasena" placeholder="Password">
        </label>
        <button class="form-button" type="submit">
            Login
        </button>
    </form>
</div>
</template>

<style scoped>
:root{

    --main-blue:rgb(93, 138, 197);
}

#login {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/formbg.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    width: 40vw;
    height: 80vh;
    border-radius: 10%;
    opacity: 90%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.icon-container{
    display: flex;
    align-items: center;
    height: 20%;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 100%;
    border: var(--main-blue) solid 4px;
    background-color: white;
    padding: 1.5rem;
}
.icon-page{
    height: 100%;
    width: 100%;
}
.title{
    margin-top: 0;
    display: flex;
    align-items: flex-end;
    height: 10%;
    align-items: flex-end;
    font-size: 60px;
    color: white;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    height: 70%;
    width: 100%;
}
.form-field-container{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.form-input{
    height: 60px;
    width: 400px;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    border: none;
    padding: 10px;
    outline: none;
}
.form-button{
      height: 60px;
    width: 200px;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    background-color: rgb(93, 138, 197);
    border: none;
}
.form-button:hover{
    color: white;
    cursor:pointer;
}

</style>