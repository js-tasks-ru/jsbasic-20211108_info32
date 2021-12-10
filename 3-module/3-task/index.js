function camelize(str) {
  let newStr = str;
  newStr = str.split("-");
  newStr = newStr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
  return newStr.join("");
}