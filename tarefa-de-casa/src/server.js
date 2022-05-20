const ghibliJson = require('./models/ghiblifilms.json')
const express = require('express');
const app = express();


app.use(express.json())

app.listen(2929, () => {
    
    console.log('Servidor rodando na porta 2929')
});

app.get("/ghiblifilms", (request, response) => {
   
    response.status(200).send(ghibliJson)
});

app.get('/ghiblifilms/buscar/:id', (request,response) => {
    let idRequest = request.params.id
    let foundFilms = ghibliJson.find(film => film.id == idRequest)
   
    response.status(200).send(foundFilms)
});

app.get('/ghiblifilms/filterTitle', (request, response) => {
    let titleRequest = request.query.title.toLowerCase()

    console.log(titleRequest)

    let titleFound = ghibliJson.filter(
        film => film.title.toLowerCase().includes(titleRequest)
    )
    response.status(200).send(titleFound)
});

app.get('/ghiblifilms/filterDirector', (request, response) => {
    let directorRequest = request.query.director.toLowerCase()

    console.log(directorRequest)

    let directorFound = ghibliJson.filter(
        film => film.director.toLowerCase().includes(directorRequest)
    )
    response.status(200).send(directorFound)
});

app.post('/ghiblifilms', (request,response) => {
    let titleRequest = request.body.title
    let descriptionRequest = request.body.description

    let newFilm = {
        id: (ghibliJson.length) ++,
        title: titleRequest,
        description: descriptionRequest
    }

    ghibliJson.push(newFilm)

    response.status(201).json(
        [{
            'Message':'Filme cadastrado com sucesso',
            newFilm
        }]
    )
})