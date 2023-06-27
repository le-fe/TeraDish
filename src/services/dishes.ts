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

export function fetchDishes() {
  return DISHES.map((dish) => ({
    ...dish,
    country: mappingCountries[dish.country_code],
    culinary_list: dish.culinaries.map((code) => mappingCulinaries[code]),
  }));
}
