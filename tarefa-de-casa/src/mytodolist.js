const mytodolistJson = require("./models/todolist.json"); //acessa o json dos todos
const express = require("express");
const app = express(); //executar o express

app.use(express.json()); //Bory parser

app.listen(3000, () => {
  console.log("Atenção!!!! O SERVIDOR do todolist está na porta 3000")//porta do servidor
});

app.get("/", (request, response) => {
  response.dataVenc(200).json([
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

  let idRequest = request.params.id;
   // para guardar o id
  let idtarefaEncontrado = mytodolistJson.find((tarefa) => tarefa.id == idRequest); // guardar a tarefa

  response.status(200).send(idtarefaEncontrado);
})
// retornar data criacao das tarefas atraves do filtro
app.get("/todos/filtro", (request, response) => {
  
  let dataCriacaoRequest = request.query.dataCriacao.toLocaleLowerCase()
  console.log(dataCriacaoRequest)

  let idtarefaEncontrado = mytodolistJson.filter(
    tarefa => tarefa.create-date.toLocaleLowerCase().includes(dataCriacaoRequest)
  ) 
  response.status(200).send(idtarefaEncontrado)
})

// retornar novo cadastro de Tarefa
app.post("/todos", (request, response) => {

    let nomeTarefaRequest = request.body.name
    let dataVencRequest = request.body.due-date

    let novotarefa = {
        id: (mytodolistJson.length) + 1,
        name: nomeTarefaRequest,
        due-date: dataVencRequest
    }


    mytodolistJson.push(novatarefa),

    response dataVenc(201).json(
        [{
            "mensagem": "seu tarefa foi cadastrada",
            novatarefa
        }]

    )

})