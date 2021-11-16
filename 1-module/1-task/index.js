
function factorial(n) {
  let factorialNumber = 1;
  if (n == 0 || n == 1) {
    return factorialNumber;
  } else {
    for ( n; n >= 1; n--) {
      factorialNumber += n;
    }
    return factorialNumber;
  }
}


