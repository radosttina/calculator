import { OPERATION_SYMBOLS, NUMBERS, NEGATIVE_SIGN } from "./constants";

const shouldOverwriteLastOperation = (calculation, newOperation) =>
  isSpecialSymbol(calculation[calculation.length - 1]) &&
  isSpecialSymbol(newOperation);

const isSpecialSymbol = (value) => OPERATION_SYMBOLS.includes(value);
const canBeFirstSymbol = (symbol) =>
  symbol === NEGATIVE_SIGN || NUMBERS.includes(symbol);

export const updateDisplay = (resultElement, value) => {
  resultElement.innerText = value || 0;
  resultElement.scrollLeft = resultElement.scrollWidth;
};

export const calculateStringEquation = (equation) =>
  new Function("return " + equation)();

export const addSymbolToEquation = (equation, inputValue) => {
  if (![...NUMBERS, ...OPERATION_SYMBOLS].includes(inputValue)) {
    return equation;
  }

  if (equation.length === 0 && !canBeFirstSymbol(inputValue)) {
    return equation;
  }

  if (shouldOverwriteLastOperation(equation, inputValue)) {
    return equation.slice(0, equation.length - 1) + inputValue;
  }

  return equation + inputValue;
};
