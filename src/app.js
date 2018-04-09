const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Round = require('./models/Round');
const db = require('./db/config');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render('game/index');
});

app.get('/play', async (req, res) => {
  const numberOfQuestions = await Round.count({});
  const roundSelector = Math.floor(Math.random() * Math.floor(numberOfQuestions));
  const round = await Round.findOne({}).skip(roundSelector);
  res.json(round);
});

app.get('/questions', async (req, res) => {
  const allQuestions = await Round.find({});
  res.json(allQuestions);
});

app.delete('/question/:id', async (req, res) => {
  const id = req.params.id;
  await Round.findByIdAndRemove(req.params.id);
  res.redirect('/questions');
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
