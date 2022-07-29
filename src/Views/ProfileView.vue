<script setup>
import Profile from "@/Components/Profile.vue";
import Header from "@/Components/Header.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  <Profile v-if="$session.userData" />
  <div v-else class="nologged-msg">
    <img id="sadplane" src="/Icons/sadplane.png" alt="">
    <h1>Vaya, parece que no estás loggeado... Look up <span id="arrow">&#8599;</span> </h1>
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
  animation: 1.5s ease 0s infinite beat;
}

h1 {
  color: white;
  font-weight: 300;
}

@keyframes beat {

  0%,
  50%,
  100% {
    transform: scale(1, 1);
  }

  30%,
  80% {
    transform: scale(0.92, 0.95);
  }
}
</style>
