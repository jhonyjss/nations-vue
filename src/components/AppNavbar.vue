<template>
  <navbar
    id="AppNavbar"
    class="flex shadow dark:bg-dark-blue dark:text-white"
  >
    <AppContainer
      customClass="flex justify-between items-center w-full h-16"
    >
      <div class="w-full">
        <h2
          class="text-left text-sm md:text-lg font-nunito-sans font-nunito-sans-extrabold"
        >
          Where in the world?
        </h2>
      </div>
      <button
        @click="toggleDark()"
        class="flex justify-end text-sm items-center w-full text-right font-nunito-sans font-nunito-sans-light"
      >
        <ion-icon
          :name="isDark ? 'moon-outline' : 'sunny-outline'"
        ></ion-icon>
        <span class="ml-2"
          >{{ isDark ? "Dark" : "Light" }} Mode</span
        >
      </button>
    </AppContainer>
  </navbar>
</template>

<script setup lang="ts">
  import AppContainer from "./layouts/AppContainer.vue";
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark();
  const toggleDark = useToggle(isDark) as any;
</script>

<style scoped></style>
