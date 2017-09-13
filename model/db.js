const mongoose = require('mongoose');

const dbUrl = process.env.MONGOURI || 'mongodb://localhost/bankapp';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useMongoClient: true }, function (err) {
  if (err) {
    console.log('Could not connect to MongoLab ', err);
  }
});
