const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('deu certo sim')
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "gatinhasRepro": "ta aqui sua response"
    }])})