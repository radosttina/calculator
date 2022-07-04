import {
  RESULT_KEYS,
  DELETE_KEY,
  NUMBERS,
  OPERATION_SYMBOLS,
} from "./constants";

import {
  addSymbolToEquation,
  updateDisplay,
  calculateStringEquation,
} from "./utils.js";

const resultElement = document.getElementById("result");
let calculation = "";

const onKeyboardInput = (e) => {
  const inputValue = e.key;

  if (RESULT_KEYS.includes(inputValue)) {
    onCalculateResult();
    return;
  }

  if (inputValue === DELETE_KEY) {
    onDeleteLastCharacter();
    return;
  }

  if ([...NUMBERS, ...OPERATION_SYMBOLS].includes(inputValue)) {
    calculation = addSymbolToEquation(calculation, e.key);
    updateDisplay(resultElement, calculation);
  }
};

const onVirtualCalculatorInput = (e) => {
  calculation = addSymbolToEquation(calculation, e.target.textContent);
  updateDisplay(resultElement, calculation);
};

const onCalculateResult = () => {
  // remove symbols other than number and arithmetic operations
  calculation.replaceAll(/(?!-)[^0-9.+*/\-=]/g, "");
  const result = calculateStringEquation(calculation);

  // reset the calculation (without updating the display)
  // so that the next user input will initialize a new calculation
  calculation = "";
  updateDisplay(resultElement, result);
};

const onDeleteLastCharacter = () => {
  calculation = calculation.slice(0, calculation.length - 1);
  updateDisplay(resultElement, calculation);
};

const onResetCalculation = () => {
  calculation = "";
  updateDisplay(resultElement, calculation);
};

export {
  onVirtualCalculatorInput,
  onKeyboardInput,
  onCalculateResult,
  onResetCalculation,
  onDeleteLastCharacter,
};
