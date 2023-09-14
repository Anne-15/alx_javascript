const request = require('request');
const url = process.argv[2];
const characterId = "18";
let count = 0

request.get(url, (error, response, body) => {
    if (error) {
        console.error(`An error occurred1: ${error}`);
    } else if (response.statusCode != 200) {
        console.error(`An error occurred2: ${response.statusCode}`);
    } else {
        try {
            const filmsData = JSON.parse(body).results;
            const films = filmsData.filter((film) =>
            film.characters.forEach(character => {
                if (character.includes(characterId)) {
                    count++
                }
            }))
            console.log(count);
        } catch (parseError) {
            console.error(`Error parsing JSON response: ${parseError.message}`);
        }
    }
})