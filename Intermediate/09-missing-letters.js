function fearNotLetter(str) {
  const first = str.slice(0).charCodeAt(0);
  const second = str.slice(-1).charCodeAt(0);
  let ctrl = "";
  for (let i = 0; i < second - first; i++) {
    ctrl += String.fromCharCode(first + i);
  }
  let letter = 0;
  while (true) {
    if (ctrl[letter] != str[letter]) {
      return ctrl[letter];
    }
    letter++;
  }
}

fearNotLetter("abcdefghjklmno");