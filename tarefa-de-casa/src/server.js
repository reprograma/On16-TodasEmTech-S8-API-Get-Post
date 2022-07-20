const express = require('express');
const app = express();

app.listen(1313, () => {
    console.log('SERVIDOR RODANDO, OK!')
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "TA AQUI SUA RESPONSE, GATA!"
    }])
})