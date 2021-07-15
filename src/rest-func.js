import {calculator} from "./app";

subMemoryFromValue.addEventListener('click', () => {
    calculator.subMemory();
    calculator.updateDisplay();
})

equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
    calculator.resetCalc = true;
})

clearMemory.addEventListener('click', () => {
    calculator.clearMemory();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

readMemory.addEventListener('click', () => {
    calculator.readMemory();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

addValueToMemory.addEventListener('click', () => {
    calculator.addToMemory();
    calculator.updateDisplay();
})

changeSign.addEventListener('click', () => {
    calculator.changeSign();
    calculator.updateDisplay();
})
