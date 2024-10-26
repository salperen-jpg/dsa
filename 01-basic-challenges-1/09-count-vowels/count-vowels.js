function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  return word.split("").filter((l) => vowels.includes(l.toLowerCase())).length;
}

module.exports = countVowels;
