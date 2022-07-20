const filmes = require('../models/ghiblifilms.json')

// retorna todos os filmes
const getAllFilmes = (request, response) => {
    try {
        response.status(200).json([{
            "Lista": filmes
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}

//retorna filme por ID
const getFavorite = (request, response) => {
    const filmeRequest = request.params.id
    const filmeFilter = filme.filter((filme) => filme.id == filmeRequest)
    response.status(200).send(filmeFilter)
}

//retorna filme por diretor
const getDiretor = (request, response) => {
    const getDiretorRequest = request.query.director

    const getDiretorFilter = filmes.filter((filmes) =>
        filmes.director.includes(getDiretorRequest)
    )
    response.status(200).send(getDiretorFilter)

}

const adicionarFilme = (request, response) => {
    try {
        let titleRequest = request.body.tilte
        let original_titleRequest = request.body.original_title
        let original_title_romanisedRequest = request.body.original_title_romanised
        let descriptionRequest = request.body.description
        let directorRequest = request.body.director
        let producerRequest = request.body.producerRequest
        let release_dateRequest = request.body.release_date
        let running_timeRequest = request.body.running_time

        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            original_title: original_titleRequest,
            original_title_romanised: original_title_romanisedRequest,
            description: descriptionRequest,
            director: directorRequest,
            producer: producerRequest,
            release_date: release_dateRequest,
            running_time: running_timeRequest



        }

        music.push(newMusic)
        response.status(201).json([{
            "message": "Musica cadastrada com sucesso!!!", newMusic
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno ao cadastrar"

        }])
    }
}



module.exports = {
    getAllFilmes,
    getFavorite,
    getDiretor,
    adicionarFilme

}