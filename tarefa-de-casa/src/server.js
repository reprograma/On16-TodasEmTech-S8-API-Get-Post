const ghibliJson = require ('./models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(3030, () => {
    console.log('Servidor na porta 3030')
})

app.get("/", (request, response) => {
    response.status(200).json([
        {
          "message": "Deu certo, API dos filmes ghibli"  
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(ghibliJson)
})

app.get("/filmes/:id", (request, response) => {

    let idPedido = request.params.id

    let filmeAchado = ghibliJson.find(filme => filme.id == idPedido)
    
    response.status(200).send(filmeAchado)
})

app.get("/filmes/buscar/diretor", (request, response) => {

    let diretorRequest = request.query.director.toLowerCase()
    console.log(diretorRequest)

    let diretorEncontrado = ghibliJson.filter( 
        filme => filme.director.toLowerCase().includes(diretorRequest)
    )

    response.status(200).send(diretorEncontrado)

});

app.post("/filmes/criar", (request, response) => {

    let tituloRequest = request.body.title;
    let descriptionRequest = request.body.content;

    let novoFilme ={

        id: (ghibliJson.length) +1,
        title: tituloRequest,
        content: descriptionRequest
    }

    ghibliJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem":"Seu novo filme foi cadastrado!",
            novoFilme
        }]
    )
})