const express = require('express');
const router = express.Router();
const Member = require('./Member');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// ADD TO FINES PAID
router.put('/fines', VerifyToken, function (req, res, next) {
  Member.findByIdAndUpdate(req.body.id, { $inc: { finesPaid: Number(req.body.finesPaid) } },
    function (err, member) {
      if (err) res.status(500).send('There was a problem');
      else res.status(200).send(member);
    });
});

// GET ALL MEMBERS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: Member,
    res: res
  });
});

// GET A SINGLE MEMBER
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: Member,
    req: req,
    res: res
  });
});

// CREATE A MEMBER
/*
{
  fName: req.body.fName,
  lName: req.body.lName,
  email: req.body.email
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: Member,
    req: req,
    res: res
  });
});

// DELETES A MEMBER
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: Member,
    req: req,
    res: res
  });
});

// UPDATES A MEMBER
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: Member,
    req: req,
    res: res
  });
});

module.exports = router;
