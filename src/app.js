import './style.scss';
import Calculator from "./calculator";
import {mapEvent, trans} from "./utils";

// Getting DOM elements
const prevOperand = document.getElementById('prev-operand');
const currOperand = document.getElementById('curr-operand');
const calcMemory = document.getElementById('calc-memory');

const numberButtons = document.querySelectorAll('[data-number]');
const mainOperationButtons = document.querySelectorAll('[data-main-operation]');
const singleOperationButtons = document.querySelectorAll('[data-single-operation]');

const equalButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-clear-all]');
const deleteButton = document.querySelector('[data-delete]');
const changeSign = document.querySelector('[data-change-sign]');

const readMemory = document.querySelector('[data-read-memory]');
const addValueToMemory = document.querySelector('[data-add-value-to-memory]');
const subMemoryFromValue = document.querySelector('[data-sub-value-from-memory]');
const clearMemory = document.querySelector('[data-clear-memory]');

const infoButton = document.getElementById('app-info');

export const calculator = new Calculator(prevOperand, currOperand, calcMemory);

// Mapping events to elements
// mapEvent(equalButton, calculator.calculate);
mapEvent(deleteButton, calculator.delete);
mapEvent(allClearButton, calculator.clear);
mapEvent(changeSign, calculator.changeSign);

mapEvent(subMemoryFromValue, calculator.subMemory);
mapEvent(addValueToMemory, calculator.addToMemory);
mapEvent(clearMemory, calculator.clearMemory);
mapEvent(readMemory, calculator.readMemory);

equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
    calculator.resetCalc = true;
})

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    })
})

mainOperationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.checkOperation(btn.innerText);
        calculator.updateDisplay();
    })
})

singleOperationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.singleOperation(btn.innerText);
        calculator.updateDisplay();
    })
})

infoButton.addEventListener('click', () => alert('Calculator app created by Maxim Astapenko'))


// COLOR MODE

const checkbox = document.querySelector('input[name=theme]');
console.log(checkbox)
document.documentElement.setAttribute('data-theme', 'light');
checkbox.addEventListener('change', function () {
    console.log(this)
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

