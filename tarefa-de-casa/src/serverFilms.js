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
// retornar titulo atraves do filtro
app.get("/filmes/filtro", (request, response) => {
  let tituloRequest = request.query.titulo.toLocaleLowerCase()
  console.log(tituloRequest)
  let idFilmeEncontrado = myghibliJson.filter((filme) =>
    filme.title.toLocaleLowerCase().includes(tituloRequest)
  )
  response.status(200).send(idFilmeEncontrado)
})
// retornar o diretor
app.post("/filmes", (request, response) => {

    let tituloRequest = request.body.title
    let diretorRequest = request.body.director

    let novoFilme = {
        id: (myghibliJson.length) + 1,
        title: tituloRequest,
        director: diretorRequest
    }


    myghibliJson.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]

    )

})