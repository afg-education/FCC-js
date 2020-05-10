function palindrome(str) {
  str = str.toLowerCase().match(/[A-Za-z0-9]/g);
  let result = true;
  while(str.length > 1) {
    if(str[0] === str[str.length - 1]) {
      str.shift();
      str.pop();
      result = true;
    } else {
      result = false;
      return result;
    }
  }
  return result;
}



palindrome("0_0 (: /-\ :) 0-0");


// remove unwanted chars
// lowercase
// check equality of first and last. drop first and last in a loop
