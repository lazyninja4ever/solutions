let btn = document.getElementById('partyBtn');
let background = document.querySelector('body');
let isOn = false; //holder styr på om "party" er on eller off

btn.addEventListener('click', tjeckParty);



function tjeckParty(){
  isOn ? partyOff() : partyOn();
}

let partyOn = () => {
  btn.innerHTML = 'Party off';
  background.classList.remove('neutral');
  background.classList.add('anim');
  isOn = true;

}

let partyOff = () => {
  btn.innerHTML = 'Party on';
  background.classList.add('neutral');
  background.classList.remove('anim');
  isOn = false;
}