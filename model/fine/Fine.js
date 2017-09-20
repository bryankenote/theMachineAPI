var mongoose = require('mongoose');

var fineSchema = new mongoose.Schema({
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
  dateCreated: {
    type: Date,
    default: Date.now
  },
  /*
  isResolved: {
    type: Boolean,
    default: false
  },
  */
  amount: {
    type: Number,
    required: true
  }
});
mongoose.model('Fine', fineSchema);

module.exports = mongoose.model('Fine');
