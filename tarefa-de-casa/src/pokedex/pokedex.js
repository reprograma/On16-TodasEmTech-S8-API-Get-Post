const pokedexJson = require('./pokedex.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log("Preparem-se para encrenca na porta 3030, ENCRENCA EM DOBRO!")
})

app.get("/pokedex", (request, response) => {
    response.status(200).send(pokedexJson)
})

app.get("/pokedex/search/:id", (request, response) => {

    let idRequest = request.params.id

    let pokemonFound = pokedexJson.find(pokedex => pokedex.id == idRequest)

    response.status(200).send(pokemonFound)
})

app.get("/pokedex/nameFilter", (request, response) => {

    let pokemonName = request.query.name.toLocaleLowerCase()
    console.log(pokemonName)

    let nameFound = pokedexJson.find(
        pokedex => pokedex.name.toLocaleLowerCase().includes(pokemonName)

    )
    response.status(200).send(nameFound)
})

app.get("/pokedex/typeFilter", (request, response) => {

    let pokemonType = request.query.type.toLocaleLowerCase()
    console.log(pokemonType)

    let pokemonFound = pokedexJson.filter(
        pokedex => pokedex.type.includes(pokemonType)

    )
    response.status(200).send(pokemonFound)
})

app.post("/pokedex", (request, response) => {

    let newPokemon = request.body.name

    let newPrice = request.body.price

    let newType = request.body.type

    let newStats = request.body.stats

    let capturedPokemon = {
        id: (pokedexJson.length) ++,
        name : newPokemon,
        price : newPrice,
        type: newType,
        stats: newStats
    }

    pokedexJson.push(newPokemon)

    response.status(201).json(
        [{
            "mensagem": "Quem é este POKÉMON?",
            capturedPokemon
        }]
    )
})