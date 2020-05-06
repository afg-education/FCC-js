function diffArray(arr1, arr2) {
  const newArr1 = arr1.filter(e => arr2.indexOf(e) == -1);
  const newArr2 = arr2.filter(e => arr1.indexOf(e) == -1);

  return [...newArr1, ...newArr2];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);