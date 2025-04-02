const fetchData = async (callback) => {
  try {
    console.log("Fetching Data ...");

    let Result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await Result.json();
    callback(data); // Pass data to the callback
  } catch (error) {
    console.log(error);
  } finally {
    console.log("fetchData Execution Done");
  }
};

// Callback function that processes the data
function processData(data) {
  console.log("Processing The Data ...");
  console.log("Number of Users:", data.length);
}

fetchData(processData);
