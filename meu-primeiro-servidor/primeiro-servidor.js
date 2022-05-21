const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('SERVIDOR RODOUUUUUUU YAY')
})

app.get('/', (request, response) => {
    response.status(200).json([{
        "message": "TÁ AQUI A RESPONSINHA!!!!!!!!!!!!"
    }])
})
