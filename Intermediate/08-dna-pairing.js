function pairElement(str) {
  const arr = [...str];

  let pairing = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  };

  return arr.map((e) => pairing[e]);
}

pairElement("GCG");
