const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
    console.error('Usage: node script.js <API_URL>');
    process.exit(1);
}

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Invalid response:', response.statusCode);
        return;
    }

    const todos = JSON.parse(body);

    // Create a dictionary to store the number of completed tasks per user
    const completedTasksByUser = {};

    todos.forEach(todo => {
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });

    // Display the results
    console.log(JSON.stringify(completedTasksByUser));
});
