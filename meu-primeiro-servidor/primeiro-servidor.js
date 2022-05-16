const express = require('express')
const app = express()

app.listen(3000, () => {
console.log(`Agora sim, a gira girou`)

})

app.get("/", (request, response) => { 
    response.status(200).json([{
        "gatinhasRepro": "TA AQUI SUA RESPONSE TRAVA"
    }])
})