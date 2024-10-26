function anagramGrouping(words) {
  const wordsMap = new Map();
  words.forEach((word) => {
    const sortedVersion = word.split("").sort().join("");
    if (wordsMap.has(sortedVersion)) {
      wordsMap.get(sortedVersion).push(word);
    } else {
      wordsMap.set(sortedVersion, [word]);
    }
  });
  return [...wordsMap.values()];
}

module.exports = anagramGrouping;
