const ghibliFilmsJson = require('./models/ghibliFilms.json') 
const express = require('express')
const app = express() 

app.use(express.json()) 

app.listen(3030, () => {
    console.log("Servidor na porta 3030")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "API de filmes Ghibli funcionando"
        }
    ])
})

app.get("/ghibliFilms", (request, response) => {
    response.status(200).send(ghibliFilmsJson)
})

app.get("/ghibliFilms/buscar/:title", (request, response) => {

    let titleRequest = request.params.title
    let ghibliEncontrado = ghibliFilmsJson.find(ghibli => ghibli.title == titleRequest)

    response.status(200).send(ghibliEncontrado)

})
app.get("/ghibliFilms/buscar/:id", (request, response) => {

    let idRequest = request.params.id
    let ghibliEncontrado = ghibliFilmsJson.find(ghibli => ghibli.id == idRequest)

    response.status(200).send(ghibliEncontrado)
})

app.get("/ghibliFilms/filtroTitulo", (request, response) => {

    let tituloRequest = request.query.title.toLowerCase()
    let tituloEncontrado = ghibliFilmsJson.filter(ghibli => ghibli.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(tituloEncontrado)

})
app.get("/ghibliFilms/filtroId", (request,response) => {

    let idRequest = request.query.title.toLowerCase()
    let idEncontrada = ghibliFilmsJson.filter(ghibli => ghibli.id.toLowerCase().includes(idRequest))

    response.status(200).send(idEncontrada)
})

app.get("/ghibliFilms/filtroDiretor", (request,response) => {
    let directorRequest = request.query.director.toLowerCase()
    let diretorEncontrado = ghibliFilmsJson.filter(ghibli => ghibli.director.toLowerCase().includes(directorRequest))

    response.status(200).send(diretorEncontrado)
})


app.post("/filmes", (request, response) => {

    let titleRequest = request.body.title
    let descriptionRequest = request.body.description
    let directorRequest = request.body.director

    let novoFilme = {
        id: (ghibliFilmsJson.length) + 1,
        title: titleRequest,
        description: descriptionRequest,
        director: directorRequest
    }

    ghibliFilmsJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "filme cadastrado com sucesso",
            novoFilme
        }]

    )

})