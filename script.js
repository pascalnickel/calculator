const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
let currentNumber = 0;
let displayedNumber = 0;

function add(summand1, summand2) {
  const sum = summand1 + summand2;
  return sum;
}

const subtract = function (minuend, subtrahend) {
  const difference = minuend - subtrahend;
  return difference;
};

const multiply = function (factor1, factor2) {
  const product = factor1 * factor2;
  return product;
};

const divide = function (dividend, divisor) {
  const quotient = dividend / divisor;
  return quotient;
};

const operate = function (operator, number1, number2) {
  return operator(number1, number2);
};

const displayValue = function (value) {
  display.innerHTML = `${value}`;
};

calculator.addEventListener("click", (event) => {
  const keyValue = event.target.dataset.key;

  if (keyValue === undefined) return;
});
