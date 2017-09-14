const express = require('express');
const router = express.Router();
const Job = require('./Job');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL JOBS
router.get('/', VerifyToken, function (req, res, next) {
  Job.find({}, function (err, jobs) {
    if (err) res.status(500).send('There was a problem');
    else res.status(200).send(jobs);
  });
});

// RETURNS A SINGLE JOB
router.get('/:id', VerifyToken, function (req, res, next) {
  Job.findById(req.params.id, function (err, job) {
    if (err) return res.status(500).send('There was a problem finding the member.');
    else res.status(200).send(job);
  });
});

// CREATES A NEW JOB
router.post('/', VerifyToken, function (req, res, next) {
  Job.create({
    bank: req.body.bank,
    member: req.body.member,
    jobName: req.body.jobName,
    description: req.body.description,
    dateDue: req.body.dateDue
  },
    function (err, job) {
      if (err) return res.status(500).send('There was a problem adding the information to the database.');
      res.status(200).send(job);
    });
});

// UPDATES A SINGLE JOB
router.put('/:id', VerifyToken, function (req, res) {
  Job.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, job) {
    if (err) return res.status(500).send('There was a problem updating the Member.');
    else res.status(200).send(job);
  });
});

// DELETES A JOB
router.delete('/remove', VerifyToken, function (req, res, next) {
  Job.findByIdAndRemove(req.body.id, function (err, job) {
    if (err) res.status(500).send('There was a problem deleting the member');
    else res.status(200).send(job);
  });
});

module.exports = router;
