var inputEl1 = document.getElementById('inp1');
var inputEl2 = document.getElementById('inp2');
var btn = document.getElementById('btn');
var output = document.getElementById('output');
var inputs = [];
function addTwo(n1, n2) {
    return n1 + n2;
}
function addObj() {
    var numb1 = inputEl1.value;
    var numb2 = inputEl2.value;
    var newItem = "".concat(numb1, " + ").concat(numb2, " = ").concat(String(addTwo(Number(numb1), Number(numb2))));
    inputs.push(newItem);
}
function displayObj() {
    output.innerHTML = '';
    for (var i = 0; i < inputs.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = inputs[i];
        output.append(newLi);
    }
}
btn.addEventListener('click', function () {
    addObj();
    displayObj();
});
