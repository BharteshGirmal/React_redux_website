// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  let count = 4; // Timer countdown

  let timer = setInterval(() => {
    console.log(`⏳ Resolving in ${count} seconds...`);
    count--;
    if (count === 0) clearInterval(timer); // Stop the countdown when it reaches 0
  }, 1000);

  setTimeout(() => {
    if (success) resolve(`✅ Promise Has been Resolved`);
    else reject(`❌ Promise has been rejected`);
  }, 4000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally, promise has ended.");
  });

async function getUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error);
  }
}

getUserData();

//  Promise Chaining

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => res.json())
  .then((data) => {
    let id = data[0].id;
    console.log(`Fetching details of User ID: ${id}`);
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  })
  .then((res) => res.json())
  .then((data) => {
    console.log("User Details:", data);
  })
  .catch((error) => {
    console.log("❌ Error Occurred:", error);
  })
  .finally(() => {
    console.log("✅ Promise Chain Execution Completed");
  });
