/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from({ length: 100000000 }, (_, i) => i + 1);

console.time("arr1");
console.log(getSum(arr1));
console.timeEnd("arr1");

console.time("arr2");
console.log(getSum(arr2));
console.timeEnd("arr2");
