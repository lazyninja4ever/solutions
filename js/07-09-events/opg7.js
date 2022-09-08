const userName = 'mitUserName';
const password = 'mitPassWord';
const outPut = document.getElementById('message');


let form = document.getElementById('login');
let userInput = document.getElementById('userName');
let userPwd = document.getElementById('pswrd');

function checkLogin(){
  //check username
  let rightUser = userInput.value === userName ? true : false;
  //check password
  let rightPwd = userPwd.value === password ? true : false;
  //tjek samlet login
  let loggedIn = rightUser && rightPwd;
  //kald funktion baseret på om username OG password passer
  loggedIn ? valid() : notValid();
}

//hvis login ikke er korrekt
function notValid(){
  outPut.innerHTML = 'wrong login';
}

//hvis login er valid
function valid(){
  //redirect
  window.location.href = "success.html";
}

//brug event bubbling til at tjekke for changes til input felter fra formen  - parent til begge
form.addEventListener('input', checkLogin );
