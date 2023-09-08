// function Addition(){
//     let num1 = Number (document.getElementById("num1").value);
//     let num2 = Number (document.getElementById("num2").value);
//     let result = document.getElementById("result");
//     result.value = (num1 + num2);

// }
// function Subtraction(){
//     let num1 = Number (document.getElementById("num1").value);
//     let num2 = Number (document.getElementById("num2").value);
//     let result = document.getElementById("result");
//     result.value = (num1 - num2);

// }
// function Multiplication(){
//     let num1 = Number (document.getElementById("num1").value);
//     let num2 = Number (document.getElementById("num2").value);
//     let result = document.getElementById("result");
//     result.value = (num1 * num2);

// }
// function Division(){
//     let num1 = Number (document.getElementById("num1").value);
//     let num2 = Number (document.getElementById("num2").value);
//     let result = document.getElementById("result");
//     result.value = (num1 / num2);

// }
// function Clear(){
//     document.getElementById("num1").value = "";
//     document.getElementById("num2").value = "";
//     document.getElementById("result").value = "";
// }
// fuction Delete(){
//     let num1 = document.getElementById("num1").value;
//     console.log(num1.length)
//     num1 = num1.slice(0,num1.length - 1);
// }

// function gTokg(){
//     let num1 = Number(document.getElementById("num1").value);
//     let result = (num1 / 1000);
//     let num2 = document.getElementById("num2")
//     num2.value = result;
// }
// function K2Tons(){
//     let num3 = Number(document.getElementById("num3").value);
//     let result = (num3 / 907.185);
//     let num4 = document.getElementById("num4")
//     num4.value = result;
// }
// function mTof(){
//     let num5 = Number(document.getElementById("num5").value);
//     let result = (num5 / 3.28084);
//     let num6 = document.getElementById("num6")
//     num6.value = result;
// }
// function gTokg(){
//     let num7 = Number(document.getElementById("num7").value);
//     let result = (num7 / 1000);
//     let num8 = document.getElementById("num8")
//     num8.value = result;
// }
// function gTokg(){
//     let num9 = Number(document.getElementById("num9").value);
//     let result = (num9 / 1000);
//     let num10 = document.getElementById("num10")
//     num10.value = result;
// }
function gTokg() {
    let grams = parseFloat(document.getElementById("num1").value);
    let kilograms = grams / 1000;
    document.getElementById("num2").value = kilograms;
}

function kgToGrams() {
    let kilograms = parseFloat(document.getElementById("num2").value);
    let grams = kilograms * 1000;
    document.getElementById("num1").value = grams;
}

function kgToTons() {
    let kilograms = parseFloat(document.getElementById("num3").value);
    let tons = kilograms / 1000;
    document.getElementById("num4").value = tons;
}

function tonsToKg() {
    let tons = parseFloat(document.getElementById("num4").value);
    let kilograms = tons * 1000;
    document.getElementById("num3").value = kilograms;
}

function mToFeet() {
    let meters = parseFloat(document.getElementById("num5").value);
    let feet = meters * 3.28084;
    document.getElementById("num6").value = feet;
}

function feetToM() {
    let feet = parseFloat(document.getElementById("num6").value);
    let meters = feet / 3.28084;
    document.getElementById("num5").value = meters;
}