import './style.css';
import Calculator from "./calculator";

// Getting DOM elements
const infoButton = document.getElementById('app-info');

const numberButtons = document.querySelectorAll('[data-number]');
const mainOperationButtons = document.querySelectorAll('[data-main-operation]');
const equalButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-clear-all]');
const deleteButton = document.querySelector('[data-delete]');

const singleOperationButtons = document.querySelectorAll('[data-single-operation]');
const changeSign = document.querySelector('[data-change-sign]');

const prevOperand = document.getElementById('prev-operand');
const currOperand = document.getElementById('curr-operand');
const calcMemory = document.getElementById('calc-memory');

const readMemory = document.querySelector('[data-read-memory]');
const addValueToMemory = document.querySelector('[data-add-value-to-memory]');
const subMemoryFromValue = document.querySelector('[data-sub-value-from-memory]');
const clearMemory = document.querySelector('[data-clear-memory]');

const calculator = new Calculator(prevOperand, currOperand, calcMemory);

// Mapping events to elements
addValueToMemory.addEventListener('click', () => {
    calculator.addToMemory();
    calculator.updateDisplay();
})

changeSign.addEventListener('click', () => {
    calculator.changeSign();
    calculator.updateDisplay();
})

singleOperationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.singleOperation(btn.innerText);
        calculator.updateDisplay();
    })
})

readMemory.addEventListener('click', () => {
    calculator.readMemory();
    calculator.updateDisplay();
})

clearMemory.addEventListener('click', () => {
    calculator.clearMemory();
    calculator.updateDisplay();
})

equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
    calculator.resetCalc = true;
})

subMemoryFromValue.addEventListener('click', () => {
    calculator.subMemory();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

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

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

infoButton.addEventListener('click', () => alert('Calculator app created by Maxim Astapenko'))