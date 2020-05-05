function largestOfFour(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(findTheLargestNumber(arr[i]));
  }

  return result;

  function findTheLargestNumber(array) {
    return array.reduce((x, y) => Math.max(x, y));
  }
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);