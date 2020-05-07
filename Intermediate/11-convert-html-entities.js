function convertHTML(str) {
  const strArr = [...str];
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;",
  }

  console.log(strArr.map((e) => findAndChange(e, entities)).join(""));
  return strArr.map((e) => findAndChange(e, entities)).join("");

  function findAndChange(str, keyList) {
    if (keyList.hasOwnProperty(str)) {
      return keyList[str];
    }
    return str;
  }

}

convertHTML("Dolce & Gabbana");