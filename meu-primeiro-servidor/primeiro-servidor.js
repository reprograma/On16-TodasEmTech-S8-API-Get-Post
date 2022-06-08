const express = require("express"); //variavel para express
const app = express(); //para guardar a variavel express
// listen é para fazer conexão e informar a porta que vai rodar o api
app.listen(3000, () => {
  console.log("Até que enfim garotaaaa, agora está rodandoooooo");
});

//Sintaxe da rota do get  que vai ser exibida no postman
app.get("/", (request, response) => {
  response.status(200).json([
    {
      message: "SE O CODIGO ESTIVER CORRETO SUA RESPONSE ESTARÁ AQUI",
    },
  ]);
});
