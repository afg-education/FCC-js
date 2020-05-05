function mutation(arr) {
  const str = [...arr[0].toLowerCase()].sort((a, b) => a - b);
  const key = [...arr[1].toLowerCase()].sort((a, b) => a - b);

  return key.every(e => str.indexOf(e) != -1);
}

mutation(["hello", "he"]);