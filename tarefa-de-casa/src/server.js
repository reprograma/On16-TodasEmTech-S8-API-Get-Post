const pokemonJson = require("./models/pokedex.json")
const express = require("express")
const { response } = require("express")
const { request } = require("express")
const app = express()


app.listen(3030, () => {
  console.log("Servidor on na porta 3030")
})

app.use(express.json())

app.get("/", (request, response) => {
  response.status(200).json([
    {
      "Mensagem" : "API de pokemons"
    }
  ])
})

app.get("/pokemons", (request, response) => {
  response.status(200).send(pokemonJson)
})


app.get("/pokemons/buscar/:id", (request, response) => {
  
  let idRequest = request.params.id
  let pokemonEncontrado = pokemonJson.find(pokemon => pokemon.id == idRequest)

  response.status(200).send(pokemonEncontrado)
}) 

 
app.get("/pokemons/filtroTipo", (request, response) => {

   let tipoRequest = request.query.tipo.toLocaleLowerCase()

  let pokemonEncontrado = pokemonJson.filter(
      pokemon => pokemon.type.toLocaleLowerCase().includes(tipoRequest)
  )  

  response.status(200).send(pokemonEncontrado)
})


app.get("/pokemons/filtroNome", (request, response) => {

  let nomeRequest = request.query.nome.toLocaleLowerCase()
  
  let pokemonEncontrado = pokemonJson.filter(
     pokemon => pokemon.name.toLocaleLowerCase().includes(nomeRequest)
  )  
  
 response.status(200).send(pokemonEncontrado)
}) 

app.post("/pokemons/criar", (request, response) => {

  let nomeRequest = request.body.name
  let tipoRequest = request.body.type
  let estatisticasRequest = request.body.stats

  let novoPokemon = {
    id: (pokemonJson.length) + 1,
    name: nomeRequest,
    type: tipoRequest,
    stats: estatisticasRequest
  }

  pokemonJson.push(novoPokemon)

  response.status(201).json(
    [{
      "mensagem": "Seu pokemon foi cadastrado",
      novoPokemon
    }]
  )
})

 





