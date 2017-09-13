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

/*
module.exports.getById = function (id, callback) {
  Member.findOne({
    '_id': id
  }, function (err, member) {
    if (err)
      callback(err, null);
    else
      callback(null, member);
  });
};

module.exports.getByName = function (fName, lName, callback) {
  //var Member = mongoose.model('Member');
  Member.findOne({
    'fName': fName,
    'lName': lName
  }, function (err, members) {
    if (err)
      callback(err, null);
    else
      callback(null, members);
  }); // end Member.find
}; // end exports.memberlist

module.exports.createMember = function (newMember, callback) {
  newMember.save(callback);
};

module.exports.deleteMember = function (member, callback) {
  Member.find({
    email: member.email
  }).remove(callback);
};

module.exports.updateMember = function (updatedMember, callback) {
  Member.findOneAndUpdate({ _id: updatedMember._id }, updatedMember, { upsert: true }, callback);
};
*/
