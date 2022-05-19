const pokedex = require("./models/pokedex.json");

const express = require("express");
const { type } = require("express/lib/response");
const app = express();

app.use(express.json());

app.listen(6000, () => {
    console.log("Server is on port 6000");
})

//TO RETURN ALL POKEMONS:
app.get("/pokemon", (request, response) => {
    response.status(200).send(pokedex);
})

//TO RETURN A POKEMON BY ID:
app.get("/pokemon/:id", (request, response) => {
    let idRequest = request.params.id;

    let foundPokemon = pokedex.find((pokemon) => pokemon.id == idRequest);

    response.status(200).send(foundPokemon);
})

//TO RETURN A POKEMON BY NAME
app.get("/pokemonio/name", (request, response) => {
    
    let nameRequest = request.query.name.toLowerCase();

    let filteredPokemon = pokedex.filter((pokemon) => pokemon.name.toLowerCase().includes(nameRequest)
    )
    response.status(200).send(filteredPokemon)
})

//TO RETURN A POKEMON BY TYPE
app.get("/pokemonio/type", (request, response) => {

    let typeRequest = request.query.type
    
    let pokemonFilter = pokedex.filter((pokemon) => pokemon.type.includes(typeRequest.toString()));

    response.status(200).send(pokemonFilter)
})

//TO CREATE A NEW POKEMON deu m
app.post("/pokemon", (request, response) => {
    let nameRequest = request.body.name;
    let typeRequest = request.body.type;
    let statsRequest = request.body.stats
        
    let newPokemon = {
        id: (pokedex.length) + 1,
        name: nameRequest,
        type: [typeRequest.split(" ")],
        stats: {statsRequest}
    };

    pokedex.push(newPokemon);

    response.status(201).json([
        {
            "mensagem": "New pokemon added.",
            newPokemon,
        }
    ])
})
