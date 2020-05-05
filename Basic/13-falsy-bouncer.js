function bouncer(arr) {
  return arr.filter(e => Boolean(e) == true);
}

bouncer([7, "ate", "", false, 9]);