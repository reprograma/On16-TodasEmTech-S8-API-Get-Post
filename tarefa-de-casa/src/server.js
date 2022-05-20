const pokedex = require("./models/pokedex.json")
const express = require("express")
const { request } = require("express")
const { response } = require("express")
const app = express()

app.use(express.json())

app.listen(8080, () => {
    console.log("Essa porta está funcionando.")

})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Esta é a API da POKEDEX." 
        }
        
    ])
})
//retornar a lista completa 
app.get("/lista", (request, response) => {
    response.status(200).send(pokedex)
})
//retorna a busca pelo id
app.get("/lista/buscar:id", (req, resp) => {
    let idRequest = request.params.id
    let pokemonEncontrado = pokedex.find(
        pokemon => pokemon.id == idRequest
        )
    response.status(200).send(pokemonEncontrado)

}) 
//retorna a busca pelo filtro
app.get("/lista/filtro", (request, response) => {
    let tipoRequest = request.tipo.toLowerCase()
    console.log(tipoRequest)

    let tipoEncontrado = pokedex.filter(
        tipo => tipo.type.toLowerCase().includes(tipoRequest)
    )
    response.status(200).send(tipoEncontrado)
})

//cadastra um novo pokemon


app.post("/lista", (request, response) => {
    let nomeRequest = request.body.name
    let statsRequest = request.body.stats
    let typeRequest = request.body.type

    let novoPokemon = {
        id:(pokedex.lenght) +1,
        name: nomeRequest,
        type: typeRequest,
        stats: statsRequest,
    }
    pokedex.push(novoPokemon)
    response.status(201).json([
        {
            "message":"Novo pokemon foi adicionado!"
    }
    ])
})