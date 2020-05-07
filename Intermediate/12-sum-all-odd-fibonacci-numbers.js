function sumFibs(num) {
  const arr = [1, 1];
  let s = 0;
  while (arr[arr.length - 1] <= num) {
    s = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(s);
  }
  arr.pop();

  const odds = arr.filter((e) => e % 2 != 0);
  console.log(odds);

  return odds.reduce((x, y) => x + y, 0);

}

sumFibs(75025);