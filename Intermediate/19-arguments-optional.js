function addTogether() {
  let first = arguments[0];
  let second = arguments[1];

  if (isNumber(first)) {
    if (isNumber(second)) {
      return first + second;
    } else if (!second) {
      return function (second) {
        if (isNumber(second)) {
          return first + second;
        }
      };
    }
  }

  function isNumber(num) {
    return Number.isInteger(num);
  }
}

addTogether(2);
