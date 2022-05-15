const express = require('express'); 
const app = express();

app.listen(3000, ()=> {
    console.log('Servidor rodou boneka')
});

app.get("/", (request, response) =>{
    response.status(200).json([{
        "message": "TA AQUI SUA RESPONSE, MONAMOUR"
    }])
})
