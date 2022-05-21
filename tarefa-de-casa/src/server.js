const pokedexJson = require('./models/pokedex.json')
const express = require('express')
const { response } = require('express')
const app = express()


app.use(express.json())

app.listen(8080, () => {
    console.log('porta 8080')
})

app.get('/', (resquest, response) => {
    response.status(200).json([
        {
            "message":"funxionou fofi"
        }
    ])
})

app.get('/pokemon', (request, response) => {
    response.status(200).send(pokedexJson)
})

app.get('/pokemon/name', (request,response) => {

    let nameRequest = request.query.nome.toLowerCase()
    console.log(nameRequest)

    let nomeEncontrado = pokedexJson.filter(
        pokemon => pokemon.name.toLowerCase().includes(nameRequest)
    )

    response.status(200).send(nomeEncontrado)

})

app.get ('/pokemon/buscar/:id', (request, response) => {

    let idRequest = request.params.id

    let idPokemonEncontrado = pokedexJson.find(pokemon => pokemon.id == idRequest)

    response.status(200).send(idPokemonEncontrado)

})

app.get('/pokemon/tipo', (request, response) => {

    let typeRequest = request.query.type.toLowerCase()

    let pokemonEncontrado = pokedexJson.filter(
        pokemon => pokemon.type.includes(typeRequest)
    )

    response.status(200).send(pokemonEncontrado)   

})

app.post('/pokemon/criar', (request,response) => {
    let tipoCriar = request.body.type
    let statsCriar = request.body.stats
    let nomeCriar = request.body.name

    let novoPokemon = 
    {
        id: (pokedexJson.length) + 1,
        name : nomeCriar,
        type : tipoCriar,
        stats: statsCriar,

    }

    pokedexJson.push(novoPokemon)

    response.status(201).json([
        {
            "message" : "O pokemon foi cadastrado migs :)"
        }
    ])
})