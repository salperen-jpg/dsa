// function findMissingNumber(arr) {
//   const sortedArr = arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   });
//   const missingNumber = sortedArr.filter(
//     (num, i, arr) => !arr.includes(num + 1)
//   );
//   return missingNumber[0] + 1;
// }
function findMissingNumber(arr) {
  const maxNum = Math.max(...arr);
  const expectedTotal = (maxNum * (maxNum + 1)) / 2;
  return expectedTotal - arr.reduce((curr, acc) => (curr += acc), 0);
}

module.exports = findMissingNumber;
