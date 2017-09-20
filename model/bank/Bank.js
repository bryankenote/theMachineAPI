const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: false
  },
  fine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fine',
    required: false
  },
  /*
  memberName: {
    type: String,
    required: true
  },
  */
  description: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  dateResolved: {
    type: Date,
    default: null
  },
  severity: {
    type: Number
  }
  /* ,
  images: [{
    type: String
  }]
  */
});
mongoose.model('Bank', bankSchema);

module.exports = mongoose.model('Bank');
