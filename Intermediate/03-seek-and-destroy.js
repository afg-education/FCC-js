function destroyer(arr, ...args) {
  if (args.length == 0) {
    return arr;
  }
  const result = arr.filter(e => e != args[0]);
  args.shift();
  return destroyer(result, ...args);

}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);