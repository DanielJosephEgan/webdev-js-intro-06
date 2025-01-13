"use strict";

const submissionBtn = document.getElementById("submission-btn");

const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;

    if (num % 2 === 0) {
    document.getElementById("even-or-odd").innerHTML = `${"Even"}`;
    } else {
    document.getElementById("even-or-odd").innerHTML = `${"Odd"}`;
    }
} 

function sumTheNumbers() {
    let sum = 1;
    let total = 0; 
    for (let sum = 1; sum < 11; sum++){ 
    total += sum;}
    // document.getElementById("sum-the-numbers").innerText = `${total}`;
    sumTheNumbersElement.innerText = total;
    

}

function createNumberArray() {
    const numberArray = [];
    for (let i = 1; i < 11; i++)
    numberArray.push(i);
    
    // document.getElementById("create-number-array").innerHTML = numberArray;
    createNumberArrayElement.innerText = numberArray
}

function render() {
    evenOrOdd()
    sumTheNumbers()
    createNumberArray()
}

submissionBtn.addEventListener("click", function () {
    render();
});
