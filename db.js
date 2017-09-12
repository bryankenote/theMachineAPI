var mongoose = require('mongoose');

var dbUrl = process.env.MONGOURI || 'mongodb://localhost/bankapp_2';

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useMongoClient: true }, function (err) {
  if (err) {
    console.log('Could not connect to MongoLab ', err);
  }
});
