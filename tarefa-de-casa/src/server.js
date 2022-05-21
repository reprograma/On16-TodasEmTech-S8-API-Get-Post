const meusPokemons = require('./models/pokedex.json')
const express = require('express')
const app = express()

app.use(express.json()) //
app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})


app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Minha API com meus Pokemons funcinonaaa!!!"
        }
    ])
})



app.get("/pokemon", (request, response) => {
    response.status(200).send(meusPokemons)
})


app.get("/pokemon/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let pokeFound = meusPokemons.find(pokemon => pokemon.id == idRequest)
    response.status(200).send(pokeFound)
})



app.get("/pokemon/find/filtro", (request, response) => {
    let nameRequest = request.query.name.toLocaleLowerCase()
    console.log(nameRequest)
    let pokeFound = meusPokemons.filter(
        pokemon => pokemon.name.toLocaleLowerCase().includes(nameRequest)
    )
    response.status(200).send(pokeFound)
});

app.get("/pokemon/find/tipo", (request, response) => {
    let typeRequest = request.query.type.toLocaleLowerCase()
    console.log(typeRequest)
    let pokeFound = meusPokemons.filter(
        pokemon => pokemon.type.includes(typeRequest)
    )
    response.status(200).send(pokeFound)
});



app.post("/pokemon", (request, response) => {

    let nameRequest = request.body.name
    let typeRequest = request.body.type
    let statsRequest = request.body.stats

    let newPokemember = {
        id: (meusPokemons.length) + 1,
        name: nameRequest,
        type: typeRequest,
        stats: statsRequest,
    }

    meusPokemons.push(newPokemember)

    response.status(201).json(
        [{
            "mensagem": "There is a new buddy, yay",
            newPokemember
        }]
    )

})
