const numb =Math.floor(Math.random()*1000);
btn = document.getElementById('checkNumb');
inputEl = document.getElementById('usrIpt');
output = document.getElementById('output');
let count = 0;

const checkNumber = () => {
  input = Number(inputEl.value);
  count++;
  input === numb ? right() : wrong ();

}

console.log('edit');
const wrong = () => {
  let msg;
  input < numb ? msg=`higher than ${input}` : msg =`lower than ${input}`;
  output.innerHTML = msg;
}

const right = () => {
  output.innerHTML = `gættet rigtigt på ${count} forsøg`;

}

btn.addEventListener('click', checkNumber);


