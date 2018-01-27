const mongoose = require('mongoose');

const rouletteSchema = new mongoose.Schema({
  member1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  member2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  member3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
});
mongoose.model('Roulette', rouletteSchema);

module.exports = mongoose.model('Roulette');
