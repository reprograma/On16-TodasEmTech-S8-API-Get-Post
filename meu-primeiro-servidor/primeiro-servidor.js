const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("SERVIDOR RODOU MANaaaaaaaaaaaaaaaaAS")
})

app.get("/", (request, response) => {
  response.status(200).json([{
    "gatinhaRepro": "Tá aqui sua resposta gata"
  }])
})