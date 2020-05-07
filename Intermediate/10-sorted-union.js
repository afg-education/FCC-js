function uniteUnique(...arr) {
  return [...arr].flat().filter((item, index, array) => array.indexOf(item) == index);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);