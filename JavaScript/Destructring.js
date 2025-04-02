let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, , b, , c] = arr;

console.log(a);
console.log(b);
console.log(c);

let obj = {
  name: "Bhartesh",
  city: "Pune",
  age: 27,
};

const { name: username, city, age } = obj;
console.log(username);
console.log(city);
console.log(age);
