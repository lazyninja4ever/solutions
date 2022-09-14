let btnP = document.getElementById('btnPlus');
let btnS = document.getElementById('btnMinus');
let btnM = document.getElementById('btnMul');
let btnD = document.getElementById('btnDiv');
let input1 = document.getElementById('nb1');
let input2 = document.getElementById('nb2');
let outputEl = document.getElementById('outputP');

let numb1;
let numb2;

const getInput = () => {
  numb1 = Number(input1.value);
  numb2 = Number(input2.value);
}
const addFunk = () => {
  getInput();
  outputEl.innerHTML = numb1+ numb2;
}

const subFunk = () => {
  getInput();
 outputEl.innerHTML = numb1 - numb2; 
}

const mulFunk = () => {
  getInput();
  outputEl.innerHTML = numb1 * numb2;
}

const divFunk = () => {
  getInput();
  outputEl.innerHTML = numb1 / numb2;
}

btnP.addEventListener('click', addFunk);
btnS.addEventListener('click', subFunk);
btnM.addEventListener('click', mulFunk);
btnD.addEventListener('click', divFunk);