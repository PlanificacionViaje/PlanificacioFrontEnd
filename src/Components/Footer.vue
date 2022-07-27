<script>
export default {};
</script>
<template>
  <div class="footer">
    <div class="footer-item">
      <h1>Freeway</h1>
    </div>
    <div class="footer-item">
      <h3>Sobre nosotros</h3>
      <p> Somos un grupo de estudiantes de programación con muchas ganas de
        viajar.</p>
    </div>
    <div class="footer-item">
      <h3>Contáctanos</h3>
      <a href="https://planificacionviaje.github.io/PlanificacionViaje-LandingPage-FreeWay/">Our Landing page</a>
    </div>
    <div class="footer-item">
      <h3>Redes Sociales</h3>
      <div class="wrap-iconos">
        <img class="icono" src="Icons/twitter.png" alt="twitter" />
        <img class="icono" src="Icons/linkedin.png" alt="linkedin" />
        <img class="icono" src="Icons/instagram.png" alt="instagram" />
      </div>
    </div>
    <div class="footer-item">
      <img class="img-footer" src="public\Icons\undraw_Traveling_93jn.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: black;
  width: 100%;
  height: 130px;
  position: relative;
  bottom: -130px;
  width: 100%;
}

.footer-item {
  padding: 0rem 1rem 0rem 1rem;
  min-width: 225px;
}

.wrap-iconos {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  gap: 2rem;
}

.icono {
  width: 32px;
}

.img-footer {
  max-height: 120px;
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
  margin-block-start: 0em;
}

a {
  text-decoration: none;
  color: black;
}

p {
  margin: 0;
}

@media (max-width: 1140px) {
  .footer {
    display: inline-flex;
    flex-wrap: wrap;
    height: auto;
  }

  .footer-item {
    flex: 1 auto;
    padding: 0rem 1rem 1rem 1rem;
  }

  h1 {
    text-align: center;
    width: unset;
  }
}
</style>