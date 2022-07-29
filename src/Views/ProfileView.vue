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
<style>
</style>
