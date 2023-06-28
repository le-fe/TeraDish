export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function toNormalForm(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function containsWord(haystack, needle) {
  return (
    (" " + toNormalForm(haystack) + " ").indexOf(
      " " + toNormalForm(needle) + " "
    ) !== -1
  );
}
