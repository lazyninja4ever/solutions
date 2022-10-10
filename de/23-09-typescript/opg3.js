var btn = document.getElementById('btn');
var output = document.getElementById('output');
var countShow = document.getElementById('counter');
var objCount = Number(prompt('enter number'));
if (objCount <= 0) {
    output.innerHTML = 'no objects added';
}
else {
    btn.addEventListener('click', function () {
        addObj();
    });
    updateDisplay();
}
function updateDisplay() {
    countShow.innerHTML = "".concat(objCount, " objects still needed");
}
function addObj() {
}
