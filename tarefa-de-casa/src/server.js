const ghiblifilmsJson = require('./models/ghiblifilms.json')
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
            "message": "deu certo, API para a tarefa de casa"
        }
    ])
})

app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(ghiblifilmsJson)
})

app.get("/ghiblifilms/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let filmeEncontrado = ghiblifilmsJson.find(
        filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
})

app.get("/ghiblifilms/diretor", (request, response) => {
    let diretorRequest = request.query.director
    console.log(diretorRequest)
    let filmeEncontrado = ghiblifilmsJson.filter(
        filme => filme.director.includes(diretorRequest)
    )
    response.status(200).send(filmeEncontrado)
})

app.post("/ghiblifilms/criar", (request, response) => {
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
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]
    )
})

