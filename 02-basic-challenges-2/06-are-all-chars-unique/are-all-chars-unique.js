function areAllCharactersUnique(str) {
  if (str === "") return true;
  const letterSet = new Set();
  for (let i of str) {
    if (letterSet.has(i)) return false;
    letterSet.add(i);
  }
  return true;
}

module.exports = areAllCharactersUnique;
