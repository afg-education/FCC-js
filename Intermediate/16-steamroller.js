function steamrollArray(arr) {
  return flattenArray(arr);
}

steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);


// below is sth. i have written for exercise, before freecodecamp challenge. i used it without formulizing it again. just copy paste my previous solution
const numArray = [1, 2, [3, 10, [11, 12]],
  [1, 2, [3, 4]], 5, 6
];

function flattenArray(data) {
  // our initial value this time is a blank array
  const initialValue = [];

  // call reduce on our data
  return data.reduce(accumulaterFunc, initialValue);
}

function accumulaterFunc(total, value) {
  let x = 0;
  if (Array.isArray(value)) {
    x = flattenArray(value);
  } else {
    x = value;
  }
  return total.concat(x);
}