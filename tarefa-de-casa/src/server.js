const pokedexJson = require('./models/pokedex.json');
const express = require('express');
const app = express()

app.use(express.json())
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})


//Primeira rota
app.get('/', (req, res) => {
    res.status(200).json([{
        'Mensagem': 'Você está acessando uma arena de batalha Pokémon! Esteja preparado!'
    }])
})

//Consultando a lista de pokemons
app.get('/pokemons', (req, res) => {
    res.status(200).send(pokedexJson)
})

//Consultando pokemons por ID
app.get('pokemons/buscar/:id', (req, res) => {
    let idRequest = request.params.idRequest
    let pokemonEncontrado = pokedexJson.find(pokedex => pokedex.id == idRequest)
    res.status(200).send(pokemonEncontrado)
})

//Filtrando pokemons por nome
app.get('pokemons/filtro-nome', (req, res) => {
    let nomeRequest = request.query.nome.toLowerCase()
    let pokemonEncontrado = pokedexJson.filter(
        pokemon => pokemon.name.toLowerCase().includes(nomeRequest)
    )
    res.status(200).send(pokemonEncontrado)

})

//Filtrando pokemons por tipo
app.get('pokemons/filtro-tipo', (req, res) => {
    let tipoRequest = request.query.tipo.toLowerCase()
    let pokemonEncontrado = pokedexJson.filter(
        pokemon => pokemon.type.toLowerCase().includes(tipoRequest)
    )
    res.status(200).send(pokemonEncontrado)

})



//Rota para incluir novos pokmons
app.post('/pokemons/', (req, res) => {
    let nameRequest = request.body.name;
    let typeRequest = request.body.type;
    let statsRequest = request.body.stats
   
    let novoPokemon = {
        id: (pokedexJson.lenght) + 1,
        name: nameRequest,
        type: typeRequest,
        stats: statsRequest
    }

    pokedexJson.push(novoPokemon)
    res.status(201).json([{
        'mensagem': 'Cadastro realizado! Com muito treinamento se tornará um grande Pokémon!',
        novoPokemon
    }])
})