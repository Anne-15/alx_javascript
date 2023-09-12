const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (response, body, error) => {
    //check for errors
    if (error){
        console.error(`An error occurred: ${error.message}`);
    }
    //check for success
    const data = JSON.parse(body).results;
    data.forEach((person) => {
        console.log(person.name)
    })
    
})