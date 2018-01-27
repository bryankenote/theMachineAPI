const express = require('express');
const router = express.Router();
const Roulette = require('./Roulette');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL GROUPS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: Roulette,
    res: res
  });
});

// GET A SINGLE GROUP
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: Roulette,
    req: req,
    res: res
  });
});

// GET ALL GROUPS FOR A SINGLE MEMBER
router.get('/find/:id', VerifyToken, function (req, res, next) {
  crud.find({
    model: Roulette,
    query: { member: req.params.id },
    res: res
  });
});

// CREATE A GROUP
/*
{
  member1: req.body.member,
  member2: req.body.member,
  member3: req.body.member, // OPTIONAL
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: Roulette,
    req: req,
    res: res
  });
});

// DELETES A GROUP
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: Roulette,
    req: req,
    res: res
  });
});

// UPDATES A GROUP
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: Roulette,
    req: req,
    res: res
  });
});

module.exports = router;
