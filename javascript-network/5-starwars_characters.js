const request = require('request');

// Define the Movie ID as the first command-line argument
const movieId = process.argv[2];

// Define the Star Wars API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
  } else {
    // Parse the response body as JSON
    const movieData = JSON.parse(body);

    // Print the characters from the movie
    // console.log(`Characters from "${movieData.title}":`);
    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error:', charError);
        } else if (charResponse.statusCode !== 200) {
          console.error('HTTP Status Code:', charResponse.statusCode);
        } else {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    });
  }
});