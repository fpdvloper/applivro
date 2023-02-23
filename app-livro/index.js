const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/cliente', (req, res) => {
  res.send("Rota GET do Cliente ativada")
  })

  app.get('/livro', (req, res) => {
    res.send("Rota GET do livro ativada")
    })
