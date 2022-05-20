const listaPokemon = require("./models/pokedex.json")
const express = require("express")
const { request, response } = require ("express")
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log('Servidor na porta 3030')
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "API do pokemon deu certo"
        }
    ])
})

app.get("/pokemon", (request, response) => {
    response.status(200).send(listaPokemon)
})

app.get("/pokemon/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let pokemonEncontrado = listaPokemon.find(pokemon => pokemon.id == idRequest)
        
        response.status(200).send(pokemonEncontrado)
})

app.get("/pokemon/encontrado", (request, response) => {
    let nomeRequest = request.query.name.toLowerCase()
    let pokemonEncontrado = listaPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(nomeRequest))

    if (pokemonEncontrado.length > 0) {                           
        response.status(200).send(pokemonEncontrado) 
    }
    else {                                                        
        response.status(404).send({             
            "message": "Esse pokemon não foi cadastrado"
        })
    }
})

app.get("/pokemon/tipo", (request, response) => {
    let tipoPokemon = request.query.type.toLowerCase()
    let tipoEncontrado = listaPokemon.filter(pokemon => pokemon.type == tipoPokemon)

    if (tipoEncontrado.length > 0) {                           
        response.status(200).send(tipoEncontrado) 
    }
    else {                                                   
        response.status(404).send({
            "message": "Esse tipo de pokemon não foi encontrado"
        })
    }
})

app.post("/pokemon/criando", (request, response) => {

    let nomeRequest = request.body.name
    let tipoRequest = request.body.type
    let statusRequest = request.body.stats

    let novoPokemon ={
        id: (listaPokemon.length) + 1,
        name: nomeRequest,
        type: tipoRequest,
        stats: { statusRequest },
    }
    listaPokemon.push(novoPokemon)

    response.status(201).json(
        [{
            "message": "Seu novo Pokemon foi criado",
            novoPokemon
        }]
    )
})
