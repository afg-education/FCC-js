function smallestCommons(arr) {
  arr.sort((a, b) => b - a);
  const newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  let result = newArr[0];

  for (let i = 1; i < newArr.length; i++) {
    result = lcm(result, newArr[i]);
  }
  return result;

  function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };

  function lcm(a, b) {
    return a * b / gcd(a, b);
  };
}

smallestCommons([1, 5]);