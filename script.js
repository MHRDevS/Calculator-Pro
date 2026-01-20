let display = document.getElementById('inputBox');

function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculateResult() {
    try {
        let expression = display.value.replace(/×/g, '*');
        
        expression = expression.replace(/(\d+)%/g, function(match, p1) {
            return '(' + p1 + '/100)';
        });
        
        let result = eval(expression);
        
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = parseFloat(result.toFixed(8));
        }
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendValue(key);
    }
    
    else if (key === '+' || key === '-' || key === '*') {
        appendValue(key);
    }
    else if (key === '/') {
        event.preventDefault(); 
        appendValue('/');
    }
    
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    }
    
    else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
    
    else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
    
    else if (key === '.') {
        appendValue('.');
    }
    
    else if (key === '%') {
        appendValue('%');
    }
});

display.value = "0";

function calculatePercentage() {
    try {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = currentValue / 100;
        }
    } catch (error) {
        display.value = "Error";
    }
}