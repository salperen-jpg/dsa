/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

function getSum(arr) {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }
  return sum + sum2;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from({ length: 10000 }, (_, i) => i + 1);

console.time("arr1");
console.log(getSum(arr1));
console.timeEnd("arr1");

console.time("arr2");
console.log(getSum(arr2));
console.timeEnd("arr2");
