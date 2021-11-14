let str = prompt("Enter a word","");
function ucFirst(str) {
  //пустая строка
  if (str.length === 0){
    return "  ";
    //строка из одной буквы
  } else if (str.length === 1)
  {
    return str.charAt(0).toUpperCase();
    //букв > 1
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
document.getElementById('firstLetter').innerHTML = ucFirst(str);
//to test fire up hw3.html