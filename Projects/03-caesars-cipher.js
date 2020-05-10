function rot13(str) {
  const arr = [...str];
  const regex = /[A-Z]/;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      if (arr[i].charCodeAt(0) < 78) {
        result.push(String.fromCharCode(arr[i].charCodeAt(0) - 13 + 58).toUpperCase());
      } else {
        result.push(String.fromCharCode(arr[i].charCodeAt(0) - 13).toUpperCase());
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
}

rot13("SERR PBQR PNZC");