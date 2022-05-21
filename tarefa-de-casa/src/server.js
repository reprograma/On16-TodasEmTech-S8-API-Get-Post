const ghibliJson = require('./models/ghiblifilms.json') 
const express = require('express')
const app = express() 

app.use(express.json()) 

app.listen(8080, () => {
    console.log("Servidor na porta 8080")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo, API Ghibli films"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(ghibliJson)
})

app.get("/filmes/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.get("/filmes/filtro", (request, response) => {

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = ghibliJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )

    response.status(200).send(filmeEncontrado)

});

app.post("/filmes", (request, response) => {

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    let novoFilme = {
        id: (ghibliJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }

    ghibliJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]

    )

})