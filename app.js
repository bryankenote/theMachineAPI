const express = require('express');
const app = express();
require('./model/db');

const cors = require('cors');
app.use(cors());

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

const UserController = require('./model/user/UserController');
app.use('/api/users', UserController);

const MemberController = require('./model/member/MemberController');
app.use('/api/members', MemberController);

const BankController = require('./model/bank/BankController');
app.use('/api/banks', BankController);

const JobController = require('./model/job/JobController');
app.use('/api/jobs', JobController);

const FineController = require('./model/fine/FineController');
app.use('/api/fines', FineController);

module.exports = app;
