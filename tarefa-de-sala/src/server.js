
const filmesJson = require('./model/filmes.json') // acessando o json de filmes
const express = require('express')
const app = express() //executando o express

app.use(express.json())// está fazendo o body parser para que se possa manipular o output

app.listen(8080, () => {
    console.log("servidor na porta 8080")
})
app.get("/",(request, response) => {
    response.status(200).json([ // quando se passa um .json, se usa um colchete dentro do parentese
        {
        "message": "Deu certo, API Filmes da Barbie"
        }
    ])
})

app.get("/filmes", (request, response) => { // Rota pra ler todos os filmes
    response.status(200).send(filmesJson)  // se a resposta for um sucesso, imprimir os filmes guardados nessa variavel
})

app.get("/filmes/buscar/:id", (request, response) => { // buscar filme pelo id

    let idRequest = request.params.id  // criar uma variavel pra guardar o id que vai ser procurado

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest) // variavel pra guardar e mandar o filme encontrado

    response.status(200).send(filmeEncontrado)
})

app.get("/filmes/filtro", (request, response) => { // busca por título

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)
        
    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )    

    response.status(200).send(filmeEncontrado)

});

app.post("/filmes", (request, response) => {

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content

    let novoFilme ={
        id: (filmesJson.length) +1,
        title: tituloRequest,
        content: descricaoRequest
    }

    filmesJson.push(novoFilme) // O push é um metodo de array que adiciona

    response.status(201).json( // dessa vez é usado o 201, pois é sucesso quando se cria alguma coisa
        [{
            "mensagem": "seu novo filme foi cadastrado"
            ,novoFilme
        }]
    )
})