const request = require('request');
const url = process.argv[1]
request.get(url)
    .then((response) => {
        const status_code = response.status;
        console.log(`code: ${status_code}`);
    })