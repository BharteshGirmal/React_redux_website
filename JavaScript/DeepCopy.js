let obj1 = {
  name: "Bhartesh",
  details: {
    age: 26,
    city: "Pune",
  },
};

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.city = "Chennai";

console.log(obj1); //{ name: 'Bhartesh', details: { age: 26, city: 'Pune' } }
console.log(obj2); //{ name: 'Bhartesh', details: { age: 26, city: 'Chennai' } }
