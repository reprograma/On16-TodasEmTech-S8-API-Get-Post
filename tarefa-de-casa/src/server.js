// Tarefinha de casa: [Pokedex]

// 1) Escolher uma das 4 tarefas sugeridas [Pokemon]
// 2) Fazer rotas com [GET] e [POST]
// 3) No total de 5 rotas: 4 GET e 1 POST;
// 4) [ Tarefinha Pokemon]: 
//  a. Quero uma rota que venha todos os Pokemons (OK!)
//  b. Uma rota /pokemon (OK!)
//  c. /pokemon deve retornar todos os pokemons (OK!)
//  d. Devo conseguir filtrar por nome, id e tipo (OK!)
//  e. Devo conseguir cadastrar novos pokemons. (OK!)
// [OBS]: Execução/Testes através do Postman

// [Rotas Pokemon]
// Uma rota: [GET] /pokemon (deve retornar todos os Pokemons);
// Uma rota: [GET] /pokemon/{nome} (retornar um pokemon pelo nome);
// Uma rota: [GET] /pokemon/{id} (retornar um pokemon pelo id);
// Uma rota: [GET] /pokemon/{tipo} ( retornar um pokemon pelo tipo)
// Uma rota: [POST] /pokemon/criar ( cria/adiciona novo pokemon)


const pokemonsJson = require('./models/pokedex.json') // Acessando o JSON de filmes
const express = require('express') // Inicializar o Express

const app = express() // Executando o Express

app.use(express.json()) // Fazendo o body parser

app.listen(8080, () => {
    console.log("Servidor: Porta 8080") // Determinando a porta do server
})

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "API Pokedex: Deu certo!"
    }])
})

app.get("/pokemon", (request, response) => { // Rota: /pokemon 
    response.status(200).send(pokemonsJson) // Na qual, retornará todos os Pokemons
})

app.get("/pokemon/nome/:name", (request, response) => { // Rota: /pokemon/nome/:name
    // Que nos permite filtrar os pokemons pelo nome
    let nameRequest = request.params.name // Exemplo teste Postman: [GET]localhost:8080/pokemon/nome/Zubat

    let nomeEncontrado = pokemonsJson.filter(nome => nome.name == nameRequest)

    response.status(200).send(nomeEncontrado)
})


app.get("/pokemon/id/:id", (request, response) => { // Rota: /pokemon/id/:id
    // Que nos permite filtrar os pokemons por id
    let idRequest = request.params.id // Exemplo teste Postman: [GET]localhost:8080/pokemon/id/27

    let idEncontrado = pokemonsJson.filter(pokemon => pokemon.id == idRequest)

    response.status(200).send(idEncontrado)
})


app.get("/pokemon/tipo/:type", (request, response) => { // Rota: /pokemon/tipo/:type
    // Que nos permite filtrar os pokemons por tipo
    let tipoRequest = request.params.type // Exemplo teste Postman: [GET]localhost:8080/pokemon/tipo/water

    let tipoEncontrado = pokemonsJson.filter(pokemon => pokemon.type == tipoRequest)

    response.status(200).send(tipoEncontrado)
})


app.post("/pokemon/criar", (request, response) => { // Rota: /pokemon/criar
    // Permite criar cadastro de novos pokemons
    let nomeRequest = request.body.name // Exemplo teste Postman: [POST]localhost:8080/pokemon/criar
    let tipoRequest = request.body.type
    let statusRequest = request.body.stats

    let novoPokemon = {
        id: (pokemonsJson.length) + 1,
        name: nomeRequest,
        type: tipoRequest,
        stats: statusRequest,
    }

    pokemonsJson.push(novoPokemon)

    response.status(201).json(
        [{
            "mensagem": "Seu Pokemon foi cadastrado com sucesso!!",
            novoPokemon
        }]

    )

})