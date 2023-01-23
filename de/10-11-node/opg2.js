//køres med node i terminal
//$node opg2

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

fs.readFile('opg1_question.txt', 'utf-8', (error, text) =>{
    if(error) throw error;
    //console.log(text)
    readline.question(text, animal =>{
        let data = `Du svarede: "${animal}" til spørgsmålel: "${text}"`;
        //alt brug writeFile - overskriver filen hver gang
        fs.appendFile('opg2_answers.txt', data + '\n', error =>{
            if (error) throw error;
            console.log('wrote file');
        } );
        readline.close();
    });
})