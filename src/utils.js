import { OPERATION_SYMBOLS } from "./constants";
export const updateDisplay = (resultElement, value) => {
  resultElement.innerText = value || 0;
  resultElement.scrollLeft = resultElement.scrollWidth;
};

export const calculateStringEquation = (equation) =>
  new Function("return " + equation)();

export const shouldOverwriteLastOperation = (calculation, newOperation) =>
  isSpecialSymbol(calculation[calculation.length - 1]) &&
  isSpecialSymbol(newOperation);

export const isSpecialSymbol = (value) => OPERATION_SYMBOLS.includes(value);
