const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);
const fetchComments = fetch(
  "https://jsonplaceholder.typicode.com/comments"
).then((res) => res.json());

Promise.all([fetchUsers, fetchPosts, fetchComments])
  .then(([users, posts, comments]) => {
    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => console.log("❌ One of the requests failed:", error));

const fetchFromAPI1 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchFromAPI2 = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

Promise.race([fetchFromAPI1, fetchFromAPI2])
  .then((fastestData) => {
    console.log("🏆 Fastest API Response:", fastestData);
  })
  .catch((error) => console.log("❌ Request Failed:", error));

const fetchUsers2 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchInvalidURL = fetch("https://invalidurl.typicode.com/data").then(
  (res) => res.json()
); // Invalid URL
const fetchComments2 = fetch(
  "https://jsonplaceholder.typicode.com/comments"
).then((res) => res.json());

Promise.allSettled([fetchUsers2, fetchInvalidURL, fetchComments2]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`✅ Request ${index + 1} Succeeded:`, result.value);
      } else {
        console.log(`❌ Request ${index + 1} Failed:`, result.reason);
      }
    });
  }
);
