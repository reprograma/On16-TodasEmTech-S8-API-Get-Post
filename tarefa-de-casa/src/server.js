//Importações importantes
const gFilmesJson = require('./models/ghiblifilms.json') // acessa o json de filmes 
const express = require('express')
const app = express() //executa o express

//Body Parser
app.use(express.json())

//Inicialização
app.listen(4000, () => {
    console.log("Servidor na porta 4000")
})

//Teste de verificação de funcionamento
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Deu certo."
        }
    ])
})

//Retorna todos os filmes
app.get("/gfilmes", (request, response) => {
    response.status(200).send(gFilmesJson)
})

//Retorna pelo ID
app.get("/gfilmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let gFilmeEncontrado = gFilmesJson.filter(gfilme => gfilme.id == idRequest)
    response.status(200).send(gFilmeEncontrado)
})

//Retorna Filme pela especificação do diretor 
app.get("/gfilmes/diretor", (request, response) => {
    let diretorRequest = request.query.director.toLowerCase()
    let gFilmeEncontrado = gFilmesJson.filter(
        gfilme => gfilme.director.toLowerCase().includes(diretorRequest)
    )
    response.status(200).send(gFilmeEncontrado)
});

//Retorna Filme pela especificação do Título
app.get("/gfilmes/titulo", (request, response) => {
    let tituloRequest = request.query.title.toLowerCase()
    let gFilmeEncontrado = gFilmesJson.filter(
        gfilme => gfilme.title.toLowerCase().includes(tituloRequest)
    )
    response.status(200).send(gFilmeEncontrado)
});

//Post
app.post("/gfilmes", (request, response) => {
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.content
    let novoFilme = {
        id: (gFilmesJson.length) + 1,
        title: tituloRequest,
        content: descricaoRequest
    }
    gFilmesJson.push(novoFilme)
    response.status(201).json(
        [{
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]
    )
})