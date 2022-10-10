interface userObj {name: string, age: number, active: boolean}
let btn: HTMLElement = document.getElementById('btn')!;
let output: HTMLElement = document.getElementById('output')!;
let countShow: Element = document.getElementById('counter')!;
let section: Element = document.getElementById('inputArea')!;

let objCount: number = Number(prompt('enter number'));
if(objCount <= 0){
    section.setAttribute('style', ));
    output.innerHTML = 'no objects added';

} else{
    btn.addEventListener('click', function(){
        addObj();
    });
    updateDisplay();
}

function updateDisplay(): void{
    countShow.innerHTML = `${objCount} objects still needed`;
}

function addObj():void{
    
}


