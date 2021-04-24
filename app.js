
let firstValue = prompt(`Enter the first number `);
let numberOne = Number(firstValue) || 0;

let secondValue = prompt(`Enter the second number `);
let numberTow = Number(secondValue) || 0;

let thirdValue = prompt(`Enter the third number `);
let numberThree = Number(thirdValue) || 0;

let sum = numberOne + numberTow + numberThree;

const maxNumber = Math.max(numberOne, numberTow, numberThree);

const minNumber = Math.min(numberOne, numberTow, numberThree);

let middleNumber = sum - maxNumber - minNumber;

console.log(minNumber, middleNumber, maxNumber); 

