function frankenSplice(arr1, arr2, n) {
  const resultArr = [...arr2];
  resultArr.splice(n, 0, ...arr1);
  return resultArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);