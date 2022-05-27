const pokemonJson = require("./models/pokedex.json")
const express = require("express")
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('Server 3000')
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Pokemon API successfully added"
        }
    ])
})

app.get("/pokemon", (request, response) => {
    response.status(200).send(pokemonJson)
})

app.get("/pokemon/search/:id", (request, response) => {
    let idRequest = request.params.id
    let foundPokemon = pokemonJson.find(pokemon => pokemon.id == idRequest)
        
    if (foundPokemon) {
        response.status(200).send(foundPokemon)
    } else {                                                        
        response.status(404).send({             
            "message": "O id solicitado não pode ser encontrado"
        })
    }
})

app.get("/pokemon/name", (request, response) => {
    let nameRequest = request.query.name.toLowerCase()
    console.log(nameRequest)

    let foundPokemon = pokemonJson.filter(pokemon => pokemon.name.toLowerCase().includes(nameRequest))

    if (foundPokemon.length > 0) {                           
        response.status(200).send(foundPokemon) 
    }
    else {                                                        
        response.status(404).send({             
            "message": "There's no Pokemon with this name"
        })
    }
})

app.get("/pokemon/type", (request, response) => {
    let typeRequest = request.query.type.toLowerCase()
    console.log(typeRequest)

    let typeFounded = pokemonJson.filter(pokemon => pokemon.type.includes(typeRequest))

    if (typeFounded.length > 0) {                           
        response.status(200).send(typeFounded) 
    }
    else {                                                   
        response.status(404).send({
            "message": "There's no Pokemon with the selected type"
        })
    }
})

app.post("/pokemon/new", (request, response) => {

    let nameRequest = request.body.name
    let typeRequest = request.body.type
    let statsRequest = request.body.stats

    let newPokemon ={
        id: (pokemonJson.length) + 1,
        name: nameRequest,
        type: typeRequest,
        stats: { statsRequest },
    }
    pokemonJson.push(newPokemon)

    response.status(201).json(
        [{
            "message": "New Pokemon successfully added",
            newPokemon
        }]
    )
})