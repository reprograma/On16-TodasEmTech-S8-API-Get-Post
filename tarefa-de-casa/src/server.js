// para listar todos os filmes. Acessando o Json de filmes
const ghibliFilmesJson = require('./models/ghiblifilms.json')

//First Step: Chamar o express, que é uma dependência que vai ajudar a fazer o servidor
const express =  require('express') //vai ser uma constante pq vai ficar nos ajudando o tempo inteiro. Depois usa um require pra ajudar a pegar no node o que precisa, no caso o pacote express
const app = express() //nomeia de app pra indicar onde a aplicação vai ficar.O app vai ser o express.O express acendeu pq tá sendo chamada em algum lugar.

app.use(express.json()) //está fazendo o body parser. Está transformando o que a gente vai receber em Json.
// listen é um método. Um ouvidor,ele faz conexões, vai retornar o que for passado nele.Vou chamar o 'app' que é o meu 'express'. Ei express, escuta essa porta (3000)
app.listen(3000, () => { 
    console.log('O servidor rodou!!!!')
}) //além de escutar com 'listen', print no servidor com 'console.log' uma msg pra dizer que está funcionando.

//fazer a primeira rota de get
app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "Rodando api lista de filmes do Ghibli"    
    }])
}) //eu preciso do express que é o app, se eu preciso de 'get', coloco então 'get' em seguida.O / é para localhost
//lembrando que o status 200 é que deu tudo certo. diferente do 404.

// para listar todos os filmes
app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(ghibliFilmesJson)
})

//listar filmes pelo Id
app.get("/ghiblifilms/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let filmeEncontrado = ghibliFilmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
}) //precisa colocar o 'buscar', o uso do ':" e para o usário digitar o que deseja, nesse caso o Id, " e utilizar o método 'find'
//a primeira let é para guardar o que o usuário vai buscar(o id)
//a segunda let é para guardar o filme e retornar pra mim

//filtrar pelo diretor
app.get("/ghiblifilms/diretor", (request, response) => {
    let diretorRequest = request.query.director.toLowerCase()
    console.log(diretorRequest)  
    
    let diretorEncontrado = ghibliFilmesJson.filter(
        filme => filme.director.toLowerCase().includes(diretorRequest)
    )
    response.status(200).send(diretorEncontrado)
    
}) //query são partes variáveis de um caminho URL

//criar novo filme
app.post("/ghiblifilms", (request, response) => {
    let tituloRequest = request.body.title
    let descricaoRequest = request.body.description

    let novoFilme = {
        id:(ghibliFilmesJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }
    ghibliFilmesJson.push(novoFilme)

    response.status(201).json([{
        "mensagem": "Novo filme foi adicionado com sucesso!",
        novoFilme
    }]) //201 quando é sucesso ao criar alguma coisa

})


