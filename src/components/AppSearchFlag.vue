<template>
  <div id="AppSearchFlag" class="w-full md:w-9/12">
    <div class="flex flex-row input-search">
      <div>
        <ion-icon
          class="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-6 dark:text-very-light-gray text-dark-gray"
          name="search"
        ></ion-icon>
      </div>
      <div class="w-full">
        <input
          type="text"
          @keyup="handleSearchCountry"
          class="pl-12 focus:outline-none dark:text-very-light-gray w-full bg-transparent"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from "vue";
  import IFlag from "@interfaces/flags.interface";
  import { useFlags } from "@stores/flags";

  const store = useFlags();

  defineProps({
    countries: {
      type: Array as PropType<IFlag[]>,
      required: true
    }
  });

  const emit = defineEmits(["update:countries"]);

  const handleSearchCountry = (e: Event) => {
    const el = e.target as HTMLInputElement;
    const filteredCountries = store.searchForCountry(
      el.value
    );

    emit("update:countries", filteredCountries);
  };
</script>

<style lang="postcss" scoped>
  #AppSearchFlag {
    @apply relative;
    .input-search {
      @apply bg-white dark:bg-dark-blue shadow w-full md:w-[477px] p-3 my-9 rounded-md;
    }
  }
</style>
<style lang="postcss">
  #AppSearchFlag .input-search::placeholder {
    @apply pl-10 text-sm text-white;
  }
</style>
