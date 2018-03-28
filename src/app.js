const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/game', (req, res) => {
  res.send('This is the game path');
});

module.exports = app;
