interface ObjectStruc{name: string, age: number, active: boolean}
let inputEl1: HTMLInputElement = document.getElementById('inp1') as HTMLInputElement;
let inputEl2: HTMLInputElement = document.getElementById('inp2') as HTMLInputElement;
let btn: HTMLElement = document.getElementById('btn')!;
let output: HTMLElement = document.getElementById('output')!;


let inputs: string[] = [];


function addTwo(n1: number, n2: number): number{
    return n1 + n2;
}

function addObj(): void {
    let numb1: string = inputEl1.value;
    let numb2: string = inputEl2.value;
    let newItem: string = `${numb1} + ${numb2} = ${String(addTwo(Number(numb1), Number(numb2)))}`;
    inputs.push(newItem);
}

function displayObj(): void{
    output.innerHTML = '';
    for(let i = 0; i< inputs.length; i++){
        let newLi: HTMLElement = document.createElement('li');
        newLi.innerHTML = inputs[i];
        output.append(newLi);
    }
}

btn.addEventListener('click', function(){
    addObj();
    displayObj();
});