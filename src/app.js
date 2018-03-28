const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('game/index');
});

app.get('/play', (req, res) => {
  res.render('game/play');
});

module.exports = app;
