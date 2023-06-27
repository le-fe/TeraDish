import COUNTRIES from "../data/countries.json";

export function getCountryDetail(code: string) {
  return COUNTRIES.find((country) => country.code === code);
}
