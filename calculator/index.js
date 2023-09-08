function one(number){
    let num = document.getElementById("num");
    num.value += number;
}
function plus(operator){
    let num = document.getElementById("num");
    num.value += operator;
}
function equal(){
    let num = document.getElementById("num");
    num.value = eval(num.value);
}
function clr(){
    let num = document.getElementById("num");
    num.value = "";
}
function del(){
    num.value = num.value.slice(0, -1);
}
function sqrt() {
    let currentValue = parseFloat(num.value);
    if (!isNaN(currentValue)) {
        num.value = Math.sqrt(currentValue);}
    }

function prcnt() {
    var currentValue = parseFloat(num.value);
    if (!isNaN(currentValue)) {
    num.value = (currentValue / 100).toFixed(2);}
    }