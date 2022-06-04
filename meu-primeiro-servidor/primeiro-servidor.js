const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("ARRIBA")
})

app.get("/", (request, response) => {
    response.status(200).json([{
        "message": "Resposta na telinha!"
    }])
})