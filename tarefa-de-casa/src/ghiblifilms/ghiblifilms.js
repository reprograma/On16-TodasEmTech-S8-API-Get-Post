const moviesJson = require('./ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log("Filmes na porta 3030, fique a vontade!")
})

app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(moviesJson)
})

app.get("/ghiblifilms/search/:id", (request, response) => {

    let idRequest = request.params.id

    let searchMovies = moviesJson.find(ghiblifilms => ghiblifilms.id == idRequest)

    response.status(200).send(searchMovies)
})

app.get("/ghiblifilms/titleFilter", (request, response) => {

    let movieTitle = request.query.title.toLocaleLowerCase()
    console.log(movieTitle)

    let searchMovies = moviesJson.filter(
        ghiblifilms => ghiblifilms.title.toLocaleLowerCase().includes(movieTitle)
    )
    response.status(200).send(searchMovies)
})

app.get("/ghiblifilms/directorFilter", (request, response) => {

    let filmDirector = request.query.director.toLocaleLowerCase()
    console.log(filmDirector)

    let searchMovies = moviesJson.filter(
        ghiblifilms => ghiblifilms.director.toLocaleLowerCase().includes(filmDirector)
    )
    response.status(200).send(searchMovies)
})

app.post("/ghiblifilms", (request, response) => {

    let newTitle = request.body.title

    let newDescription = request.body.description

    let newOriginalTitle = request.body.original_title

    let newDirector = request.body.director

    let newReleaseDate = request.body.release_date

    let newMovie = {
        id: (moviesJson.length) ++,
        title: newTitle,
        description: newDescription,
        original_title: newOriginalTitle,
        director: newDirector,
        release_date: newReleaseDate
    }

    moviesJson.push(newMovie)

    response.status(201).json(
        [{
            "Message": "Novo filme cadastrado com sucesso!",
            newMovie
        }]
    )
})
