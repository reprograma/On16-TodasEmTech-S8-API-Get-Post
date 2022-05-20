const pokemonsJson = require('./models/pokedex.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log('deu certo gatinha')
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo, API de Pokemons"
        }
    ])

})


app.get("/pokemons", (request, response) => {
    response.status(200).send(pokemonsJson)
})
app.get("/pokemons/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let pokemonEncontrado = pokemonsJson.find(pokemon => pokemon.id == idRequest)

    response.status(200).send(pokemonEncontrado)
})
app.get("/pokemons/filtroNome", (request, response) => {
    let nomeRequest = request.query.name.toLocaleLowerCase()

    let pokemonEncontrado = pokemonsJson.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(nomeRequest))
    response.status(200).send(pokemonEncontrado)
})

app.get('/pokemons/filtrotipo', (request, response) => {
    let tipoRequest = request.query.type.toLocaleLowerCase()

    let pokemonEncontrado = pokemonsJson.filter(pokemon => pokemon.type.includes(tipoRequest)
    )

    response.status(200).send(pokemonEncontrado)
})

app.post('/pokemons/criar', (request, response) => {

    let nomeRequest = request.body.name
    let tipoRequest = request.body.type
    let statusRequest = request.body.stats

    let novoPokemon = {

        id: (pokemonsJson.length) + 1,
        name: nomeRequest,
        type: tipoRequest,
        stats: { statusRequest },
        
    }

    pokemonsJson.push(novoPokemon)

    response.status(201).json([{

        'message': 'Pokemon adicionado', novoPokemon
    }])
})