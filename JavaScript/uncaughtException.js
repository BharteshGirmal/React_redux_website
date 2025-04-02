// try {
//   let result = someUndefinedVariable + 10; // ReferenceError
// } catch (error) {
//   console.error("Caught an error:", error.message);
// }
// console.log("Code continues...");

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Global Error Caught:");
  console.log("Message:", message);
  console.log("Source:", source);
  console.log("Line:", lineno, "Column:", colno);
  console.log("Error Object:", error);
  return true; // Prevents default browser error logging
};

// Trigger an error
someUndefinedFunction(); // This will be caught globally
