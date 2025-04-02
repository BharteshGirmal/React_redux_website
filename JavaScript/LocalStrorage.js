//  localStorage example

localStorage.setItem("UserName", "Bhartesh Girmal");

let myName = localStorage.getItem("UserName");

console.log(myName);

localStorage.clear();

sessionStorage.setItem("Role", "Developer");

let role = sessionStorage.getItem("Role");

console.log(role);

sessionStorage.clear();

// Set a cookie that expires in 1 day
document.cookie =
  "user=JohnDoe; expires=" + new Date(Date.now() + 86400 * 1000).toUTCString();

// Retrieve all cookies
console.log(document.cookie);

// Delete a cookie (set expiration to past date)
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
