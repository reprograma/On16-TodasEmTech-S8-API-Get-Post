
const toDoList = require('./models/todolist.json')

const express = require("express");
const res = require('express/lib/response');
const app = express();

app.use(express.json()) //body parser - tratamento da resposta obtida para json


app.listen(3000, () => {
  console.log('Server initialized...');
});


//Todo o conteúdo do JSON
app.get('/all', (req, res) => {
    res.status(200).json(toDoList)
})


//filtra tarefa por id
app.get('/toDo/:id', (req, res) => {
    let idRequest = req.params.id;
    let findId = toDoList.find(find => find.id == idRequest)
    res.status(200).send(findId)
})


// Filtra categoria
app.get('/toDo', (req, res) =>{
    let categoryName = req.query.category.toLowerCase()
    let findCategory = toDoList.filter(
         todolist => todolist['category-name'].toLowerCase().includes(categoryName)
       )
    res.status(200).send(findCategory)
})


//Filtra tarefa por id
app.get('/toDo/:id/task/:id_task', (req, res) => {
    let idRequest = req.params.id;
    let idRequestTask = req.params.id_task;
    let findId = toDoList.find(find => find.id == idRequest)
    let findTask = (findId.tasks).find(task => task.id == idRequestTask)
    res.status(200).send(findTask)
})


//filtra subtarefas por id - mas também poderia ser por nome
app.get('/toDo/:id/task/:id_task/subtask/:id_subtask', (req, res) => {
    let idRequest = req.params.id;
    let idRequestTask = req.params.id_task;
    let idRequestSubTask = req.params.id_subtask;
    let findId = toDoList.find(find => find.id == idRequest);
    let findTask = (findId.tasks).find(task => task.id == idRequestTask);
    if (findTask.subtasks){
        let findSubTask = (findTask.subtasks).find(subtask => subtask.id == idRequestSubTask)
        res.status(200).send(findSubTask)
    } else {
        res.status(404).send('Err - This task does not have a subtask. Try again.')
    }
})

//adiciona uma nova tarefa em uma categoria definida
app.post('/toDo/newTask', (req, res) => {
    let categoryRequest = req.body['category-name']
    let nameRequest = req.body['name']
    let createDate = Date().toLocaleString()
    let dueDate = req.body['due-date']

    const index = toDoList.findIndex(object => {
        return object['category-name'] == categoryRequest;
      });

    tasks = toDoList[index].tasks
    let newTask = [[{
        "id": tasks.length + 1,
        "name": nameRequest,
       "create-date": createDate,
        "due-date": dueDate,
        "execution-date": null
    }]]

    toDoList[index].tasks = Object.assign(toDoList[index].tasks, newTask);

    res.status(201).json([{
        "message": "Success",
        toDoList
  }])

})

//adiciona uma nova subtarefa em um id de tarefa definido
app.post('/toDo/newSubTask/:id_task', (req, res) => {
    let categoryRequest = req.body['category-name']
    let idRequestTask = req.params.id_task;
    let nameRequest = req.body['name']
    let createDate = Date().toLocaleString()
    let dueDate = req.body['due-date']

    const index = toDoList.findIndex(object => {
        return object['category-name'] == categoryRequest;
      });


    tasks = toDoList[index].tasks

    let findTask = (toDoList[index].tasks).find(task => task.id == idRequestTask);

    const index_task = (toDoList[index].tasks).findIndex(object => {
        return object.id == idRequestTask;
      });

    if (findTask.subtasks){
        let newTask = [{
            "id": (toDoList[index]['tasks'][index_task]['subtasks']).length + 1,
            "name": nameRequest,
           "create-date": createDate,
            "due-date": dueDate,
            "execution-date": null
        }]

        toDoList[index]['tasks'][index_task]['subtasks'] = Object.assign(toDoList[index]['tasks'][index_task]['subtasks'], newTask)

    } else {        
        let newTask = [{
        "id": 1,
        "name": nameRequest,
       "create-date": createDate,
        "due-date": dueDate,
        "execution-date": null
    }]
        toDoList[index]['tasks'][index_task]['subtasks'] = newTask
    }

    res.status(201).json([{
        "message": "Success",
        toDoList
  }])
})


