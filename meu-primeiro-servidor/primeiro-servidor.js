const express = require('express');
const app = express()

app.listen(3000, () => {
    console.log('SERVIDOR RODOU MANAS')
}); 

app.get("/", (request, response) => {
    response.status(200).json([{
        "gatinhasRepro":"TÁ AQUI SUA RESPONSE, GATA"
    }])})