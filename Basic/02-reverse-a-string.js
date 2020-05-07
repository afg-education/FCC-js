function reverseString(str) {
  const reverseStr = [...str].reverse().join("");
  console.log(reverseStr);
  return reverseStr;
}

reverseString("hello");