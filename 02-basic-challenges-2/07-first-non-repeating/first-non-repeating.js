function findFirstNonRepeatingCharacter(str) {
  const letterMap = new Map();
  for (let l of str) {
    letterMap.set(l, (letterMap.get(l) || 0) + 1);
  }
  for (const [key, val] of letterMap) {
    if (val === 1) return key;
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
