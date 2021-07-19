import {calculator} from "./app";

export function mapEvent(element, callback) {
    if (!NodeList.prototype.isPrototypeOf(element)) {
        element.addEventListener('click', () => {
            callback.call(calculator)
            calculator.updateDisplay();
            if (callback.name === "calculate") calculator.resetCalc = true;
        })
    } else {
        Array.from(element).forEach(el => {
            el.addEventListener('click', () => {
                callback.call(calculator, el.innerText);
                calculator.updateDisplay();
            })
        })
    }
}

export function trans() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

export function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}