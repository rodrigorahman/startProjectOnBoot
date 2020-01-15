const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', async (req,res) => {
    const resultado = await axios.get('https://viacep.com.br/ws/01001000/json/');
    res.send(resultado.data);
});

app.listen(8000, () => {
    console.log('Server Started');
})