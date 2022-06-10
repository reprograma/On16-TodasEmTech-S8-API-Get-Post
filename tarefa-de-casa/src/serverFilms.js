const myghibliJson = require("./models/ghiblifilms.json"); //acessa o json dos filmes
const express = require("express");
const app = express(); //executar o express

app.use(express.json()); //Bory parser
//porta do servidor
app.listen(3000, () => {
  console.log("Não esqueçaaaa!!! O SERVIDOR está na porta 3000");
});

app.get("/", (request, response) => {
  response.status(200).json([
    {
      message:
        "Se rodou na telinha porque API está funcionando               garotaaaa",
    },
  ]);
});
// retornar todo os filmes
app.get("/filmes", (request, response) => {
  response.status(200).send(myghibliJson);
});

// retornar pelo id
app.get("/filmes/buscar/:id", (request, response) => {
  let idRequest = request.params.id; // para guardar o id
  let idFilmeEncontrado = myghibliJson.find((filme) => filme.id == idRequest); // guardar o filme encontrado

  response.status(200).send(idFilmeEncontrado);
});
// retornar diretor atraves do filtro
app.get("/filmes/filtro", (request, response) => {
  let diretorRequest = request.query.diretor.toLocaleLowerCase()
  console.log(diretorRequest)
  let idEncontrado = myghibliJson.filter((filme) =>
    filme.director.toLocaleLowerCase().includes(diretorRequest)
  )
  response.status(200).send(idEncontrado)
})

