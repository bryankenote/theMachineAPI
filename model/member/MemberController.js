const express = require('express');
const router = express.Router();
const Member = require('./Member');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// RETURNS ALL MEMBERS
router.get('/', VerifyToken, function (req, res, next) {
  Member.find({}, function (err, members) {
    if (err) return res.status(500).send('There was a problem finding the members.');
    else res.status(200).send(members);
  });
});

// RETURNS A SINGLE MEMBER
router.get('/:id', VerifyToken, function (req, res, next) {
  Member.findById(req.params.id, function (err, member) {
    if (err) return res.status(500).send('There was a problem finding the member.');
    else res.status(200).send(member);
  });
});

// CREATES A NEW MEMBER
router.post('/', VerifyToken, function (req, res, next) {
  Member.create({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email
  },
    function (err, member) {
      if (err) return res.status(500).send('There was a problem adding the information to the database.');
      res.status(200).send(member);
    });
});

// UPDATES A SINGLE MEMBER
router.put('/:id', VerifyToken, function (req, res) {
  Member.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, member) {
    if (err) return res.status(500).send('There was a problem updating the Member.');
    else res.status(200).send(member);
  });
});

// DELETES A MEMBER
router.delete('/remove', VerifyToken, function (req, res, next) {
  Member.findByIdAndRemove(req.body.id, function (err, member) {
    if (err) res.status(500).send('There was a problem deleting the member');
    else res.status(200).send(member);
  });
});

module.exports = router;
