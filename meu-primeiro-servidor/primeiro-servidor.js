// chamar o express, que vai ajudar no servidor
// ele vai ser uma constante.
// se usa o require pra puxa o express do node.
const express = require('express');
const app = express(); // chamar a aplicação, pra quando chamar só precisar dizer app

app.listen(3000, () => { // chama o app, que na verdade é o express. O listen faz as conexões. 3000 é a porta
    console.log('SERVIDOR RODOU MANASSSSS') // pede o console.log pra imprimir uma mensagem
});

// chamar o app pra fazer uma rota que termina com "/". 
//A "/"" sinaliza que vai sair só no 3000. Pede que o request tenha uma response
app.get("/", (request, response) =>{  
    response.status(200).json([{      // e que tenha uma resposta de sucesso ou seja, um 200. Se usa o .json pra fazer um body parse
        "gatinhasRepro": "TA AQUI SUA RESPONSE, GATA" // e aqui é a response
    }])} )