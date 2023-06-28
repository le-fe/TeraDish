import DISHES from "../data/dishes";
import CULINARIES from "../data/culinaries";
import COUNTRIES from "../data/countries";
import { containsWord } from "../utils/";

const mappingCountries = COUNTRIES.reduce((obj, c) => {
  obj[c.code] = c;
  return obj;
}, {});

const mappingCulinaries = CULINARIES.reduce((obj, c) => {
  obj[c.code] = c;
  return obj;
}, {});

const populateDish = (dish) => ({
  ...dish,
  country: mappingCountries[dish.country_code],
  culinary_list: dish.culinaries.map((code) => mappingCulinaries[code]),
});

export function fetchCounts(): { dish_count: number; culinary_count: number } {
  return {
    dish_count: DISHES.length,
    culinary_count: CULINARIES.length,
  };
}

export function fetchDishes({
  country_code,
  culinary_code,
  search_value,
}: {
  country_code?: string;
  culinary_code?: string;
  search_value?: string;
}) {
  let results = DISHES;
  if (country_code) {
    results = results.filter((d) => d.country_code === country_code);
  }
  if (culinary_code) {
    results = results.filter((d) => d.culinaries.includes(culinary_code));
  }
  if (search_value && search_value?.length > 0) {
    results = results.filter((d) => containsWord(d.name, search_value));
  }
  return results.map(populateDish);
}

export function fetchDishDetail(dishId: string) {
  const dish = DISHES.find((d) => d.id === dishId);
  return dish ? populateDish(dish) : null;
}
