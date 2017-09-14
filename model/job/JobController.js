const express = require('express');
const router = express.Router();
const Job = require('./Job');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL JOBS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: Job,
    res: res
  });
});

// GET A SINGLE JOB
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: Job,
    req: req,
    res: res
  });
});

// CREATE A JOB
/*
{
  bank: req.body.bank,
  member: req.body.member,
  jobName: req.body.jobName,
  description: req.body.description,
  dateDue: req.body.dateDue
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: Job,
    req: req,
    res: res
  });
});

// DELETES A JOB
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: Job,
    req: req,
    res: res
  });
});

// UPDATES A JOB
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: Job,
    req: req,
    res: res
  });
});

module.exports = router;
