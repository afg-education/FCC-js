function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(" ");
}

titleCase("I'm a little tea pot");