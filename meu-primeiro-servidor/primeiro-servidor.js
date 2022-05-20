const express = require("express");      //chama a dependência express através de uma constante
const app = express();                  //chama um app para dizer onde a aplicação vai ficar

app.listen(3000, () => {       //listen é um método que retorna o que se determina dentro dele (colocar uma porta)
  console.log("Servidor rodou, gata!!");
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "Response da gata"
    }])
    response.status(400).json()
})