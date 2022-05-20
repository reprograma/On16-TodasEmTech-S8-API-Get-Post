const filmesJson = require('./model/filmes.json') //acessando o json de filmes/banco
const express = require('express')
const { request } = require('express')
const { response } = require('express')
const res = require('express/lib/response')
const app = express() //executando o express

app.use(express.json()) // esta fazendo o body parser para o output não seja feio e consiga manipular um json bonitinho

app.listen(8080, () => {
    console.log("Servidor na porta 8080")
})

app.get("/", (request, response) => {
    response.status(200).json([ //status 200 significa ok
        {
            "message": "Deu certo, API filmes da barbie"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200). send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response) => {//passamos :id para poder usar o params
    let idRequest = request.params.id //o params aqui espera q vc passe o número do id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest)
        )
    response.status(200).send(filmeEncontrado)
});

app.post("/filmes", (request, response) => {
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        content: descricaoRequest
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "Seu filme foi cadastrado",
            novoFilme
        }]
    )
})