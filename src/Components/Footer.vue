<script>
export default {};
</script>
<template>
  <div class="footer">
    <h1>Freeway</h1>
    <div class="main-footer2">
      <div class="footer-items">
        <h3>Sobre nosotros</h3>
        <p>
          Somo un grupo de estudiantes de programación con muchas ganas de
          viajar.
        </p>
      </div>
      <div class="footer-items">
        <h3>Contáctanos</h3>
        <a href="google.es">Our Landing page</a>
      </div>
      <div class="footer-items">
        <h3>Redes Sociales</h3>
        <div class="footer-icono">
          <div><img class="icono" src="Icons/twitter.png" alt="" /></div>
          <div><img class="icono" src="Icons/linkedin.png" alt="" /></div>
          <div><img class="icono" src="Icons/instagram.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="main-footer">
      <img
        class="img-footer"
        src="public\Icons\undraw_Traveling_93jn.png"
        alt=""
      />
    </div>
  </div>
</template>
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 130px;
  bottom: 0;
  position: absolute;
}
.main-footer {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 15%;
  align-items: center;
}

.main-footer2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  gap: 10rem;
}
.footer-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
}
.footer-icono {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  gap: 2rem;
}
.icono {
  width: 32px;
  height: 100%;
}
.img-footer {
  width: 100%;
  height: 100px;
  margin-right: 2rem;
  align-content: center;
}
h1 {
  font-weight: 600px;
  font-size: 2rem;
  margin-left: 2rem;
  color: #6c64fb;
  text-transform: uppercase;
  width: 15%;
}
h3 {
  font-weight: 600;
  color: #6c64fb;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
p {
  margin: 0;
}
</style>