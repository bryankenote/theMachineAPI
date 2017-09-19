const express = require('express');
const router = express.Router();
const Bank = require('./Bank');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// RESOLVE BANK WITHOUT ISSUING A JOB OR FINE
router.put('/forgive/:id', VerifyToken, function (req, res, next) {
  Bank.findByIdAndUpdate(req.params.id, { $set: { isResolved: true, dateResolved: new Date() } },
    function (err, bank) {
      if (err) res.status(500).send('There was a problem');
      else res.status(200).send(bank);
    });
});

// GET ALL BANKS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: Bank,
    res: res
  });
});

// GET A SINGLE BANK
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: Bank,
    req: req,
    res: res
  });
});

// GET ALL BANKS FOR A SINGLE MEMBER
router.get('/find/:id', VerifyToken, function (req, res, next) {
  crud.find({
    model: Bank,
    query: { member: req.params.id },
    res: res
  });
});

// CREATE A BANK
/*
{
  title: req.body.title,
  member: req.body.member,
  severity: req.body.severity,
  description: req.body.description
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: Bank,
    req: req,
    res: res
  });
});

// DELETES A BANK
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: Bank,
    req: req,
    res: res
  });
});

// UPDATES A BANK
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: Bank,
    req: req,
    res: res
  });
});

module.exports = router;
