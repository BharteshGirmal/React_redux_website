let obj1 = {
  name: "Bhartesh",
  details: {
    age: 26,
    city: "Pune",
  },
};

let obj2 = { ...obj1 };

obj2.details.city = "Hinjewadi";

console.log(obj1); //{ name: 'Bhartesh', details: { age: 26, city: 'Hinjewadi' } }
console.log(obj2); //{ name: 'Bhartesh', details: { age: 26, city: 'Hinjewadi' } }

obj2.details.city = "Banglore";
obj2.details.age = 27;

console.log(obj1); //{ name: 'Bhartesh', details: { age: 27, city: 'Banglore' } }
console.log(obj2); //{ name: 'Bhartesh', details: { age: 27, city: 'Banglore' } }
