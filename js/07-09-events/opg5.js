let btn = document.getElementById('partyBtn');
let background = document.querySelector('body');
let isOn = false; //holder styr på om "party" er on eller off

let tjeckParty = () => {
  isOn ? btn.innerHTML = 'Party off' :  btn.innerHTML = 'Party on'; //tjek om party er on eller off, ret teksten
  background.classList.toggle('neutral'); //hvis den er der bliver den fjerent, hvis den ikke er der bliver den tilføjet
  background.classList.toggle('anim');
  isOn = !isOn; //ændre status på party on til off, eller off til on
}

btn.addEventListener('click', tjeckParty);
