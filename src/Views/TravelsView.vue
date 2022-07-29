<script setup>
import Travels from "@/Components/TravelPage.vue";
import Header from "@/Components/Header.vue";
import FailComponent from "@/Components/FailComponent.vue";
</script>
<script>
export default {};
</script>
<template>
  <Header />
  <Travels v-if="$session.userData" />
  <FailComponent v-else />
</template>
