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