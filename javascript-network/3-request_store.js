const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

//make a get request to the url
request.get(url, (error, response, body) => {
    //check for errors
    if (error){
        console.error(`An error occurred: ${error.message}`);
    } 
    //check for success
    if(response.statusCode == 200){
        //import fs module
        var fs = require('fs');
        //write the body response to UFT-8
        fs.writeFile(filePath, body, 'utf-8', (error) => {
            //check for errors
            if (error){
                console.error(`An error occurred: ${error.message}`);
            }
            //log a success message
            console.log('The contents of ' + url + ' have been stored in ' + filePath);
        });
    } else {
        //log an error messgae
        console.error('The request failed with status code ' + response.statusCode);
    }
})

