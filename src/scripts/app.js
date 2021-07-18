import './../styles/main.scss';
import Calculator from "./calculator";
import {mapEvent} from "./utils";
import colorModeToggle from "./color-mode";

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

function mapAllEvents() {
    mapEvent(equalButton, calculator.calculate);
    mapEvent(deleteButton, calculator.delete);
    mapEvent(allClearButton, calculator.clear);
    mapEvent(changeSign, calculator.changeSign);

    mapEvent(subMemoryFromValue, calculator.subMemory);
    mapEvent(addValueToMemory, calculator.addToMemory);
    mapEvent(clearMemory, calculator.clearMemory);
    mapEvent(readMemory, calculator.readMemory);
    mapEvent(infoButton, () => alert('Calculator app created by Maxim Astapenko'));

    mapEvent(numberButtons, calculator.appendNumber);
    mapEvent(mainOperationButtons, calculator.checkOperation);
    mapEvent(singleOperationButtons, calculator.singleOperation);
}

mapAllEvents();

colorModeToggle();