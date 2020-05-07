function translatePigLatin(str) {
  let vowels = /^[aeiou]/i;
  let consonants = /^([^aeiou])+/i;

  return vowels.test(str)
    ? str + "way"
    : consonants.test(str)
    ? str.substring(str.match(consonants)[0].length) +
      str.match(consonants)[0] +
      "ay"
    : str;
}

translatePigLatin("algorithm");
