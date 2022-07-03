const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATION_SYMBOLS = ["*", "+", "/", "-", "."];
const RESULT_KEYS = ["=", "Enter"];
const DELETE_KEY = "Backspace";

const resultElement = document.getElementById("result");
let calculation = "";

const onEnterInput = (inputValue) => {
  if (![...NUMBERS, ...OPERATION_SYMBOLS].includes(inputValue)) {
    return;
  }

  // don't allow the first symbol to be special symbol
  if (!calculation.length && isSpecialSymbol(inputValue)) {
    return;
  }

  if (shouldOverwriteLastOperation(calculation, inputValue)) {
    calculation = calculation.replace(/[.+*/\-=]$/g, inputValue);
  } else {
    calculation += inputValue;
  }

  updateDisplay(calculation);
};

const onKeyboardInput = (e) => {
  const inputValue = e.key;

  if (RESULT_KEYS.includes(inputValue)) {
    onCalculateResult();
    return;
  }

  if (inputValue === DELETE_KEY) {
    onDeleteLastCharacted();
  }

  onEnterInput(e.key);
};

const onVirtualCalculatorInput = (e) => {
  onEnterInput(e.target.textContent);
};

const onCalculateResult = () => {
  // remove symbols other than number and arithmetic operations
  const sanitizedCalculation = calculation.replaceAll(
    /(?!-)[^0-9.+*/\-=]/g,
    ""
  );
  const result = calculateStringEquation(sanitizedCalculation);

  updateDisplay(result);

  // reset the calculation (without updating the display)
  // so that the next user input will initialize a new calculation
  calculation = "";
};

const onDeleteLastCharacted = () => {
  calculation = calculation.slice(0, calculation.length - 1);
  updateDisplay(calculation);
};

const onResetCalculation = () => {
  calculation = "";
  updateDisplay(calculation);
};

const onThemeChange = () => {
  const theme = [...document.querySelectorAll('input[name="theme"]')].filter(
    (e) => e.checked
  )[0].dataset.theme;

  document.body.dataset.theme = theme;
};

updateDisplay = (value) => {
  resultElement.innerText = value || 0;
  resultElement.scrollLeft = resultElement.scrollWidth;
};

calculateStringEquation = (equation) => new Function("return " + equation)();

shouldOverwriteLastOperation = (calculation, newOperation) =>
  isSpecialSymbol(calculation[calculation.length - 1]) &&
  isSpecialSymbol(newOperation);

isSpecialSymbol = (value) => OPERATION_SYMBOLS.includes(value);

document.addEventListener("keydown", onKeyboardInput);
