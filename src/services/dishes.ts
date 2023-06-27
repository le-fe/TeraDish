import DISHES from "../data/dishes";
import CULINARIES from "../data/culinaries";
import COUNTRIES from "../data/countries";

const mappingCountries = COUNTRIES.reduce((obj, c) => {
  obj[c.code] = c;
  return obj;
}, {});

const mappingCulinaries = CULINARIES.reduce((obj, c) => {
  obj[c.code] = c;
  return obj;
}, {});

export function fetchDishes(country_code?: string, culinary_code?: string) {
  let results = DISHES;
  if (country_code) {
    results = results.filter((d) => d.country_code === country_code);
  }
  if (culinary_code) {
    results = results.filter((d) => d.culinaries.includes(culinary_code));
  }
  return results.map((dish) => ({
    ...dish,
    country: mappingCountries[dish.country_code],
    culinary_list: dish.culinaries.map((code) => mappingCulinaries[code]),
  }));
}
