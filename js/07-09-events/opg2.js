let outPut = document.getElementById('sec1');
let name = prompt('your name');
let hobbie = prompt('something you like');

let heading = document.createElement('h1');
let para = document.createElement('p');

heading.innerHTML = `Hi ${name}`;
para.innerHTML = `Jeg har hørt at du godt kan lide ${hobbie}`;

outPut.append(heading);
outPut.append(para);

