const mytodolistJson = require("./models/todolist.json"); //acessa o json dos todos
const express = require("express");
const app = express(); //executar o express

app.use(express.json()); //Bory parser

app.listen(3000, () => {
  console.log("Atenção!!!! O SERVIDOR do todolist está na porta 3000")//porta do servidor
});

app.get("/", (request, response) => {
  response.status(200).json([
    {
      message:
        "A API do todolist está funcionando.",
    },
  ]);
});
// retornar todo os afazeres
app.get("/todos", (request, response) => {
  response.status(200).send(mytodolistJson);
});

// retornar pelo id
app.get("/todos/buscar/:id", (request, response) => {
  let idRequest = request.params.id; // para guardar o id
  let idtarefaEncontrado = mytodolistJson.find((tarefa) => tarefa.id == idRequest); // guardar a tarefa

  response.status(200).send(idtarefaEncontrado);
});
// retornar status atraves do filtro
app.get("/todos/filtro", (request, response) => {
  let statusRequest = request.query.status.toLocaleLowerCase()
  console.log(statusRequest)
  let idtarefaEncontrado = mytodolistJson.filter((tarefa) =>
    tarefa.execution-date.toLocaleLowerCase().includes(statusRequest)
  )
  response.status(200).send(idtarefaEncontrado)
})
// retornar o diretor
app.post("/todos", (request, response) => {

    let statusRequest = request.body.execution-date
    let diretorRequest = request.body.director

    let novotarefa = {
        id: (mytodolistJson.length) + 1,
        execution-date: statusRequest,
        director: diretorRequest
    }


    mytodolistJson.push(novotarefa)

    response.status(201).json(
        [{
            "mensagem": "seu tarefa foi cadastrado",
            novotarefa
        }]

    )

})