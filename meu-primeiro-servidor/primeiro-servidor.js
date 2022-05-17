const express = require('express')
const app = express()


app.listen(3000, () => {
    console.log('Servidor rodou')
})

app.get("/" , (request,response) => {
    response.status(200).json([{
        "message": "tá aqui sua response!"
    }])
})