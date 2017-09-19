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

const BankJobController = require('./model/bankJob/BankJobController');
app.use('/api/bank-jobs', BankJobController);

const WorkJobController = require('./model/workJob/WorkJobController');
app.use('/api/work-jobs', WorkJobController);

const FineController = require('./model/fine/FineController');
app.use('/api/fines', FineController);

module.exports = app;
