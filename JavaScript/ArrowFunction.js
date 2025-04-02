const myarrowfunction = (value1, value2) => value1 * value2;

console.log(myarrowfunction(14, 15));

let myObject = {
  name: "Bhartesh",
  city: "Pune",
  dob: "26/09/1998",
  calulateAge: function () {
    let curdate = new Date();
    let year = curdate.getFullYear();
    let DobYear = this.dob.split("/");
    let age = year - DobYear[2];
    console.log(`Using Regular function, The age of ${this.name} is ${age}`);
  },

  arrowFuntion: () => {
    let curdate = new Date();
    let year = curdate.getFullYear();

    // `this` does not work inside arrow functions, so use an alternative
    let DobYear = myObject.dob.split("/");
    let age = year - DobYear[2];

    console.log(`Using Arrow function,The age of ${myObject.name} is ${age}`);
  },
};

myObject.calulateAge();
myObject.arrowFuntion();
