const request = require('request');
const id = process.argv[2];
url = `https://swapi-api.alx-tools.com/api/films/${id}`
request.get(url, (error, response, body) => {
    if (error) {
        console.error(`An error occurred: ${error.message}`);
    } else if (response.statusCode != 200) {
        console.error(`An error occurred: ${error.message}`);
    } else {
        try {
            const movieData = JSON.parse(body);
            const movieTitle = movieData.title;
            console.log(movieTitle);
        } catch (error) {
            console.log(error)
        }
    }
})