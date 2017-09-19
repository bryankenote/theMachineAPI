const express = require('express');
const router = express.Router();
const Fine = require('./Fine');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL FINES
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: Fine,
    res: res
  });
});

// GET A SINGLE FINE
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: Fine,
    req: req,
    res: res
  });
});

// GET FINES FOR SINGLE MEMBER
router.get('/for/:id', VerifyToken, function (req, res, next) {
  crud.find({
    model: Fine,
    query: { member: req.params.id },
    res: res
  });
});

// CREATE A FINE
/*
{
  member: req.body.member,
  bank: req.body.bank,
  amount: req.body.amount
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: Fine,
    req: req,
    res: res
  });
});

// DELETES A FINE
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: Fine,
    req: req,
    res: res
  });
});

// UPDATES A FINE
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: Fine,
    req: req,
    res: res
  });
});

module.exports = router;
