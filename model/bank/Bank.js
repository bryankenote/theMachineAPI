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
  memberName: {
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
  },
  imagePath: {
    type: String
  }
});

var Bank;

if (mongoose.models.Bank) {
  Bank = mongoose.model('Bank');
} else {
  Bank = mongoose.model('Bank', bankSchema);
}

module.exports = Bank;

module.exports.getAll = function (callback) {
  Bank.find({}, function (err, banks) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, banks);
    }
  });
};

module.exports.getById = function (id, callback) {
  Bank.findOne({
    '_id': id
  }, function (err, banks) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, banks);
    }
  });
};

module.exports.getForUser = function (id, callback) {
  Bank.findOne({
    'member': id
  }, function (err, banks) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, banks);
    }
  });
};

module.exports.createBank = function (newBank, callback) {
  newBank.save(callback);
};

module.exports.deleteBank = function (bank, callback) {
  Bank.find({
    _id: bank.id
  }).remove(callback);
};

module.exports.updateBank = function (updatedBank, callback) {
  Bank.findOneAndUpdate({ _id: updatedBank._id }, updatedBank, { upsert: true }, callback);
};
