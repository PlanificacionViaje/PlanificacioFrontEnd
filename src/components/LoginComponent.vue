<script>

</script>

<template>
<div id="login">
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
#login {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:rgb(0, 157, 255);

    width: 800px;
    height: 800px;
    border-radius: 50%;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
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
    border-radius: 2rem;
    font-size: 1.5rem;
    text-align: center;
    border: none;
}
.form-button{
      height: 60px;
    width: 200px;
    border-radius: 5rem;
    font-size: 1.2rem;
    background-color: rgb(249, 188, 76);
    border: none;
}

</style>