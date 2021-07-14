class Calculator {
    constructor(previousOperandElement, currentOperandElement, calcMemory) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.calcMemory = null;
        this.resetCalc = false;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
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

    addToMemory() {
        // m+
        this.memory += +this.currentOperand;
        console.log(this.memory)
    }

    subMemory() {
        this.memory -= +this.currentOperand;
        console.log(this.memory)
    }

    clearMemory() {
        // mc
        this.memory = 0;
        console.log(this.memory)
    }

    readMemory() {
        // mr
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

    singleOperation(operationSingle){
        let result
        const current = parseFloat(this.currentOperand);

        if(isNaN(current)) return

        this.operationSingle = operationSingle

        console.log(current, typeof current);

        switch(this.operationSingle){
            case 'x²':
                result = current ** 2
                break
            case '1/x':
                result = 1 / current
                break
            case '√x':
                result = Math.sqrt(current)
                break
            case 'ln':
                result = isNaN(Math.log(current)) ? 0 : Math.log(current)
                break
            case 'log10':
                result = Math.log10(current)
                break
        }

        if(this.previousOperand === ''){
            this.resetCalc = true
        }

        this.currentOperand = result
        this.singleOperationFlag = true
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
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);

        if(this.singleOperationFlag === true){
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