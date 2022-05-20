const ghibliMoviesJson = require('./models/ghiblifilms.json')

const express =  require('express')
const app = express() 

app.use(express.json()) 

app.listen(3000, () => console.log(`Are u ready? 'Cause the server is!!!`)) 

app.get('/', (request, response) => {
  response.status(200).json([{
    'message': 'All set. Ready to go!'    
  }])
  console.log(response.status)
}) 

app.get('/ghiblifilms', (request, response) => {
  response.status(200).send(ghibliMoviesJson)
})

app.get('/ghiblifilms/buscar/:id', (request, response) => {
  let requestId = request.params.id

  let movieFound = ghibliMoviesJson.find(movie => movie.id == requestId)

  response.status(200).send(movieFound)
}) 

app.get('/ghiblifilms/diretor', (request, response) => {
  let diretorRequest = request.query.director.toLowerCase()
  console.log(diretorRequest)  

  let diretorEncontrado = ghibliMoviesJson.filter(
    filme => filme.director.toLowerCase().includes(diretorRequest)
  )
  response.status(200).send(diretorEncontrado)

}) 

app.post('/ghiblifilms', (request, response) => {
  let movieTitle = request.body.title
  let movieDescription = request.body.description

  let newMovie = {
    id:(ghibliMoviesJson.length) + 1,
    title: movieTitle,
    description: movieDescription
  }
  ghibliMoviesJson.push(newMovie)

  response.status(201).json([{
    'mensagem': 'A new movie was added successfully',
    newMovie
  }]) 
})