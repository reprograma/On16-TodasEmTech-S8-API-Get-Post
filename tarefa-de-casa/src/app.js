const express = require('express') // importo o express

const app = express() // executo o express

app.use(express.json()) // uso o body parser

const filmesRotas = require('./routes/filmesRoutes') // importe da continuação de rotas

app.use("/filmes", filmesRotas) // crio uma rota raiz

module.exports = app // exportando para usar o server.js