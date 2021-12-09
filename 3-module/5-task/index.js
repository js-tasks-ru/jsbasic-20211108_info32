function getMinMax(str) {
  let numberArr = "";
  numberArr = str.split(" ");
  numberArr = numberArr.filter(item => Number(item));
  numberArr = numberArr.map(item => Number(item));
  letMax = Math.max.apply(null, numberArr);
  letMin = Math.min.apply(null, numberArr);
  letresult = ({ min: letMin, max: letMax });
  return letresult;
}
