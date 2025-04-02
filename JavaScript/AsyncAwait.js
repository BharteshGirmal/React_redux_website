// Async and Await

let URL = `https://jsonplaceholder.typicode.com/users`;

const fetchData = async () => {
  try {
    let result = await fetch(URL);
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(`❌Something Went Wrong ${err.message}`);
  } finally {
    console.log("Asynchronous Task has been completed");
  }
};

const getData = fetchData();
