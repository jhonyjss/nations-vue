<script setup lang="ts">
  import { reactive } from "vue";
  import AppSearchFlag from "@components/AppSearchFlag.vue";
  import AppDropdown from "@components/AppDropdown.vue";
  import AppCard from "@components/AppCard.vue";
  import { useFlags } from "@composables/flags";

  const { countries } = useFlags();
  const searchTerm = reactive(countries);
</script>

<template>
  <section
    class="flex flex-col md:flex-row md:justify-between md:items-center"
  >
    <!-- Search & Dropdown -->
    <AppSearchFlag
      :countries="searchTerm"
      @update:countries="searchTerm = $event"
    />
    <AppDropdown @update:countries="searchTerm = $event" />
  </section>
  <section
    class="grid grid-cols-1 md:grid-cols-4 gap-14 px-[2.5rem] md:px-0"
  >
    <!-- Country flags and Cards -->
    <div v-for="flag in searchTerm">
      <AppCard :flag="flag" :key="flag.name.common" />
    </div>
  </section>
</template>

<style scoped></style>
