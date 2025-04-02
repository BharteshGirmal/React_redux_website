function outerFunction() {
  let outerVar = "I'm from outer function!";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from outer scope
  }

  return innerFunction; // Returning inner function
}

const myClosure = outerFunction(); // Call outerFunction and store the returned function
myClosure(); // Output: "I'm from outer function!"

