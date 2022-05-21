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



app.get("/pokemon/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)
    let pokeFound = meusPokemons.filter(
        pokemon => pokemon.title.toLocaleLowerCase().includes(tituloRequest)
    )
    response.status(200).send(pokeFound)
});


app.post("/pokemon", (request, response) => {

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content

    let newPokemember = {
        id: (meusPokemons.length) + 1,
        title: tituloRequest,
        content: descricaoRequest
    }

    meusPokemons.push(newPokemember)

    response.status(201).json(
        [{
            "mensagem": "There is a new buddy, yay",
            newPokemember
        }]
    )

})
