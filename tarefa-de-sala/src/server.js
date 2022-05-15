const filmesJson = require('./model/filmes.json') //acessando o json de filmes
const express = require('express')
const { response } = require('express')
const app = express() //executando o express

app.use(express.json()) //faz o body parser

app.listen(8080, () => {

    console.log('Servidor ta ON')
})

app.get('/', (request, response) => { //nessa rota vemos a mensagem abaixo no postman
    response.status(200).json([{

        'message': 'Deu certo. API filmes da Barbie.'
    }])
})

//significa localhost:8080/filmes
app.get('/filmes', (request, response) => {

    response.status(200).send(filmesJson) //retorna no postman todos os filmes do json
})

app.get('/filmes/buscar/:id', (request, response) => {

    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest) //variável que vai guardar o filme encontrado, ela entra no filmes.json, procura o id requisitado e traz a informação sobre esse filme

    response.status(200).send(filmeEncontrado)
})

app.get('/filmes/filtro', (request, response) => {

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )

    response.status(200).send(filmeEncontrado)
})

app.post('/filmes', (request, response) => { //post -> criar uma coisa nova, colocar um novo filme

    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        content: descricaoRequest
    }

    filmesJson.push(novoFilme)

    //201 quando cria alguma coisa
    response.status(201).json ([{

        'message': 'Seu filme foi cadastrado', novoFilme
    }]) 

})