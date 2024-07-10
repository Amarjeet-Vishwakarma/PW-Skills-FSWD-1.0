const input = document.querySelector(".inputSection");
const output = document.querySelector("#blankContainer");

input.addEventListener("submit", function (start) {
  start.preventDefault();

  const num1 = parseFloat(document.querySelector("#firstNumber").value);
  const num2 = parseFloat(document.querySelector("#secondNumber").value);
  const operator = document.querySelector("#operator").value;


  switch (operator) {
    case "+":
      output.textContent = num1 + num2;
      break;
    case "-":
        output.textContent = num1 - num2;
      break;
    case "*":
        output.textContent = num1 * num2;
      break;
    case "/":
        output.textContent = num1 / num2;
      break;
    default:
        output.textContent = "Invalid operator";
      console.log("Invalid operator");
      break;
  }
});
