document.getElementById("addForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let num1 = document.getElementById("num1").value.trim();
  let num2 = document.getElementById("num2").value.trim();
  if (!isNaN(num1) && !isNaN(num2)) {
    let sum = addNumbers(parseFloat(num1), parseFloat(num2));
    displayResult(sum);
  } else {
    displayError("Enter a valid number.");
  }
});

function addNumbers(num1, num2) {
  return num1 + num2;
}

function displayResult(result) {
  let resultElement = document.getElementById("result");
  resultElement.textContent = "The sum is: " + result;
}

function displayError(errorMsg) {
  let resultElement = document.getElementById("result");
  resultElement.textContent = errorMsg;
}

let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let subtractButton = document.getElementById("subtractButton");

addButton.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value.trim();
  let num2 = document.getElementById("num2").value.trim();
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = addNumbers(parseFloat(num1), parseFloat(num2));
    displayResult(sum);
  } else {
    displayError("Enter a valid number.");
  }
});

subtractButton.addEventListener("click", () => {
  let num1 = document.getElementById("num1").value.trim();
  let num2 = document.getElementById("num2").value.trim();
  if (!isNaN(num1) && !isNaN(num2)) {
    let difference = parseFloat(num1) - parseFloat(num2);
    displayResult(difference);
  } else {
    displayError("Enter a valid number.");
  }
});

clearButton.addEventListener("click", () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  let resultElement = document.getElementById("result");
  resultElement.textContent = "";
});
