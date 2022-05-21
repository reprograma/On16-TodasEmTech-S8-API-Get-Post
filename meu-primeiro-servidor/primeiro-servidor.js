const express = require('express');
<<<<<<< HEAD
const app = express()

app.listen(3000, () => {
    console.log('SERVIDOR RODOU MANAS')
}); 

app.get("/", (request, response) => {
    response.status(200).json([{
        "gatinhasRepro":"TÁ AQUI SUA RESPONSE, GATA"
    }])})
=======
const app = express();

app.listen(3000, () => {
    console.log('deu certo sim ta rodando')
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "TA AQUI SUA RESPONSE, GATA"
    }])} )
>>>>>>> 2f0e86b495749e0d3b2ce1a9641eef410051e295
