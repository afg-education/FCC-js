function dropElements(arr, func) {
  let a = true;
  while(a) {
    if(!func(arr[0])) {
      arr.shift(arr[0]);
    } else {
      a = false;
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
