const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/quizApp');

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
