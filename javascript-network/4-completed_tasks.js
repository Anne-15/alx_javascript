// Import the request module
const request = require('request');

// Define the URL for the JSON data
const url = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to the URL
request.get(url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Parse the JSON data
  const data = JSON.parse(body);

  // Create an empty object to store the results
  const results = {};

  // Loop through the data array
  for (let item of data) {
    // Get the user id and the completed status
    let userId = item.userId;
    let completed = item.completed;

    // If the task is completed, increment the count for the user id
    if (completed) {
      // If the user id is not in the results object, initialize it with zero
      if (!results[userId]) {
        results[userId] = 0;
      }
      // Increment the count by one
      results[userId]++;
    }
  }

  // Print the results object
  console.log(results);
});
