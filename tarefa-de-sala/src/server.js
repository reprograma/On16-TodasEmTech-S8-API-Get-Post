const filmesJson = require("./model/filmes.json"); //acessa json de filmes

const express = require("express");
const app = express(); //executando o express

app.use(express.json()); //faz logo o body parser (tratar a resposta obtida p json)

app.listen(8080, () => {
  console.log("Servidor na porta 8080");
});

app.get("/", (request, response) => {
  response.status(200).json([
    {
      message: "Deu certo, API filmes da Barbie",
    },
  ]);
});

//cria uma rota para exibir todos os filmes
app.get("/filmes", (request, response) => {
  response.status(200).send(filmesJson);
});

//cria uma rota para exibir um filme especifico por id
app.get("/filmes/buscar/:id", (request, response) => {
  let idRequest = request.params.id; //guarda o que a pessoa manda na requisição

  let filmeEncontrado = filmesJson.find((filme) => filme.id == idRequest);
  //variável que vai guardar o filme encontrado -> entra no filmes.json e encontra o filme.id

  response.status(200).send(filmeEncontrado); //envia o filme encontrado
});

//cria uma rota para filtrar por título
app.get("/filmes/filtro", (request, response) => {
  let tituloRequest = request.query.titulo.toLowerCase(); //query é o que é passado no endpoint
  console.log(tituloRequest);

  let filmeEncontrado = filmesJson.filter((filme) =>
    filme.title.toLowerCase().includes(tituloRequest)
  );

  response.status(200).send(filmeEncontrado);
  
});

//cria uma rota para adicionar um novo filme
app.post("/filmes", (request, response) => {
  let tituloRequest = request.body.title;       //body sempre usado pra put patch e post
  let descricaoRequest = request.body.content;

  let novoFilme = {
    id: (filmesJson.length) + 1,
    title: tituloRequest,
    content: descricaoRequest,
  };

  filmesJson.push(novoFilme);

  response.status(201).json([                //201: sucesso ao se criar algo
    {
      "mensagem": "Seu filme foi cadastrado com sucesso.",
      novoFilme,
    },
  ]);
});
