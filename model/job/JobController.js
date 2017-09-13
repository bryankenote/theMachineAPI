const express = require('express');
const router = express.Router();
const Job = require('./Job');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL FINES
router.get('/', VerifyToken, function (req, res, next) {
  Job.find({}, function (err, jobs) {
    if (err) res.status(500).send('There was a problem');
    else res.status(200).send(jobs);
  });
});

module.exports = router;
