function truthCheck(collection, pre) {
  return collection.every(e => e.hasOwnProperty(pre) && e[pre]);
}

truthCheck([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "user");