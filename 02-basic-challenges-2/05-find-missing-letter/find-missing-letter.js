function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstLetterIndex = alphabet.split("").findIndex((el) => el === arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[firstLetterIndex + i])
      return alphabet[firstLetterIndex + i];
  }
}

module.exports = findMissingLetter;
