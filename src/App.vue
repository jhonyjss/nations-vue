<script setup lang="ts">
  import AppNavbar from "./components/AppNavbar.vue";
  import AppContainer from "@components/layouts/AppContainer.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <AppNavbar />
  </header>
  <AppContainer>
    <RouterView />
  </AppContainer>
</template>

<style scoped></style>
