const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".key");
const numberButtons = document.querySelectorAll(".key.number");
const operatorButtons = document.querySelectorAll(".key.operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equal");

let displayValue = "";
let firstOperand = "";
let operator = "";
let secondOperand = "";
let resultShown = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Cannot divide by zero.";
  return a / b;
}

function operate(calculation, a, b) {
  switch (calculation) {
    case "plus":
      return add(a, b);
    case "minus":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      return "Error: Invalid operator.";
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.key;

    if (resultShown && operator === "") {
      displayValue = "";
      firstOperand = "";
      operator = "";
      secondOperand = "";
      resultShown = false;
    }

    if (operator === "") {
      firstOperand += value;
    } else {
      secondOperand += value;
    }
    displayValue += value;
    display.textContent = displayValue;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.dataset.key;
    console.log(operator);
    displayValue = "";
    display.textContent = displayValue;
  });
});

clearButton.addEventListener("click", () => {
  displayValue = "";
  firstOperand = "";
  operator = "";
  secondOperand = "";
  resultShown = false;
  display.textContent = "0";
});

equalsButton.addEventListener("click", () => {
  if (!secondOperand) return;

  let solution = operate(operator, +firstOperand, +secondOperand);
  displayValue = solution.toString();
  display.textContent = displayValue;
  firstOperand = solution.toString();
  operator = "";
  secondOperand = "";
  resultShown = true;
});

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("clicked");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.classList.remove("clicked");
  });
});
