
const mayFilmesJson = require('./model/ghiblifilms.json') // JSON  do ghiblifilms
const express = require('express')// framework express
const app = express() //executando o express

app.use(express.json()) // body parser 

// porta para chamar
app.listen(3000, () => {
    console.log("Servidor da tarefa de casa do gliblifilms RODOUUUU")
})
//criando uma rota do get
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Se chegou até aqui é que o código deu certo. "
        }
    ])
})
// retornará todos os filmes 
app.get("/filmes", (request, response) => {
    response.status(200).send(mayFilmesJson)
})
// retornará um filme especifico, pelo id
app.get("/filmes/buscar/:id", (request, response) => {

    let idRequest = request.params.id//Buscar o id(especifico) 

    let filmeEncontrado = mayFilmesJson.find(filme => filme.id == idRequest) // guardar o filme encontrado

    response.status(200).send(filmeEncontrado)
})

// retornará diretor
app.get("/filmes/filtro", (request, response) => {

    let diretorRequest = request.query.titulo.toLocaleLowerCase()
    console.log(diretorRequest)//Buscar titulo(especifico) 

    let filmeEncontrado = mayFilmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)
    )

    response.status(200).send(filmeEncontrado)

});

// incluirá o novo cadastro
app.post("/filmes", (request, response) => {

    let tituloRequest = request.body.title//Guardará o novo título cadastrado
    let descricaoRequest = request.body.description//Guardará a descrição 

    //guardará o novo filme com os seguintes dados id, title e description
    let novoFilme = {
        id: (mayFilmesJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }
//Enviará o Novo Cadastro para o final do array
    mayFilmesJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "Cadastro do filme foi realizado com SUCESSOOOOOOO",
            novoFilme
        }]

    )

})