//køres med node i terminal
//$node opg4

const fs = require('fs');
const {sumTwo} = require('./opg3_m.js');
const ageFactor = 23;

fs.readFile('persons2022.json', 'utf-8', (error, text) =>{
	if (error) throw error;
	let persArray = JSON.parse(text).persons;
	let agedPers = {persons: []};
	for(i in persArray){
		agedPers.persons.push({
			name: persArray[i].name, 
			age: sumTwo(persArray[i].age, ageFactor)
		});
	}
	let data = JSON.stringify(agedPers);
	fs.writeFile('persons2045.json', data, error =>{
		if (error) throw error;
		console.log('persons aged sucessfully');
	});

});