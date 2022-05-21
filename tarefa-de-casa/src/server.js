const ghibliFilmes = require('./models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(2786, () => {
    console.log("O Servidor está na porta 2786")
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo, API Filmes Ghibli"
        }
    ])
})

app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(ghibliFilmes)
})

app.get("/ghiblifilms/buscar/:id",(request, response) => {

    let idRequest = request.params.id

    let idFilme = ghibliFilmes.find(filme => filme.id == idRequest)

    response.status(200).send(idFilme)
})

app.get("/ghiblifilms/filtro", (request, response) => {
    
    let diretorRequest = request.query.director.toLocaleLowerCase()
    console.log(diretorRequest) 

    let diretorFilme = ghibliFilmes.filter(
        filme => filme.director.toLocaleLowerCase().includes(diretorRequest)
    )

    response.status(200).send(diretorFilme)
})

app.get("/ghiblifilms/filtro", (request, response) => {

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )

    response.status(200).send(filmeEncontrado)
});

app.post("/ghiblifilms", (resquest, response) => {
    
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    let novoFilme = {
        id: (ghibliFilmes.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }

    ghibliFilmes.push(novoFilme)
    
    response.status(201).json(
        [{
            "mensagem": "Um novo filme foi cadastrado",
        }]
    )

})