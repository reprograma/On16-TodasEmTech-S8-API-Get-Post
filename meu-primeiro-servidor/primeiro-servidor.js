
const { response } = require('express')
const express = require('express')
const app = express()


// listen - para fazer conexões
// pedindo para o express 'escutar' a porta 3000 e quando escutar, dar o console log para confirmação
app.listen(3000, () => {
    console.log('Servidor rodando')
})

app.get("/", (request, response) => {
    response.status(200).json([{ //.json para 'parsear' e ficar manipulável
        "message":"tá aqui sua response"
    }])
})


