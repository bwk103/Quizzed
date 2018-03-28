const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const RoundSchema = new Schema({
  Question: String,
  Answer: String,
  Timer: Number,
});

const Round = mongoose.model('Round', RoundSchema);

module.exports = Round;
