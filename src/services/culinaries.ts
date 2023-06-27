import CULINARIES from "../data/culinaries.json";

export function getCulinaryDetail(code: string) {
  return CULINARIES.find((culinary) => culinary.code === code);
}
