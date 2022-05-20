const pokedex = require("./models/pokedex.json");

const express = require("express");
const { type } = require("express/lib/response");
const app = express();

app.use(express.json());

app.listen(6000, () => {
  console.log("Server is on port 6000");
});

//TO RETURN ALL POKEMONS:

app.get("/pokemon", (request, response) => {
  response.status(200).send(pokedex);
});

//TO RETURN A POKEMON BY ID:

app.get("/pokemon/:id", (request, response) => {
  const idRequest = request.params.id;

  const foundPokemon = pokedex.find((pokemon) => pokemon.id == idRequest);

  response.status(200).send(foundPokemon);
});

//TO RETURN A POKEMON BY NAME OR TYPE

app.get("/pokedex/filter", (request, response) => {
  let payload;
  const typeRequest = request.query.type;
  const nameRequest = request.query.name;

  if (request.query.type) {
    payload = pokedex.filter((pokemon) => pokemon.type.includes(typeRequest));
  } else {
    payload = pokedex.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(nameRequest)
    );
  }

  response.status(200).send(payload);
});

//TO CREATE A NEW POKEMON

app.post("/pokemon", (request, response) => {
  const newPokemon = {
    id: pokedex.length + 1,
    name: request.body.name,
    type: request.body.type,
    stats: request.body.stats,
  };

  pokedex.push(newPokemon);

  response.status(201).json([
    {
      mensage: "New pokemon added.",
      newPokemon,
    },
  ]);
});
