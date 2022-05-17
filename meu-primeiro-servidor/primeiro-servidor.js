const {
    request
} = require('express');
const express = require('express'); // Inicializando o express
const app = express();

app.listen(3000, () => {
    console.log('Deu certo! Seu servidor ta')
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "TA AQUI TUA RESPONSE, MARAVILHOSA!"
    }])} )