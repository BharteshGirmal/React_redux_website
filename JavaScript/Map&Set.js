// Map

let userlist = new Map();

userlist.set("username", "Bhartesh");
userlist.set("city", "Pune");
userlist.set("role", "developer");
userlist.set("usename", "Girmal");
userlist.set("city", "Pimpri");
userlist.set("role", "Tester");
userlist.set("age", 26);

userlist.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// Set

let numbers = new Set();

// Adding values
numbers.add(10);
numbers.add(20);
numbers.add(10); // Duplicate, ignored

console.log(numbers); // Set { 10, 20 }
console.log(numbers.has(10)); // true
console.log(numbers.size); // 2

numbers.forEach((value) => {
  console.log(value);
});
