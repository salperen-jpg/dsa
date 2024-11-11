/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function getTheElementFromIndex(arr, index) {
  return arr[index];
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from({ length: 100 }, (_, index) => index + 1);

console.time("arr1 runtime");
getTheElementFromIndex(arr1, 0);
console.timeEnd("arr1 runtime");

console.time("arr2 runtime");
getTheElementFromIndex(arr2, 0);
console.timeEnd("arr2 runtime");
