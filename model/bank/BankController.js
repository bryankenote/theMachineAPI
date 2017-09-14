const express = require('express');
const router = express.Router();
const Bank = require('./Bank');
const crud = require('../composition/crud');
const VerifyToken = require('../../auth/VerifyToken');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

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

// RESOLVE BANK WITHOUT ISSUING A JOB OR FINE
router.post('/forgive/:id', VerifyToken, function (req, res, next) {
  Bank.findByIdAndUpdate(req.params.id, {
    $set:
    {
      isResolved: true,
      dateResolved: new Date()
    }
  }, function (err, bank) {
    if (err) res.status(500).send('There was a problem');
    else res.status(200).send(bank);
  });
});

/*
router.post('/jobs/postpone', ensureAuthenticated, function (req, res, next) {
  Job.findByIdAndUpdate(req.body['job-id'], { $set: { dateDue: new Date(req.body['due-date']) } }, function (err, job) {
    if (err) throw err;
    else {
      req.flash('success_msg', 'Updated job due date');
      res.redirect('/');
    }
  });
})

router.post('/judgement', ensureAuthenticated, function (req, res, next) {
  if (!req.body['fine-issued'] && !req.body['job-issued']) {
    req.flash('error_msg', 'Judgement could not be issued. No job or fine was selected.');
    res.redirect('/banks/' + req.body['bank-id']);
  } else {
    Member.findByIdAndUpdate(req.body['member-id'],
      { $inc: { totalFines: Number(req.body.fine) } }, function (err, member) {
        if (err) throw err;

        if (req.body['fine-issued']) {
          var newFine = new Fine({
            bank: req.body['bank-id'],
            member: req.body['member-id'],
            memberName: `${member.fName} ${member.lName}`,
            amount: req.body.fine
          });
          Fine.createFine(newFine, function (err, fine) {
            if (err) throw err;
          });
          req.flash('success_msg', 'Successfully issued bank');
        }
        if (req.body['job-issued']) {
          var newJob = new Job({
            bank: req.body['bank-id'],
            member: req.body['member-id'],
            jobName: req.body['job-name'],
            memberName: `${member.fName} ${member.lName}`,
            description: req.body.job,
            dateDue: new Date(req.body['due-date'])
          });
          Job.createJob(newJob, function (err, job) {
            if (err) throw err;
          });
          req.flash('success_msg', 'Successfully issued bank');
        }
        Promise.all([
          Bank.findByIdAndUpdate(req.body['bank-id'], { $set: { isResolved: true, dateResolved: new Date } }),
          Member.findByIdAndUpdate(req.body['member-id'], { $inc: { banksResolved: 1 } })
        ]).then(res.redirect('/'));
      });
  }
});

router.get('/jobs/:id', ensureAuthenticated, function (req, res, next) {
  Job.getById(req.params.id, function (err, job) {
    if (err) throw err;
    Bank.getById(job.bank, function (err, bank) {
      if (err) throw err;
      else {
        res.render('job', { job: job, bank: bank, layout: 'layouts/main' });
      }
    });
  });
});

router.post('/jobs/complete', ensureAuthenticated, function (req, res, next) {
  Job.findByIdAndUpdate(req.body['job-id'],
    {
      $set:
      {
        isResolved: true,
        completed: true,
        dateResolved: new Date()
      }
    }, function (err, job) {
      if (err) throw err;

      req.flash('success_msg', 'Job marked successfuly completed');
      res.redirect('/');
    });
});

router.get('/fines/:id', ensureAuthenticated, function (req, res, next) {
  Promise.all([
    Member.findById(req.params.id),
    Fine.find({ member: req.params.id })
  ]).then(values => {
    values[0].balance = values[0].totalFines - values[0].finesPaid;
    res.render('fine', { member: values[0], fines: values[1], layout: 'layouts/main' });
  });
});

router.post('/fines/pay', ensureAuthenticated, function (req, res, next) {
  Member.findByIdAndUpdate(req.body['member-id'], { $inc: { finesPaid: Number(req.body.amount) } }, function (err, member) {
    if (err) throw err;

    req.flash('success_msg', 'Balance updated');
    res.redirect('/');
  });
});
*/

module.exports = router;
