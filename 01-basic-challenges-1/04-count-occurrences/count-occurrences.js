function countOccurrences(str, letter) {
  const letterMap = new Map();
  for (let l of str) {
    letterMap.set(l, (letterMap.get(l) || 0) + 1);
  }
  return letterMap.get(letter) || 0;
}

module.exports = countOccurrences;
