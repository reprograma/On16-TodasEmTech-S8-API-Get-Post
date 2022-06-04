const filmesGhibli = require("./models/ghiblifilms.json")
const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("A porta está funcionando")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "API dos maravilhosos filmes Ghibli funcionando"
        }
    ])
})

app.get("/filmes" , (request, response) => {
    response.status(200).send(filmesGhibli)
})

app.get("/filmes/retornar/:id", (request, response) => {

    let idRequest = request.params.id
    let filmeRetornado = filmesGhibli.find(ghiblinho => ghiblinho.id == idRequest)

    response.status(200).json(filmeRetornado)
})

app.get("/filmes/titulo", (request, response) => {

    let titleRequest = request.query.title.toLocaleLowerCase()

    let titleReturn = filmesGhibli.filter(ghiblinho => ghiblinho.title.toLowerCase().includes(titleRequest))

    response.status(200).json(titleReturn)
})

app.get("/filmes/diretor", (request, response) => {
    
    let directorResquest = request.query.director.toLocaleLowerCase()

    let directorFound = filmesGhibli.filter(
        ghiblinho => ghiblinho.director.toLocaleLowerCase().includes(directorResquest))

    response.status(200).send(directorFound)
})

app.post("/filmes", (request, response) => {

    let titleRequest = request.body.title
    let descriptionRequest = request.body.description

    let newmovie = {
        id: (filmesGhibli.length) + 1,
        title: titleRequest,
        description: descriptionRequest
    }

    filmesGhibli.push(newmovie)

    response.status(201).json(
        [{
            "message": "Novo filme adicionado",
            newmovie
        }]
    )
})