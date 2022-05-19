const pokedexJson = require('../models/pokedex.json') //path

const express = require('express')
const app = express() //executando o express

app.use(express.json())

app.listen(8080, () => {
    console.log("quero ver")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo, API Pokemon"
        }
    ])
})

app.get("/pokedex", (request, response) => {
    response.status(200).send(pokedexJson)
})
app.get("/pokedex/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let pokemonEncontrado = pokedexJson.find(pokedex => pokedex.id == idRequest)

    response.status(200).send(pokemonEncontrado)
})

app.get("/pokedex/type", (request, response) => {

    let typeRequest = request.query.type.toLocaleLowerCase()
    console.log(typeRequest)

    let typeEncontrado = pokedexJson.filter(
        pokedex => pokedex.type.includes(typeRequest)

    )
    response.status(200).send(typeEncontrado)

})

app.get("/pokedex/name", (request, response) => {

    let nameRequest = request.query.name.toLocaleLowerCase()
    console.log(nameRequest)

    let nameEncontrado = pokedexJson.filter(
        pokedex => pokedex.name.toLocaleLowerCase().includes(nameRequest)

    )
    response.status(200).send(nameEncontrado)

})

app.post("/pokedex", (request, response) => {

    let nameRequest = request.body.name
    let typeRequest = request.body.type

    let novoPokemon = {
        id: (pokedexJson.length) + 1,
        name: nameRequest,
        type: typeRequest
    }

    pokedexJson.push(novoPokemon)

    response.status(201).json(
        [{
            "mensagem": "seu pokemon foi cadastrado",
            novoPokemon
        }]

    )

})