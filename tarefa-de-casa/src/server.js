const pokemon = require("./models/pokedex.json")
const express = require("express")
const { request, response } = require ("express")
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log('Servidor na porta 3030')
})

