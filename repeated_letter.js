const num = "sdfgas";

let text = num.split("");
let result = [];
for (let i = 0; i < text.length; i++) {
  counter = 0;
  for (let y = 0; y < text.length; y++) {
    if (text[i] === text[y]) counter++;
  }
  if (counter === 2) {
    text = text.join("");
    result.push(text);
    let res = result[0];
    console.log(res);
    break;
  }
}
