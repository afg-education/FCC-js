function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

//love this solution on hints page...
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }