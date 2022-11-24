let num1 = 8
let num2 = 2
let num1El = document.getElementById("num1-el").textContent = num1
let num2El = document.getElementById("num2-el").textContent = num2
let sumNumbers = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {

    let numAdd = num1 + num2
    sumNumbers.textContent = "Sum: " + numAdd

}

function subtract() {
    let numSubtract = num1 - num2
    sumNumbers.innerText = "Sum: " + numSubtract

}

function divide() {
    let numDivide = num1 / num2
    sumNumbers.innerText = "Sum: " + numDivide
}

function multiply() {
    let numMultiply = num1 * num2
    sumNumbers.innerText = "Sum: " + numMultiply

}