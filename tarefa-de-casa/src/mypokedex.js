const myPokedexJson = require("./models/pokedex.json"); //acessa o json pokedex
const express = require("express");
const app = express(); //executar o express

app.use(express.json()); //Bory parser
//porta do servidor
app.listen(8080, () => {
  console.log("Neste projeto O SERVIDOR está na porta 8080");
});

app.get("/", (request, response) => {
  response.status(200).json([
    {
      message:
        "API POKEDEX está funcionando.",
    },
  ]);
});
// retornar todo os filmes
app.get("/pokemon", (request, response) => {
  response.status(200).send(myPokedexJson);
});

// retornar pelo id
app.get("/pokemon/buscar/:id", (request, response) => {
  let idRequest = request.params.id; // para guardar o id
  let idPokemonEncontrado = myPokedexJson.find((pokemon) => pokemon.id == idRequest); // guardar o pokemon encontrado

  response.status(200).send(idPokemonEncontrado);
});
// retornar tipo atraves do filtro
app.get("/pokemon/filtro", (request, response) => {
  let tipoRequest = request.query.tipo.toLocaleLowerCase()
  console.log(tipoRequest)
  let idPokemonEncontrado = myPokemonJson.filter((pokemon) =>
    pokemon.type.toLocaleLowerCase().includes(tipoRequest)
  )
  response.status(200).send(idPokemonEncontrado)
})
// exibir nome, id e tipo dos pokemons
app.post("/pokemon", (request, response) => {

    let tipoRequest = request.body.type 
    let descricaoRequest = request.body.name

    let novoPokemon = {
        id: (myPokemonJson.length) + 1,
        type: tipoRequest,
        name: descricaoRequest
    }


    myPokemonJson.push(novoPokemon)

    response.status(201).json(
        [{
            "mensagem": "seu pokemon foi cadastrado",
            novoPokemon
        }]

    )

})