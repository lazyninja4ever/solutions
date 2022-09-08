let stylePath = document.getElementById('styleSwitch');
let btn = document.getElementById('toggleBtn');
//holder styr på om dark mode er på eller ej
let isDark = false;

function switchModes(){
  let path;
  let btnTxt;
  //sæt css navn og tekst på knap baseret på om dark mode er on eller off
  isDark ? path = 'light' : path = 'dark';
  isDark ? btnTxt = 'dark' : btnTxt = 'light';

  //sæt href attiburte på vores style link
  stylePath.setAttribute('href', `${path}.css`);
  //skift tekst på btn
  btn.innerHTML = `switch to ${btnTxt}`;
  //skift status på darkmode til det modsatte
  isDark = !isDark;
}

btn.addEventListener('click', switchModes);