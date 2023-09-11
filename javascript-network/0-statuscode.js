const request = require('request');
const url = process.argv[2]
request.get(url, (error, response) => {
    if (error) {
        console.error(`An error occurred: ${error.message}`);
    } else {
        const status_code = response.statusCode;
        console.log(`code: ${status_code}`);
    }
});






