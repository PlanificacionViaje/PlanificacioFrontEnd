<script setup>
import Profile from "@/Components/Profile.vue";
import Header from "@/Components/Header.vue";
import FailComponent from "@/Components/FailComponent.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  <Profile v-if="$session.userData" />
  <FailComponent v-else />
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
