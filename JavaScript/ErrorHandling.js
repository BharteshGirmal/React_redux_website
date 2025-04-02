// try catch finally
// throw

function divdeFunction(num1, num2) {
  if (num2 == 0) {
    throw new Error(`The number ${num1} Cannot divide by ${num2}`);
  } else {
    return num1 / num2;
  }
}

try {
  console.log(divdeFunction(100, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Script Execution ends");
}
// console.error();

function divide(a, b) {
  if (b === 0) {
    console.error("Cannot divide by zero"); // Logs an error but does not stop execution
    return null;
  }
  return a / b;
}

console.log(divide(10, 0)); // Continues execution
console.log("Code continues running...");
