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
  memberName: {
    type: String,
    required: true
  },
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
    type: Number ,
    required: true
  }
});
mongoose.model('Fine', fineSchema);

module.exports = mongoose.model('Fine');

/*
module.exports.getAll = function(callback) {
  Fine.find({}, function(err, fines) {
    if (err)
      callback(err, null);
    else
      callback(null, fines);
  });
};

module.exports.getById = function(id, callback) {
  Fine.findOne({
    '_id': id
  }, function(err, fines) {
    if (err)
      callback(err, null);
    else
      callback(null, fines);
  });
};

module.exports.getForMember = function(id, callback) {
  Fine.findOne({
    'member': id
  }, function(err, fines) {
    if (err)
      callback(err, null);
    else
      callback(null, fines);
  });
};

module.exports.createFine = function(newFine, callback) {
  newFine.save(callback);
};

module.exports.deleteFine = function(fine, callback) {
  Fine.find({
        _id: fine.id
    }).remove(callback);
};

module.exports.updateFine = function(updatedFine, callback) {
  Fine.findOneAndUpdate({ _id: updatedFine._id}, updatedFine, { upsert: true }, callback);
};
*/
