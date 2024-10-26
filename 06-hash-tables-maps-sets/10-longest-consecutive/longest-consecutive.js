function longestConsecutiveSequence(nums) {
  const uniqueNumbers = new Set(nums);
  let highest = 0;
  for (let num of uniqueNumbers) {
    let current = 1;
    let curr = num;
    while (uniqueNumbers.has(curr + 1)) {
      current++;
      if (current > highest) {
        highest = current;
      }
      curr++;
    }
  }
  return highest;
}

module.exports = longestConsecutiveSequence;
