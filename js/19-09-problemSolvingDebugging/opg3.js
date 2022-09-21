//ret outPut til output
let output = document.getElementById('output');

let string = prompt("string");

//ryk logCombo(string) funktionskald til bunden/efter funktionene er declared

//tilføj str til parameterliste
const logCombo = (str) => {
//ret til i = 0, og i++
  for(let i = 0; i < str.length; i++){
    //ret til j = 0
    for(let j = 0; j < str.length; j++) {
      //tilføj let for ikke at lave en global variabel
      let newLi = document.createElement('li');
      //definer hvilet ellement innerHTML sættes for
      //ret str[i-1] + str[j-1] til str[i] + str[j]
      newLi.innerHTML = str[i] + str[j];
      //fjern j++
      output.append(newLi);
    }
    //ryk output.append(newLi) ind i inderste for loop
  }

}

logCombo(string);
