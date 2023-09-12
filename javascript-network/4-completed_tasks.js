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
        data.forEach((task) => {
            if (task.completed) {
              const userId = task.userId.toString();
              count[userId] = (count[userId] || 0) + 1;
            }
          });
    }
})