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

RoundSchema.methods.checkAnswer = function (submittedAnswer) {
  return submittedAnswer.toLowerCase().trim() === this.answer.toLowerCase().trim();
};


const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;
