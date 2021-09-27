let valueOne = 0;
let signal = "";
let valueTwo = 0;
let finalValue = 0;

function fillInput(button) {
    calculo.value += button;
}

function decimal() {
    if (calculo.value != 0) {
        calculo.value += '.';
    }
    else {
        calculo.value = '0.';
    }
}

function clearInput() {
    if (calculo.value != '') {
        calculo.value = "";
        if (finalValue != 0) {
            finalValue = 0;
        }
    }
}

function invertOperator() {
    let inputCalculo = calculo.value;

    if (inputCalculo != '')
        calculo.value *= -1;
}

function chooseOperator(operator) {
    if (finalValue == 0) {
        valueOne = parseFloat(calculo.value);
        signal = operator;
        calculo.value = "";
    }
    else {
        finalValue = parseFloat(calculo.value);
        signal = operator;
        calculo.value = "";
    }
}

function result() {
    valueTwo = parseFloat(calculo.value);

    switch (signal) {
        case '+':
            if (finalValue == 0) {
                finalValue = valueOne + valueTwo;
                calculo.value = finalValue;
            }
            else {
                finalValue += valueTwo;
                calculo.value = finalValue;
            }
            break;

        case '-':
            if (finalValue == 0) {
                finalValue = valueOne - valueTwo;
                calculo.value = finalValue;
            }
            else {
                finalValue -= valueTwo;
                calculo.value = finalValue;
            }
            break;

        case '*':
            if (finalValue == 0) {
                finalValue = valueOne * valueTwo;
                calculo.value = finalValue;
            }
            else {
                finalValue *= valueTwo;
                calculo.value = finalValue;
            }
            break;

        case '/':
            if (finalValue == 0) {
                finalValue = valueOne / valueTwo;
                calculo.value = finalValue;
            }
            else {
                finalValue /= valueTwo;
                calculo.value = finalValue;
            }
            break;

        default:
            alert("Sem operador");
    }
}