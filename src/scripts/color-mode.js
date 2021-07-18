import {setTheme, trans} from "./utils";

function colorModeToggle() {
    const checkbox = document.querySelector('input[name=theme]');

    setTheme('light')

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            trans();
            setTheme('dark')
        } else {
            trans();
            setTheme('light')
        }
    })
}

export default colorModeToggle;