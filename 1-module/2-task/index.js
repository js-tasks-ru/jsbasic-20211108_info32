/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name == !true) {
    alert("The name is empety");
  }
  else  if (name.length<4 ){
    alert("The name must be longer than 4 characters");
  }
  else if(name.indexOf(' ') >= 0){
    alert("There are spaces in the name.")
  }
  else{
    return name;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
//проверка hw2.html 
