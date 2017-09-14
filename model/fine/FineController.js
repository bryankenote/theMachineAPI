const express = require('express');
const router = express.Router();
const Fine = require('./Fine');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL FINES
router.get('/', VerifyToken, function (req, res, next) {
  Fine.find({}, function (err, fines) {
    if (err) res.status(500).send('There was a problem');
    else res.status(200).send(fines);
  });
});

// RETURNS A SINGLE FINE
router.get('/:id', VerifyToken, function (req, res, next) {
  Fine.findById(req.params.id, function (err, fine) {
    if (err) return res.status(500).send('There was a problem finding in the database.');
    else res.status(200).send(fine);
  });
});

// CREATES A NEW FINE
router.post('/', VerifyToken, function (req, res, next) {
  Fine.create({
    member: req.body.member,
    bank: req.body.bank,
    amount: req.body.amount
  },
    function (err, fine) {
      if (err) return res.status(500).send('There was a problem adding the information to the database.');
      res.status(200).send(fine);
    });
});

// UPDATES A SINGLE FINE
router.put('/:id', VerifyToken, function (req, res) {
  Fine.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, fine) {
    if (err) return res.status(500).send('There was a problem updating the database.');
    else res.status(200).send(fine);
  });
});

// DELETES A FINE
router.delete('/remove', VerifyToken, function (req, res, next) {
  Fine.findByIdAndRemove(req.body.id, function (err, fine) {
    if (err) res.status(500).send('There was a problem deleting from the database');
    else res.status(200).send(fine);
  });
});

module.exports = router;
