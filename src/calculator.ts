const display = document.querySelector('#display') as HTMLInputElement
const digitKeys = document.querySelectorAll('.digit') as NodeList
const operatorKeys = document.querySelectorAll('.operator') as NodeList
const clearDisplayKey = document.querySelector('#clear') as HTMLButtonElement
const resultKey = document.querySelector('#result') as HTMLButtonElement

/**
 * The current input value as a number.
 */
let num2: number
/**
 * The previous input value as a number.
 */
let num1: number 

/**
 * The current input value as a string.
 */
let currentValue: string = ''

/**
 * The current operation symbol (+, -, *, /) or null if none.
 */
let operation: string 


/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */


    
/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */
function operatorHandler(op:string) {
    //For negative numbers, if the operation is '-' and the current value is empty.
    if(op === ' - ' && currentValue === ''){
        currentValue = '-'
        display.value += op
        return
    }

    //If there is already a previous input value, calculates the result first.
    if(num1 && operation){
        num2 = +currentValue

        num1 = calculate(operation)
    }
    else{
        num1 = currentValue ? +currentValue : 0
    }
    display.value += op
    operation = op.trim()
    currentValue = ''
    
}

/**
 * Clears the current and previous input values and the operation and updates the display.
 */
function clearDisplay() {
    display.value = ''
    currentValue = ''
    num1 = 0
    num2 = 0
}

/**
 * Updates the display element with the current input value.
 */
function displayChar(char:string) {
    if(display.value === '' || display.value === '0' || display.value === 'Math Error'){
        display.value = char
        currentValue = char
    }
    else {
        display.value += char
        currentValue += char
    }
}

// Initialize the display with the current input value.
/**
 * @param input - initial screen value
 */

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */
function calculate(operation : string) {
    num2 = currentValue ? +currentValue : 0
    let result = 0
    console.log(num1, num2, operation)
    switch (operation) {
        case '+':
            display.value = (num1 + num2).toString()
            result = num1 + num2
            break;
        case '-':
            display.value = (num1 - num2).toString()
            result = num1 - num2
            break;
        case '*':
            display.value = (num1 * num2).toString()
            result = num1 * num2
            break;
        case '/':
            num2 === 0 ?
            display.value = 'Math Error'
            :
            display.value = (num1 / num2).toString()
            result = num1 / num2
            break;
    
        default:
            break;
    }
    return result
}


document.addEventListener('DOMContentLoaded', () => {
    digitKeys.forEach(key => {
        key.addEventListener('click', () => {
            displayChar((key as HTMLInputElement).value)
        })
    })
    operatorKeys.forEach(key => {
        key.addEventListener('click', () => {
            operatorHandler((key as HTMLInputElement).value)
        })
    })
    clearDisplayKey.addEventListener('click', () => clearDisplay())
    resultKey.addEventListener('click', () => calculate(operation))
})


