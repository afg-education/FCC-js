function findLongestWordLength(str) {
  return str
    .split(" ")
    .map(e => e.length)
    .reduce((a, b) => Math.max(a, b));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");