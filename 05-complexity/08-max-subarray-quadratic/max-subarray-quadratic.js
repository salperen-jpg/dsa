function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let innerSum = 0;
    //[0,1,2,3,4,5]
    for (let j = i; j < i + k; j++) {
      innerSum += arr[j];
    }

    maxSum = Math.max(maxSum, innerSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
