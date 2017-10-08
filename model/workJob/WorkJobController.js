const express = require('express');
const router = express.Router();
const WorkJob = require('./WorkJob');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.put('/postpone', VerifyToken, function (req, res, next) {
  WorkJob.findByIdAndUpdate(req.body.id,
    {
      $set:
      {
        dateDue: new Date(req.body.dueDate)
      }
    }, function (err, workJob) {
      if (err) return res.status(500).send('There was a problem updating the document.');
      res.status(200).send(workJob);
    });
});

router.put('/complete', VerifyToken, function (req, res, next) {
  WorkJob.findByIdAndUpdate(req.body.id,
    {
      $set:
      {
        isResolved: true,
        completed: true,
        dateResolved: new Date()
      }
    }, function (err, workJob) {
      if (err) return res.status(500).send('There was a problem updating the document.');
      res.status(200).send(workJob);
    });
});

// GET ALL JOBS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: WorkJob,
    res: res
  });
});

// GET A SINGLE JOB
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: WorkJob,
    req: req,
    res: res
  });
});

// GET ALL JOBS FOR A SINGLE MEMBER
router.get('/find/:id', VerifyToken, function (req, res, next) {
  crud.find({
    model: WorkJob,
    query: { member: req.params.id },
    res: res
  });
});

// CREATE A JOB
/*
{
  member: req.body.member,
  jobName: req.body.jobName,
  description: req.body.description,
  tasks: req.body.tasks,
  time: req.body.time
  days: req.body.days
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: WorkJob,
    req: req,
    res: res
  });
});

// DELETES A JOB
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: WorkJob,
    req: req,
    res: res
  });
});

// UPDATES A JOB
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: WorkJob,
    req: req,
    res: res
  });
});

module.exports = router;
