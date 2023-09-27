let TotalCalculation = 0;
let previousOperator = null;
let initialScreen = "0"; // waiting
const screen = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click", (event) => {
  buttonClick(event.target.innerText);
});

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}
function handleNumber(value) {
  if (initialScreen === "0") {
    initialScreen = value;
  } else {
    initialScreen += value;
  }
}
function handleSymbol(value) {
  switch (value) {
    case "Clear":
      initialScreen = "0";
      TotalCalculation = 0;
      previousOperator = null;

      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(initialScreen));
      previousOperator = null;
      initialScreen = "" + TotalCalculation;
      TotalCalculation = 0;
      break;
    case "←":
      if (initialScreen.length === 1) {
        initialScreen = "0";
      } else {
        initialScreen = initialScreen.substring(0, initialScreen.length - 1);
      }
    default:
      handleMath(value);
      break;
  }
}
function handleMath(value) {
  const intBuffer = parseInt(initialScreen);
  if (TotalCalculation === 0) {
    TotalCalculation = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;

  initialScreen = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    TotalCalculation += intBuffer;
  } else if (previousOperator === "-") {
    TotalCalculation -= intBuffer;
  } else if (previousOperator === "×") {
    TotalCalculation *= intBuffer;
  } else {
    TotalCalculation /= intBuffer;
  }
}

function rerender() {
  screen.innerText = initialScreen;
}
