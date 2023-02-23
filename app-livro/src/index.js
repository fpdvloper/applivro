const express = require('express');
const app = express();

const ControllerCliente = require('./controllers/controller-cliente');
const ControllerLivro = require('./controllers/controller-livro');

ControllerCliente.rotas(app);
ControllerLivro.rotas(app);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));




app.get('/', (req, res) => {
  res.send('Hello, world!');
});



  
