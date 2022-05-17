//criando uma variável para acessar os filmes
const ghiblifilmsJson = require('./models/ghiblifilms.json')

//ativando a biblioteca express para facilitar apresentação dos valores
const express = require('express');
const { json } = require('express/lib/response');
const app = express()

//esta fazendo o body parser
app.use(express.json())

//conferir no terminal se a porta está funcionando
app.listen(3000,() => {
    console.log("Servidor na porta 3000")
})

//conferir se esta funcionando no postaman

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message" : "Deu certo, API do Ghibli Films"
        }

    ])
})

//Retornar todos os filmes
app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(ghiblifilmsJson)
})

//Retornar um filme pelo id
app.get("/ghiblifilms/buscar/:id", (request, response) => {

    let idRequest = request.params.id
    let filmeEncontrado = ghiblifilmsJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

//Retornar um filme pelo diretor
app.get("/ghiblifilms/diretor", (request, response) => {

    let diretorRequest = request.query.director
    console.log(diretorRequest)

    let filmeEncontrado = ghiblifilmsJson.filter( filme => filme.director.includes(diretorRequest))

    response.status(200).send(filmeEncontrado)
})

//Criar um novo filme
app.post("ghiblifilms/criar", (request, response) => {

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content

    let novoFilme = {
        id: (ghiblifilmsJson.length) + 1,
        title: tituloRequest,
        content: descricaoRequest,
        original_title: originalTitleRequest,
        original_title_romanised: originalTitleRomanisedRequest,
        description: descriptionRequest,
        director: directorRequest,
        producer: producerRequest,
        release_date: releaseDateRequest,
        running_time: runningTimeRequest
    }

    ghiblifilmsJson.push(novoFilme) 
    
    
    response.status(201).json(
        [{
            "mensagem" : "foi incluído o novo filme",
            novoFilme
        }]
    )
})