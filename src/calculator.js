import {
  NUMBERS,
  OPERATION_SYMBOLS,
  RESULT_KEYS,
  DELETE_KEY,
} from "./constants";

import {
  isSpecialSymbol,
  shouldOverwriteLastOperation,
  updateDisplay,
  calculateStringEquation,
} from "./utils.js";

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
    calculation = calculation.slice(0, calculation.length - 1) + inputValue;
  } else {
    calculation += inputValue;
  }

  updateDisplay(resultElement, calculation);
};

const onKeyboardInput = (e) => {
  const inputValue = e.key;

  if (RESULT_KEYS.includes(inputValue)) {
    onCalculateResult();
    return;
  }

  if (inputValue === DELETE_KEY) {
    onDeleteLastCharacter();
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
