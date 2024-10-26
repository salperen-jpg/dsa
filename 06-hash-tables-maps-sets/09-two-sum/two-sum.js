function twoSum(numbers, target) {
  const set = new Set();
  for (let i in numbers) {
    if (set.has(target - numbers[i])) {
      return [numbers.indexOf(target - numbers[i]), +i];
    } else {
      set.add(numbers[i]);
    }
  }
}

module.exports = twoSum;
