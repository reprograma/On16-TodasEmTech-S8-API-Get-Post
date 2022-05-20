const ghiblifilms = require('./models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

app.listen(1313, () => {
    console.log("Servidor na Porta 1313, L!")
})


app.get("/ghiblifilms", (request, response) => {
    response.status(200).send(ghiblifilms)
});

    app.get("/ghiblifilms/buscar/:id", (request, response) => {

      let idRequest = request.params.id
      console.log(idRequest)

      let filmeEncontrado = ghiblifilms.find(filme => filme.id == idRequest)

      response.status(200).send(filmeEncontrado)
  })

  app.get("/ghiblifilms/directorfiltro", (request, response) =>{

    let directorRequest = request.query.director.toLocaleLowerCase()
    console.log(directorRequest)

    let directorEncontrado = ghiblifilms.filter(
        filme => filme.director.toLocaleLowerCase().includes(directorRequest)
    )

    response.status(200).send(directorEncontrado)

});

app.get("/ghiblifilms/titlefilter", (request, response) =>{

    let titleRequest = request.query.title.toLocaleLowerCase()
    console.log(titleRequest)

    let filmeEncontrado = ghiblifilms.filter(
     filme => filme.title.toLocaleLowerCase().includes(titleRequest))

    response.status(200).send(filmeEncontrado)

});

app.post("/ghiblifilms", (request, response) => {

    let titleRequest = request.body.title
    let descriptionRequest = request.body.description;
    let dateRequest = request.body.release_date

    let novoFilme = {
        id: (ghiblifilms.length) + 1,
        title: titleRequest,
        description: descriptionRequest,
        release_date: dateRequest,
    }

    ghiblifilms.push(novoFilme)

    response.status(201).json(
        [{
            "mensagem": "seu filme foi cadastrado",
            novoFilme
        }]

    )



})