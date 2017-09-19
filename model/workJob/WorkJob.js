var mongoose = require('mongoose');

var workJobSchema = new mongoose.Schema({
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
      required: false
    }
  ],
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
  due: {
    type: Date,
    required: true
  }
});
mongoose.model('WorkJob', workJobSchema);

module.exports = mongoose.model('WorkJob');

/*
module.exports.getAll = function(callback) {
  Job.find({}, function(err, jobs) {
    if (err)
      callback(err, null);
    else
      callback(null, jobs);
  });
};

module.exports.getById = function(id, callback) {
  Job.findOne({
    '_id': id
  }, function(err, job) {
    if (err)
      callback(err, null);
    else
      callback(null, job);
  });
};

module.exports.getForUser = function(id, callback) {
  Job.findOne({
    'member': id
  }, function(err, jobs) {
    if (err)
      callback(err, null);
    else
      callback(null, jobs);
  });
};

module.exports.createJob = function(newJob, callback) {
  newJob.save(callback);
};

module.exports.deleteJob = function(job, callback) {
  Job.find({
        _id: job.id
    }).remove(callback);
};

module.exports.updateJob = function(updatedJob, callback) {
  Job.findOneAndUpdate({ _id: updatedJob._id}, updatedJob, { upsert: true }, callback);
};
*/
