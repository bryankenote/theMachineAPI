const express = require('express');
const router = express.Router();
const Member = require('./Member');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

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
