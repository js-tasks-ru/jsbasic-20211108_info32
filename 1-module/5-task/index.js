let str = prompt("Enter something","Only those who can see the invisible can do the impossible!!!");
alert(str.length);
let maxlength = str.length-20;

function truncate(str){
  if (str.length <= maxlength){
    return str;
  } else {
     return str.slice(0, maxlength) + "...";
  }
}
document.getElementById("cutStr").innerHTML = truncate(str);
//to check it, run hw5.html