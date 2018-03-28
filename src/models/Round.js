const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  timer: {
    type: Number,
    default: 30,
    min: 10,
    max: 30,
  },
});

const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;
