function sumAll(arr) {
  arr.sort((a, b) => a - b);
  return (arr[1] * (arr[1] + 1)) / 2 - ((arr[0] * (arr[0] + 1)) / 2) + arr[0];
}

sumAll([5, 10]);