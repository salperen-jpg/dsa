function arrayIntersection(arr1, arr2) {
  const intersection = [];
  for (let el of arr1) {
    if (!intersection.includes(el) && arr2.includes(el)) {
      intersection.push(el);
    }
  }
  return intersection;
}

module.exports = arrayIntersection;
