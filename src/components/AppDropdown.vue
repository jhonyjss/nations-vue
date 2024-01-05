<template>
  <div class="relative w-1/2 md:w-2/12 mb-8">
    <button
      @click="toggleOpen"
      class="flex justify-between items-center text-sm p-2 md:px-10 md:p-3 bg-white dark:bg-dark-blue text-gray-700 rounded-md w-full dark:text-white shadow"
    >
      <span
        >{{
          selectedCountry
            ? selectedCountry
            : "Filter by Region"
        }}
      </span>
      <ion-icon name="chevron-down"></ion-icon>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 bg-white rounded-md shadow-md w-full"
    >
      <!-- Dropdown content -->
      <ul
        class="text-sm md:text-base py-2 dark:bg-dark-blue dark:text-white rounded"
      >
        <li
          v-for="region in regions"
          :key="region"
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-very-dark-blue-bg cursor-pointer"
          @click="handleOnSelectRegion(region)"
        >
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { getFlagByRegionName } from "@services/flag.service";
  import IFlag from "@interfaces/flags.interface";

  const isOpen = ref(false);
  const selectedCountry = ref("");
  const countries = ref([] as IFlag[]);

  const regions = ref([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania"
  ]);

  const emit = defineEmits(["update:countries"]);

  const handleOnSelectRegion = async (_region: string) => {
    selectedCountry.value = _region;
    const data = await getFlagByRegionName(_region);
    countries.value = data;

    emit("update:countries", countries.value);
    toggleOpen();
  };

  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };
</script>
