//Creating an addition function
function add (numberA, numberb) {
   return numberA + numberb
}

let firstNumber = 5
let secondNumber = 6
let addTwoNumbers = add (firstNumber, secondNumber )
console.log (`The addition of two numbers ${firstNumber} & ${secondNumber} is : ${addTwoNumbers}` )

//Creating an subtraction function
function subtraction (numberA, numberb) {
    return numberA - numberb
 }
 let number1 = 6
 let number2 = 5
let subtractTwoNumbers = subtraction (number1, number2 )
console.log (`The subtraction of two numbers ${number1} & ${number2} is : ${subtractTwoNumbers}` )

//Creating an multiplication function
const multiplication  = (numberA, numberb) => {
    return numberA * numberb;
 }
 let numbe1 = 5
 let numbe2 = 6
let mutiplyTwoNumbers = multiplication (numbe1, numbe2 )
console.log (`The multiplication of two numbers ${numbe1} & ${numbe2} is : ${mutiplyTwoNumbers}` )

//Creating an Division function
const division  = (a, b) => {
    return a / b
 }

let numb1 = 30
let numb2 = 5
let divideTwoNumbers = division (numb1, numb2)
console.log (`The division of two numbers ${numb1} & ${numb2} is : ${divideTwoNumbers}` )

//Testing the calculation funcctions

 module.exports = { add, subtraction, multiplication, division}




