const filmesJson = require('./model/filmes.json')
const express = require('express')
const { response } = require('express')
const { request } = require('http')
const app = express()

app.use(express.json())

app.listen(8080, () => {
    console.log(`servidor On 8080`)
})
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message":"deu certo, API filmes da Barbie"
        }
    ])
})


app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response) => {
    
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.get("/filmes/filtro", (request, response) => {

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    
    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )

    response.status(200).send(filmeEncontrado)

})

app.post("/filme", (request, response) => {

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content
    let topicRequest = request.body.topic

    let novoFilme = {
        id: (filmesJson.length) + 1,
        topic: topicRequest,
        title: tituloRequest,
        content: descricaoRequest
           
    }

    filmesJson.push(novoFilme)

    response.status(201).json(
    [{
        "mensagem":"seu filme foi cadastrado",
        novoFilme
    }]
    )
})

/*
No Postman:
1- Coloca a rota: localhost:8080/filme
2 - Coloca Post
3 - Coloca Body, Raw, Json:
4- Escreve no Body:
{
    "topic" : "Girl power",
    "title" : "Barbie e as tres mosqueteiras",
    "content" : "Barbie em altas aventuras junto com as 3 mosqueteiras"
}
*/
