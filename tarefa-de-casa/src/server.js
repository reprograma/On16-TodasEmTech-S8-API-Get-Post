// ==========================================================================================
// |--------------- Descrição -------------------| ------------- Rotas Pokemon -------------|
// |----------------------------------------------------------------------------------------|
// | Quero uma rota que venha todos os Pokemons  |                                          | 
// |                                             | > [GET] /pokemon                         |
// | Uma Rota /pokemon                           |  > retorna todos os pokemons             |
// |                                             | > [GET] /pokemon/{id}                    |
// | /pokemon deve retornar todos os Pokemons;   |  > retorna um pokemon pelo id            |
// |                                             | > [GET] /pokemon?{tipo}                  |
// | Devo conseguir Filtrar por NOME, id e tipo; |  > retorna um pokemon pelo tipo          |
// |                                             | > [POST] /pokemon/criar                   |
// | Devo conseguir cadstrar novos pokemons.     |  > cria novo pokemon                     |
// ==========================================================================================


// criando uma variável para acessar a pokedex
const pokedex = require('./models/pokedex.json')
// ativando a biblioteca express para facilitar apresentação dos valores
const express = require('express')
const app = express()
// para buscar os valores (body parser) e poder manipular com graça
app.use(express.json()) 

// para confirmar no temrinal que a porta está funcionando
app.listen(3000, () => {
    console.log("Servidor Em Funcionamento")
})

// para conferir no postman se tá rolando
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo, API da Pokedéx"
        }
    ])
})

//para buscar os pokemons

app.get("/pokemon", (request, response) => {
    response.status(200).send(pokedex)
})

// para buscar pelo id
app.get("/pokemon/:id", (request, response) => {

    let idRequest = request.params.id

    let pokeFound = pokedex.find(poke => poke.id == idRequest)

    response.status(200).send(pokeFound)
})

//para buscar pelo nome
app.get("/pokemon?:name", (request, response) => {

    let nameRequest = request.query.name.toLocaleLowerCase()

    let pokeByName = pokedex.find(poke => poke.name == nameRequest.toLocaleLowerCase())

    response.status(200).send(pokeByName)
})

//para buscar pelo tipo
app.get("/pokemon?:type", (request, response) => {

    let typeRequest = request.params.type

    let pokeType = pokedex.filter(poke => poke.type == typeRequest)

    response.status(200).send(pokeType)
})

// para adicionar um pokemons na pokedéx
app.post("/pokemon/criar", (request, response) => {

    let nameRequest = request.body.name
    let typeRequest = request.body.type
    let statsRequest = request.body.stats
    
    let novoPokemon = {
        id: (pokedex.length) + 1,
        name: nameRequest,
        type: typeRequest,
        stats: statsRequest,
    }

    pokedex.push(novoPokemon)

    response.status(201).json(
        [{
            "mensagem": "Novo Pokémon Adicionado com Glória",
            novoPokemon
        }]

    )

})
