//køre med node i terminal
//$node opg1

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

fs.readFile('opg1_question.txt', 'utf-8', (error, text) =>{
    if(error) throw error;
    //console.log(text)
    readline.question(text, animal =>{
        console.log(`Du svarede: "${animal}" til spørgsmålel: "${text}"`);
        readline.close();
    });
})