// 1. Global Context
console.log("1. Global Context:", this); // window (browser) or globalThis (Node.js)

// 2. Function Context (Non-Strict)
function globalFunction() {
  console.log("2. Function Context:", this); // window (browser) or globalThis (Node.js)
}
globalFunction();

// 3. Function Context (Strict Mode)
("use strict");
function strictFunction() {
  console.log("3. Strict Mode:", this); // undefined
}
strictFunction();

// 4. Object Method
const obj = {
  name: "Alice",
  show() {
    console.log("4. Object Method:", this.name); // "Alice"
  },
};
obj.show();

// 5. Arrow Function (Lexical `this`)
const objArrow = {
  name: "Bob",
  show: () => {
    console.log("5. Arrow Function:", this.name); // undefined (inherits global `this`)
  },
};
objArrow.show();

// 6. Constructor Function
function Person(name) {
  this.name = name;
  console.log("6. Constructor Function:", this.name);
}
const p1 = new Person("Charlie");

// 7. Class Method
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("7. Class Method:", this.name);
  }
}
const s1 = new Student("David");
s1.greet();

// 8. Event Listener (Normal Function)
document.body.innerHTML = '<button id="btn">Click Me</button>';
document.getElementById("btn").addEventListener("click", function () {
  console.log("8. Event Listener (Function):", this); // The button element
});

// 9. Event Listener (Arrow Function)
document.getElementById("btn").addEventListener("click", () => {
  console.log("9. Event Listener (Arrow):", this); // window (inherits global `this`)
});

// 10. call(), apply(), bind()
function greet() {
  console.log("10. call(), apply(), bind():", this.name);
}
const user = { name: "Eve" };
greet.call(user); // "Eve"
greet.apply(user); // "Eve"

const boundGreet = greet.bind(user);
boundGreet(); // "Eve"

// 11. setTimeout (Normal Function)
const objTimeout = {
  name: "Frank",
  show: function () {
    setTimeout(function () {
      console.log("11. setTimeout (Normal):", this.name); // undefined (global `this`)
    }, 1000);
  },
};
objTimeout.show();

// 12. setTimeout (Arrow Function)
const objArrowTimeout = {
  name: "Grace",
  show: function () {
    setTimeout(() => {
      console.log("12. setTimeout (Arrow):", this.name); // "Grace"
    }, 1000);
  },
};
objArrowTimeout.show();
