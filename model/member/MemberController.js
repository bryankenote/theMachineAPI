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
router.post('/create', VerifyToken, function (req, res, next) {
  if (req.body.fName === '' || req.body.lName === '' || req.body.email === '') {
    return res.status(500).send('fName, lName, and email are required');
  }

  var newMember = new Member({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email
  });
  Member.save(newMember, function (err, member) {
    if (err) return res.status(500).send('There was a problem saving the member.');
    else res.status(200).send(member);
  });
});

/*
router.post('/save', ensureAuthenticated, function (req, res, next) {
  var clientMembers = req.body.members;

  clientMembers.forEach(function (clientMember) {
    if (clientMember.className.indexOf('create') >= 0) {
      var newMember = new Member({
        fName: clientMember.fName,
        lName: clientMember.lName,
        email: clientMember.email
      });
      Member.createMember(newMember, function (err) {
        if (err)
          res.status(400).end();
      });
    } else if (clientMember.className.indexOf('update') >= 0) {
      var newMember = {
        _id: clientMember._id,
        fName: clientMember.fName,
        lName: clientMember.lName,
        email: clientMember.email,
        totalBanks: clientMember.totalBanks,
        banksResolved: clientMember.banksResolved,
        totalFines: clientMember.totalFines,
        finesPaid: clientMember.finesPaid
      };
      Member.updateMember(newMember, function (err) {
        if (err)
          res.status(400).end();
      });
    } else if (clientMember.className.indexOf('delete') >= 0) {
      Member.deleteMember(clientMember, function (err) {
        if (err)
          res.status(400).end();
      });
    }
  });
  res.status(200).end();
});

router.post('/remove', ensureAuthenticated, function (req, res, next) {
  Member.find({
    email: req.body.email
  }).remove(function (err) {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
});
*/

module.exports = router;
