const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/todos';

request.get(url, (error, response, body) => {
    //check for errors
    if (error){
        console.error(`An error occurred: ${error.message}`);
    } 
    //check for success
    if (response.statusCode == 200) {
        const data = JSON.parse(body);
        const count = {};
        for (let item in data){
            let userId = item.userId;
            let completed = item.completed;
            //if item is completed increase the count of the user id
            if (completed) {
                // If the user id is not in the results object, initialize it with zero
                if(!count[userId]){
                    count[userId] = 0;
                }
                //increment count by 1
                count[userId]++;
            }
        }
        console.log(count)
    }
})