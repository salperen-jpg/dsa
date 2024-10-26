function wordFrequencyCounter(str) {
  const strWithoutSymbols = str.replace(/[^a-zA-Z ]/g, "");
  const map = new Map();
  strWithoutSymbols
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .forEach((word) => {
      map.set(word, (map.get(word) || 0) + 1);
    });
  return map;
}

module.exports = wordFrequencyCounter;
