// Optional Chaining

let obj = {
  name: "Bhartesh",
  address: {
    city: "Pune",
  },
};
let user = { name: "Bhartesh", address: { city: "Pune" } };

console.log(user.address?.city); // ✅ "Pune"
console.log(user.contact?.phone); // ✅ undefined (no error)

//Nullish Coalescing (??)
let username = null;
console.log(username ?? "Guest"); // ✅ "Guest"
