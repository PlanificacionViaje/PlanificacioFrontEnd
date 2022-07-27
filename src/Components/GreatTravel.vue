<script>
import * as crud from "@/utils/axiosFunctions.js";
export default {
  props: {
    id: Number,
  },
  mounted() {
    crud
      .getViajeById(this.id)
      .then((response) => console.log(response))
      .catch((error) => crud.handleError(error));
  },
};
</script>
<template>
  <div>
    <p>Soy el gran vaijes!!!</p>
  </div>
</template>
<style scoped>
</style>