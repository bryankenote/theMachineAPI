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

module.exports = router;
