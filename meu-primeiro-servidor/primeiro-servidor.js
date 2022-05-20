const express = require ('express');
const app = express ();

// app express escuta a porta 3000 e retorna mensagem do console log

app.listen(3000, () => {
    console.log ('servidor rodando')
});

app.get('/', (req, res) =>{
    res.status (200).json ([{
        "Mensagem": "Olá mundo!"
    }])
})

