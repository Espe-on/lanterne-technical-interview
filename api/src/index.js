const express = require ('express')
const app = express();
const data = require('./helpers/csv-coverter')

app.get('/', (request, response) => {
    response.send('hello world')
});

app.get('/lines', (request, response) => {
    response.send(data[1])
});

app.get('/stations', (request, response) => {
    response.send('here is a list of lines')
});

app.listen(3000, () => {
     console.log("listening on port 3000")
    }

);