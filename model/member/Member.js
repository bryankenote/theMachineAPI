var mongoose = require('mongoose');

var memberSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  rouletteCompleted: {
    type: Number,
    default: 0
  },
  rouletteSkipped: {
    type: Number,
    default: 0
  },
  /*
  banksResolved: {
    type: Number,
    default: 0,
    min: 0
  },
  totalBanks: {
    type: Number,
    default: 0,
    min: 0
  },
  */
  finesPaid: {
    type: Number,
    default: 0,
    min: 0
  },
  totalFines: {
    type: Number,
    default: 0,
    min: 0
  }
});
mongoose.model('Member', memberSchema);

module.exports = mongoose.model('Member');
