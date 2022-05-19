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
    let directorRequest = request.query.director.toLowerCase()
    
    let filmeEncontrado = ghiblifilmsJson.filter( filme => filme.director.toLowerCase().includes(directorRequest))

    response.status(200).send(filmeEncontrado)
})

//Criar um novo filme
app.post("/ghiblifilms/criar", (request, response) => {

    let filme = request.body

    let novoFilme = {
        id: (ghiblifilmsJson.length) + 1,
        title: filme.title,
        content: filme.content,
        original_title: filme.original_title,
        original_title_romanised: filme.original_title_romanised,
        description: filme.description,
        director: filme.director,
        producer: filme.producer,
        release_date: filme.release_date,
        running_time: filme.running_time 
    }


    ghiblifilmsJson.push(novoFilme) 
        
    response.status(201).json(
        [{
            "mensagem" : "foi incluído o novo filme",
            novoFilme
        }]
    )
})