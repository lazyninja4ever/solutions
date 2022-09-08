/*fjern kommentaren fra funktionskald på den opgave du vil teste løsningen på*/

function opg3() {
  let age = Number(prompt("alder"));
  console.log(age < 18 ? "5DKK" : "20DKK");
}
//opg3();


function opg4() {
  let tal1 = Number(prompt("angiv tal"));
  let tal2 = Number(prompt("angiv tal"));
  console.log(tal1 + tal2);
}
//opg4();


function opg5() {
  let tal1 = Number(prompt("angiv tal"));
  console.log(tal1%2 === 0 ? "lige" : "ulige");
}
//opg5();

function opg6a() {
  let name = prompt("hvad er dit navn?");
  console.log("hej " + name);

}
//opg6a();

function opg6b() {
  let firstName = prompt("hvad er dit fornavn?");
  let lastName = prompt("hvad er dit efternavn?");
  console.log(`hej ${firstName} ${lastName}`);

}
//opg6b();


function opg7() {
  let c = Number(prompt("Indtast celcius"));
  let f = c * (9/5) + 32;
  console.log(`${c} celcius = ${f} farenheit`);
}
//opg7();


function opg8() {

  let year = Number(prompt("Enter year"));

  let isLeap = (year % 4 === 0 && (year % 100 !== 0)) || year % 400 === 0;

  console.log(isLeap ? `${year} er et skudår` : `${year} er ikke et skudår`);
}
//opg8();


//Opgave 9:
let moms = 25;
let amount = 100;
function addVat(a) {
  return a * (1 + moms / 100);
  // a * (1 + 1/4) -> a * 5/4 (el. 125%)
}
//console.log(`${amount} plus moms er ${addVat(amount)}`);

function subVat(a) {
  return a / (1 + moms / 100);
  // a/ (1 + 1/4) -> a / 5/4 -> a * 4/5 (el. 80%)
}
//console.log(`${amount} uden moms er ${subVat(amount)}`);

function calcVat(a) {
  return a - subVat(a);
}
//console.log(`momsen af ${amount} udgør ${calcVat(amount)}`);


//opgave 10:
function c2f(c) {
  return 9 / 5 * c + 32;
}
//console.log(c2f(100));

function f2c(f) {
  return (f - 32) / (9/5);
}
//console.log(f2c(-40));



function opg11() {
  return Math.floor(Math.random() * 2 + 1);
}

/*
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
console.log(opg11());
*/


function opg12(n) {
  return Math.floor(Math.random() * n + 1);
}


/*
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
console.log(opg12(6));
*/














