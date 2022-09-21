let output = document.getElementById('outPut');

let string = prompt("string");

logCombo(string);

const logCombo = () => {

  for(let i = 1; i < str.length; i+2){
    for(let j = 1; j < str.length; j++) {
      newLi = document.createElement('li');
      innerHTML = str[i-1] + str[j-1];
      j++;
    }
      output.append(newLi);
  }

}

