import { defineStore } from 'pinia'
import IFlag from "@interfaces/flags.interface";

export const useFlags = defineStore('flags', {
    state: () => ({countries: [] as IFlag[]}),
    
    actions: {
      setCountries(flags: IFlag[]) {
        this.countries = flags
      },
      
      searchForCountry(country: string) {
        const filteredCountries = this.countries.filter((flag) => {
          return flag.name.common.toLowerCase().includes(country.toLowerCase());
        });
        return filteredCountries;
      },
    },
  })