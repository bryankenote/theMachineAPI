const express = require('express');
const router = express.Router();
const User = require('./User');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL USERS
router.get('/', VerifyToken, function (req, res, next) {
  crud.getAll({
    model: User,
    res: res
  });
});

// GET A SINGLE USER
router.get('/:id', VerifyToken, function (req, res, next) {
  crud.getOne({
    model: User,
    req: req,
    res: res
  });
});

// CREATE A USER
/*
{
  username: req.body.username,
  email: req.body.email,
  password: req.body.password
}
*/
router.post('/', VerifyToken, function (req, res, next) {
  crud.create({
    model: User,
    req: req,
    res: res
  });
});

// DELETES A USER
router.delete('/:id', VerifyToken, function (req, res) {
  crud.delete({
    model: User,
    req: req,
    res: res
  });
});

// UPDATES A USER
router.put('/:id', VerifyToken, function (req, res) {
  crud.put({
    model: User,
    req: req,
    res: res
  });
});

module.exports = router;
