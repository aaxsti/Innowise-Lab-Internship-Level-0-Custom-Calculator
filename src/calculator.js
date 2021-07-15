class Calculator {
    constructor(previousOperandElement, currentOperandElement, memoryElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.memoryElement = memoryElement;
        this.memory = null;
        this.resetCalc = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        debugger
        this.currentOperand = this.currentOperand.toString();
        if (this.currentOperand.length) {
            this.currentOperand = this.currentOperand.slice(0, -1)
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    changeSign() {
        this.currentOperand = this.currentOperand.toString();
        if (this.currentOperand.includes('-')) {
            this.currentOperand = this.currentOperand.slice(1)
        } else {
            this.currentOperand = '-' + this.currentOperand
        }
    }

    clearMemory() {
        this.memory = null;
    }

    addToMemory() {
        if (this.currentOperand === '') return;
        this.memory
            ? (this.memory += parseFloat(this.currentOperand))
            : (this.memory = parseFloat(this.currentOperand));
    }

    subMemory() {
        if (this.currentOperand === '') return;
        this.memory
            ? (this.memory -= parseFloat(this.currentOperand))
            : (this.memory = -parseFloat(this.currentOperand));
    }

    readMemory() {
        if (this.memory === null) return;
        this.currentOperand = this.memory;
    }

    singleOperation(operationSingle){
        let result
        const current = parseFloat(this.currentOperand);

        if(isNaN(current)) return

        this.operationSingle = operationSingle

        switch(this.operationSingle) {
            case '%':
                result = current / 100
                break
            case 'x²':
                result = current ** 2
                break
            case 'x³':
                result = current ** 3
                break
            case '1/x':
                result = 1 / current
                break
            case '10x':
                result = 10 ** current
                break
            case 'ex':
                result = Math.exp(current)
                break
            case '√x':
                result = Math.sqrt(current)
                break
            case '∛x':
                result = Math.cbrt(current)
                break
            case 'ln':
                result = isNaN(Math.log(current)) ? NaN : Math.log(current)
                break
            case 'log10':
                result = Math.log10(current)
                break
        }

        if(this.previousOperand === ''){
            this.resetCalc = true
        }

        this.currentOperand = isNaN(result) ? 'Error' : result    // Error checks
        this.singleOperationFlag = true
    }

    checkOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.calculate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    calculate() {
        let result
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case 'xy':
                result = prev ** current;
                break
            case 'y√x':
                result = Math.pow(prev, 1/current);
                break
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const strNumber = number.toString();
        const intDigits = parseFloat(strNumber.split('.')[0]);
        const decDigits = strNumber.split('.')[1];
        let intDisplay;

        if (isNaN(intDigits)) {
            intDisplay = ''
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }

        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`;
        } else {
            return intDisplay;
        }
    }

    updateDisplay() {
        if (this.memory !== null) {
            this.memoryElement.innerText = `M: ${this.memory}`;
        } else {
            this.memoryElement.innerText = '';
        }

        if (this.currentOperand === 'Error') {
            this.currentOperandElement.innerText = this.currentOperand;
            this.clear()
        } else this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);

        if (this.singleOperationFlag === true){
            this.singleOperationFlag = false
            return
        }

        if (this.operation != null) {
            this.previousOperandElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandElement.innerText = ''
        }
    }
}

export default Calculator;