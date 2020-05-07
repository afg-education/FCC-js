function myReplace(str, before, after) {
  if (before.substring(0, 1).toUpperCase() == before.substring(0, 1)) {
    after = after.substring(0, 1).toUpperCase() + after.substring(1);
  } else {
    after = after.substring(0, 1).toLowerCase() + after.substring(1);
  }
  const arr = str.split(" ");
  const x = arr.splice(arr.findIndex(e => e == before), 1, after);
  return arr.join(" ");
}

myReplace("His name is Tom", "Tom", "john");