function isIsogram(str) {
  if (str === "") return true;
  let upperStr = str.toUpperCase();
  for (let i = 0; i < upperStr.length; i++) {
    let counter = 0;
    for (let y = 0; y < upperStr.length; y++) {
      if (upperStr[i] === upperStr[y]) {
        counter++;
      }
    }
    if (counter >= 2) {
      return false;
    } else if (i === upperStr.length - 1 && counter < 2) {
      return true;
    }
  }
}

let x = isIsogram("fgh");

console.log(x);
