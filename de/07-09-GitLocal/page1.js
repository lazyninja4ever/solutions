let nptFld = document.getElementById('usrNpt');
let btn = document.getElementById('addBtn');
let listOut = document.getElementById('list');


//kommentar
console.log('hej');



const addToList = () => {
  let newLi = document.createElement('p');
  newLi.innerHTML = nptFld.value;
  listOut.append(newLi);
}

btn.addEventListener('click', addToList);
