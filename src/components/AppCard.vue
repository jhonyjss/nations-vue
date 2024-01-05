<template>
  <div
    class="bg-white dark:bg-dark-blue min-h-[333px] h-full rounded-md shadow-sm shadow-gray-200 dark:shadow-dark-blue cursor-pointer dark:text-very-light-gray"
  >
    <router-link
      :to="`/flag/${flag.name.common.toLowerCase()}`"
    >
      <div class="h-[160px]">
        <img
          :src="flag.flags.svg"
          class="w-full rounded-t-md h-full object-cover"
          alt=""
        />
      </div>
      <div class="px-6">
        <h5
          class="mt-6 text-md font-nunito-sans-extrabold mb-4"
        >
          {{ flag.name.common }}
        </h5>
        <p
          class="mt-2 text-sm font-nunito-sans-semibold leading-none"
        >
          Population:
          <span class="font-nunito-sans-light">{{
            formatPopulation(flag.population)
          }}</span>
        </p>
        <p
          class="mt-2 text-sm font-nunito-sans-semibold leading-none"
        >
          Region:
          <span class="font-nunito-sans-light">{{
            flag.region
          }}</span>
        </p>
        <p
          class="mt-2 text-sm font-nunito-sans-semibold leading-none"
        >
          Capital:
          <span class="font-nunito-sans-light">{{
            flag?.capital ? flag.capital[0] : ""
          }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, PropType } from "vue";
  import { formatPopulation } from "@utils";
  import IFlag from "@interfaces/flags.interface";
  import { RouterLink } from "vue-router";

  const props = defineProps({
    flag: {
      type: Object as PropType<IFlag>,
      required: true
    }
  });

  const { flag } = props;
  console.warn("flag: ", flag);
</script>

<style scoped>
  /* Your component styles here */
</style>
