const pokedex = require("./models/pokedex.json")
const express = require("express")
const app = express()

app.use(express.json())

app.get("/pokemon", (request, response) => {
    response.status(200).send(pokedex)
})

app.get("/pokemon/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let pokemonEncontrado = pokedex.find(pokemon => pokemon.id == idRequest)
    response.status(200).send(pokemonEncontrado)
})

app.get("/pokemon/filtroNome", (request, response) => {
    let nomeRequest = request.query.nome.toLowerCase()
    let pokemonEncontrado = pokedex.filter(pokemon => pokemon.name.toLowerCase().includes(nomeRequest))
    response.status(200).send(pokemonEncontrado)
})

app.get("/pokemon/filtroTipo", (request, response) => {
    let tipoRequest = request.query.tipo.toLowerCase()
    let pokemonEncontrado = pokedex.filter(pokemon => pokemon.type.toLowerCase().includes(tipoRequest))
    response.status(200).send(pokemonEncontrado)
})

app.post("/pokemon", (request, response) => {
    let nomeRequest = request.body.name
    let tipoRequest = request.body.type

    let novoPokemon = {
        id: (pokedex.length) + 1,
        name: nomeRequest,
        type: tipoRequest
    }
    pokedex.push(novoPokemon)
    response.status(201).json(
        [{
            "mensagem":"novo pokemon adicionado!",
            novoPokemon
        }]
    )
})

app.listen(8080, () => {
    console.log("Olá gatah")
})