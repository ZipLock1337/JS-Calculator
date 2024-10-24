// Click on btn

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('inputField');

        if (button.classList.contains('number')) {
            display.value += button.getAttribute('data-number');
        }
        else if (button.classList.contains('operator')) {
            display.value += button.getAttribute('data-operator');
        }
    });
});

// Click on key Enter

document.addEventListener('keydown', (event) => {
    const display = document.getElementById('inputField');

    if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});

// Click btn Enter

document.getElementById('enter').addEventListener('click', () => {
    calculateResult();
});

// Del function

function delFunction() {
    const display = document.getElementById('inputField');
    display.value = '';
}

// backspace function

function backspaceFunction() {
    const display = document.getElementById('inputField');
    display.value = display.value.slice(0, -1);
}

// calculate function

function calculateResult() {
    const display = document.getElementById('inputField');
    try {
        const result = Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = 'ERROR';
    }
}

function calculateResult() {
    const display = document.getElementById('inputField');
    const lastChar = display.value.slice(-1);

    if (isNaN(lastChar)) {
        display.value = 'ERROR';
    } else {
        try {
            display.value = Function('return ' + display.value)();
        } catch (error) {
            display.value = 'ERROR';
        }
    }
}
