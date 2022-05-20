const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor tá on, amores!')
});

app.get("/", (request, response) => {
    response.status(200).json([{
        "gatinhasRepro": "Tá aqui sua response, gata"
    }])
})