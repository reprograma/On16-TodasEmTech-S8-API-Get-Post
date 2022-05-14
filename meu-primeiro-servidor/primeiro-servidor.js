const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express()

app.listen(3000, () => {
    console.log('SERVIDOR RODOU MANASSS.. é isso ai')
});

app.get("/", (request, response) =>{
    response.status(200).json([{
        "message": "TA AQUI SUA RESPONSE"
    }])
})