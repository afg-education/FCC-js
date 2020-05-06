function whatIsInAName(collection, source) {
  // Only change code below this line
  let keys = Object.keys(source);

  return collection.filter(function (obj) {
    return keys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  // Only change code above this line
}

whatIsInAName([{
  "apple": 1,
  "bat": 2
}, {
  "bat": 2
}, {
  "apple": 1,
  "bat": 2,
  "cookie": 2
}], {
  "apple": 1,
  "bat": 2
});