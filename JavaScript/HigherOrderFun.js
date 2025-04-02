const greeting = (message) => (name) => `${message}, ${name}!`;

const sayHello = greeting("Hello");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHello("Bob")); // "Hello, Bob!"

function function1(num1) {
  function fun2(num2) {
    return num1 + num2;
  }
  return fun2;
}

let callfunction = function1(10);
console.log(callfunction(100));
