function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var PI = 3.14159265359;
  var earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    let radius = arr[i].avgAlt + earthRadius;
    let orbitalP = Math.round(2 * PI * Math.sqrt(radius * radius * radius / GM));
    arr[i].orbitalPeriod = orbitalP;
    delete arr[i].avgAlt;
  }
  console.log(arr);
  return arr;
}

orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]);