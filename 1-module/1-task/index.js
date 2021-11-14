//ввод параметра
let n = prompt("Enter the number",5);
//если не сработает цикл (n=1)
let factorialNumber = 1;
function factorial(n) {
  for (n ; n >1; n--){
    factorialNumber *=n;
 }
  return factorialNumber;
}

  document.getElementById("fac").innerHTML = 'Factorial of ' + n + ' is -' + factorial(n);
//Для проверки открыть hw.html