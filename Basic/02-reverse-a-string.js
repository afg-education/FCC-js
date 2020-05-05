function reverseString(str) {
  const reverseStr = [...str].reverse().join("");
  return reverseStr;
}

reverseString("hello");