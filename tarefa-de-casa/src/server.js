const pokedexJson = require('./models/pokedex.json')
const express = require('express')
const { get } = require('express/lib/response')
const { response } = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {

    console.log('Servidor pronto pra atacar.')
})

app.get('/', (request, response) => {
    response.status(200).json([{
        'message': 'Tudo ok, pode começar.'
    }])
})

app.get('/pokemon', (request, response) => {

    response.status(200).send(pokedexJson)
})

app.get('/pokemon/:id', (request, response) => {

    let idRequest = request.params.id

    let pokemonEncontrado = pokedexJson.find(pokemon => pokemon.id == idRequest)

    response.status(200).send(pokemonEncontrado)
})

app.get('/pokemonio/name', (request, response) => {
    
    let nameRequest = request.query.name.toLowerCase()
    console.log(request.query.name)

    let pokemonEncontrado = pokedexJson.filter(
        pokemon => pokemon.name.toLowerCase().includes(nameRequest)
    )

    response.status(200).send(pokemonEncontrado)
}

);


app.get('/pokemonio/tipo', (request, response) => {

    let tipoRequest = request.query.type

    let pokemonEncontrado = pokedexJson.filter(
        pokemon => pokemon.type.includes(tipoRequest)
    )

    response.status(200).send(pokemonEncontrado)
})

app.post('/pokemon/criar', (request, response) => {

    let nameRequest = request.body.name
    let typeRequest = request.body.type
    let statsRequest = request.body.stats

    let novoPokemon = {

        id: (pokedexJson.length) + 1,
        name: nameRequest,
        type: typeRequest,
        stats: statsRequest
    }

    pokedexJson.push(novoPokemon)

    response.status(201).json ([{

        'message':'Pokemon adicionado a pokedex.', novoPokemon
    }])
})