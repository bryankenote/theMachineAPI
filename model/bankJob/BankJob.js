var mongoose = require('mongoose');

var bankJobSchema = new mongoose.Schema({
  bank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bank',
    required: true
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  /*
  memberName: {
    type: String,
    required: true
  },
  */
  jobName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateDue: {
    type: Date,
    required: true
  },
  dateResolved: {
    type: Date,
    default: null
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  }
});
mongoose.model('BankJob', bankJobSchema);

module.exports = mongoose.model('BankJob');
