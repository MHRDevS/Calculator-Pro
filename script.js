var display = document.getElementById("inputBox");

function appendValue(value) {
    if (display.value == "0") {
        display.value = value;
    } else {
        display.value = display.value + value;
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

function calculateResult() {
    var exp = display.value;

    if (exp == "") {
        display.value = "0";
        return;
    }

    exp = exp.replace("×", "*");

    if (exp.indexOf("%") != -1) {
        var num = exp.replace("%", "");
        display.value = num / 100;
        return;
    }

    var result = eval(exp);

    if (result == Infinity || isNaN(result)) {
        display.value = "Error";
    } else {
        display.value = result;
    }
}

display.value = "0";
