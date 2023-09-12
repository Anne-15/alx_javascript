import { get } from 'request';
const url = process.argv[2];
const characterId = 18;

get(url, (error, response, body) => {
    if (error) {
        console.error(`An error occurred: ${error.message}`);
    } else if (response.statusCode != 200) {
        console.error(`An error occurred: ${error.message}`);
    } else {
        try {
            const filmsData = JSON.parse(body).results;
            const films = filmsData.filter((film) =>
                film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
            );
            const numberOfFilms = films.length;
            console.log(numberOfFilms);
        } catch (parseError) {
            console.error(`Error parsing JSON response: ${parseError.message}`);
        }
    }
})
