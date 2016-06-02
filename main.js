var buttons = document.querySelectorAll('button');
var result = document.getElementById('result');

for (i = 0; i < buttons.length; i++){
  if (buttons[i].value === "="){
    buttons[i].addEventListener("click", calc);
  } else if (buttons[i].value === "c"){
    buttons[i].addEventListener("click", clear);
  } else {
    buttons[i].addEventListener("click", addVal(i));
  }
}

function calc(){
  result.textContent = eval(result.textContent);
}

function addVal(i){
  return function(){
    result.textContent += buttons[i].value;
  }
}

function clear(){
  result.textContent = '';
}
