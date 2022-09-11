let form = document.getElementById('inputForm');
let modal = document.getElementById('modal');
let close = document.getElementById('close');

let name = document.getElementById('iName');
let age = document.getElementById('iAge');
let addre = document.getElementById('iAddress');
let hobby = document.getElementById('iHobbi');

let putName = document.getElementById('pName');
let putAge = document.getElementById('pAge');
let putAddr = document.getElementById('pAddress');
let putHobby = document.getElementById('pHobby');

form.addEventListener('submit', function(event){
  popModal();
  event.preventDefault();
});

let popModal = () =>{
  putName.innerHTML = `Name: ${name.value}`
  putAge.innerHTML = `Age: ${age.value}`
  putAddr.innerHTML = `Adress: ${addre.value}`
  putHobby.innerHTML = `Hobby: ${hobby.value}`
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

