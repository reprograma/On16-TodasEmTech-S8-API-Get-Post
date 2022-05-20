const pokedexJson = require('./projetopokemon/pokedex.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(1414, () => {
    console.log("Equipe rocket decolando na velocidade da Luz! Ou prepare-se Para Lutar! Miau é isso ai!")
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
    let newType = request.body.type
    let newStats = request.body.stats

    let capturedPokemon = {
        id: (pokedexJson.length) + 1,
        name : newPokemon,
        type: newType,
        stats: newStats
    }

    pokedexJson.push(capturedPokemon)

    response.status(201).json(
        [{
            "mensagem": "Quem é este POKÉMON?",
            capturedPokemon
        }]
    )
})
