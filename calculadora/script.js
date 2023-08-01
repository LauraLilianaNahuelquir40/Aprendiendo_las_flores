let currentResult = 0;
let currentOperator = "";
let isOperatorClicked = false;

function addNumber(number) {
    const result = document.getElementById("result");
  
    if (isOperatorClicked) {
        result.value = "";
        isOperatorClicked = false;
    }
  
    result.value += number;
}

function addOperation(operator) {
    currentResult = parseFloat(document.getElementById("result").value);
    currentOperator = operator;
    isOperatorClicked = true;
}

function calculate() {
    const result = document.getElementById("result");
    const number = parseFloat(result.value);

    switch (currentOperator) {
        case "+":
            currentResult += number;
            break;
        case "-":
            currentResult -= number;
            break;
        case "*":
            currentResult *= number;
            break;
        case "/":
            currentResult /= number;
            break;
    }

    result.value = currentResult;
}

function clearResult() {
    document.getElementById("result").value = "";
    currentResult = 0;
    currentOperator = "";
    isOperatorClicked = false;
}
