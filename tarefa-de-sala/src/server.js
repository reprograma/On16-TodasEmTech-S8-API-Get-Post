
const filmesJson = require('./model/filmes.json') // acessando o json de filmes - Banco de dados
const express = require('express')// require chamando o framework express
const app = express() //executando o express, aqui fica guardado o require express

app.use(express.json()) // Body parser(para configurar a resposta em formato json) 

// listen indica a porta para chamar
app.listen(8080, () => {
    console.log("Servidor  da Tarefa de sala está na porta 8080")
})
//criando uma rota do get
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "message": "Se chegou até aqui é que deu certo, o codigo da API Filmes da Barbie"
        }
    ])
})
/*esta rota retornar todos os filmes, observação apos a barra foi inserido filmes porque e o caminho que a rota vai buscar os dados */
app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})
/*esta rota retornará um filme especifico, para isto inserir seguintes detalhes no codigo:
:id é uma referência que buscamos exemplo pode ser nome,topic ou qualquer outra referência que desejar.
.find foi usado para buscar, pesquisar no arquivo filmesJson
  */
app.get("/filmes/buscar/:id", (request, response) => {

    let idRequest = request.params.id//variavel para buscar o id(especifico) que foi requerido, 

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest) // variavel para guardar o filme encontrado obs: (filme => filme.id a palavra filme e um nome qualquer que eu dei para minha endpointer )

    response.status(200).send(filmeEncontrado)
})

/*esta rota retornará filtro,
query é um pedido de uma informação ou de um dado. Esse pedido também pode ser entendido como uma consulta, uma solicitação ou, ainda, uma requisição. 
toLocaleLowerCase em JavaScript é um objeto interno padrão que retorna o valor da string de chamada convertido em letra minúscula com base na localidade atual do host.  */
app.get("/filmes/filtro", (request, response) => {

    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)//variavel para buscar titulo(especifico) 

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLocaleLowerCase().includes(tituloRequest)//variavel para guardar o filme quando for encontrado,filter para filtrar por titulo - includes método para incluir o dado na request
    )

    response.status(200).send(filmeEncontrado)

});

/* esta rota incluirá o novo cadastro */
app.post("/filmes", (request, response) => {

    let tituloRequest = request.body.title//variavel para guardar o novo titulo cadastrado, obody porque esta usando o post
    let contentRequest = request.body.content//variavel para guardar a descrição e o content veio do arquivo filmes.json
    let topicRequest = request.body.topic
    //variavel para guardar o novo filme com os seguintes dados id, title e content
    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        content: contentRequest,
        topic: topicRequest

    }
//push vai enviar os dados para o final do array
    filmesJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]

    )

})