const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];

console.log(arr2);

// copy arr
const arr3 = [...arr2];
console.log(arr3);

// Merging Objects

let obj1 = { name: "Bhartesh", city: "Pune" };
let obj2 = { role: "Developer", company: "Tata" };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Rest Oprator
function addition(...numbers) {
  return numbers.reduce((acc, value) => acc + value);
}

console.log(addition(20, 40, 20, 45));

const [first, second, ...remaining] = [100, 200, 300, 400, 500];

console.log(first); // 100
console.log(second); // 200
console.log(remaining); // [300, 400, 500]

const person = { name: "Bhartesh", age: 25, city: "Pune", country: "India" };

const { name, ...otherDetails } = person;

console.log(name); // "Bhartesh"
console.log(otherDetails); // { age: 25, city: "Pune", country: "India" }
