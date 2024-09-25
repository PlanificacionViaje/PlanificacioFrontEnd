<script>
export default {};
</script>
<template>
  <div class="nologged-msg">
    <img id="sadplane" src="/Icons/sadplane.png" alt="" />
    <h1>
      Vaya, parece que no estás loggeado... Look up
      <span id="arrow">&#8599;</span>
    </h1>
  </div>
</template>


<style scoped>
.nologged-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#sadplane {
  filter: grayscale();
}

#arrow {
  font-size: 5rem;
}

h1 {
  color: white;
  font-weight: 300;
}
</style>