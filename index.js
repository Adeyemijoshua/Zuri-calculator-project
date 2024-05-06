const displayField = document.getElementById("display-field");
const numBtns = document.querySelectorAll(".btn-num");
const oprBtns = document.querySelectorAll(".btn-opr");
const equalBtn = document.getElementById("equal-btn");

document.addEventListener("DOMContentLoaded", function () {
  numBtns.forEach((button) => {
    button.addEventListener("click", () => {
      addToDisplay(button.textContent);
    });
  });

  oprBtns.forEach((button) => {
    button.addEventListener("click", () => {
      addToDisplay(button.textContent);
    });
  });

  equalBtn.addEventListener("click", calculateResult);
});

function addToDisplay(value) {
  displayField.value += value;
}

function calculateResult() {
  try {
    const result = evaluateExpression(displayField.value);
    displayField.value = result;
  } catch (error) {
    displayField.value = "Error";
  }
}

function evaluateExpression(expression) {
  expression = expression.replace(/,/g, ".");
  return eval(expression);
}
