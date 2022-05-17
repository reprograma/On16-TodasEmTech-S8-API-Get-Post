const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())


app.listen(8080, () => {
    console.log("servidor na porta 8080")
})



app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "deu certo, API filmes da barbie"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id" , (request, response) => {
let idRequest = request.params.id
let filmeEncontrado = filmesJson.find(
    filme => filme.id == idRequest)
response.status(200).send(filmeEncontrado)
})

app.get("/filmes/filtro", (request, response) => {
let tituloRequest = request.query.titulo.toLocaleLowerCase()
console.log(tituloRequest)
let filmeEncontrado = filmesJson.filter(
    filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
)
response.status(200).send(filmeEncontrado)
})

app.post("/filmes", (request, response) => {
let tituloRequest = request.body.title
let descricaoRequest = request.body.content

let novoFilme = {
id: (filmesJson.length) + 1,
title: tituloRequest ,
content: descricaoRequest
}

filmesJson.push(novoFilme)

response.status(201).json(
[{
    "mensagem": "seu filme foi cadastrado",
    novoFilme
}]
)
})