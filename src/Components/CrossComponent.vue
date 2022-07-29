<script>
export default {};
</script>
<template>
  <div>
    <img
      class="cross-icon rotate-center"
      src="/Icons/cross.png"
      alt="cruz de cerrar"
    />
  </div>
</template>


<style scoped>
.cross-icon {
  width: 35px;
  filter: invert();
}

.rotate-center:hover {
  -webkit-animation: rotate-center 0.7s ease-in-out both;
  animation: rotate-center 0.7s ease-in-out both;
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>