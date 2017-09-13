const express = require('express');
const app = express();
require('./model/db');

const cors = require('cors');
app.use(cors());

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

const UserController = require('./model/user/UserController');
app.use('/users', UserController);

const MemberController = require('./model/member/MemberController');
app.use('/members', MemberController);

module.exports = app;
