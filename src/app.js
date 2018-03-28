const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Round = require('./models/Round');

const app = express();

mongoose.connect('mongodb://localhost:27017/quizApp');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('game/index');
});

app.get('/play', async (req, res) => {
  const round = await Round.findOne({});
  res.render('game/play', { round });
});

app.post('/round', async (req, res) => {
  const newRound = new Round({
    question: req.body.question,
    answer: req.body.answer,
    timer: req.body.timer,
  });
  try {
    await newRound.save();
    res.json({ message: 'Round saved successfully' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
