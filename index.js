const {readFile} = require('fs');
const express = require('express');
const app = new express();

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            response.status(500).send('sorry!');
        }

        response.send(html);
    })
});

app.listen(process.env.port || 3000, () => {console.log('app is up!')})
