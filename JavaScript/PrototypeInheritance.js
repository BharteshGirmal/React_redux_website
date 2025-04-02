// Example 1: Basic Prototypal Inheritance

const personObject = {
  myfunction: function () {
    console.log(`Hello this is a prototypal inheritance ${this.name}`);
  },
};

const obj = Object.create(personObject);

obj.name = "Bhartesh";
obj.myfunction();

// Example 2: Constructor Function with Prototype

function ProtoTypeFunction(name) {
  this.name = name;
  console.log(`Hello this is a ProtoTypeFunction`);
}

ProtoTypeFunction.prototype.printSomething = function () {
  console.log(`${this.name} This is printed from inheritance`);
};

const obj2 = new ProtoTypeFunction("Javascript");
obj2.printSomething();

// Example 3: Class Syntax (ES6)

class Animal {
  constructor(name) {
    this.name = name;
    console.log(`Inside Constructor : ${this.name}`);
  }

  accelerate() {
    console.log(`Engine Started`);
  }
}

class cat extends Animal {
  accelerate() {
    console.log(`${this.name} Meow Meow`);
  }
}

let Cats = new cat("Indian Cat");
Cats.accelerate();
