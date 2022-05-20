//acessando o Json de filmes 
const filmesJson = require('./model/filmes.json')

//Acessando a biblioteca Express anteriormente instalada
const express = require('express');

// Guardando o express em uma const para facilitar a execução
const app = express()

//tratar a requisição para Json (body parser)
app.use(express.json())

app.listen(8080, () => {
    console.log('Servidor na porta 8080')
})


app.get('/', (req, res) => {
    res.status(200).json([{
        "mensage": "Deu certo, API Filmes da Barbie"
    }])
})


//consultando a lista de filmes guardada na const filmesJson, após a requisição, é enviado o body de filmesJson

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

//Consultando filmes pelo ID. :ID recurso do request.params para receber o ID 

app.get("/filmes/buscar/:id", (request, response) => {

    //guardando o ID digitado na consulta para usar na busca 
    let idRequest = request.params.id

    //Guardando o filme encontrado pelo ID, filmes pelo ID é igual ID da requisição.

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    // retornando o filme encontrado


    response.status(200).send(filmeEncontrado)
})

// filtrando por título

app.get('/filmes/filtro', (request, response) => {

    //guardando o título digitado na consulta para usar na busca. Usando toLowerCase para não dar erro por conta de maiuscula e minuscula
    let tituloRequest = request.query.titulo.toLowerCase()
    console.log(tituloRequest)

    //Guardando o filme encontrado pelo título. Includes é usado para retornar o que foi passado no request, onde dizemos por qual titulo ele deve procurar, como temos uma const com o título, chamamos ela para dizer que é aquele filme guardado naquela const

    //ei filmes.Json, quero que filtre algo pra mim, pegue o titulo dos filmes sem diferenciar maiusculo ou minusculo, veja se tem o que a pessoa pediu na request e retorna o que você encontrou

    //localhost:3030/filmes/filtro?titulo=escreve o titulo aqui


    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest)
    )
    response.status(200).send(filmeEncontrado)

})


//recebendo novos dados para o Json. 
app.post('/filmes', (request, response) => {

    //Guardando as informações digitadas pelo usuario. Quando é post sempre usamos request.body. O que for recebeido no body é salvo nas varíaveis conforme tipo de info recebida

    //Post > localhost:3030/filmes 
    //No Raw, coloca Json e cria o novo objeto Json
    //     //{        
    //         "topic": "Girl power2",
    //         "title": "Barbie as tres mosqueteiras2",
    //         "content": "garotas fofas arrasando2"
    // }



    let tituloRequest = request.body.title;
    let contentRequest = request.body.content;
    let topicRequest = request.body.topic;

    //onde vamos guardar o novo filme
    let novoFilme = {
        //pegando o numero de filmes da lista e adicionando +1 para formar novo ID
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        content: contentRequest,
        topic: topicRequest
    }

    //colocando o novo filme no final do array de filmes do Json. Status para coisas criadas é sempre 201. filmesJson pega o filme guardado na varíavel "novoFilme"
    filmesJson.push(novoFilme)
    response.status(201).json([{
        "mensagem": "seu filme foi cadastrado",
        novoFilme
    }])

})