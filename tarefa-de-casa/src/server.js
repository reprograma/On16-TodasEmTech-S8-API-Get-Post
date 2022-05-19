
const ghiblifilmsJson = require('./model/ghiblifilms.json') //acessando o json de filme
const express = require('express')
const { response } = require('express')
const app = express() //executando o express

app.use(express.json()) //estafazendo o body parser

app.listen(8080, () => {
    console.log("Servidor na porta 8080")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo API Filmes da Barbie"
        }
    ])
})

app.get("/ghiblifilms", (requere, response) => {
    response.status(200).send(ghiblifilmsJson)
})

app.get("/ghiblifilms/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let filmeEncontrado = ghiblifilmsJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)

})

app.get("/ghiblifilms/diretor", (request, reponse) => {
    let directorRequest = request.query.director
    console.log(directorRequest)

    let filmeEncontrado = ghiblifilmsJson.filter(
        filme => filme.director
    )

    response.status(200).send(filmeEncontrado)

});

app.post("/criar", (request, reponse) => {

    let tituloRequest = request.body.title
    let descriptionRequest = request.body.description
    let originalTitleRequest = request.body.original_title
    let originalTitleRomanisedRequest = request.body.original_title_romanised
    let producerRequest = request.body.producer
    let releaseDateRequest = request.body.release_date
    let runningTimeRequest = request.running_time

    let novoFilme = {
        id: (ghiblifilmsJson.length) + 1,
        title: tituloRequest,
        original_title: originalTitleRequest,
        original_title_romanised: originalTitleRomanisedRequest,
        description: descriptionRequest,
        producer: producerRequest,
        release_date: releaseDateRequest,
        running_time: runningTimeRequest
    }

    ghiblifilmsJson.push(novoFilme)

    response.status(201).json(
        [{
            "menssage": "Seu filme foi cadastrado",
                novoFilme
        }]
    )
})