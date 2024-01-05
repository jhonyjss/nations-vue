export const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

export const getCommonNames = (nativeName: { [key: string]: { official: string, common: string } }) => {
  // Convert the object into an array of its values
  const nativeNamesArray = Object.values(nativeName);

  // Map the array to get only the common names
  const commonNames = nativeNamesArray.map(name => name.common);

  // Join the common names with a comma
  const commonNamesString = commonNames.join(', ');

  return commonNamesString;
}

export const getCurrencies = (currencies: { [key: string]: { name: string, symbol: string } }) => {
  // Convert the object into an array of its values
  const currenciesArray = Object.values(currencies);

  // Map the array to get only the currency names
  const currencyNames = currenciesArray.map(currency => currency.name);

  // Join the currency names with a comma
  const currencyNamesString = currencyNames.join(', ');

  return currencyNamesString;
}