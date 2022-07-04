import {
  onKeyboardInput,
  onVirtualCalculatorInput,
  onResetCalculation,
  onCalculateResult,
  onDeleteLastCharacter,
} from "./calculator";

import { onThemeChange } from "./theme";

import styles from "./styles.css";

document.addEventListener("keydown", onKeyboardInput);

window.onThemeChange = onThemeChange;

window.onVirtualCalculatorInput = onVirtualCalculatorInput;
window.onCalculateResult = onCalculateResult;
window.onResetCalculation = onResetCalculation;
window.onDeleteLastCharacter = onDeleteLastCharacter;
