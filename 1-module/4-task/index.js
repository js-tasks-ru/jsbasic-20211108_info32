let phrase = prompt('Insert a phrase', "");
let str = phrase.toLowerCase();
function checkSpam(str) {
  //явно преобразовано в нижний регистр 
  if (str.includes('xxx') || str.includes('1xbet') ){
    return 1;//true 
  }else{
    return 0;//false 
  }
}
let rezult = checkSpam(str);

alert(Boolean(rezult));
//to test fire up hw4.html