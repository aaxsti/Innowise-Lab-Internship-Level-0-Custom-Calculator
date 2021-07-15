import {calculator} from "./app";

export function mapEvent(element, callback) {
    element.addEventListener('click', () => {
        console.log(callback)
        callback.call(calculator)
        calculator.updateDisplay();
    })
}

export function trans() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}