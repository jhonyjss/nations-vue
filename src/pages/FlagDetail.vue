<template>
  <div
    v-if="isLoading"
    class="flex justify-center items-center h-screen dark:text-white text-2xl"
  >
    Loading...
  </div>
  <section
    v-if="!isLoading"
    id="FlagDetailPage"
    class="px-4 md:px-0"
  >
    <div class="mb-10 mt-5 md:my-10">
      <button
        @click="goBackHome()"
        class="py-2 px-5 min-w-[133px] flex justify-center items-center"
      >
        <ion-icon name="arrow-back-outline" />
        <span class="ml-2">Back</span>
      </button>
    </div>

    <div
      v-if="Object.values(flag).length"
      class="flex flex-col md:flex-row md:gap-[7.5rem]"
    >
      <div class="w-full md:w-1/2 mb-5 md:mb-0">
        <img :src="flag.flags?.svg" class="w-full h-full" />
      </div>

      <div
        class="w-full md:w-1/2 max-h-[390px] dark:text-very-light-gray font-nunito-sans mt-5 md:mt-10"
      >
        <section class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2">
            <h1 class="text-2xl font-nunito-sans-extrabold">
              {{ flag.name?.common }}
            </h1>

            <div class="mt-3 md:mt-5 text-sm">
              <ul class="leading-8">
                <li>
                  <span class="font-nunito-sans-semibold"
                    >Native Name:</span
                  >
                  {{ nativeNameCommon }}
                </li>
                <li>
                  <span class="font-nunito-sans-semibold"
                    >Population:</span
                  >
                  {{ formatPopulation(flag.population) }}
                </li>
                <li>
                  <span class="font-nunito-sans-semibold"
                    >Region:</span
                  >
                  {{ flag.region }}
                </li>
                <li>
                  <span class="font-nunito-sans-semibold"
                    >Sub Region:</span
                  >
                  {{ flag.subregion }}
                </li>
                <li>
                  <span class="font-nunito-sans-semibold"
                    >Capital:</span
                  >
                  {{ flag.capital[0] }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="w-full md:w-1/2 mt-5 md:mt-12 text-sm"
          >
            <ul class="leading-8">
              <li>
                <span class="font-nunito-sans-semibold"
                  >Top Level Domain:</span
                >
                {{ flag.tld?.join(",") }}
              </li>
              <li>
                <span class="font-nunito-sans-semibold"
                  >Currencies:</span
                >
                {{ getCurrencies(flag.currencies) }}
              </li>
              <li>
                <span class="font-nunito-sans-semibold"
                  >Languages:</span
                >
                {{
                  Object.values(flag.languages).join(",")
                }}
              </li>
            </ul>
          </div>
        </section>

        <section class="flex flex-wrap mt-5 md:mt-6 w-full">
          <span
            class="mr-3 text-sm font-nunito-sans-semibold"
            >Border Countries:</span
          >
          <ul class="flex items-center flex-wrap gap-3">
            <li
              v-for="borderCountry in flag?.borders"
              :key="borderCountry"
              class="text-sm"
            >
              <button class="py-1 px-5 text-xs">
                {{ borderCountry }}
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  type Flag = {
    name: {
      common: string;
      nativeName: string;
    };
    flags: {
      svg: string;
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    currencies: Record<string, any>;
    languages: Record<string, string>;
    borders: string[];
  };

  type NativeName = {
    [key: string]: { official: string; common: string };
  };

  import { onMounted, ref, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { getFlagByName } from "@services/flag.service";
  import {
    getCommonNames,
    formatPopulation,
    getCurrencies
  } from "@utils";

  const route = useRoute();
  const router = useRouter();
  const flag = ref<Flag>({} as Flag);
  const isLoading = ref<boolean>(true);

  onMounted(async () => {
    const data = await getFlagByName(
      route.params.flag as string
    );
    flag.value = data[0];
    isLoading.value = false;
  });

  // Define the computed property
  const nativeNameCommon = computed(() => {
    return flag.value.name?.nativeName
      ? getCommonNames(
          flag.value.name
            ?.nativeName as unknown as NativeName
        )
      : "";
  });

  const goBackHome = (): void => {
    router.push("/");
  };
</script>

<style lang="postcss" scoped>
  #FlagDetailPage {
    button {
      @apply dark:bg-dark-blue dark:text-white;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  }
</style>
