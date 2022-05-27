const ghibliFilms = require('./models/ghiblifilms.json')
const express = require('express')
const {request, response} = require('express')
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log('servidor na Porta 3030')
})

app.get('/ghibliFilms', (request, response) => {
    response.status(200).send(ghibliFilms)
})
app.get('/ghibliFilms/buscar/:id', (request, response) => {

    let idRequest = request.params.id
    console.log(idRequest)

    let filmeEncontrado = ghibliFilms.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.get('/ghibliFilms/directorFilter', (request, response) => {

    let directorRequest = request.query.director.toLocaleLowerCase()
    console.log(directorRequest)

    let directorEncontrado = ghibliFilms.filter(
        filme => filme.director.toLocaleLowerCase().includes(directorRequest)
    )

    response.status(200).send(directorEncontrado)
})

app.get('/ghibliFilms/titleFilter', (request, response) => {

    let titleRequest = request.query.title.toLocaleLowerCase()
    console.log(titleRequest)

    let filmeEncontrado = ghibliFilms.filter(
        filme => filme.title.toLocaleLowerCase().includes(titleRequest))

        response.status(200).send(filmeEncontrado)
})

app.post('ghibliFilms', (request, response) => {

    let titleRequest = request.body.title
    let descriptionRequest = request.body.description
    let dateRequest = request.body.release_date

    let novoFilme = {
        id: (ghibliFilms.length) + 1,
        title: titleRequest,
        description: descriptionRequest,
        release_date: dateRequest
    }

    ghibliFilms.push(novoFilme)

    response.status(201).json(
        [{
            'message': 'Filme adicionado.',
            novoFilme
        }]
    )
})